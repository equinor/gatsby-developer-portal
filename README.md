<h1 align="center">
  developer.equinor.com
</h1>

|  |  |
|---|---|
| Master | [![Build Status](https://travis-ci.com/equinor/developer.svg?token=wb81zbmzUsHbzHFyWC7U&branch=master)](https://travis-ci.com/equinor/developer) |
| Develop | [![Build Status](https://travis-ci.com/equinor/developer.svg?token=wb81zbmzUsHbzHFyWC7U&branch=develop)](https://travis-ci.com/equinor/developer) |



# developer.equinor.com

https://developer.equinor.com is Equinor's developer portal. The site is based on the [Gatsby](https://www.gatsbyjs.org/) framework. 

# Contributing

[How to contribute][contributing]

# <a name="locally"></a>Running locally

To see the what the content you create looks like, you can run the site locally.
This requires a Docker installation and population of two variables:
- NPM_TOKEN: Login to npm.equinor.com and then copy the generated token from your .npmrc file. See https://sdp.equinor.com/npm-repo for how to login to the NPM registry.
- GITHUB_PERSONAL_TOKEN: login to GitHub and generate a Personal access token in Personal settings -> Developer settings -> Personal access tokens

    ```shell
    cp env.template .env
    # populate variables in .env as described above
    ./bin/activate
    developer build
    developer up  
    ```

Your site is now running at `http://localhost:8000`.

# Running locally without tokens
Tokens are required in production and development environments. For local environment, tokens are not required. Omitting the tokens results in fonts missing and authors mocked (by empty image and a placeholder name).  

```
1. Remove the @equinor-font dependency in package.json
2. npm install
3. npm run dev
```

### Run production build

A production build (mostly relevant for site developers) can also be created:

```
export ENVIRONMENT=production
./bin/activate
developer build
developer up  
```

This will run all stages in the Dockerfile and produce a static web application served with Nginx running at `http://localhost`.


# What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.


[contributing]: https://github.com/equinor/developer/blob/develop/CONTRIBUTING.md