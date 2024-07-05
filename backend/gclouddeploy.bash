docker build -t leste-telecom .
docker tag leste-telecom southamerica-east1-docker.pkg.dev/leste-telecom-428215/leste-telecom/leste-telecom

docker push southamerica-east1-docker.pkg.dev/leste-telecom-428215/leste-telecom/leste-telecom

gcloud run deploy leste-telecom --image southamerica-east1-docker.pkg.dev/leste-telecom-428215/leste-telecom/leste-telecom:latest --region southamerica-east1 --platform managed --port 8000

