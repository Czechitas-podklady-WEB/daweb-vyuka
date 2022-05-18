## Složitější cykly

K zajímavějším programům se dostaneme ve chvíli, kdy uvnitř cyklů začneme pracovat s proměnnými mimo cyklus. Takto například spočítáme průměrnou známku.

```js
const marks = [2, 4, 1, 3, 4, 3];

let sum = 0;
for (let i = 0; i < marks.length; i += 1) {
  sum += marks[i];
}

const averageMark = sum / marks.length;
```

Tímto způsobem se můžeme propracovat až k velmi složitým algoritmům, cyklům uvnitř cyklů apod. V této lekci se však budeme zatím držet při zemi.
