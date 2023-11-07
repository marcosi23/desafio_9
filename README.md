# Entrega Desafio 9

## Requisitos:
1. Tener instalado minikube.
2. Tener instalado kubectl.
3. Tener instalado helm.

## Desarrollo:
1. Instalar argoCD.
```bash
kubectl create ns argo-cd
helm repo add argo https://argoproj.github.io/argo-helm
helm install argocd argo/argo-cd -n argo-cd
```
2. argoCD port-forward.
```bash
kubectl port-forward service/argocd-server -n argo-cd 8080:443
```
3. Obtener la password del usuario `admin`.
```bash
kubectl -n argo-cd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d
```
4. Crear una aplicación en argoCD.
```bash
cd desafio_9/argo-cd
kubectl apply -f app_d9.yaml
```


