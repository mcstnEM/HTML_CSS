# Exercices Grid

## Grid

### Exercice 1

```css
display: grid;
```

Définir une mise en page en grille.
Placer 8 blocs div dans cet élément

### Exercice 2

```css
grid-template-columns: 20% 20% 20% 20% 20%;
grid-template-rows: 20% 20% 20% 20% 20%;
```

Définir un nombre de colonnes et un nombre de lignes pour la grille.
Par exemple 12 colonnes et 8 lignes

> Question : Que deviennent les blocs à l'intérieur de la grille ?

```css
grid-gap: x
```

Définissez une gouttière de 10px entre les cellules de votre grille

### Exercice 3

```css
grid-column-start: x
```

Placer un élément div à la troisième colonne de la première ligne de la grille

### Exercice 4

```css
grid-column-start: x
grid-column-end: x
```

Placer un élément div à la troisième colonne de la première ligne de la grille et laissez-le s'étendre jusqu'à la 8ème colonne.

> Remarquez que cela fonctionne également à l'envers !
>
> Essayez avec ds valeurs négatives. Que remarquez-vous à propos des valeurs ?

### Exercice 5

```css
grid-column-end: span x
```

Changer la syntaxe pour la remplacer par une étendue pour afficher le même résultat que précedemment.

> Inversez les déclarations. Que se passe-t-il ?

### Exercice 6

```css
grid-column: x/y
grid-column: x/span y
```

Placer un bloc qui s'étend de la 3ème colonne à la 7ème colonne de la première ligne avec la syntaxe composée.

### Exercice 7

Placer mantenant un bloc de la 3ème ligne à la 6ème ligne de la première colonne

> On voit que les syntaxes sont absolument équivalentes.

### Exercice 8

Placer maintenant un bloc de la 4ème colonne à la 6ème colonne et de la 3ème ligne à la 8ème ligne.

```css
grid-area: x / u / y / v
```

Essayez avec la syntaxe composée `grid-area`

> Dans quel ordre faut-il déclarer les indices ?
>
> Plusieurs aires peuvent se recouvrir... à condition de ne pas avoir de contenu (juste une image de fond, par exemple)

### Exercice 9

```css
order: x
```

Vous voulez maintenant plusieurs blocs.
Place le deuxième bloc à la fin des autres.

### Exercice 10

```css
grid-template-columns: repeat(x, y)
```

Réécrivez la grille en utilisant les répétitions

### Exercice 11

Réécrivez la grille en définissant une première colonne de largeur fixe 100px


### Exercice 12

```css
grid-template-columns: 1fr
```

Utilisez les fractions pour remplacer les mesures en pourcents.

> Ceci est particlièrement utile si vous mélangez les unités.
>
> Essayez de créer une colonne à gauche de 50px, la même à droite, les dix autres se partagenat équitablement l'espace intérieur

### Exercice 13

```css
grid-template: rows / columns
```

### Exercice 14

```css
grid-tempate-areas:
  "h h h h h"
  "a a a b b"
  "f f f f f"
```

Vous pouvez définir des zones nommées dans votre grille.

### Exercice 15

```css
grid-template-colums: 50px [main-start] 1fr 1fr 1fr [main-end] 50px;
```
