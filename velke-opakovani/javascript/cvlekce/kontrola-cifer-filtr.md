---
title: Kontrola cifer pomocí filtru
demand: 2
---

V předchozím cvičení jsme vypisovali všechny špatně zadané znaky do konzole pomocí cyklu. Nyní tento kód přepíšeme pomocí metody `filter`.

1. Napište funkci `getInvalidCharacters`, která na vstupu dostane text a vrátí pole znaků, které nesplňují podmínku `isDigit` z přechozího cvičení.

   1. Uvnitř funkce rozložte vstup na pole jednotlivých znaků pomocí funkce `Array.from`.

      ```js
      > Array.from('ahoj')
      ["a", "h", "o", "j"]
      ```

   1. Na vyrobeném poli znaků zavolejte metodu `filter` a získejte pole znaků, které **nejsou** cifry. Opět použijte funkci `isDigit` z předchozího cvičení. Výsledné pole vraťte z funkce `getInvalidCharacters` pro případné další zpracování.

1. Vyzkoušejte vaši funci opět zavolat třeba se vstupy `'123č56q8y7'` a `'7060201236'` a výsledná pole vypište do konzole.

   ```js
   > getInvalidCharacters('123č56q8y7'))
   ['č', 'q', 'y']
   > getInvalidCharacters('7060201236'))
   []
   ```

---solution

```js
const getInvalidCharacters = (vstup) => {
  return Array.from(vstup).filter((znak) => !isDigit(znak));
};
```
