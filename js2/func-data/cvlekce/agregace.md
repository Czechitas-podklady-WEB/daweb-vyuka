---
title: Agregace
demand: 3
hasSolution: false
---

Použijte opět pole `persons` z předchozího cvičení.

1. Pomocí metod `map` a `join` vytvořte z pole `persons` HTML seznam v následujícím formátu
   ```html
   <ul>
     <li>Petr (16)</li>
     <li>Jana (8)</li>
     <!-- a tak dále... -->
   </ul>
   ```
1. Pomocí `innerHTML` vložte tento seznam do stránky.
1. Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
1. Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu dle pohlaví dané osoby.
   ```html
   <li class="male">Petr (16)</li>
   ```
   U nebinárních osob použijte CSS třídu `nonbinary`.

---solution

Soubor `script.js`:

```js
// Používáme pole `persons` z předchozího cvičení.
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

// Pomocí metod map a join vytvořte z pole `persons` HTML seznam
const seznamHTMLJednoduchy = persons
  .map((person) => `<li>${person.name} (${person.age})</li>`)
  .join();
// Pomocí `innerHTML` vložte tento seznam do stránky.
document.body.innerHTML = '<ul>' + seznamHTMLJednoduchy + '</ul>';

// Proveďte totéž jako v předchozím bodě, zobrazte však v seznamu pouze zletilé osoby.
const seznamHTMLZletile = persons
  .filter((person) => person.age >= 18)
  .map((person) => `<li>${person.name} (${person.age})</li>`)
  .join();
document.body.innerHTML = '<ul>' + seznamHTMLZletile + '</ul>';

// Proveďte totéž jako v předchozím bodě, přidejte však do položky seznamu CSS třídu
// dle pohlaví dané osoby. U nebinárních osob použijte CSS třídu `nonbinary`.
const seznamHTMLSPohlavim = persons
  .map((person) => {
    let className = 'nonbinary';
    if (person.gender === 'female' || person.gender === 'male') {
      className = person.gender;
    }
    return `<li class="${className}">${person.name} (${person.age})</li>`;
  })
  .join();
document.body.innerHTML = '<ul>' + seznamHTMLSPohlavim + '</ul>';
```

Soubor `style.css`:

```css
.male {
  color: blue;
}

.female {
  color: red;
}

.nonbinary {
  color: grey;
}
```
