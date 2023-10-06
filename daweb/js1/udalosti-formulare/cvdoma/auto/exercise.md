---
title: Auto
lead: 'Rozpohybujte auto.'
demand: 2
solutionAccess: allow
---

1. Založte si HTML stránku s JavaScriptem, třeba následujícím příkazem:
   ```sh
   npm init kodim-app@latest cviceni-auto html-css-js
   ```
1. Stáhněte si připravený [obrázek auta](assets/car.png). Vložte na stránku prvek `img` s tímto obrázkem.
1. Když uživatel stiskne šipku doprava, nastavte obrázku s autem CSS vlastnost `margin-left`, aby se auto pohnulo kousek doprava.
1. Při stisknutí šipky doleva nastavte obrázku s autem `margin-left` zpět na nulu.

::fig[ukázka základního řešení]{src=assets/zaklad.gif}

#### Bonus

- Zapamatujte si pozici auta a každým další stiskem šipky ho posuňte o další kousek doprava nebo doleva.

::fig[ukázka bonusového řešení]{src=assets/bonus.gif}

:::solution

#### HTML

```html
<img src="car.png" alt="auto" />
```

#### JavaScript

```js
const auto = document.querySelector('img');

let x = 0;
const posun = 10;

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft') {
    x -= posun;
  } else if (event.code === 'ArrowRight') {
    x += posun;
  }
  auto.style.marginLeft = x + 'px';
});
```

:::
