## Dobrovolné čtení na doma - alternativní zápis funkcí

V různých výukových materiálech se můžete setkat s alternativním zápisem funkce. Ten by pro naši obarvovací funkci vypadal takto:

```js
function colorHeading(colorName) {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = colorName;
}
```

Mezi těmito dvěma zápisy jsou co do významu drobné rozdíly. V tuto chvíli však ještě nemáme dostatečný aparát k tomu, abychom dobře vysvětlili, v čem přesně rozdíly mezi takto zapsanými funkcemi spočívají. Navíc v žádném tématu probíraném v rámci celé akademie se rozdíly mezi těmito zápisy neprojeví. Pro účely našeho kurzu tedy stačí si vybrat jeden zápis a toho se držet. My si vybereme ten první, kterému se odborně říká _arrow funkce_. Výhody tohoto zápisu spočívají v tom, že:

1. názorně ukazuje, že funkce se ukládá do proměnné, a je to tedy hodnota jako každá jiná,
2. arrow funkce fungují uvnitř jednodušeji než funkce zapsané pomocí `function`,
3. zápis arrow funkcí je většinou kratší a méně ukecaný.
