---
title: Python zaokrouhlování
demand: 3
---

Jak jistě znalci jazyka Python dobře vědí, funkce `round` v tomto jazyce zaokrouhluje malinko jinak, než jsme zvyklí. Pokud je desetinná část čísla přesně 0.5, Python zaokrouhluje k nejbližšímu sudému číslu. JavaScriptová funkce `Math.round` naopak provádí zaokrouhlování způsobem, na který jste zvyklí, tedy pro 0.5 vždy nahoru.

(Zaokrouhlování v Pythonu je složitější na implementaci, ale zajišťuje, že zaokrouhlování je _spravedlivé_. Naše běžné zaokrouhlování mírně preferuje větší čísla, pokud zaokrouhlujeme jen kladná čísla – 0,5 je totiž přesně uprostřed, ale my ho vždy zaokrouhlujeme nahoru.)

Někomu by se po po Pythonovském zaokrouhlování mohlo stýskat. Napište proto funkci jménem `round`, která bude zaokrouhlovat čísla na celé jednotky podle následujících pravidel:

1. Pokud je desetinná část **menší než 0.5**, zaokrouhlujeme **dolů** (k nižším honotám).
1. Pokud je desetinná část **větší než 0.5**, zaokrouhlujeme **nahoru** (k vyšším hodnotám).
1. Pokud je desetinná část **přesně rovna 0.5**, zaokrouhlujeme **k sudému číslu**. Tedy například `3.5` se zaokrouhlí na `4`, naopak `2.5` se zaokrouhlí na `2`.

V tomto cvičení se vám může hodit funkce `Math.trunc`, která umí odříznout desetinnou část čísla.

#### Bonus

Zajistěte, aby funkce správně fungovala i pro záporná čísla.

Tedy například `-3.5` se zaokrouhlí na `-4`, naopak `-2.5` se zaokrouhlí na `-2`.

---solution

```js
const round = (cislo) => {
  const celaCast = Math.trunc(cislo);
  const necelaCast = cislo - celaCast;
  if (Math.abs(necelaCast) === 0.5) {
    if (celaCast % 2 === 0) {
      return celaCast;
    } else {
      return celaCast + 2 * necelaCast;
    }
  }
  return Math.round(cislo);
};
```
