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

Protože je slovo *Mississippi* delší, než 5 znaků, provede se sice kód v bloku `if`, t.j. do stránky se vloží jen slovo *Missi*. Jenže blok `if`u se ukončí a vzápětí se obsah stránky přepíše (protože je použité `=` a ne třeba `==`) celým slovem *Mississippi*.

Očekávaného chování (když je slovo příliš dlouhé, vypíše se jen jeho familiární zkratka) by se docílilo např. použitím větve `else`:

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
Kód vůbec neproběhne, prohlížeč jen vypíše v konzoli chybu.

Funkce `greet`  přijímá jeden parametr pojmenovaný `name`. Na dalším řádku se pokoušíme definovat konstantu `name` a vložit do ní hodnotu *Pepa*. Jenže tím bychom vytvořili už druhou proměnnou (nebo parametr nebo konstantu) pojmenovanou `name` ve stejném bloku – v těle funkce `greet`. A to v JavaScriptu nejde. Zastiňování proměnných funguje pouze mezi vnějším a zanořeným blokem, v rámci jednoho bloku může být každé jméno vytvořené jenom jednou.

**Úryvek 3:**