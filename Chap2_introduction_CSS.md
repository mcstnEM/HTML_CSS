Dans ce cours, je exprimerais parfois les classes et les ids en anglais et au singulier, tel qu'on les retrouvent sur les documents HTML et les feuilles de style.

# Introduction au CSS Partie 1

On a vu jusque-là qu'on pouvait écrire du CSS soit entre des balises `<style></style>`, soit dans les attributs `style=""` de nos éléments HTML.

Et si je vous disais qu'on peut faire encore mieux ?

On a la possibilité de déporter notre code CSS dans un fichier dédier : 

```txt
web_project/
├── index.html
└── style.css
```

Pour appliquer les règles CSS de notre fichier **style.css**, il vous faut utiliser la balise opheline `<link href="" rel="" />` dans l'entête.

# la balise `<link href="" rel="" />`

Décortiquons cette balise :
- `href=""`: Cet attribut indique l'URL vers la ressource. Il peut s'agir d'un chemin relatif ou absolu.
- `rel=""`: Cet attribut désigne une relation entre le document lié et le document actuel.

Il y a bien plus d'attributs à votre disposition, vous les trouverez dans la documentation MDN [à cette addresse](https://developer.mozilla.org/fr/docs/Web/HTML/Element/link#attributs).

## Récupérer la feuille de style pour utiliser les règles CSS

En concidérant l'organisation des fichiers suivants :

```txt
web_project/
├── index.html
└── style.css
```

Pour accéder au fichier **style.css** depuis **index.html**, il vous faudra renseigner le chemin suivant : `./style.css`.

Vous devez aussi déclarer l'attribut `rel=""` comme suite `rel="stylesheet"`. (On peut traduire "stylesheet" par "feuille de style").

Ce qui nous donnes : `<link rel="stylesheet" href="./style.css">`

## Définir une icone dans l'onglet

Rajoutons un répertoir `assets/` dans lequel on aura nos images dans un dossier `images/`.

Dans ce dossier `images/`, on vas y placer une icon de tasse à café, ce qui nous donne l'organisation des fichiers suivant :

```txt
web_project/
├── assets
│   └── images
│       └── tasse-a-cafe.png
├── index.html
└── style.css
```

Maintenant vous pouvez ajouter la balise `<link />` suivante dans **l'entête** de votre document HTML pour voir apparaître une icon sur l'onglet de votre page :

```HTML
<link rel="icon" href="assets/images/tasse-a-cafe.png" type="image/png">
```

> [!TIP]
> Pour avoir des images adaptées pour les icons, vous avez des outilles en ligne, comme ce convertisseur d'image :  
> https://favicon.io/favicon-converter/

# Les `class` et les `id`

Si vous avez fait attention, vous avez remarqué que pour sélectionner un élément HTML, on utilisait des attributs `class="nom-classe"` et qu'entre les balises `<style></style>` on indiquait ces `class` précédées par un point : 

```css
.nom-classe {
    /* ...code css */
}
```

On à aussi des **id** définis par les attributs `id="nom-id"` et récupéré dans le CSS comme suite :

```css
#nom-id {
    /* ...code css */
}
```
Les `class` et les `id` sont similaires, **mise à part qu'on ne peut utiliser qu'un seule `id` pour qu'un seule éléments**, les `class` quant à elles, peuvent êtres appliquées sur plusieurs éléments et un élément peut même avoir avoir plusieurs `class` séparées par un espace.

Autre différence, les `id` ont une plus grande **"spécificité CSS"** que les `class`. On verra la notion de **"spécificité CSS"** un peu plus tard dans le chapitre 3.

# Appliquer des règles CSS par défaut directement sur les éléments HTML

À la place d'indiquer des `class` ou des `id` dans votre code CSS pour styliser des éléments précis, vous pouvez indiquer directement des balises HTML pour leur appliquer un style par défaut.

```css
/* Applique la police Arial par défaut aux éléments h1, h2, ..., h6 et p */
h1, h2, h3, h4, h5, h6, p {
    font-family: Arial, Helvetica, sans-serif;
}

/* 
Si Arial n'est pas disponible, applique la police Helvetica; si pas disponible applique sans-serif 
    font-family: Arial, Helvetica, sans-serif;
*/
```

