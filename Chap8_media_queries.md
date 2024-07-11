# Cours sur les Media Queries CSS

Les Media Queries sont un outil puissant en CSS permettant de créer des designs web réactifs et adaptatifs. Elles servent à appliquer des styles spécifiques en fonction des caractéristiques de l'appareil utilisé pour visualiser le contenu, comme la largeur de l'écran, la hauteur, la résolution, et d'autres facteurs environnementaux.

## Introduction aux Media Queries

Une Media Query se compose de deux parties principales : le type de média et la ou les expressions qui vérifient les conditions de cet appareil. Les types de média les plus couramment utilisés sont `screen` (pour les écrans d'ordinateur, tablettes, et smartphones) et `print` (pour la prévisualisation d'impression).

## Syntaxe de Base

La syntaxe de base d'une Media Query est la suivante :

```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

- `not` est utilisé pour exclure certains types d'appareils.
- `only` est utilisé pour appliquer des styles uniquement à certains types d'appareils, empêchant les navigateurs plus anciens qui ne prennent pas en charge les Media Queries de les appliquer.
- `mediatype` désigne le type de média ciblé (par exemple, `screen`, `print`).
- `and` sert à ajouter une ou plusieurs expressions, comme des conditions de largeur ou de hauteur, qui doivent être remplies pour que les styles s'appliquent.

## Exemples de Media Queries

### Cibler des Largeurs d'Écran Spécifiques

Pour appliquer des styles uniquement sur les écrans ayant une largeur minimale de 768 pixels :

```css
@media screen and (min-width: 768px) {
  /* Vos styles CSS ici */
}
```

### Utilisation de Plusieurs Conditions

Vous pouvez combiner plusieurs expressions dans une seule Media Query :

```css
@media screen and (min-width: 768px) and (max-width: 1024px) {
  /* Styles pour les appareils dont la largeur est entre 768px et 1024px */
}
```

### Cibler l'Orientation de l'Appareil

Pour styliser différemment selon que l'appareil est en mode portrait ou paysage :

```css
@media screen and (orientation: portrait) {
  /* Styles pour les appareils en mode portrait */
}

@media screen and (orientation: landscape) {
  /* Styles pour les appareils en mode paysage */
}
```

## Bonnes Pratiques

- **Utilisez des unités relatives** comme les pourcentages ou les unités `em` pour la largeur et la hauteur afin de rendre votre design plus flexible.
- **Commencez par le mobile** (Mobile First): concevez d'abord pour les petits écrans, puis utilisez des Media Queries pour ajuster le design aux écrans plus grands.
- **Testez sur plusieurs appareils** pour vous assurer que votre design est véritablement réactif et adaptatif.

# L'example

Pour illustrer l'utilisation des Media Queries dans un contexte réel, créons un exemple simple montrant comment ajuster le design d'une page web pour différents appareils en utilisant HTML et CSS. Cet exemple consistera en un simple layout avec un en-tête, un contenu principal, et un pied de page. Le design changera en fonction de la largeur de l'écran de l'appareil.

## Structure HTML

Commencez par créer le fichier HTML de base (`index.html`):

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple Media Queries</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>Mon Site Web</header>
    <main>
        <section>Contenu Principal</section>
        <aside>Barre Latérale</aside>
    </main>
    <footer>Pied de Page</footer>
</body>
</html>
```

## Feuille de Style CSS

Créez ensuite la feuille de style CSS (`style.css`) et définissez les styles de base ainsi que les Media Queries pour ajuster le layout selon la largeur de l'écran.

```css
/* Styles de base */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header, footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
}

main {
    display: flex;
    flex-direction: column;
}

section, aside {
    padding: 1rem;
}

/* Media Query pour les écrans supérieurs à 600px */
@media screen and (min-width: 600px) {
    main {
        flex-direction: row;
    }

    section {
        flex: 3;
    }

    aside {
        flex: 1;
    }
}

/* Media Query pour les écrans supérieurs à 900px */
@media screen and (min-width: 900px) {
    body {
        font-size: 1.2rem;
    }

    main {
        flex-direction: row;
        max-width: 900px;
        margin: auto;
    }

    header, footer {
        font-size: 1.5rem;
    }
}
```

Dans cet exemple, nous avons :

1. **Styles de Base** : Un en-tête (`header`) et un pied de page (`footer`) avec un fond sombre et un texte blanc, et un contenu principal (`main`) avec une section principale et une barre latérale (`section` et `aside`), qui sont affichées en colonne par défaut.

2. **Media Query pour les écrans supérieurs à 600px** : Lorsque l'écran atteint 600 pixels de largeur, le `main` change de `flex-direction` pour passer en ligne (row), permettant à la section principale et à la barre latérale de se situer côte à côte, avec un rapport de 3:1.

3. **Media Query pour les écrans supérieurs à 900px** : À partir de 900 pixels de largeur, la taille de la police s'ajuste pour le corps, l'en-tête et le pied de page pour une meilleure lisibilité sur les grands écrans. De plus, le `main` est centré avec une largeur maximale.

Ce simple exemple montre comment utiliser les Media Queries pour adapter un layout de page web à différents appareils, en améliorant l'expérience utilisateur sur des écrans de tailles variées.

## Exercice 1 : Adaptation d'une Carte de Profil

### Objectif
Créez une carte de profil simple qui affiche une photo, un nom, et une brève description. L'objectif est d'adapter la mise en page de cette carte pour qu'elle s'affiche différemment selon que l'écran est en orientation portrait ou paysage.

### Instructions
1. **HTML** : Créez un fichier `profil.html` et ajoutez une `<div>` contenant une `<img>` pour la photo, un `<h2>` pour le nom, et un `<p>` pour la description.
2. **CSS** : Dans un fichier `style.css`, définissez les styles de base pour votre carte. Ensuite, utilisez les Media Queries pour changer la disposition des éléments selon l'orientation de l'écran.
    - En **orientation portrait**, la photo doit être au-dessus du nom et de la description.
    - En **orientation paysage**, la photo doit être à gauche, avec le nom et la description à droite.

### Critères de Réussite
- La carte de profil change de disposition selon l'orientation de l'écran.
- Les transitions entre les dispositions sont fluides et logiques.

# Outils CSS

Pour définir des tailles responsives et harmonieuses, je peux vous proposer un petit outil en ligne : https://utopia.fyi/

C'est notamment très pratique lorsqu'on a appliqué un reset CSS.

Pour rendre compatibles nos règles CSS avec tous les navigateurs : https://autoprefixer.github.io/

Autoprefixer applique des **préfixes vendeurs**, cela permet d'activer des règles qui sont encore expérimentales pour certains navigateurs.

# Conclusion

Les Media Queries sont essentielles pour créer des designs web réactifs. En ajustant vos styles pour différents appareils, orientations, et résolutions, vous pouvez assurer une expérience utilisateur optimale pour tous les visiteurs de votre site. Comme pour tout outil puissant, l'expérimentation et la pratique sont clés pour maîtriser pleinement les Media Queries.