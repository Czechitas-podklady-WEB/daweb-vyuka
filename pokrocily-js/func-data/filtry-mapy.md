## Filtry a mapy

Filtrování a mapování patří mezi vůbec nejpoužívanější funkce pro zpracování dat. 

### Metoda filter()

U metody `filter()` vidíme ve funkci také podmínku. Tato metoda nám však nevrací `bool`, nýbrž nové pole. Toto nové obsahuje pouze ty položky, které podmínku splnily.
Pokud bychom chtěli z pole `myArray` získat pouze čísla dělitelná třemi, použijeme metodu `filter()`. Získáme tak nové pole, které obsahuje jen čísla dělitelná třemi. To si můžeme uložit do proměnné. Naše původní pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const filteredArray = myArray.filter((item) => item % 3 === 0);

console.log(filteredArray);
```

### Metoda map()

Metodu `map()` použijeme především, pokud potřebujeme položky pole pozměnit, nebo z nich něco vytvořit. Metoda bere jako parametr opět funkci. Tuto funkci zavolá na každé položce pole a výsledek volání uloží do nově vytvořeného pole. Toto nové pole nám potom vrátí. Původní pole zůstane nezměněné.
Pokud bychom chtěli každé číslo v našem poli `myArray` vynásobit dvěma, můžeme použít metodu `map()`. Dostaneme tak nové pole se zdvojnásobenými čísly. To si můžeme uložit do proměnné. Pole `myArray` zůstane nezměněné.

```js
const myArray = [4, 1, 6, 8, 16, -3, 9];
const doubledArray = myArray.map((item) => item * 2);

console.log(doubledArray);
```
