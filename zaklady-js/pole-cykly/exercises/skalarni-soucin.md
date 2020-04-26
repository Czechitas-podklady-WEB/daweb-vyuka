---
title: Skalární součin
demand: 3
---

Toto zadání může stát samo o sobě jako užitečný příklad na procvičení cyklů. Zároveň nám však pomůže dotáhnout do konce naše 4x4 piškvorky.

Vaším úkolem je napsat funkci, která dělá takzvaný skalární součin dvou polí. Mějme dvě stejně dlouhá pole čísel `arr1` a `arr2`. Skalární součin se spočítá tak, že vynásobíme první prvek pole `arr1` s prvním prvkem pole `arr2`. Poté vynásobíme druhý prvek pole `arr1` druhým prvkem pole `arr2`. Takto vynásobíme všechny dvojice čísel na odpovídajících indexech. Všechny výsledky pak sečteme dohromady.

Mějme například tato dvě pole.

```js
const arr1 = [2, -1, 0, 3];
const arr2 = [3, 2, 8, 1];
```

Jejich skalární součin bychom ručně spočetli takto:

```jscon
> 2*3 + (-1)*2 + 0*8 + 3*1
7
```

Napište funkci `dotProduct`, která jako svoje vstupy dostane dvě stejně dlouhá pole a vrátí jejich skalární součin.

```jscon
> const arr1 = [2, -1, 0, 3];
> const arr2 = [3, 2, 8, 1];
> dotProduct(arr1, arr2)
7
```

Vyzkoušejte si na vícero příkladech a polích různých délek, že vaše funkce opravdu spolehlivě funguje. Pokud budete chtít dokončit hru piškvorky, budete ji potřebovat.
