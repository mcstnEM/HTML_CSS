# Sujet de partiel

## Partie A : Questions de cours

Pour chaque question donnez une réponse concise et quelues exemples.

### Question 1

A quoi sert l'élément `<head>` du langage HTML ? Donnez 3 exemples d'application.

### Question 2

Qu'est-ce que la cascade dans l'expression CSS ? Comment une règle de style est-elle sélectionnée ?

### Question 3

A quoi sert la propriété CSS `display` ? Donnez quelques exemples de différentes valeurs.

### Question 4

Proposez deux méthodes pour vérifier dans un champ de formulaire qu'une personne a bien inscrit une adresse ne adresse électronique. Donnez le code correspondant. On admettra que toutes les adresse électroniques valides sont de la forme : `m.cadennes@ovh.com`, soit `<lettre>.<lettres-ou-tiret>@<lettres-ou-chiffres>.<tld>` (tld étant parmi les plus courants `com`, `net`, `org`, `fr`)

### Question 5

Quelle est la différence entre psuedo-classe et pseudo-élmément ? Donnez un exemple d'application pour chaque.

### Question 6

Quelle différence y a-t-il entre les unités `%` et `vw/vh` ?

### Quation 7

Donnez trois exemples de bonnes pratiques pour l'accessibilité des sites web.

### Question 8

A quoi sert le caractère `&` dans les règles de style ? Donnez un exemple et un contre-exemple.

### Question 9

Quelles différence faites-vous entre les postionnements `relative`, `absolute` et `sticky` ?


## Partie B : Implémentation

Vous avez été sélectionné pour mettre en page le site de l'agence de voyage `Fogg.world`. Cell-ci vous a fourni un ensemble de documents photographiques qui deveont être inclus sur la page d'accueil. Seule cette dernière doit être livrée pour le moment.

Voici les spécifications que vous avez reçues.

La page se compose de trois parties :

1. Un entête comprenant le nom du site, un menu de navigation et un moteur de recherche.
2. Une zone de contenu principal
3. Un pied de page reprenant le menu de l'entête et un formulaire d'inscription à une lettre d'information


### Contraintes :

#### Mise en page globale

La page doit d'adapter à la hauteur de la fenêtre de telle manière que l'entête et le pied de page soit toujours visible. En pratique vous avez deux options pour réaliser cela. Vous pouvez choisir soit l'une des deux, soit un mélange des deux.

L'entête mesurera 100px de haut et de même pour le pied de page.  Ke contenu parincipal s'étendra sur tout la hauteur intermédiaire.

Naturellement, seule la zone de contenu principal peut défiler verticalement si son contenu déborde de la hauteur de la page.

#### Entête

L'entête comporte :
- Le nom du site :
- Un menu avec les options :
  - Accueil
  - Catalogue
  - Témoignages
  - Qui sommes-nous ?
- Un petit formulaire de recherche, avec un bouton affichant l'cône 'loupe' fourni dans les ressources.

Tous les éléments sopnt affichés horizontalement et les trois pârties suffisamment séparée pour rester lisibles.

L'iamge `photo-hero.jpg` s'étend sur l'intégralité du fond du bloc.

Pour détacher le contenu du fond, qui est très présent, vous pourrez ajouter au bloc de contenu un fond blanc d'un opacité faible (c'es-à-dire presque transparent).

#### Pied de page

Le pied de page est très simple. Il reprend les éléments de l'entête un fond anthracite.

Le menu de navigation est vertical et à la pace du moteur de recherche, on intègre un formulaire d'inscription à une lettre d'information.

#### Le contenu principal

Le contenu principal est composé de trois parties.

##### Galerie Photos

La première partie est une mosaïque de photos. Celles-ci vous sont données comme ressources et portent le nom `photo_x.jpg`.
Le résultat doit s'approcher de la capture d'écran qui vous est fournie (`mosaïque.png`).

Par ailleurs, nous souhaitons dynamiser l'affichage. par conséquent, lorsque l'on survolera une image, les autres images de la galerie se verront transfoméesde la manière suivante :
- leur taille est réduite de 5%
- un très léger flou leur est ajouté
- on leur applique une échelle de gris de 95%

##### Présentations

La deuxième partie consiste en une série de présentation, pour lesquelles nous vous fournissons juste les images `photo_expo_x.jpg`.

Chaque présentation est cosntituée d'une image est d'un paragraphe de présentation (pour l'occasion vous pourrez mettre du faux texte). L'image et le texte sont côte à côte, horizontalement.

Comme il y a plusieurs présentations, nous souhaitons alterner les dispositions. Pour toutes les présentation impaires, l'image sera à droite et le teste à gauche. Pourtoutes les présentations paires, ce sera l'inverse.

##### Formulaire

Enfin la troisième partie sera un formulaire d'inscirption sur le site. On demande à la personne les informations suivantes :
- nom, prénom
- date de naissance
- code postal, ville
- pays (à choisir dans une liste)
- email
- mot de passe
- avatar (un fichier au format jpg ou png)

1. Les éléments du formulaire doivent être groupés logiquement.
2. Vous choisirez naturellement les types de « widgets » les plus adaptés.
3. Vous ferez également les vérifications suivantes :
  - Les noms et prénons ne peuvent contenir que des lettes, des espaces et des tirets
  - L'avatar doit être un fichier d'un type légitime pour une image
Vous indiquerez explictement toutes les méta-données du formulaire
4.

> [!Note]
> Entre chaque partie vous insérerez des inter-titres.
> Devant chaque inter-titre (en début de ligne) vous insérerez un chevron (caractère : '>')

### Version mobile

Vous préparerez deux versions de la mise en page, une pour les écrans de bureau, une autre pour les terminaux mobiles.

Dans cette dernière, vous serez amenés à faire les changements suivants :
- L'ensemble de la pâge défile, et non plus implement le contenu parincipal
- Les éléments de contenu viennent se placer les uns sous les autres, aussi bien pour la mosaïque que pour les présentations, et pour celles-ci, l'image est toujours au-dessus du texte.
- Le menu classique sera remplacé par un « hamburger menu » en CSS pur.

### Consignes générales

- Vous choisirez deux polices de caratères (par exemple sur Google Fonts), à savoir une pour les titres et une pour le corps de texte. Eventuellement, vous pouvez en choisir une troisième pour le logo.
- Vous tenterez d'appliquer les bonnes pratiques d'accessibilité
- Hiérarchisez votre travail pour réaliser les fonctionnalités du plus simple au plus complexe.
- Vous utiliserez des variables CSS et l'imbriacation de règles autant que possible.
