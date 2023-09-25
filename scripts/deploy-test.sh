#!/usr/bin/env bash

# Log para cada comando
set -x

# Primer error
set -e

if [[ "$CI" ]]; then
  echo "Existe una configuración para despliegue continuo..."
else
  echo "🚧 No existe una configuración para despliegue continuo... 🚧"
  BRANCH_NAME=$(git branch --show-current)

  if [[ "$BRANCH_NAME" = "test" ]]; then
    npx --no-install lerna run deploy
    git commit -m "Despliegue en test: Publicar importmap" --allow-empty
    echo "✅ Publicado de forma correcta."
  else
    echo "Debe estar en la rama test para desplegar la aplicación."
  fi
fi