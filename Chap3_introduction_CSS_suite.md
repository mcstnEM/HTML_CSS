# Introduction CSS Partie 2

# Spécificité CSS

La spécificité CSS est un concept essentiel qui détermine quelles règles CSS seront appliquées à un élément particulier lorsqu'il y a des conflits entre différentes règles. Comprendre la spécificité est crucial pour résoudre les problèmes liés à la mise en page et à l'apparence des éléments sur une page web.

## Calcul de la Spécificité

La spécificité est généralement calculée en attribuant des valeurs à différents types de sélecteurs. Plus la spécificité d'un sélecteur est élevée, plus il aura de poids dans la résolution des conflits.

Les éléments suivants contribuent à la spécificité d'un sélecteur, classés du plus au moins spécifique :

1. **Sélecteurs d'ID :** Chaque ID dans le sélecteur ajoute une spécificité de 100.
   ```css
   #monId {
       /* ...styles */
   }
   ```

2. **Sélecteurs de classe, d'attribut ou de pseudo-classe :** Chaque classe, attribut ou pseudo-classe ajoute une spécificité de 10.
   ```css
   .maClasse {
       /* ...styles */
   }
   ```

3. **Sélecteurs de type ou de pseudo-élément :** Chaque sélecteur de type ou pseudo-élément ajoute une spécificité de 1.
   ```css
   p {
       /* ...styles */
   }
   ```

4. **Inline Styles :** Les styles définis directement sur l'élément à l'aide de l'attribut `style` ajoutent une spécificité de 1,000.

   ```html
   <div style="color: red;">Contenu</div>
   ```

## Résolution des Conflits

Lorsqu'il y a des règles CSS en conflit, le navigateur utilise la spécificité pour déterminer quelle règle appliquer. Si deux règles ont la même spécificité, la règle qui apparaît en dernier dans la feuille de style l'emporte.

Par exemple, dans le cas suivant :

```css
#monId {
    color: blue;
}

.maClasse {
    color: red;
}
```

Si un élément a à la fois l'ID `monId` et la classe `maClasse`, la couleur sera rouge car la règle de classe apparaît en dernier.

## Conseils Pratiques

1. **Éviter l'utilisation d'IDs dans le CSS :** Les IDs ajoutent une spécificité élevée, ce qui peut entraîner des problèmes de maintenance à long terme.

2. **Favoriser les classes :** Utiliser des classes pour cibler les éléments autant que possible, car elles offrent une spécificité plus faible et une meilleure réutilisation des styles.

3. **Éviter les styles en ligne :** Bien que les styles en ligne soient utiles dans certains cas, ils ajoutent une spécificité élevée et rendent le CSS moins modulaire.

4. **Utiliser les sélecteurs de type avec parcimonie :** Éviter de surqualifier les sélecteurs de type, car cela peut augmenter inutilement la spécificité.

5. **Comprendre la cascade :** Apprendre à anticiper comment les styles se combineront et à résoudre les conflits de spécificité est essentiel pour maîtriser la cascade CSS.

En comprenant et en maîtrisant la spécificité CSS, vous serez mieux équipé pour créer des styles robustes et éviter les pièges courants lors de la conception de vos pages web.

# 01. Exercice - Spécificités CSS : Trouver les Styles Appliqués

**Objectif :** Cet exercice vise à tester votre compréhension des spécificités CSS et votre capacité à déterminer quelles règles seront appliquées en fonction des sélecteurs.

**Instructions :**

Considérez le code HTML suivant :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice Spécificités CSS</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="container" class="highlighted">
        <p class="text">Ceci est un paragraphe.</p>
    </div>
</body>
</html>
```

**styles.css :**

```css
#container {
    background-color: lightblue;
}

.text {
    color: green;
}

#container.highlighted {
    background-color: yellow;
}

#container .text {
    font-weight: bold;
}

