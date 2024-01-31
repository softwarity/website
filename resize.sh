#!/bin/bash

# Vérifiez si l'utilisateur a fourni une largeur
if [ -z "$1" ]
then
  echo "Veuillez fournir une largeur d'image."
  exit 1
fi

# Parcourez toutes les images du dossier courant
for img in *.png; do
  # Obtenez le nom de base de l'image sans l'extension
  base_name=$(basename "$img" .png)
  
  # Définissez le nouveau nom de l'image
  new_name="${base_name}_$1.png"
  
  # Redimensionnez l'image et enregistrez-la avec le nouveau nom
  mogrify -path . -resize $1x -format png -write "$new_name" "$img"
done