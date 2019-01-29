#!/usr/bin/env bash

source .azure_env
source .secrets

PURPLE='\033[1;33m'
NC='\033[0m' # No Color

# Set default resource group
az configure --defaults group=$AZURE_RESOURCE_GROUP

echo -e "${PURPLE}Add Hostname $AZURE_WEBAPP_URL${NC}"
az webapp config hostname add \
    --webapp-name $AZURE_WEBAPP_CLIENT_NAME \
    --hostname $DOMAIN

echo -e "${PURPLE}Set HTTPS Only${NC}"
az webapp update \
    --name $AZURE_WEBAPP_CLIENT_NAME \
    --set httpsOnly=true

echo -e "${PURPLE}Upload SSL Certificate${NC}"
THUMBPRINT=$(az webapp config ssl upload \
    --name $AZURE_WEBAPP_CLIENT_NAME \
    --certificate-file $SSL_PATH \
    --certificate-password $CERT_PASSWD \
    --query thumbprint \
    --output tsv)
    echo -e "${PURPLE}Thumbprint: $THUMBPRINT${NC}"

echo -e "${PURPLE}Create SSL Binding $DOMAIN${NC}"
az webapp config ssl bind \
    --name $AZURE_WEBAPP_CLIENT_NAME \
    --certificate-thumbprint $THUMBPRINT \
    --ssl-type SNI
