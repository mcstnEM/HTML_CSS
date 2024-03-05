# Exercice : Création d'une Page de Présentation d'Articles

#### Objectif
L'objectif de cet exercice est de créer une page web qui présente une liste d'articles. Chaque article doit inclure un titre, une image, une brève description et un lien pour lire l'article complet. Vous devez utiliser les balises de structure HTML pour organiser le contenu de la page et une feuille de style CSS externe pour styliser la page.

#### Instructions

1. **Structure HTML :**
   - Créez un fichier HTML (`index.html`) pour la structure de votre page.
   - Utilisez la balise `<header>` pour l'en-tête de la page, où vous inclurez le titre de la page.
   - Employez la balise `<main>` pour le contenu principal de la page, contenant les articles.
     - Pour chaque article, utilisez une balise `<article>` comprenant :
       - Un titre dans une balise `<h2>`.
       - Une image représentative dans une balise `<img>`, avec un attribut `alt` décrivant brièvement l'image.
       - Un paragraphe de description dans une balise `<p>`.
       - Un lien pour lire l'article complet dans une balise `<a>`, pointant vers `#`.
   - Ajoutez une balise `<footer>` pour le pied de page, contenant une phrase de droit d'auteur ou une note.

2. **Feuille de Style CSS :**
   - Créez une feuille de style externe (`styles.css`) pour définir le style de votre page.
   - Liez la feuille de style à votre document HTML en utilisant la balise `<link>` dans l'en-tête (`<head>`) de votre document HTML.
   - Appliquez des styles de base à votre page, tels que :
     - La police de caractères, la couleur du texte et le fond de la page.
     - Des styles spécifiques pour le `<header>`, `<main>`, `<article>`, `<footer>`, incluant des marges, du padding, et des bordures.
     - Assurez-vous que les images des articles sont bien dimensionnées et cohérentes.

#### Critères de Réussite
- Utilisation correcte des balises de structure HTML.
- Présentation claire et organisée des articles.
- Application de styles CSS externes pour améliorer l'apparence de la page.

#### Ressources
- Images pour les articles (vous pouvez utiliser des images libres de droits trouvées sur des sites comme Unsplash ou Pexels).
- Google Fonts pour les polices de caractères.

# Importer des polices de Google Fonts

Pour utiliser Google Fonts dans un projet web, vous devez d'abord choisir la police de caractères qui convient le mieux à votre design sur le site de Google Fonts. Ensuite, vous intégrez la police dans votre projet en utilisant un lien dans la balise `<head>` de votre document HTML ou en l'important dans votre fichier CSS. Voici un exemple concret d'utilisation de Google Fonts avec une explication détaillée.

### Étape 1 : Choisir une Police sur Google Fonts
Allons sur [Google Fonts](https://fonts.google.com/). Par exemple, choisissez la police "Roboto". Sur la page de la police, vous pouvez visualiser les différents styles de la police. Une fois que vous avez choisi le style désiré, cliquez sur le bouton "Select this style".

### Étape 2 : Intégrer la Police dans votre Projet Web
Après avoir sélectionné le style de police, Google Fonts vous fournira un lien à intégrer dans la balise `<head>` de votre document HTML. Alternativement, vous pouvez utiliser une règle `@import` dans votre CSS.

#### Option 1 : Lien dans le HTML

```html
<head>
  <!-- Lien vers la police Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap" rel="stylesheet">
</head>
```

#### Option 2 : Import dans le CSS

```css
/* Import de la police dans le fichier CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
```

### Étape 3 : Utiliser la Police dans votre CSS
Une fois que vous avez intégré la police dans votre projet, vous pouvez l'utiliser dans votre feuille de style CSS en référençant le nom de la police dans la propriété `font-family`. Voici un exemple :

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

Dans cet exemple, nous appliquons la police "Roboto" à tout le texte contenu dans l'élément `<body>` de notre page. Si "Roboto" n'est pas disponible pour une raison quelconque, le navigateur utilisera une police sans-serif par défaut.

### Explication
- **Choisir une police sur Google Fonts** vous permet de parcourir et de sélectionner parmi une large gamme de polices gratuites optimisées pour le web.
- **Intégrer la police dans votre projet** se fait par un lien dans le HTML ou un import dans le CSS, ce qui charge la police depuis les serveurs de Google lorsque votre page web est ouverte.
- **Utiliser la police dans votre CSS** en définissant la propriété `font-family` vous permet d'appliquer la police à vos éléments HTML, améliorant ainsi l'esthétique et la lisibilité de votre contenu web.

L'utilisation de Google Fonts est un moyen simple et efficace d'enrichir visuellement votre projet web sans avoir à héberger les fichiers de police vous-même.