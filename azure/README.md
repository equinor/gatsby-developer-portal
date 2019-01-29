 # Azure
 
## .secrets

The first time ```.az-init.sh``` is run it populated the .secrets file with generated values from Azure, 
however, you need to add .secrets file with correct values to be able to run scripts:

```
AZURE_SP_APP_ID=
AZURE_SP_PASSWD=
```

## Initial setup

Change the active subscription:

```
az account list --output table
az account set --subscription <name>
```

Then, create azure resource group, docker registry, service plan, and create the service principal with rights scoped to the registry.

```
./az-init.sh
```

Then, build initial docker images, create webapp, and deploy initial version.

```
./az-deploy.sh
```

After first deploy enable continuous deployment in Container settings in the Azure portal. 

Fix correct domain and SSL (`this function is not tested`).
```
./az-domain.sh
```

## Deployment

For each deployment you need to update docker image tag in `.azure_env` file.

Then just call `./az-deploy.sh`.
