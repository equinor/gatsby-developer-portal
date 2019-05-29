# Base
FROM node:12.1-slim as base
RUN mkdir -p /app
WORKDIR /app
COPY package.json ./

# Dependencies
FROM base as dependencies
#ENV http_proxy http://www-proxy.statoil.no:80/
#ENV https_proxy http://www-proxy.statoil.no:80/
RUN npm config set registry https://npm.equinor.com/
RUN npm install -g yarn
ENV PATH=$PATH:/app/node_modules/.bin
WORKDIR /app
COPY yarn.lock ./
ARG NPM_TOKEN
RUN echo "//npm.equinor.com/:_authToken=$NPM_TOKEN" > .npmrc && \
 yarn --pure-lockfile && yarn install && yarn cache clean && \
 rm -f .npmrc
COPY . .

# Run tests
FROM dependencies as test
WORKDIR /app
RUN CI=true yarn test

# Build
FROM dependencies as builder
ARG GITHUB_PERSONAL_TOKEN
WORKDIR /app
COPY . .
RUN yarn build
RUN yarn build-storybook

# Runtime - nginx
FROM nginx:1.15-alpine as development
COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/storybook-static /usr/share/nginx/html/storybook
COPY conf.dev.template /etc/nginx/conf.d/conf.template
RUN cat /etc/nginx/conf.d/conf.template
EXPOSE 80
CMD envsubst '$$API_HOST' < /etc/nginx/conf.d/conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

FROM nginx:1.15-alpine as production
COPY --from=builder /app/public /usr/share/nginx/html
COPY conf.template /etc/nginx/conf.d/conf.template
RUN cat /etc/nginx/conf.d/conf.template
RUN ls /etc/nginx/conf.d/
EXPOSE 80
CMD envsubst '$$API_HOST' < /etc/nginx/conf.d/conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

