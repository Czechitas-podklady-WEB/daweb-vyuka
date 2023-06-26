---
title: Kostka
demand: 2
---

Vytvořte si repozitář ze šablony [cviceni-kostka](https://github.com/Czechitas-podklady-WEB/cviceni-kostka) se stránkou, která zobrazuje hrací kostku. Doplňte do stránky JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.

**Nápověda:** Rozumným postupem je vytvořit si proměnnou `side`, která bude obsahovat číslo strany kostky. Tuto proměnnou můžete vždy při stisknutí klávesy navýšit o jedna a z této hodnoty zkonstruovat řetězec pro atribut `src`.

::fig[ukázka řešení]{src=assets/ukazka.gif}

---solution

```js
let viditelneCislo = 1;
const kostka = document.querySelector('.dice');
const pootocKostkou = () => {
  viditelneCislo = viditelneCislo + 1;
  if (viditelneCislo === 7) {
    viditelneCislo = 1;
  }
  kostka.src = `img/side${viditelneCislo}.svg`;
};
document.addEventListener('keydown', pootocKostkou);
```
