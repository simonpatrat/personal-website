---
layout: Project
title: RSS Flux App
subTitle: Prototype d'agrégateur de flux RSS utilisant l'api fetch et React
date: 2020-07-30T15:16:18.549Z
featuredImage: >-
  https://res.cloudinary.com/dmcl9xqto/image/upload/c_scale,h_1000/v1596125407/website/Capture_d_e%CC%81cran_le_2020-07-30_a%CC%80_11.25.31_ltrgbz.png
categories:
  - React
technologies:
  - React
---
L'idée était de pouvoir récupérer n'importe quel feed RSS en récupérant l'url du feed à partir du parsing de la page retournée par une URL donnée.\
L'app utilise l'api fetch et un proxy pour contourner les CORS, parse la réponse HTML de la page et cherche les liens éventuels vers de feeds RSS dans le DOM de la page.\
Le feed est ensuite sauvegardé dans le localStorage.\
Une tache de refresh des feeds sauvegardés est à prévoir.
