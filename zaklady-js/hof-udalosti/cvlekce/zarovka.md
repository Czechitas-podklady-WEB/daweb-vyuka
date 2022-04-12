---
title: Žárovka
demand: 2
---

Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/zarovka-zadani) se stránkou, která zobrazuje obyčejnou žárovku.

1. Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída `bulb--on`. Žárovka by se takto měla rozsvítit.
1. Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkáním kláves ji tak můžeme rozsvěcovat a zhasínat.

---solution

```js
const bulb = document.querySelector('.bulb');
document.addEventListener('keydown', () => {
  bulb.classList.toggle('bulb--on');
});
