# Révisions conseillées pour le partiel HTML CSS

## Introduction

Pour répondre aux questions qui vous seront posées, ainsi que pour effectuer la mise en page qui vous sera demandée, vous pourrez naturellement utilement remprendre tout ce que nous avons fait pendant le temps que nous avons passé ensemble.

Petit récapitulatif des notions importantes :

## HTML

> [!NOTE]
> Rappelons que HTML doit représenter la structure de l'information. En mettant cette dernière en page, on ne doit pas se préoccuper de la présentation, mais simplement de la cohérence de l'imbrication des éléments. Ainsi, un bloc ne devrait contenir que des informations qui entretiennent des remations entre elles. Par exemple, un bloc contient toutes les informations reltives à une personne (nom, prénomn etc.) car ces informations, combinées, « représentent » la personne.
> En ce sens, HTML est un langage de description de l'information.

### Composition d'une page HTML

Comme vous le savez les pages HTML sont composées de manière hiérarchique, avec notamment deux grands parties dans l'élément `<html>`.
Il est essentiel de bien comprendre les fonctionnements respectifs de ces deux parties.

Vous pouvez vous référer à :
- [Métadonnées en HTML](https://developer.mozilla.org/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

### Balisage sémantique

Comprendre le rpole du balisage est également très important, notamment l'utilisation judicieuse des balises dites « sémantiques », autres que `<div>`, qui ne doit être utilisée qu'en dernier ressort.

- [Liste des éléments sémantiques](https://developer.mozilla.org/fr/docs/Glossary/Semantics)

Chaque élément HTML accepte un certain nombre d'attributs qui conditionnent son apparence ou son rôle dans la page. Certains de ces attrobuts sont universels, comme `class`, `id`, `style`, ainsi que les attributs personnalisés depuis HTML5 `data-*`. Voici une petite liste :

- [Les attributs universels](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes)
- [Référence des attributs HTML](https://devdoc.net/web/developer.mozilla.org/en-US/docs/Web/HTML/Attributes.html)
-
### Les formulaires

Bien que nous n'ayons pas eu le temps d'en parler, vous pouvez regarder un excellent tutoriel sur la question, sur le site de MDN.

- [Les formulaires HTML](https://developer.mozilla.org/fr/docs/Learn/Forms/Your_first_form)

L'affichage et la présentation des formulaires n'est pas toujours triviel, en particulier du fait de la difficulté d'appliquer des styles CSS à certains éléments.

Un dses problèmes spécifiques des formulaires est aussi la validation des données, qui n'est pas non plus toujours évidente :

- [Validation des données de formulaire](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)

## CSS

> [!NOTE]
> Rappelons que CSS est un langage dédié à la présentation (visuelle le plus souvent) de l'information.
> il permet également de définir des comportements pour les blocs d'information affichés dans la page.

### La cascade CSS

CSS est un langage hiérarchique, définissant ce que l'on appelle la « cascade » :
```
Navigateur > Réglages utilisateur > Feuille de style CSS > Styles intégrés
```
Il y a donc, dans bien des cas, des styles par défaut pour certains éléments. Il est important de comprendre le fonctionnement de la cascade pour repérer les règles de mise en forme qui s'appliquent « malgré nous ».

- [La cascade CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Cascade)

Nous n'avons pas eu le temps d'entrer dans les détails, mais beaucoup de sites web utilisent une feuille de style de « reset », pour annuler, justement, ces comportements par défaut.

- [Article sur les feuilles de reset](https://code-garage.fr/blog/qu-est-ce-que-le-reset-css/)
- [Un exemple de reset](https://piccalil.li/blog/a-more-modern-css-reset/)

### Le modèle de boîte

Tout élément (représenté par une balise) HTML est une boîte. Une boîte est définie par sa taille (`width`, `height`), ses marges (`margin`, `border`, `padding`) et, éventullement une profondeur (`z-index`) qui permet de superposer des couches de présentation (comme dans un logiciel dd'imagerie).

[Modèle de boîte](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

Tout élément a aussi un mode d'affichage, représenté par l'atribut CSS `display`. Chaque élément a un mode d'affichage âr défaut, mais celui-ci peut souvent être modifié.

Globalement, vous aves cinq grand modes d'affichage aujjourd'hui :
- `inline` : dans le flux d'affichage (c'est-à-dire linéairement)
- `block` : interrompt le flux d'affichage pour passer à la ligne
- `flex` : boîte flexible, autorisant la répartition linéaire de blocs de contenu, horzontalement ou vertialement
- `grid` : boîte flexible en deux dimensions
- `column` : mise en page en colonne, de type « journal »

- [Le mode d'affichage  `block`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

### Le positionnement

Parallèlement, un élément peut être positionné dans la page, selon plusieurs modalités :
- La position par défaut, qui dépend du mode d'affichage
- `relative`, qui déplace l'élément d'une certaine distance par rapport à sa position normale
- `absolute`,
- `fixed`,
- `sticky`,

- [Le positionnement](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Positioning)

### Les unités

Vous savez qu'il y a une grande diversité d'unités fixes d'un côté (`px`, `pt`, `un`, `cm`, etc.) et proportionnelles de l'uatre (`em`, `%`, `vw`, `fr`, etc.)

D'une manière générale, on prvilégiera les unités proportionnelles, puisqu'elles sont une partie du principe de mise en page adaptative. Néanmoins, le choix n'est pas toujours univoque.

On notera que `fr` est une unité très puissante pour les mise en page de type `flex` et `grid`. Et que `vw` et `vh` sont beauxoup plus précise pour mesurer les taille du « viewport », c'est-à-dire la zone réellement utilisée pour l'affichage.

- [Les unités CSS](https://developer.mozilla.org/fr/docs/Learn/CSS/Building_blocks/Values_and_units)

### Les pseudo-classes

« Une pseudo-classe est un mot-clé qui peut être ajouté à un sélecteur afin d'indiquer l'état spécifique dans lequel l'élément doit être pour être ciblé par la déclaration. » [MDN]

Ce qu'il est important de retenir, c'est uque la pseudo-classe fait référence à un état dooné d'un élément. Par exemple :

- `:hover` pour un élément survolé
- `:focus` pour un élément de formulaire sélectionné
- `:first-of-type` pour le premier élément d'un certain type dansun bloc (c'est considédré comme un état)
- `:has` état d'un élément dont un enfant est lui-même dans un certain état (ex: `article:has(img.vignette:hover)` un article dont la vignette est survolée par la souris)
- `:not` négation d'un état (ex: `ul:not(li:only-of-type)` un liste comprenant plusieurs items)
- etc. car il y abeaucoupde pseudo-classes.

Les pseudo-classes ont amené beaucoup de souplesse dans la gestion fine des styles.

- [Les pseudo-classes CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes)

### Les pseudo-éléments

« Un pseudo-élément est un mot-clé ajouté à un sélecteur qui permet de mettre en forme certaines parties de l'élément ciblé par la règle. » [MDN]

Un pseudo-élément vise à enrichir un élément existant, mais ne fait pas du tout référence à un état particulier. En général, cet enrichissement comprendra du contenu, introduit avec l'attribut `content`.

Les pseudo-éléments les plus utilisés sont :

- `::before` modifier juste avant l'élément
- `::after` modifier juste après l'élément
- `::marker` modifier l'affichage de l'indice d'une Liste
- `::first-letter` modifier l'aspect de la première lettre d'un texte`

Un exemple simple pour entourer une citation avec des guillemets :
```css
span.cite {
  font-style: italic;
}
span.cite::before {
  content: "«&nbsp;"
}
span.cite::after {
  content: "&nbsp;»"
}
````
> `&nbsp;` est une « entité HTML» pour indiquer une espace non sécable (non-breakable space)

- [Les pseudo-éléments CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-elements)

### Nouvelles syntaxes pour les feuilles de style

#### Les variables

Il est possible d'utiliser maintenant des variables CSS, qui sont généralement déclarées dans la psudo-classe `:root`. Elles portent assez mal leur nom, d'ailleurs, car elles ne meut être modifiées. Ce sont donc plustôt des constantes.

- [Les variables CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)

Ces variables peuvent ensuite être réutilisées dans le code CSS avec la fonction `var()`.

#### L'imbrication des règles

Le CSS moderne ait aussi imbriquer les règles de style, ce qui simplifie l'écriture dee feuilles de style. Toutefois, le risque est d'augmenter la spécificité des règles. C'est pourquoi il ne faut pas en abuser et utiliser cette syntaxe conjointement avec une méthodologie de nommage comme **BEM** ou **ObjectCSS** ou autre...

Le caractère `&` est optionnel sauf dans le cas ou une classe est assignée au parent.

Exemple :

```css
article {

  font-size: 1.2rem;

  img.vignette {
    /* correspond à la règle : article img.vignette */
  }

   & img.vignette {
    /* correspond à la règle : article img.vignette */
  }

   & > img.vignette {
    /* correspond à la règle : article > img.vignette */
  }

   & > img.vignette {
    /* correspond à la règle : article > img.vignette */
  }

   .une & {
    /* correspond à la règle : .une article */
  }
}
```

- [Règles imbriquées](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

### Les fonctions

Il existe maintenant énormément de fonctions pour réaliser toutes sortes de calcul.

La plus connue, et la plus ancienne, est simplement `calc()`.

Exemple :
```css
article {
  font-size: calc(var(--default-font-size) * .0.8rem);
}
```
Ici la fonction `calc()` et la fonction `var()` sont imbriquées, ce qui peut être fait snas limite de profondeur.

Les fonctions font de CSS preque un vrai langage de programmation. Elles servent sur les images, les couleurs, les formes des blocs, les polices de caractéères, etc.

- [Les fonctions CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)

### Les animations

La qestion des animations CSS comprend trois volets :
1. Les transformations
2. Les transitions
3. Les animations proprement dites.

#### Les transformations

Une transformation est l'application d'un fonction géométrique (translation, rotation, déformation, etc.) à un élément de la page. Elle s'applique par la propriété `transform`.

Exemple :
```css
p.oblique {
  transform: rotate(45deg);
}
```

- [Transformation](https://developer.mozilla.org/fr/docs/Web/CSS/transform)

#### Les transitions

Les transitions permettent d'appliquer une fonction de tranformation graduelle d'une valeur en une autre.
Par exemple, si vous voulez que l'opcité de votre bloc passe de 1 à 0.5 au survol, vous pouvez écrire :
```css
p {
  opacity: 1;
  transition: all 1s ease 0.1s;
}
p:hover {
  opacity: 0.5;
  transition: all 1s ease 0.1s;
}
```
La transition n'est plus brutale, mais dure 1 seconde avec un retard de 0.1 seconde.

[Utiliser les transitions CSS](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)

#### Les animations

Les animations sont une généralisation des transitions, en ce sens qu'elles peuvent être décomposées en étapes et exécutées plusierus fois (voire indéfiniment).

- [Utiliser les animations](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_animations/Using_CSS_animations)

## Les mises en page adaptatives

« La conception [adaptative], plus souvent appelée responsive design (ou RWD pour responsive web design) est une approche de la conception web visant à ce que les pages web s'affichent correctement pour toutes les tailles et résolution d'écran, tout en ayant une utilisabilité correcte. » [MDN]

Les composantes du design adaptatif sont, globalement ;
- L'utilisation des flexbox et des grilles pour la mise en page, puisqu'elles s'adaptent naturellement à la taille des écrans
- A condition, naturellement d'utiliser des unités proportionnelles, coome `vw` ou `fr`.
- Définir les feuilles de styles alternatives avec mes `@mediaquery`, un mécanisme qui permet au navigateur de choisir la feuille de style la mieux adaptée au terminal.

Par ailleurs, il existe maintenant un mécanisme plus fin que les « media queries », les « container queries », qui aapliquent les meêmes techniques au noveau de chaque bloc.

- [Le design adaptatif](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Les « container queries »](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
