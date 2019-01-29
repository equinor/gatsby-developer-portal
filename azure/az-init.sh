#!/usr/bin/env bash

source .azure_env

PURPLE='\033[1;33m'
NC='\033[0m'

echo -e "${PURPLE}Set active subscription: $AZURE_SUBSCRIPTION${NC}"
az account set --subscription "$AZURE_SUBSCRIPTION"

echo -e "${PURPLE}Create a resource group: $AZURE_RESOURCE_GROUP${NC}"
az group create --name $AZURE_RESOURCE_GROUP --location "$AZURE_LOCATION"

echo -e "${PURPLE}Create a service plan: $AZURE_SP_NAME ${NC}"
az appservice plan create --name $AZURE_SP_NAME --resource-group $AZURE_RESOURCE_GROUP --sku B2 --is-linux

echo -e "${PURPLE}Create a docker registry: $AZURE_ACR_NAME${NC}"
az acr create --name $AZURE_ACR_NAME --resource-group $AZURE_RESOURCE_GROUP --sku Basic --admin-enabled true
echo -e "SHOW"
az acr credential show --name $AZURE_ACR_NAME --resource-group $AZURE_RESOURCE_GROUP

echo -e "${PURPLE}Obtain the full registry ID for subsequent command args.${NC}"
AZURE_ACR_REGISTRY_ID=$(az acr show --name $AZURE_ACR_NAME --resource-group $AZURE_RESOURCE_GROUP --query id --output tsv)

echo -e "${PURPLE}Create the service principal with rights scoped to the registry.${NC}"

# https://docs.microsoft.com/en-us/azure/container-registry/container-registry-auth-service-principal
AZURE_SP_PASSWD=$(az ad sp create-for-rbac --name $AZURE_SERVICE_PRINCIPAL_NAME --scopes $AZURE_ACR_REGISTRY_ID --role contributor --query password --output tsv)
AZURE_SP_APP_ID=$(az ad sp show --id http://$AZURE_SERVICE_PRINCIPAL_NAME --query appId --output tsv)

# Output the service principal's credentials; use these in your services and
# applications to authenticate to the container registry.

echo -e "${PURPLE}Service principal ID: $AZURE_SP_APP_ID.${NC}"
echo -e "${PURPLE}Service principal password: $AZURE_SP_PASSWD.${NC}"

cat <<EOM >.secrets
AZURE_SP_APP_ID=$AZURE_SP_APP_ID
AZURE_SP_PASSWD=$AZURE_SP_PASSWD
EOM
