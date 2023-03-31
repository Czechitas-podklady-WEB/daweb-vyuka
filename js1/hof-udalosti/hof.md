V předchozích lekcích jsme si ukázali, jak můžeme pomocí JavaScriptu měnit obsah stránky a jak vyrábět vlastní funkce. Díky těmto nástrojům se postupně bližíme k tomu, abychom uměli naše stránky udělat skutečně interaktivní. Budeme chtít umět změnit obsah stránky ve chvíli, kdy uživatel klikne na tlačítko, umožnit uživateli vložit vstup pomocí textového políčka a mnoho dalších interakcí. K tomu potřebujeme porozumět takzvaným :term{cs="událostem" en="events"}. Abychom uměli dobře používat události, bude se nám hodit vědět něco více o tom, jak fungují funkce.

## Funkce vyššího řádu

Z minula už víme, že funkce jsou hodnoty podobně jako čísla, řetězce nebo DOM elementy. Vzpomeňte si, že při vytváření funkce ve skutečnosti vytváříme proměnnou, do které novou funkci ukládáme.

```js
const goodbye = (name) => {
  return `S pozdravem ${name}`;
};
```

Ohledně toho, co vše je možné s funkcemi dělat, jsme teprve na začátku. Je tedy čas pustit se králičí norou malinko hlouběji.

Jelikož každá funkce je zcela rovnoprávná hodnota, můžeme ji nejen uložit do proměnné, ale také předat jiné funkci jako vstup. Je tedy možné zavolat funkci a na vstup jí při tom předat jinou funkci jako hodnotu. Taková myšlenka může ze začátku působit dost odvážně a neuchopitelně. Postupujme tedy pomaličku a s rozvahou.

### Kulturní akce

Představme si stránku, která zobrazuje seznam kulturních akcí ve vašem městě. U každé akce budeme chtít pro jednoduchost evidovat její název a den konání.

Nejprve si připravíme jednoduchý `div`, do kterého budeme skládat jednotlivé akce.

```html
<body>
  <div class="shows-list"></div>
</body>
```

Den konání budeme v JavaScriptu reprezentovat takovýmto objektem:

```js
{
  year: 2023,
  month: 4,
  day: 25,
}
```

Můžeme si nyní snadno napsat funkci, která přijme dva parametry `name` a `date` a vyrobí pro nás jednoduché HTML pro jednu akci.

```js
const renderShow = (name, date) => {
  return `
    <div class="show">
      <h2>${name}</h2>
      <p>${date.day}.${date.month}.${date.year}</p>
    </div>
  `;
};
```

Pak můžeme snadno do stránky vložit několik klasických akcí:

```js
const showsList = document.querySelector('.shows-list');
showsList.innerHTML += renderShow('Matrix', { year: 2023, month: 4, day: 25 });
showsList.innerHTML += renderShow('Spejbl a Hurvínek', {
  year: 2023,
  month: 4,
  day: 11,
});
```

Takto bychom mohli se stránkou být spokojeni. Pokud se však s tímto webem budeme chtít vydat do světa, narazíme na jednu potíž. V každé zemi se datum formátuje trošku jinak. Nechceme ale naši funkci `renderShow` zaplevelit všemi možnými formáty data, jaké na světě existují. To by se nám z hezké funkce stala ohromná obluda. Nejlepší by bylo, kdyby funkce `renderShow` dokázala zodpovědnost za formátování data delegovat na někoho jiného.

To můžeme udělat tak, že si vytvoříme například funkci, která datum formátuje po česku, tedy jako 25.4.2023.

```js
const formatCs = (date) => {
  return `${date.day}.${date.month}.${date.year}`;
};
```

Ve Velké Británii by však očekávali datum spíš jako 4/25/2023:

```js
const formatGb = (date) => {
  return `${date.month}/${date.day}/${date.year}`;
};
```

Ve spojených státech je zase zvykem psát spíše pomlčky 4-25-2023:

```js
const formatUs = (date) => {
  return `${date.month}-${date.day}-${date.year}`;
};
```

Nyní se dostáváme k jádru pudla. Naše funkce `renderShow` může mít třetí parametr `formatDate`, ve kterém bude očekávat **funkci**. Tuto funkci pak použije ke zformátování data.

```js
const renderShow = (name, date, formatDate) => {
  return `
    <div class="show">
      <h2>${name}</h2>
      <p>${formatDate(date)}</p>
    </div>
  `;
};
```

Funkce `renderShow` pak můžeme zavolat například takto:

```js
showsList.innerHTML += renderShow(
  'Matrix',
  { year: 2023, month: 4, day: 25 },
  formatCs
);
```

nebo takto:

```js
showsList.innerHTML += renderShow(
  'Matrix',
  { year: 2023, month: 4, day: 25 },
  formatGb
);
```

Všimněte si, že funkci `formatCs` předáváme jako celek, tedy jako **hodnotu**. Nevoláme ji tedy my sami, nýbrž ji předáváme funkci `renderShow`, aby ta ji pak zavolala ve chvíli, kdy bude potřebovat naformátovat datum. Tímto vlastně funkci `renderShow` jakoby **podstrčíme** nějakou logiku, o které ona dopředu nic neví a jen ji vykoná.

Dejte si **velký pozor** na následující chybu, kdy funkci `formatCs` místo předávání omylem zavoláme a funkce `renderShow` tak jako třetí vstup nedostane funkci `formatCs` nýbrž její **výsledek**.

```js
showsList.innerHTML += renderShow(
  'Matrix',
  { year: 2023, month: 4, day: 25 },
  formatCs()
);
```

Způsob uvažování, na který si díky tomuto příkladu snažíme zvyknout je, že občas můžeme mít funkci jako například `renderShow`, která očekává na vstupu nějakou jinou funkci, kterou poté sama zavolá. Takových funkcí uvidíme během naší pouti JavaScriptovou krajinou docela dost a budeme je často používat.
