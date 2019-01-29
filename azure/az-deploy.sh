#!/usr/bin/env bash

source .azure_env
source .secrets

PURPLE='\033[1;33m'
NC='\033[0m' # No Color

# Set default resource group
az configure --defaults group=$AZURE_RESOURCE_GROUP

echo -e "${PURPLE}Login to docker registry.${NC}"
docker login $AZURE_ACR_URL -u $AZURE_SP_APP_ID -p $AZURE_SP_PASSWD

echo -e "${PURPLE}Push docker image.${NC}"
docker build --build-arg NPM_TOKEN=$NPM_TOKEN --build-arg GITHUB_PERSONAL_TOKEN="$GITHUB_PERSONAL_TOKEN" --tag $AZURE_ACR_URL/$AZURE_WEBAPP_IMAGE ../
docker push $AZURE_ACR_URL/$AZURE_WEBAPP_IMAGE
docker tag $AZURE_ACR_URL/$AZURE_WEBAPP_IMAGE $AZURE_ACR_URL/$AZURE_WEBAPP_DEV_IMAGE

az acr repository list -n $AZURE_ACR_NAME

AZURE_ACR_URL=$(az acr list --resource-group $AZURE_RESOURCE_GROUP --query "[].{acrLoginServer:loginServer}" --output tsv)
echo -e "${PURPLE}ACR URL: $AZURE_ACR_URL${NC}"

# PROD

echo -e "${PURPLE}Create client $AZURE_WEBAPP_CLIENT_NAME${NC}"
az webapp create \
  --plan $AZURE_SP_NAME \
  --name $AZURE_WEBAPP_CLIENT_NAME \
  --deployment-container-image-name $AZURE_ACR_URL/$AZURE_WEBAPP_IMAGE

echo -e "${PURPLE}Set client ACR settings${NC}"
az webapp config container set \
  --name $AZURE_WEBAPP_CLIENT_NAME \
  --docker-registry-server-url https://$AZURE_ACR_URL \
  --docker-registry-server-user $AZURE_SP_APP_ID  \
  --docker-registry-server-password $AZURE_SP_PASSWD \
  --docker-custom-image-name $AZURE_ACR_URL/$AZURE_WEBAPP_IMAGE

echo -e "${PURPLE}Enable logging for client${NC}"
	# Default is 100MB quota and 3days retention period
az webapp log config \
    --name $AZURE_WEBAPP_CLIENT_NAME \
    --docker-container-logging filesystem

az webapp config appsettings set \
  --name $AZURE_WEBAPP_CLIENT_NAME \
  --settings PORT=80

# DEV

echo -e "${PURPLE}Create client $AZURE_WEBAPP_CLIENT_DEV_NAME${NC}"
az webapp create \
  --plan $AZURE_SP_NAME \
  --name $AZURE_WEBAPP_CLIENT_DEV_NAME \
  --deployment-container-image-name $AZURE_ACR_URL/$AZURE_WEBAPP_DEV_IMAGE

echo -e "${PURPLE}Set client ACR settings${NC}"
az webapp config container set \
  --name $AZURE_WEBAPP_CLIENT_DEV_NAME \
  --docker-registry-server-url https://$AZURE_ACR_URL \
  --docker-registry-server-user $AZURE_SP_APP_ID  \
  --docker-registry-server-password $AZURE_SP_PASSWD \
  --docker-custom-image-name $AZURE_ACR_URL/$AZURE_WEBAPP_DEV_IMAGE

echo -e "${PURPLE}Enable logging for client${NC}"
	# Default is 100MB quota and 3days retention period
az webapp log config \
    --name $AZURE_WEBAPP_CLIENT_DEV_NAME \
    --docker-container-logging filesystem

az webapp config appsettings set \
  --name $AZURE_WEBAPP_CLIENT_DEV_NAME \
  --settings PORT=80


