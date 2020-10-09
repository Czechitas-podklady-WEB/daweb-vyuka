---
title: Interpolace řetězců
demand: 1
---

Všechna sčítání řetězců v následujícím programu převeďte na interpolaci řetězců.

<!-- prettier-ignore -->
```js
const age = 17;

const msg1 = 'Věk ' + age + ' let je málo pro vstup na naše stránky';
const msg2 = 'Ještě vám zbývá ' + (18 - age) + ' let.';

const user = ['robert17', 34];
const msg3 = (
  '<div class="msg">\n' + 
  '  <div class="username">' + user[0] + '</div>\n' + 
  '  <div class="age">' + user[1] + '</div>\n' + 
  '</div>'
);
```