# 01. Exercice: Déporté votre css dans une feuille de style

Avec le code HTML suivant, déporté les règles de style dans un fichier CSS.

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="assets/images/tasse-a-cafe.png" type="image/png">
    <title>Document</title>
    <style>
        .container {
            margin-left: auto;
            margin-right: auto;
            max-width: 1280px;
            min-width: 200px;
        }

        .framed-text {
            background-color: #F29849;
            padding: 1.5rem;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Manuel Facétieux pour la Survie dans le Monde des Développeurs</h1>
        <p class="framed-text ">Bienvenue dans le monde déconcertant des développeurs, où les parenthèses ont leur propre langage et où les bugs sont plus redoutables que les zombies dans un film d'horreur. Suivez ce manuel humoristique pour naviguer avec succès dans l'univers en constante évolution de la programmation.</p>

        <h2>1. Langage de Programmation : La Tour de Babel 2.0</h2>
        <p>Pour impressionner les collègues, apprenez au moins trois langages de programmation différents. Bonus si vous pouvez citer des citations de code en langages exotiques comme le <a href="https://fr.wikipedia.org/wiki/Brainfuck">Brainfuck</a> lors des réunions.</p>

        <h2>2. Pause Café Obligatoire</h2>
        <p>La pause café est une pause de réflexion essentielle. Si vous ne pouvez pas résoudre un problème, c'est probablement parce que vous n'avez pas bu assez de café. Consommez avec modération... ou pas.</p>

        <h2>3. Documentation : Un Concept Mythique</h2>
        <p>Écrivez votre code comme si le prochain développeur était un psychique. Ne fournissez aucune documentation. Laissez-leur le plaisir de deviner ce que font ces lignes de code magiques.</p>

        <h2>4. Réunions Épiques</h2>
        <p>Prenez des notes lors des réunions, même si vous ne comprenez rien. Utilisez des termes comme "paradigme de développement" et "architecture évolutive" de manière aléatoire pour sembler plus intelligent.</p>

        <h2>5. Bug Bounty : Ennemis Publics Numéro Un</h2>
        <p>Les bugs sont comme des têtes mise à prix. Plus ils sont difficiles à trouver, plus grande sera votre renommée une fois que vous les aurez éradiqués. Faites preuve de patience, jeune Padawan.</p>

        <h2>6. Stack Overflow : La Bible Moderne</h2>
        <p>En cas de doute, priez à l'autel de Stack Overflow. Copiez-collez du code à la hâte, puis priez pour que cela fonctionne sans causer d'effets secondaires mystérieux.</p>

        <h2>7. CTRL + Z : Le Pouvoir de la Rédemption</h2>
        <p>Le raccourci clavier le plus puissant. Apprenez à l'utiliser avec sagesse, car il peut sauver votre journée (et votre emploi) plus d'une fois.</p>

        <h2>8. Jargon Magique</h2>
        <p>Maîtrisez le jargon technique. Utilisez des termes comme "scalabilité", "efficacité algorithmique" et "paradigme orienté objet" même si vous n'avez aucune idée de ce qu'ils signifient réellement.</p>

        <h2>9. Déguisement de Code Ninja</h2>
        <p>Adoptez une apparence mystérieuse avec un hoodie noir et des lunettes. Lorsque quelqu'un vous demande ce que vous faites, répondez énigmatiquement : "Je travaille dans le cloud."</p>

        <h2>10. Redéfinissez "Fonctionnel"</h2>
        <p>Quand quelqu'un dit "ça fonctionne", demandez-vous toujours : "Est-ce que ça fonctionne ou est-ce que ça fonctionne fonctionnellement ?" La nuance est cruciale.</p>

        <p>🚀 En suivant ces directives comiques, vous pourrez peut-être survivre dans la jungle des développeurs. N'oubliez pas que dans ce monde, le rire est souvent le meilleur débogueur. Bonne chance, jeune programmeur, et puissent vos lignes de code être sans erreurs !</p>
    </div>
</body>
</html>
```

## 01.2 Exercice: Ajouter des règles CSS en plus

Ajouter ces règles CSS à votre feuille de style :

```css
#header-title {
    text-decoration: underline;
    font-family: Arial, Helvetica, sans-serif;
}

