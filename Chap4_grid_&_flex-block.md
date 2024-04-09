# Introduction au CSS Grid Layout

Bienvenue dans ce cours sur le CSS Grid Layout, une puissante technique de mise en page qui vous permet de créer des designs complexes et réactifs avec facilité. Dans ce cours, nous allons explorer les concepts fondamentaux du Grid, comment l'implémenter, et quelques astuces pour tirer le meilleur parti de cette technologie.

## Qu'est-ce que le CSS Grid Layout ?

Le CSS Grid Layout (ou simplement "CSS Grid") est un système de mise en page bidimensionnel pour le web. Il vous permet de positionner des éléments de page dans des colonnes et des lignes, créant ainsi des layouts complexes et réactifs. À la différence du Flexbox, qui est principalement conçu pour des dispositions unidimensionnelles (soit en colonne, soit en ligne), Grid est conçu pour gérer simultanément les deux dimensions.

## HTML à copier coller

Pour mieux comprendre les explications qui vont suivre, on par du principe que la structure HTML ressamble à l'example suivant :

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Grid example</title>
</head>
<body>
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
</body>
</html>
```

Vous pouvez ajouter des bordures ou des arrière plan colorés aux éléments, ce qui vous permettra une meilleur perception des règles appliquées.

```css
/* Ajouter une bordure rouge faisant 3px */
border: red 3px solid;

/* Ajouter un fond de couleur "coraille" */
background-color: coral;
```

## Commençons avec le Grid

Pour utiliser CSS Grid, vous devez définir un conteneur comme un grid en utilisant la propriété `display: grid;`.

```css
.container {
  display: grid;
}
```

### Définir des Colonnes et des Lignes

Utilisez `grid-template-columns` et `grid-template-rows` pour définir la structure de votre grid.

```css
.container {
  display: grid;
  grid-template-columns: 100px 200px auto;
  grid-template-rows: auto 100px 200px;
}
```

### Fractionner l'Espace avec `fr`

La unité `fr` vous permet de diviser l'espace disponible. Par exemple, `1fr` prend un fraction de l'espace disponible.

```css
.container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

### Positionner les Éléments du Grid

Positionnez les éléments du grid en utilisant `grid-column` et `grid-row`.

```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
```

## Espacement Entre les Éléments

Utilisez `grid-gap`, `grid-row-gap`, et `grid-column-gap` pour ajouter de l'espace entre vos éléments.

```css
.container {
  grid-gap: 20px;
  grid-row-gap: 10px;
  grid-column-gap: 15px;
}
```

## Modèles de Grid Plus Avancés

### Grid Template Areas

`grid-template-areas` vous permet de créer un template visuel de votre layout.

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}
```

Pour en savoir plus sur le `grid-template-areas`:  
https://developer.mozilla.org/fr/docs/Web/CSS/grid-template-areas

### Fonctionnalités Avancées

- **Alignement :** Contrôlez l'alignement avec `align-items`, `justify-items`, `align-content`, et `justify-content`.
- **Grids Imbriquées :** Créez des grids à l'intérieur de grids pour des layouts encore plus complexes.
- **Auto-Fill vs Auto-Fit :** Utilisez `auto-fill` et `auto-fit` avec `grid-template-columns` pour des layouts flexibles.

# Introduction à la Flexbox

Flexbox, ou Flexible Box Layout, est un modèle de disposition conçu pour aider à construire des interfaces utilisateur complexes et réactives avec une facilité relative. Il permet un agencement efficace, un alignement et une distribution de l'espace entre les éléments d'un conteneur, même lorsque leurs tailles sont inconnues ou dynamiques. Flexbox résout de nombreux problèmes traditionnellement rencontrés avec les CSS, notamment en ce qui concerne les layouts verticaux.

## Introduction à Flexbox

Le système Flexbox fonctionne sur le principe d'un conteneur flexible (`flex container`) et de ses enfants (`flex items`). En définissant un élément comme un conteneur Flex, ses enfants directs deviennent automatiquement des éléments Flex, ce qui permet de les manipuler de manière plus flexible et intuitive.

## Activer Flexbox

Pour utiliser Flexbox, vous devez définir la propriété `display` d'un conteneur à `flex` (ou `inline-flex` pour un comportement en ligne).

```css
.container {
  display: flex;
}
```

## Direction de Flex

La propriété `flex-direction` contrôle la direction dans laquelle les éléments flex sont placés dans le conteneur. Les valeurs possibles sont `row` (par défaut), `row-reverse`, `column`, et `column-reverse`.

```css
.container {
  flex-direction: column;
}
```

## Alignement et Justification

Flexbox fournit plusieurs propriétés pour aligner et justifier les éléments flex :

- **justify-content** contrôle l'alignement des éléments flex sur l'axe principal (horizontalement pour `row`, verticalement pour `column`). Les valeurs possibles incluent `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, et `space-evenly`.

