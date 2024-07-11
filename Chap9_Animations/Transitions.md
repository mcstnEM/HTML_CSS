# Transitions

## Introduction

La propriété transition est une propriété raccourcie pour les propriétés transition-property, transition-duration, transition-timing-function et transition-delay.

Elle permet de définir la transition entre deux états d'un élément. Les différents états peuvent être définis à l'aide de pseudo-classes telles que :hover ou :active ou être définis dynamiquement avec JavaScript.

## Fonctionnement

Les transitions CSS permettent de contrôler la vitesse d'animation lorsque les propriétés CSS sont modifiées. Plutôt que le changement soit immédiat, on peut l'étaler sur une certaine période. Ainsi, si on souhaite passer un élément de blanc à noir, on pourra utiliser les transitions CSS afin que cette modification soit effectuée progressivement, selon une courbe d'accélération donnée.

Les animations qui utilisent des transitions entre deux états sont souvent appelées transitions implicites car l'état initial et l'état final sont définis implicitement par le navigateur.


## Syntaxe

```css
/* S'applique à une propriété */
/* on a le nom et la durée */
transition: margin-right 4s;

/* nom de la propriété | durée | retard */
transition: margin-right 4s 1s;

/* nom | durée | fonction */
transition: margin-right 4s ease-in-out;

/* nom | durée | fonction | retard */
transition: margin-right 4s ease-in-out 1s;

/* S'applique à deux propriétés */
transition:
  margin-right 4s,
  color 1s;

/* S'applique à toutes les propriétés modifiées */
transition: all 0.5s ease-out;

/* Valeurs globales */
transition: inherit;
transition: initial;
transition: unset;
```

## Exemple simple

```css
.box {
  border-style: solid;
  border-width: 1px;
  display: block;
  width: 100px;
  height: 100px;
  background-color: #0000ff;
  transition:
    width 2s,
    height 2s,
    background-color 2s,
    transform 2s;
}

.box:hover {
  background-color: #ffcccc;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

```html
<html>
  <body>
    <div class="box">Exemple</div>
  </body>
</html>
```

## Ressources

[Liste des propriétés qui peuvent être animées]