div p.text {
    text-decoration: underline;
}
```

Répondez aux questions suivantes en indiquant le style qui sera appliqué à chaque élément spécifié.

1. Quelle sera la couleur du texte du paragraphe (`<p class="text">`)?
2. Quelle sera la couleur de fond du conteneur (`<div id="container" class="highlighted">`)?
3. Quelle sera la valeur de la propriété `font-weight` du texte du paragraphe?
4. Quelle sera la valeur de la propriété `text-decoration` du texte du paragraphe?

**Conseils :**
- Considérez la spécificité des sélecteurs.
- Pensez à l'ordre d'apparition des règles dans la feuille de style.
- N'oubliez pas les styles hérités des parents.

# La cascade en CSS

La **cascade** est un algorithme qui définit comment les agents utilisateur combinent les valeurs des propriétés selon leurs différentes sources. La cascade définit l'origine et la couche qui l'emporte lorsque des déclarations présentes dans plusieurs [origines](https://developer.mozilla.org/fr/docs/Web/CSS/Cascade#types_dorigine) ou [couches de cascade](https://developer.mozilla.org/fr/docs/Web/CSS/@layer) définissent une valeur pour une propriété sur un élément.

La cascade est au cœur de CSS, et fait même partie de l'acronyme _**_Cascading_**_ _Style Sheets_ qu'on traduit par feuilles de style en cascade. Lorsqu'un [sélecteur](https://developer.mozilla.org/fr/docs/Web/CSS/CSS_selectors) cible un élément, la valeur de la propriété avec l'origine qui a la plus haute précédence est appliquée, même si un sélecteur d'une origine avec une précédence moindre ou d'une autre couche a une [spécificité](https://developer.mozilla.org/fr/docs/Web/CSS/Specificity) supérieure.

## Ordre de la cascade

L'algorithme de la cascade détermine quelle valeur s'applique pour chaque propriété de chaque élément du document. Les étapes suivantes s'appliquent à l'algorithme de la cascade :

1.  **Pertinence** : Pour commencer, seules les règles qui s'appliquent à un élément sont conservées. Cela signifie les règles dont le sélecteur correspond à l'élément et qui font partie d'une règle @ `media` appropriée.
2.  **Origine et importance** : Ensuite, ces règles sont triées selon leur importance, c'est-à-dire si elles sont suivies ou non par `!important`, et selon leur origine. En ignorant les couches pour le moment, on obtient l'ordre suivant pour la cascade :
    
    | Ordre (du plus faible au plus élevé) | Origine | Importance |
    | --- | --- | --- |
    | 1 | Agent utilisateur (navigateur) | normal |
    | 2 | Utilisatrice/utilisateur | normal |
    | 3 | Site | normal |
    | 4 | Animations CSS @keyframe |  |
    | 5 | Site | `!important` |
    | 6 | Utilisatrice/utilisateur | `!important` |
    | 7 | Agent utilisateur (navigateur) | `!important` |
    | 8 | Transitions CSS |  |
    
3.  **Spécificité** : En cas d'égalité pour une même origine, [la spécificité](https://developer.mozilla.org/fr/docs/Web/CSS/Specificity) d'une règle est considérée pour déterminer laquelle choisir. La spécificité des sélecteurs est comparée, et c'est la déclaration avec la plus grande spécificité qui l'emporte.
4.  **Ordre d'apparence** : Si plusieurs valeurs pour une même propriété sont décrites dans des règles avec des sélecteurs de même spécificité, c'est la dernière déclaration, dans l'ordre des styles, qui est appliquée.

La cascade progresse dans l'ordre croissant des précédences, les animations ont donc la précédence sur les valeurs normales, qu'elles soient déclarées par l'utilisatrice ou l'utilisateur, le site, ou l'agent utilisateur. Les valeurs importantes l'emportent sur les animations, et les transitions l'emportent sur les valeurs importantes.

> [!NOTE]
> ### Transitions et animations
> 
> Les valeurs de propriétés définies par une animation avec [`@keyframes`](https://developer.mozilla.org/fr/docs/Web/CSS/@keyframes) sont plus importantes que celles de styles normaux (c'est-à-dire sans [`!important`](https://developer.mozilla.org/fr/docs/Web/CSS/Specificity#lexception_!important)).
> 
> Les valeurs des propriétés définies dans une transition ([`transition`](https://developer.mozilla.org/fr/docs/Web/CSS/transition)) l'emportent sur toutes les autres valeurs, y compris celles marquées avec `!important`.

L'algorithme de la cascade est appliqué _avant_ l'algorithme de la spécificité. Cela signifie que si `:root p { color: red;}` est déclaré dans une feuille de style de l'utilisatrice ou de l'utilisateur (ligne 2 du tableau) et si une règle moins spécifique, `p {color: blue;}`, est présente dans la feuille de style du site (ligne 3 du tableau), les paragraphes seront bleus.

# Héritage en CSS

L'héritage en CSS se réfère à la capacité d'un élément à recevoir des styles de ses éléments parents. Certains styles sont automatiquement hérités par les éléments enfants, tandis que d'autres ne le sont pas.

## Styles Hérités Courants :

1. **Police (`font-family`, `font-size`, `font-weight`, etc.) :** La police est souvent héritée par défaut, ce qui signifie que le texte d'un élément enfant adoptera la police définie sur son parent, sauf indication contraire.

   ```css
   body {
       font-family: Arial, sans-serif;
   }
   ```

   ```html
   <body>
       <p>Texte avec la police héritée</p>
   </body>
   ```

2. **Couleur du Texte (`color`) :** La couleur du texte est généralement héritée, sauf si elle est spécifiquement modifiée.

   ```css
   article {
       color: green;
   }
   ```

   ```html
   <article>
       <p>Texte avec la couleur héritée en vert</p>
   </article>
   ```

## Styles Non Hérités Courants :

1. **Arrière-plan (`background-color`) :** La couleur de fond n'est généralement pas héritée par les éléments enfants.

   ```css
   div {
       background-color: yellow;
   }
   ```

   ```html
   <div>
       <p>Texte avec un arrière-plan non hérité</p>
   </div>
   ```

2. **Bordures (`border`) :** Les propriétés de bordure ne sont généralement pas héritées.

   ```css
   section {
       border: 1px solid black;
   }
   ```

   ```html
   <section>
       <p>Texte sans bordure héritée</p>
   </section>
   ```

La compréhension de la cascade et de l'héritage est cruciale pour écrire des styles CSS efficaces et maintenables. Ces concepts vous permettent de gérer de manière flexible et cohérente l'apparence de vos pages web.

# Quiz: Chap3

Ce quize vise à vous faire intégrer les notions vue dans ce chapitre.

Ces notions sont des fondamentaux, ils vous permettron de résoudre des conflicts dans votre CSS.