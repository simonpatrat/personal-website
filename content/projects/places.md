---
layout: Project
title: Places
subTitle: Photo website with geolocalization and color extraction
date: 2020-07-30T21:03:44.551Z
projectDemoLink: 'https://reverent-perlman-0b6094.netlify.app'
projectCodeLink: 'https://github.com/simonpatrat/places'
featuredImage: >-
  https://res.cloudinary.com/dmcl9xqto/image/upload/v1596143785/website/places-logo_sz6sax.svg
categories:
  - React
technologies:
  - React
  - Next.js
  - Node.js
keyFeatures:
  - Géolocalisation
  - Extraction des couleurs des images
---
Mon projet était de partager des photos prises à différents endroits du monde et surtout au Canada.

J'ai ensuite trouvé intéressant d'essayer d'extraire les [données exif](https://fr.wikipedia.org/wiki/Exchangeable_image_file_format) des photos afin de pouvoir récupérer les coordonnées GPS et les infos colorimétriques.

Grâce à ça l'endroit précis où la photo à été prise s'affiche sur une carte et la palette des couleurs dominantes de la photo s'affiche aussi et sert à redéfinir la couleur principale du site à chaque changement de photo.

Au début les données étaient extraites des images côté client, au runtime, mais comme le site est un site statique utilisant [le SSG de Next.js](https://nextjs.org/docs/advanced-features/static-html-export) et que les images sont hébergées par **cloudinary** j'ai trouvé plus optimal de créer un script qui extrait les données lors du build, les informations sont donc déjà présentes au premier chargement.



![Places website home page capture](https://res.cloudinary.com/dmcl9xqto/image/upload/c_scale,w_1280/v1596309208/website/places-home_zee6kl.png "Places website home page capture")

![Places website photo page](https://res.cloudinary.com/dmcl9xqto/image/upload/c_crop/v1596309207/website/places-photo-page_psp6am.png "Places website photo page")

![Places website home page on small screen capture](https://res.cloudinary.com/dmcl9xqto/image/upload/v1596309210/website/places-small-screen_s3g85c.png "Places website home page on small screen capture")

![Places website home page capture in dark mode](https://res.cloudinary.com/dmcl9xqto/image/upload/q_80/v1596309203/website/places-dark-mode_wti2w6.png "Places website home page capture in dark mode")