.conclusion {
    background-color: #94BDF2;
    padding: 1.5rem;
    border-radius: 8px;
}
```

Et appliqué la classe `conclusion` au dernier paragraphe du document et l'id `header-title` à l'élément `<h1></h1>`.

# Les Sélecteurs d'Attributs

Les sélecteurs d'attributs en CSS offrent une flexibilité supplémentaire en permettant de cibler des éléments en fonction de la présence, de la valeur ou de la correspondance d'un attribut spécifique. Cela donne aux développeurs un moyen puissant de styliser des éléments en fonction de leurs caractéristiques spécifiques.

## Sélecteur d'Attribut d'Existence

Le sélecteur d'attribut d'existence cible les éléments qui ont un attribut spécifique, peu importe sa valeur.

```css
[target] {
    /* Styles appliqués aux éléments avec l'attribut "target" */
}
```

## Sélecteur d'Attribut avec Valeur

Le sélecteur d'attribut avec valeur cible les éléments ayant un attribut spécifique avec une valeur correspondante.

```css
[target="valeur"] {
    /* Styles appliqués aux éléments avec l'attribut "target" ayant la valeur "valeur" */
}
```

## Sélecteur d'Attribut avec Valeur Partielle

Le sélecteur d'attribut avec valeur partielle cible les éléments ayant un attribut spécifique avec une valeur qui contient une partie spécifiée.

```css
[target*="partie"] {
    /* Styles appliqués aux éléments avec l'attribut "target" contenant la partie spécifiée */
}
```

## Sélecteur d'Attribut avec Valeur Préfixe

Le sélecteur d'attribut avec valeur préfixe cible les éléments ayant un attribut spécifique avec une valeur qui commence par une partie spécifiée.

```css
[target^="préfixe"] {
    /* Styles appliqués aux éléments avec l'attribut "target" dont la valeur commence par le préfixe spécifié */
}
```

## Sélecteur d'Attribut avec Valeur Suffixe

Le sélecteur d'attribut avec valeur suffixe cible les éléments ayant un attribut spécifique avec une valeur qui se termine par une partie spécifiée.

```css
[target$="suffixe"] {
    /* Styles appliqués aux éléments avec l'attribut "target" dont la valeur se termine par le suffixe spécifié */
}
```

## Sélecteur d'Attribut avec Valeur Hyphen

Le sélecteur d'attribut avec valeur hyphen cible les éléments ayant un attribut spécifique avec une valeur qui est exactement ou commence par la partie spécifiée, suivie d'un tiret (-).

```css
[target|="valeur"] {
    /* Styles appliqués aux éléments avec l'attribut "target" dont la valeur est exactement ou commence par "valeur-" */
}
```

# Les Sélecteurs CSS

Dans cette section, nous explorons les sélecteurs CSS qui permettent de cibler et d'appliquer des styles spécifiques aux éléments HTML en fonction de leur relation et de leurs attributs.

## Sélecteurs de Base

- **`ul li`** : Sélectionne tous les éléments `<li>` qui sont descendants de `<ul>`.
- **`p > span.bold`** : Sélectionne les éléments `<span>` avec la classe `.bold` qui sont enfants directs de `<p>`.

## Sélecteurs Adjacents et Frères

- **`h3 + p`** : Sélectionne l'élément `<p>` immédiatement après chaque `<h3>`.
- **`div.flex ~ div.bigger`** : Sélectionne tous les `<div>` avec la classe `.bigger` qui sont précédés par un `<div>` avec la classe `.flex`.

Ces sélecteurs offrent une flexibilité pour styliser les éléments en fonction de leur contexte et relation dans le document HTML, permettant des designs complexes et réactifs.

# 02 Exercice: Créer une bare de navigation

Avec ce que vous avez vu, tenté de créer une bare de navigation.

> [!TIP]
> Vous pouvez utiliser la `flexbox` avec la propriété `justify-content` pour ajancer les élements dans un bloc html.
>
> - `justify-content` : https://developer.mozilla.org/fr/docs/Web/CSS/justify-content)
> 
> La `flexbox` fera l'objet d'un chapitre. C'est une notion qui vous sera très util, vous verrez.