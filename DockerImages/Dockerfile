# ---- Etapa Base ----
FROM node:16 AS base
WORKDIR /usr/src/app
COPY package*.json ./

# ---- Etapa de Dependencias ----
FROM base AS dependencies
# Instala solo las dependencias necesarias para producción
RUN npm install --only=production 
# Copia las dependencias de producción en un directorio temporal
RUN cp -R node_modules prod_node_modules
# Instala todas las dependencias (incluyendo 'devDependencies')
RUN npm install

# ---- Etapa de Construcción ----
FROM dependencies AS build
COPY . .
# Aquí podrías añadir pasos de construcción si los tuvieras, como por ejemplo 'npm run build'

# ---- Etapa de Producción ----
FROM base AS release
# Copia las dependencias de producción desde la etapa de construcción
COPY --from=dependencies /usr/src/app/prod_node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
