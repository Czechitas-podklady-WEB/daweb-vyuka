---
title: Porozumění kódu
demand: 2
---

Přečtěte si následující úryvky kódu a u každého řekněte, co program vypíše do konzole aniž abyste program spouštěli.

**Úryvek 1:**

```js
const name = 'Mississippi';

if (name.length > 5) {
  const name = 'Missi';
  console.log(name);
}

console.log(name);
```

**Úryvek 2:**

```js
const name = 'Franta';

const greet = (name) => {
  const name = 'Pepa';
  console.log(name);
  return 'Kuba';
};

console.log(greet('Jožin'));
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

console.log(price);
```
