# Animations

## Introduction

La propriété animation est une propriété raccourcie qui permet d'appliquer une animation entre des styles.

C'est une propriété qui synthétise les propriétés suivantes :

animation-delay
Cette propriété définit le délai entre le moment où l'élément est chargé et le moment où l'animation commence.

animation-direction
Cette propriété indique si l'animation doit alterner entre deux directions de progressions (faire des allers-retours) ou recommencer au début à chaque cycle de répétition.

animation-duration
Cette propriété définit la durée d'un cycle de l'animation.

animation-fill-mode
Cette propriété indique les valeurs qui doivent être appliquées aux propriétés avant et après l'exécution de l'animation.

animation-iteration-count
Cette propriété détermine le nombre de fois que l'animation est répétée. On peut utiliser le mot-clé infinite afin de répéter une animation infiniment.

animation-name
Cette propriété permet de déclarer un nom qui pourra être utilisé comme référence à l'animation pour la règle @ @keyframes.

animation-play-state
Cette propriété permet d'interrompre (« pause ») ou de reprendre l'exécution d'une animation.

animation-timing-function
Cette propriété configure la fonction de minutage d'une animation, autrement dit comment celle-ci accélère entre l'état initial et l'état final notamment grâce à des fonctions décrivant des courbes d'accélération.

## Fonctionnement

### Définir une animation avec @keyframes

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### Ajouter une étape

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### Répéter l'animation

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 2; (ou `infinite`)
}
```

### Direction de lm'animation

```
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-direction: alternate; (mouvement avant/arrière, aussi `reverse`)
}
```

### Ajouter une durée et un délai

```
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-duration: 4s;
  animation-delay: 5s;
}
```

## Exemples

### Laser

```css
.polling_message {
  color: white;
  float: left;
  margin-right: 2%;
}

.view_port {
  background-color: black;
  height: 25px;
  width: 100%;
  overflow: hidden;
}

.cylon_eye {
  background-color: red;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.9) 75%
  );
  color: white;
  height: 100%;
  width: 20%;

  -webkit-animation: 4s linear 0s infinite alternate move_eye;
  animation: 4s linear 0s infinite alternate move_eye;
}

@-webkit-keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
@keyframes move_eye {
  from {
    margin-left: -20%;
  }
  to {
    margin-left: 100%;
  }
}
```

```html
<div class="view_port">
  <div class="polling_message">En attente</div>
  <div class="cylon_eye"></div>
</div>
```
