# Pseudo-Classes

## Introduction

Une pseudo-classe est un mot-clé qui peut être ajouté à un sélecteur afin d'indiquer l'état spécifique dans lequel l'élément doit être pour être ciblé par la déclaration. La pseudo-classe :hover, par exemple, permettra d'appliquer une mise en forme spécifique lorsque l'utilisateur survole l'élément ciblé par le sélecteur (changer la couleur d'un bouton par exemple).

Les pseudo-classes permettent d'appliquer un style à un élément non seulement en fonction de son contenu dans l'arbre du document mais aussi en fonction de facteurs externes (l'historique de navigation par exemple avec :visited ; le statut du contenu avec :checked ; la position de la souris :hover).

> [!NOTE]
> À la différence des pseudo-classes, les pseudo-éléments peuvent être utilisés afin d'appliquer un style sur une certaine partie d'un élément.

## Exemples

### before

::before crée un pseudo-élément qui sera le premier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS content. Par défaut, l'élément créé est de type en-ligne (inline).

```html
::before crée un pseudo-élément qui sera le premier enfant de l'élément ciblé. Généralement utilisé pour ajouter du contenu esthétique à un élément via la propriété CSS content. Par défaut, l'élément créé est de type en-ligne (inline).
```

```css
q::before {
  content: "«";
  color: blue;
}
q::after {
  content: "»";
  color: red;
}
```

### after

En CSS, ::after crée un pseudo-élément qui sera le dernier enfant de l'élément sélectionné. Il est souvent utilisé pour ajouter du contenu esthétique à un élément, en utilisant la propriété CSS content. Par défaut, ce contenu est de type en ligne (inline en anglais).

```html
En CSS, ::after crée un pseudo-élément qui sera le dernier enfant de l'élément sélectionné. Il est souvent utilisé pour ajouter du contenu esthétique à un élément, en utilisant la propriété CSS content. Par défaut, ce contenu est de type en ligne (inline en anglais).
```

```css
.texte-interessant::after {
  content: "<- cela est intéressant";
  color: green;
}

.texte-ennuyeux::after {
  content: "<- un peu ennuyeux";
  color: red;
}
```

### first-letter

Le pseudo-élément ::first-letter sélectionne la première lettre de la première ligne d'un bloc, si elle n'est pas précédée par un quelconque autre contenu (comme une image ou un tableau en ligne) sur sa ligne.

```html
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem
  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy amet.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>
  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
  dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
  dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
  dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
  feugait nulla facilisi.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>“特殊的汉字标点符号开头。</p>
```

```css
p::first-letter {
  color: red;
  font-size: 130%;
}
```

### first-line

Le pseudo-élément ::first-line applique la décoration à la première ligne d'un élément. La quantité de texte sur la première ligne dépend de nombreux facteurs, comme la largeur des éléments ou du document, mais aussi de la taille du texte. Comme tous les pseudo-éléments, les sélecteurs contenant ::first-line ne ciblent pas un élément HTML réel.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore.
</p>
```

```css
p::first-line {
  text-transform: uppercase;
}
```

### placeholder

Le pseudo-élément ::placeholder représente le texte de substitution pour un élément <input> ou <textarea>. Cela permet aux développeurs web de personnaliser l'apparence de ce texte.

```html
<input type="email" placeholder="toto@exemple.com" />
```

```css
input::placeholder {
  color: red;
}
```

## Ressources

- [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements)
