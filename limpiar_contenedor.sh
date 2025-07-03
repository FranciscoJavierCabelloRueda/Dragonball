#!/bin/bash

# Verificar si se proporcionó un nombre de proyecto o archivo docker-compose
if [ -z "$1" ]; then
  echo "Uso: $0 <nombre_del_proyecto_docker_compose>"
  exit 1
fi

COMPOSE_PROJECT_NAME=$1

echo "Limpiando recursos asociados con el proyecto '$COMPOSE_PROJECT_NAME'..."

# Detener los contenedores asociados con el proyecto
echo "Deteniendo contenedores del proyecto '$COMPOSE_PROJECT_NAME'..."
docker-compose -p "$COMPOSE_PROJECT_NAME" down || {
  echo "Error al detener contenedores. ¿Está el archivo docker-compose.yml en el directorio correcto?"
  exit 1
}

# Eliminar contenedores, volúmenes y redes asociados con el proyecto
echo "Eliminando contenedores, redes y volúmenes del proyecto '$COMPOSE_PROJECT_NAME'..."
docker-compose -p "$COMPOSE_PROJECT_NAME" down -v --remove-orphans

# Opcional: Eliminar imágenes asociadas con el proyecto
echo "¿Deseas eliminar imágenes asociadas con el proyecto '$COMPOSE_PROJECT_NAME'? (s/n)"
read -r eliminar_imagenes
if [[ "$eliminar_imagenes" =~ ^[sS]$ ]]; then
  echo "Eliminando imágenes asociadas con '$COMPOSE_PROJECT_NAME'..."
  docker-compose -p "$COMPOSE_PROJECT_NAME" down --rmi all
fi

echo "Operación completada para el proyecto '$COMPOSE_PROJECT_NAME'."
