---
layout: Project
title: Places
subTitle: Photo website with geolocalization and color extraction
date: 2020-07-30T21:03:44.551Z
featuredImage: >-
  https://res.cloudinary.com/dmcl9xqto/image/upload/v1596143785/website/places-logo_sz6sax.svg
categories:
  - React
technologies:
  - React
---
Mon projet était de partager à amis des photos que j'avais prises à différents endroits du monde et surtout au Québec.\
\
J'ai ensuite trouvé intéressant d'essayer d'extraire les données \`exif\`des photos afin de pouvoir récupérer les coordonnées GPS et les infos colorimétriques.

Grâce à ça l'endroit précis où la photo à été prise s'affiche sur une carte et la palette des couleurs dominantes de la photo s'affiche aussi et sert à redéfinir la couleur principale du site à chaque changement de photo.

Au début les données étaient extraites des images côté client, au runtime, mais comme le site est un site statique utilisant le SSG de \`Next.js\` et que les images sont hébergées par cloudinary j'ai trouvé plus optimal de créer un script qui extrait les données lors du build, les informations sont donc déjà présentes au premier chargement.
