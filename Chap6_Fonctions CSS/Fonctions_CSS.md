# Les fonctions CSS

## Introduction

Les fonctions de valeur CSS sont des instructions qui appellent un traitement de données ou des calculs spéciaux pour renvoyer une valeur CSS pour une propriété CSS. Les fonctions CSS représentent des types de données plus complexes et peuvent prendre certains arguments d'entrée pour calculer la valeur de retour.

La syntaxe des valeurs commence par le nom de la fonction, suivi d'une parenthèse gauche (. Viennent ensuite le(s) argument(s), et la fonction se termine par une parenthèse fermante ).

Les fonctions peuvent prendre plusieurs arguments, formatés de la même manière que les valeurs des propriétés CSS. Les espaces sont autorisés, mais ils sont facultatifs à l’intérieur des parenthèses. Dans certaines notations fonctionnelles, plusieurs arguments sont séparés par des virgules, tandis que d'autres utilisent des espaces.

> [!NOTE]
> Les fonctions CSS sont utilisées comme valeurs de propriété et ne doivent pas être confondues avec des pseudo-classes. Les pseudo-classes fonctionnelles, les pseudo-classes linguistiques et plusieurs pseudo-classes arborescentes nécessitent des valeurs de paramètres, mais ce ne sont pas des fonctions. Les règles at conditionnelles ne sont pas non plus des fonctions de valeur ; les parenthèses sont utilisées pour les regroupements.

## Divers types de fonctions

Il existe maintenan de nombreux types de fonctions, qui font de plus en plus ressembler CSS à un langage de programmation (on sait depuis longtemps que CSS est équivalent à une machine de Turing).

- Transformations
- Math
- Filtres
- Couleur
- Images
- Compteurs
- Formes
- Reference
- Grid
- Fontes
- Easing
- Animation

Petit tour de fonctions utiles

### Transformations

- translateX, translateY
- skewX,skewY

#### Exemple

TranslateX déplace le bloc d'un certain  nombre de pixels sur les X

```html
<div>Statique</div>
<div class="moved">Déplacé</div>
<div>Statique</div>
```

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateX(10px); /* Équivalent à translate(10px) */
  background-color: pink;
}
```

### Math

- calc
- min, max, clamp
- round

### Exemple

clac est très utilisée pour tous types de calculs arithmétiques, et en particvulier pour la conversion des unités.

```html
<div class="banniere">C'est une bannière !</div>
```

```css
.banniere {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

### Filtres

- blur, brightness, contrast, grayscale, hue-rotate
- invert, saturate, sepia

#### Exemple

Les filtres modifient l'aspect des images. `blur` ajoute une part de flou à l'image.

```html
<dimg class="blurred" src="..." />
```

```css
.blurred {
  filter: blur(1.5rem)
}
```
### Couleurs

- rgb, hsl

#### Exemple

### Images

- linear-gradient, radial-gradient

#### Exemple

La fonction CSS linear-gradient() crée une image qui est un dégradé entre deux ou plusieurs couleurs le long d'une ligne droite. Elle fournit une valeur de type <gradient> qui est un type spécial d'image (<image>).

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

### Compteurs

- counter, counters, symbols

#### Exemple

La fonction CSS counter() renvoie une chaîne de caractères qui représente la valeur courante du compteur nommé (dont le nom est passé en argument). Elle est généralement utilisée pour construire un pseudo-élément mais elle peut tout à fait être utilisée à n'importe quel endroit où une valeur <string> est attendue.

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

```css
ol {
  counter-reset: listCounter;
}
li {
  counter-increment: listCounter;
}
li::after {
  content: "[" counter(listCounter) "] == [" counter(listCounter, upper-roman)
    "]";
}
```

### Formes

- circle, ellipse, rct, polygon, path

#### Exemple

`circle` permet de définir un ceercle d'un certain rayon et d'une certaine position. Dans l'exemple ci-dessous, cette forme est appliqué à un « masque », qui permet de faire en sorte que le texte épouse l'image.

```html
<div class="box">
  <img src="../images/round-balloon.png" alt="balloon">
  <p>One November night in the year 1782, so the story runs, two brothers sat over their winter fire in the little French town of Annonay, watching the grey smoke-wreaths from the hearth curl up the wide chimney. Their names were Stephen and Joseph Montgolfier, they were papermakers by trade, and were noted as possessing thoughtful minds and a deep interest in all scientific knowledge and new discovery. Before that night—a memorable night, as it was to prove—hundreds of millions of people had watched the rising smoke-wreaths of their fires without drawing any special inspiration from the fact.</p>
</div>
```

```css
img {
  float: left;
  shape-outside: circle(50%);
}
```

### Référence

- attr, url

#### Exemple

La fonction attr() est utilisée afin de récupérer la valeur d'un attribut d'un élément pour l'utiliser dans la feuille de style. Cette fonction peut également être utilisée sur les pseudo-éléments auquel cas c'est la valeur correspondant à l'élément source qui est renvoyée.

```html
<div class="background" data-background="lime"></div>
```

```css
html,
body,
.background {
  height: 100vh;
}
.background {
  background-color: red;
}

.background[data-background] {
  background-color: attr(data-background color, red);
}
```

### Grid

- fit-content
- repeat

#### Exemple

La fonction CSS fit-content() permet d'obtenir une dimension restreinte à un intervalle donné (en utilisant la formule min(taille maximale, max(taille minimale, argument)).

```html
<div id="container">
  <div>Élément aussi large que le contenu.</div>
  <div>
    Un élément avec plus de texte à l'intérieur. Comme son conteneur est plus
    large que la largeur maximale, il est ramené sur 300 pixels.
  </div>
  <div>Un élément flexible</div>
</div>
```

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### Easing

- linear, cubic-bezier, steps

### Animation

- scroll, view

## Ressources

- [Documentation MDN (en)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)
