---
title: Očkování – objekty
demand: 2
lead: Vytvořte objekt s údaji o uživateli.
solutionAccess: protected
---

Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

1. Vytvořte objekt `person`, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
   ```js
   {
     name: 'Květoslav Voňavý',
     age: 67,
   }
   ```
1. Přidejte do objektu `person` údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu `window`.
1. Poté, co uživatel zadá všechny údaje, vypište do stránky objekt `person` se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.

:::solution

```js
const person = {
  name: prompt("Jaké je vaše jméno a příjmení?"),
  age: Number(prompt("Jaký je váš věk?")),
  language: window.navigator.language,
};
​
document.body.innerHTML += "<p>Zadané jméno: " + person.name + ", váš věk: " + person.age + "</p>";
document.body.innerHTML += "<p>Váš jazyk: " + person.language + "</p>";
document.body.innerHTML += "<p>Byli jste zaregistrováni na očkování.</p>";
```

:::
