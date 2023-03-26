---
title: Nekup to, třídy
demand: 2
---

Vytvořte si repozitář ze šablony [cviceni-nekupto](https://github.com/Czechitas-podklady-WEB/cviceni-nekupto). Repozitář obsahuje stránku, která nabízí několik neotřelých produktů.

1. Otevřete si naklonovanou složku ve VS Code a prohlédněte si zdrojové HTML. Stránka je nastylována pomocí CSS knihovny [Bootstrapu](https://getbootstrap.com). Co přesně dělají použité CSS třídy není pro toto cvičení podstatné, nemusíte jim věnovat velkou pozornost.
1. V konzoli prohlížeče si do proměnné uložte kartu s prvním produktem. Pomocí metody `classList.add` přidejte na tento element třídu `border-primary`, abychom první produkt na stránce zvýraznili.
1. Do jiné proměnné v konzoli si uložte tlačítko na druhé kartě. Pomocí metody `classList.remove` odeberte třídu `btn-primary` a podívejte se, jak se tlačítko vizuálně změnilo.
1. Do další proměnné si uložte element s třídou `card-title` posledního produktu. Pomocí voláni metody `classList.toggle` přidejte na tento element třídu `text-center`. Text by se měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.

Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže:

::fig[Snímek obazovky s řešením]{src=assets/screen-nekupto.png}

---solution

```js
const firstCard = document.querySelector('#product1');
firstCard.classList.add('border-primary');

const secondCardButton = document.querySelector('#product2 button');
secondCardButton.classList.remove('btn-primary');

const thirdCardTitle = document.querySelector('#product3 .card-title');
thirdCardTitle.classList.toggle('text-center');
```
