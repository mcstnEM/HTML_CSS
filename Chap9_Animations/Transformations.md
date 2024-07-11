# Transformations

## Introduction

La propriété transform modifie l'espace de coordonnées utilisé pour la mise en forme visuelle. Grâce à cette propriété, il est possible de translater les éléments, de les tourner, d'appliquer des homothéties, de les distordre pour en changer la perspective.

Si la propriété est différente de none, un contexte d'empilement sera créé. Dans ce cas, l'élément agira comme le bloc englobant pour les éléments qu'il contient et qui ont position: fixed; ou position: absolute;.

> [!WARNING]
> Seuls certains éléments peuvent être transformés. Les éléments dont la disposition est gérée avec des boîtes en ligne non-remplacées, des colonnes de tableau ou des groupes de colonnes de tableau ne peuvent pas être transformés.

## Fopnctionnement

En modifiant l'espace des coordonnées, les transformations CSS permettent de changer la forme et la position d'un contenu donner sans perturber le flux normal du document.

Elles sont implémentées en utilisant un ensemble de propriétés CSS qui permettent d'appliquer des transformations linéaires affines aux éléments HTML. Ces transformations incluent la rotation, l'inclinaison, l'homothétie, et la translation à la fois dans le plan (2D) et dans l'espace (3D).

> [!WARNING]
> Seuls les éléments positionnés selon le modèle de boîtes peuvent être transformés. Pour simplifier, on peut se souvenir que tout élément avec display: block est positionné selon le modèle de boîtes.

### Propriétés

Deux propriétés majeures sont utilisées pour définir les transformations CSS : transform et transform-origin.

#### transform-origin
Spécifie la position de l'origine. Par défaut, celle-ci est au centre de l'élément et peut être déplacée. Elle est utilisée par de nombreuses transformations, comme les rotations, les homothéties ou l'inclinaison, qui nécessitent un point spécifique comme paramètre.

#### transform
Spécifie la transformation à appliquer à l'élément. Il s'agit d'une liste de transformations séparées par des espaces, qui sont appliquées les unes après les autres, avec une opération de composition. Les transformations qui sont composées entre elles sont appliquées dans l'ordre, de droite à gauche.

## Syntaxe

```css
/* Keyword values */
transform: none;

/* Valeurs fonctionnelles */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: translate3d(12px, 50%, 3em);

transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: scale3d(2.5, 1.2, 0.3);

transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

transform: rotate(0.5turn);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: rotate3d(1, 2, 3, 10deg);

transform: perspective(17px);

/* Valeurs avec plusieurs fonctions */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Valeurs globales */
transform: inherit;
transform: initial;
transform: unset;
```

La propriété transform peut être définie avec le mot-clé none ou une ou plusieurs valeurs de type <transform-function>.

## Spécificités dees transformations 3D

### exemple

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

```css
/* Classes pour les différentes valeurs de perspective */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* Définition du conteneur, du cube et d'une face */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* On définit chaque face selon sa direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Et on rend le tableau un peu plus joli */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```
