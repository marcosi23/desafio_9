# Desafio9:

## Fecha de entrega: 06/11/23

En este desafío nos encontraremos una mezcla de otros desafíos (CICD y Kubernetes), en este caso utilizaremos herramientas de Gitops para automatizar cambios en nuestro deployments y en cualquier otro archivo yaml que configuremos, de esta forma será solo cuestión de hacer los cambios en el código .yaml y dejar que la herramienta que hayamos elegido se encargue de aplicar nuestros cambios (ya sea de forma manual o automática).

Entregable:

* Manifiesto de kubernetes que se aplicará en el cluster, puede ser el deploy de un pod con una imagen.

* Documento con instrucciones de cómo se realizó el desafío (de ser posible adjuntar capturas de pantalla). 

Consejos: 

Recomendamos el uso de ArgoCD pero se pueden utilizar otras herramientas, así también recomendamos no automatizar el sync de argo para así de esta forma tener un poco más de control sobre cuando aplicamos los cambios en nuestras aplicaciones.
