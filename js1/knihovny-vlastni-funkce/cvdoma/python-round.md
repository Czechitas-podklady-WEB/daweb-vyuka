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

Toto řešení má krátký kód, ale nemusí být snadno srozumitelné. Řešení je možné napsat také takto:

```js
const round = (cislo) => {
  if (cislo > 0) {
    //pokud je číslo kladné
    if (cislo - Math.trunc(cislo) === 0.5) {
      // pokud je za desetinou čárkou přesně 0.5
      if (Math.trunc(cislo) % 2 === 0) {
        // pokud je celá část čísla sudá
        return Math.floor(cislo);
      } else {
        // pokud je celá část čísla lichá
        return Math.ceil(cislo);
      }
    } else {
      // pokud je za desetinou čáskou cokoliv jiného než 0.5
      return Math.round(cislo);
    }
  } else if (cislo < 0) {
    //pokud je cislo záporné
    if (cislo - Math.trunc(cislo) === -0.5) {
      // pokud je za desetinou čárkou přesně -0.5
      if (Math.trunc(cislo) % 2 === 0) {
        // pokud je celá část čísla sudá
        return Math.ceil(cislo);
      } else {
        // pokud je celá část čísla lichá
        return Math.floor(cislo);
      }
    } else {
      // pokud je za desetinou čáskou cokoliv jiného než 0.5
      return Math.round(cislo);
    }
  } else {
    //pokud je cislo === 0
    return 0;
  }
};
```

**Pro pokročilé** ještě jedna informace – v reálném kódu by se nikdy nemělo objevit porovnání pomocí `===` nebo `!==` s desetinným číslem. Počítače totiž běžně pracují s desetinnými čísly nepřesně. Aby s desetinnými čísly počítaly rychleji, neumí pracovat s libovolným desetinným číslem, ale umí jen některá z nich – a když po něm chcete některé číslo, které neumí, použije jiné nejbližší číslo. Ta čísla, která počítač _umí_, nejsou _hezká_ čísla pro nás, ale jsou to taková, která jsou _hezká_ pro počítač. Takže počítač třeba nemusí umět číslo `0.5`, ale může umět `0.4999997` a `0.500000001`. Když porovnáváte pomocí === (nebo !==), může se stát, že vaše `0.5` převede na `0.4999997`, ale z výpočtu, se kterým hodnotu porovnáváte, mu vyjde hodnota `0.500000001`. A když porovnáte `0.4999997 === 0.500000001`, vyjde `false` – protože jsou to dvě různé hdonoty.

V reálných programech se to řeší tak, že se desetinná čísla neporovnávají na přesnou shodu (pomocí `===`), ale porovnává se, jestli je rozdíl dvou čísel dostatečně malý. Takže místo `cislo - Math.trunc(cislo) === -0.5` by se použila podmínka `Math.abs(cislo - Math.trunc(cislo) - 0.5) < 0.00001`.

Pokud jde někde o peníze (nebo něco jiného důležitého, kde si nemůžeme dovolit nepřesnosti), nepoužívají tato běžná čísla. Používají se jiné typy, které umí pracovat s čísly přesně, za cenu, že jsou výrazně pomalejší. V JavaSCriptu se může např. použít typ [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) a částky se nebudou počítat v korunách, ale v halířích, a teprve na konci pro uživatele se převedou na koruny.
