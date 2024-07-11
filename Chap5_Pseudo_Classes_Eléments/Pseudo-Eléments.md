# Pseudo-éléments

## Introduction

Un pseudo-élément est un mot-clé ajouté à un sélecteur qui permet de mettre en forme certaines parties de l'élément ciblé par la règle. Ainsi, le pseudo-élément `::first-line` permettra de ne cibler que la première ligne d'un élément dénoté par le sélecteur.

> [!NOTE]
> À la différence des pseudo-éléments, les pseudo-classes peuvent être utilisées afin de mettre en forme un élément en fonction de son état.


## Exemples

### :hover

La pseudo-classe :hover permet de spécifier l'apparence d'un élément au moment où l'utilisateur le survole avec le pointeur, sans nécessairement l'activer.

```html
<p>
  <a href="#">Ce lien sera écrit sur un fond doré lors du survol.</a>
</p>
```

```css
a:hover {
  background-color: gold;
}
```

### first-child

La pseudo-classe :first-child permet de cibler un élément qui est le premier élément fils par rapport à son élément parent.

```html
<div>
  <p>
    Ce paragraphe est mis en forme car c'est un élément p ET que c'est le
    premier fils de l'élément div.
  </p>
  <p>
    En revanche, ce paragraphe n'est pas mis en forme car ce n'est pas le
    premier !
  </p>
</div>

<div>
  <h2>Ce titre h2 n'est pas mis en forme car ce n'est pas un paragraphe.</h2>
  <p>
    Et ce paragraphe n'est pas mis en forme car ce n'est pas le premier fils !
  </p>
</div>
```

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

### first-of-type

La pseudo-classe :first-of-type permet de cibler le premier élément d'un type donné parmi ceux d'un même élément parent (et de même niveau).

```html
<div>
  <span>Voici le premier span !</span>
  <span>Un autre span, pas le premier.</span>
  <span>Quid de cet <em>élément imbriqué </em>?</span>
  <b>Un autre type d'élément.</b>
  <span>Ce type là est déjà apparu.</span>
</div>
```

```css
div :first-of-type {
  background-color: lime;
}
```

### has

La pseudo-classe :has() permet de cibler un élément si au moins un des sélecteurs passés en paramètre correspond à l'élément (selon la portée, :scope, de l'élément).

Cette pseudo-classe :has() prend en paramètre une liste de sélecteurs.

```html
<h1>Article</h1>
<h2>Chapitre 1</h2>
<h2>Chapitre 2</h2>
<p>Lorem ipusm</p>
```

Les texte des h2 précédant immédiatement des p est en rouge.

```css
h2:has(+ p) {
  color: red;
}
```

### root

La pseudo-classe :root permet de cibler la racine de l'arbre représentant le document. Pour un document HTML, :root ciblera donc l'élément <html> et aura le même comportement que le sélecteur html mais sa spécificité sera plus forte.

Dans l'exemple ci-dessous, sont définies des variables CSS globales (accessibles par tous les éléments du document)

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

### only-of-type

La pseudo-classe CSS :only-of-type permet de cibler un élément qui ne possède aucun nœud frère du même type.

```html
<main>
  <div>Je suis l'élément `div` n°1.</div>
  <p>Je suis le seul élément `p` parmi mes voisins.</p>
  <div>Je suis l'élément `div` n°2.</div>
  <div>
    Je suis l'élément `div` n°3.
    <i>Je suis le seul enfant `i`.</i>
    <em>Je suis l'élément `em` n°1.</em>
    <em>Je suis l'élément `em` n°2.</em>
  </div>
</main>
```

```css
main :only-of-type {
  color: red;
}
```
:w

## Ressources

- [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)
