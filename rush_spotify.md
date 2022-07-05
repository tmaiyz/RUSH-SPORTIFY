# W1 - Projets web - W-WEB-090

## Spotify

**Création d’un lecteur multimédia online**

HTML, CSS, JS, PHP

### COMPéTENCES à ACQUéRIR

Lors de ce projet vous devrez utiliser et maîtriser les outils suivants:

-   Le PHP
-   Javascript/React
-   Les APIs
-   SQL
-   Le JSON

### SUJET

#### INTRODUCTION

Dans ce sujet, vous allez devoir créer une API et un site. API est un acronyme pour Application Programming Interface. Une API est une interface de programmation qui permet de se “brancher” sur une application pour échanger des données.

### RESTRICTIONS

Vous allez devoir utiliser react pour le site web. Obligation: Tous les membres du groupe devront être en mesure d’expliquer le code de chaque partie.

### PROJET

#### PARTIE1

Requêtes demandées Dans un premier temps, vous allez devoir créer votre API avec la base de données fournie avec le sujet. Les requêtes demandées sont:

-   [ ] Trouver les artistes et récupérer:
-   [ ] Leur description
-   [ ] Leur biographie
-   [ ] Leurs albums
-   [ ] Leurs photos
-   [ ] Dans les albums récupérés:
-   [ ] Leurs musiques
-   [ ] Leur genre
-   [ ] Le nombre de tracks
-   [ ] La photo de l’album
-   [ ] Leur popularité
-   [ ] Leur année de création
-   [ ] Faire une recherche:
-   [ ] Par titre de la musique
-   [ ] Par titre de l’album
-   [ ] Par nom de l’artiste
-   [ ] Par genre

Structurer son API Votre API doit comporter les requêtes suivantes:

-   [ ] Artistes
-   [ ] Lister les artistes
-   [ ] Voir le détail d’un artiste
-   [ ] Albums
-   [ ] Lister les albums
-   [ ] Voir le détail d’un album et ses pistes
-   [ ] Lister les albums d’un artiste donné
-   [ ] Tracks
-   [ ] Voir le détail d’une musique
-   [ ] Genres
-   [ ] Lister les genres
-   [ ] Voir le détail d’un genre et les id des albums le possédant
-   [ ] Chaque requête de votre API devra retourner du JSON.

### PARTIE 2

Après avoir créé votre API, vous allez devoir faire votre site web qui comportera les pages suivantes :

-   [ ] Page de listing des albums
-   [ ] Page de détail d’un album
-   [ ] Page de listing des genres
-   [ ] Page de détail d’un genre
-   [ ] Page de listing des artistes
-   [ ] Page de détail d’un artiste
-   [ ] Page de recherche
-   [ ] Page d’accueil
-   [ ] Page de listing des albums :

Vous devrez afficher sur cette page la liste paginée de tous les albums. Au clic sur un album, vous devrez rediriger l’utilisateur sur la page de détail de l’album.

Page de détail d’un album Sur cette page : 
- [ ] Vous devrez afficher le détail d’un album, ainsi que ses pistes. Il doit être possible de jouer les pistes à l’aide d’un lecteur audio HTML5. Vous ne devez pas pouvoir lancer plusieurs musiques simultanément.

Page de listing des genres

Sur cette page, vous devrez afficher la liste des genres. Au clic sur un genre, vous devrez rediriger l’utilisateur sur la page du détail du genre sélectionné. 
Page du détail d’un genre Ici, vous afficherez la liste des albums correspondants au genre sélectionné de la manière que sur la page de listing des albums. Au clic sur un album, vous redirigerez l’utilisateur sur la page de détail d’un album. 
Page de listing des artistes Sur cette page, vous devrez afficher la liste paginée des artistes. Au clic sur un artiste, vous redirigerez l’utilisateur sur la page de détail d’un artiste. Page de détail d’un artiste Sur cette page, vous afficherez un listing des albums de l’artiste de la même manière que sur la page du listing des albums. Au clic sur un album, vous redirigerez l’utilisateur vers la page de détail d’un album.

Page de détail de recherche Sur cette page, il devra être possible de rechercher soit un album, soit un genre, soit un artiste. Les résultats seront paginés.

Page d’accueil Sur cette page, vous afficherez un listing aléatoire des albums contenus dans votre base de données. Attention, tous les champs de la base de données sont nécessaires dans ce projet