- **align-items** contrôle l'alignement sur l'axe transversal (l'opposé de l'axe principal). Les valeurs possibles sont `flex-start`, `flex-end`, `center`, `baseline`, et `stretch`.

```css
.container {
  justify-content: center;
  align-items: center;
}
```

## Flexibilité des Éléments

La flexibilité des éléments flex est contrôlée par `flex-grow`, `flex-shrink`, et `flex-basis`.

- **flex-grow** définit la capacité d'un élément à grandir si nécessaire.
- **flex-shrink** définit la capacité de rétrécissement.
- **flex-basis** définit la taille initiale de l'élément avant la distribution de l'espace restant.

Ces propriétés peuvent être utilisées individuellement ou combinées dans la propriété raccourcie `flex`.

```css
.item {
  flex: 1;
}
```

> [!NOTE]
> Pour en savoir plus sur la propriété flex, vous pouvez vous rendre sur la MDN :  
> https://developer.mozilla.org/fr/docs/Web/CSS/flex

## Ordre et Alignement Individuel

- **order** permet de changer l'ordre d'apparition des éléments flex sans modifier le HTML.
- **align-self** permet de modifier l'alignement d'un élément spécifique, indépendamment des autres.

```css
.item {
  order: 2;
  align-self: flex-start;
}
```

## Exemple Complet

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Exemple Flexbox</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

</body>
</html>
```

```css
/* styles.css */
.container {
  display: flex;
  justify-content: center; /* Centre les éléments horizontalement */
  align-items: center; /* Centre les éléments verticalement */
  height: 100vh; /* Fait en sorte que le conteneur prenne toute la hauteur de l'écran */
}

.item {
  flex: 1; /* Distribue l'espace disponible uniformément entre les enfants */
  padding: 20px;
  margin: 10px;
  background-color: lightgrey;
  text-align: center;
}
```

## Conclusion

Flexbox offre une flexibilité et une puissance incroyables pour le design web, simplifiant la création de layouts complexes et réactifs. Bien maîtriser Flexbox est essentiel pour tout développeur front-end cherchant à créer des interfaces modernes et efficaces.

## Exercice 1 : Centrez un Élément dans la Page

### Objectif
Créez une page HTML avec un élément `<div>` au centre, tant horizontalement que verticalement, en utilisant Flexbox.

### Instructions
1. **HTML** : Dans un fichier `centre.html`, créez un `<div>` avec la classe `container` contenant un autre `<div>` avec la classe `content`.
2. **CSS** : Utilisez Flexbox dans `styles.css` pour centrer `content` dans `container` sur les deux axes.

### Code de Démarrage
```html
<!-- centre.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Centrer avec Flexbox</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="content">Je suis centré !</div>
    </div>
</body>
</html>
```

```css
/* styles.css */
.container {
  height: 100vh;
}

.content {
  padding: 20px;
  background-color: lightblue;
}
```

### Critères de Réussite
- L'élément `content` doit être exactement au centre de la page.

---

## Exercice 2 : Navigation Horizontale

### Objectif
Créez une barre de navigation horizontale en utilisant Flexbox, où les éléments sont répartis également.

### Instructions
1. **HTML** : Créez un fichier `navbar.html` avec une `<nav>` contenant plusieurs liens (`<a>`).
2. **CSS** : Dans `styles.css`, utilisez Flexbox pour répartir les liens de manière égale dans la barre de navigation.

### Code de Démarrage
```html
<!-- navbar.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Barre de Navigation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar">
        <a href="#">Accueil</a>
        <a href="#">Services</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
    </nav>
</body>
</html>
```

```css
/* styles.css */
.navbar {
  background-color: #333;
  padding: 10px 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 10px;
}
```

### Critères de Réussite
- Tous les liens doivent être répartis également et horizontalement dans la barre de navigation.

---

## Exercice 3 : Cartes de Produit Responsive

### Objectif
Créez une grille responsive de cartes de produit en utilisant Flexbox. Les cartes doivent s'adapter à la largeur de l'écran, avec une, deux ou trois cartes par ligne selon la taille de l'écran.

### Instructions
1. **HTML** : Dans `produits.html`, créez une `<div>` avec la classe `container` contenant plusieurs `<div>` avec la classe `card`.
2. **CSS** : Dans `styles.css`, utilisez Flexbox pour créer une grille responsive de cartes.

### Code de Démarrage
```html
<!-- produits.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Cartes de Produit</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <div class="card">Produit 1</div>
        <div class="card">Produit 2</div>
        <!-- Ajoutez plus de cartes selon besoin -->
    </div>
</body>
</html>
```

```css
/* styles.css */
.container {

}

.card {
  flex: ; /* Grandit pour prendre l'espace, mais commence à 200px */
  margin: 10px;
  padding: 20px;
  background-color: lightgrey;
  text-align: center;
}
```

### Critères de Réussite
- Les cartes s'affichent sur une seule colonne sur les petits écrans.
- Sur les écrans moyens, affichez deux cartes par ligne.
- Sur les grands écrans, affichez trois cartes ou plus par ligne.
