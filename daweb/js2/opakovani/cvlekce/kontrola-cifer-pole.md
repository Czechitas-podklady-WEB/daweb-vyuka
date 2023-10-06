---
title: Detailní kontrola cifer
demand: 3
access: claim
---

V předchozím cvičení jsme pomocí cyklu vypisovali všechny špatně zadané znaky do konzole. Nyní tento kód přepíšeme tak, aby místo výpisů do konzole vyrobil pole objektů, obsahující informace o každém znaku. Například pro vstup `462748/312` chceme jako výsledek obdržet takovéto pole.

```js
[
  { char: '4', digit: true },
  { char: '6', digit: true },
  { char: '2', digit: true },
  { char: '7', digit: true },
  { char: '4', digit: true },
  { char: '8', digit: true },
  { char: '/', digit: false },
  { char: '3', digit: true },
  { char: '1', digit: true },
  { char: '2', digit: true },
];
```

Napište tedy funkci `validateCharacters`, která na vstupu dostane text a vrátí pole ve formátu jako výše. Postupujte následovně:

1. Na začátku funkce si vytvořte proměnnou `result`, do které uložte prázdné pole.
1. Projděte vstup znak po znaku jako v předchozim cvičení. Místo výpisu do stránky však pro každý znak vyrobte odpovídající objekt a vložte jej do pole `result` pomocí metody `push`.
1. Na konci funkce pole `result` vraťte pomocí `return`.
1. Vyzkoušejte vaši funci zavolat třeba se vstupy `'123č56q8y7'` a `'7060201236'` a výsledná pole vypište pro otestování do konzole (pomocí `console.log`).

   ```js
   > validateCharacters('123č56q8y7')
   [
     { char: '1', digit: true },
     { char: '2', digit: true },
     { char: '3', digit: true },
     { char: 'č', digit: false },
     { char: '5', digit: true },
     { char: '6', digit: true },
     { char: 'q', digit: false },
     { char: '8', digit: true },
     { char: 'y', digit: false },
     { char: '7', digit: true },
   ];
   > validateCharacters('7060201236')
   [
     { char: '7', digit: true },
     { char: '0', digit: true },
     { char: '6', digit: true },
     { char: '0', digit: true },
     { char: '2', digit: true },
     { char: '0', digit: true },
     { char: '1', digit: true },
     { char: '2', digit: true },
     { char: '3', digit: true },
     { char: '6', digit: true },
   ];
   ```

:::solution

```js
const validateCharacters = (vstup) => {
  const result = [];
  Array.from(vstup).forEach((znak) => {
    result.push({ char: znak, digit: isDigit(znak) });
  });
  return result;
};
```

:::
