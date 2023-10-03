## Pole a `forEach`

Metoda `forEach` je základní nástroj pro práci s poli v JavaScriptu. Pole jsou datové struktury, které nám umožňují ukládat více hodnot do jedné proměnné. Metoda `forEach` pak umožňuje procházet přes všechny prvky v poli a provádět na nich nějakou akci.

Jednoduché použití metody `forEach` pro výpis všech prvků v poli do stránky může vypadat takto:

```js
const pole = ['jana', 'petra', 'karel', 'josef'];
pole.forEach((prvek) => {
  // provedení akce s prvkem
  document.innerHTML += `<div>${prvek}</div>`;
});
```

Případně pokud bychom chtěli pracovat s indexem prvku, můžeme použít následující zápis:

```js
pole.forEach((prvek, index) => {
  // provedení akce s prvkem
  document.innerHTML += `<div>${index}: ${prvek}</div>`;
});
```

V obou případech metodě `forEach` předáváme funkci, která se automaticky zavolá pro každý prvek v poli. Tato funkce může obsahovat jakoukoliv akci, kterou chceme s prvkem provést. V příkladu výše jsme použili výpis do stránky. Takto můžeme v naší aplikaci snadno zobrazovat seznamy, tabulky a jakékoliv jiná data uložená jako hodnoty v poli.
