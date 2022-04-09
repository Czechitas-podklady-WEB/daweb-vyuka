---
title: Porozumění kódu
demand: 2
offerSolution: true
---

:::assign
Přečtěte si následující úryvky kódu a u každého řekněte, co program vypíše do stránky aniž byste program spouštěli.

**Úryvek 1:**

```js
const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  document.body.innerHTML = `<p>${name}</p>`;
}

document.body.innerHTML = `<p>${name}</p>`;
```

**Úryvek 2:**

```js
const name = 'Franta';

const greet = (name) => {
  const name = 'Pepa';
  document.body.innerHTML = `<p>${name}</p>`;
};

greet('Jožin');
```

**Úryvek 3:**

```js
const age = 25;

if (age > 21) {
  const price = 100;
} else if (age > 15) {
  const price = 50;
} else {
  const price = 0;
}

document.body.innerHTML = `<p>${price}</p>`;
```

:::solution
**Úryvek 1:**
Program vždy zobrazí na webové stránce odstavec s celým slovem *Mississippi*.

Protože je slovo *Mississippi* delší, než 5 znaků, provede se sice kód v bloku `if`,
t.j. do stránky se vloží jen slovo *Missi*. Jenže blok `if`u se ukončí a vzápětí se obsah
stránky přepíše (protože je použité `=` a ne třeba `==`) celým slovem *Mississippi*.

Očekávaného chování (když je slovo příliš dlouhé, vypíše se jen jeho familiární zkratka) by se
docílilo např. použitím větve `else`:

```js
const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  document.body.innerHTML = `<p>${name}</p>`;
} else {
  document.body.innerHTML = `<p>${name}</p>`;
}
```

**Úryvek 2:**
**Úryvek 3:**