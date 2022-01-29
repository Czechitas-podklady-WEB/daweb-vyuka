## Události

Aby naše stránky mohly být skutečně interaktivní, potřebujeme být schopni reagovat na akce, které uživatel na stránce provádí - klikání na tlačíka, stiknutí kláves, scrollování, pohyb myší apod. Vždy, když některá z těcho akcí na stránce nastane, říkáme, že nastala určitá :term{cs="událost" en="event"}. JavaScript reprezentuje takovou událost jako speciální typ hodnoty podobně jako číslo, řetězec nebo funkci. Událost tedy můžeme uložit do proměnné nebo poslat nějaké funkci jako vstup. Událost obsahuje vlastnosti a metody, které popisují co se přesně stalo, například jaká klávesa byla zrovna stisknuta, kde na obrazovce bylo kliknuto a spoustu dalších užitenčných informací.

Abychom mohli na události reagovat, JavaScriptu nám umožňuje ke každé události, která nás zajímá, připojit funkci, která se zavolá ve chvíli, kdy daná událost nastane. Takové funkci často říkáme :term{cs="posluchač události" en="event listener"}. Můžeme si představit, že JavaScirpt runtime pečlivě naslouchá všem možným událostem a volá k nim přiřazené funkce. Ve chvíli, kdy JavaScript runtimu tuto funkcí volá, předá jí na vstup událost, která zrovna nastala. Taková funkce tedy může vypadat například takto.

```js
const changeTitle = () => {
  const h1Elm = document.querySelector('h1');
  h1Elm.textContent = 'Baf!';
};
```

Nyní zařídíme, aby se tato funkce zavolala ve chvíli, kdy stiskneme tlačítko. Vytvoříme si tedy jednoduchou stránku s tlačítkem a nadpisem.

```html
<body>
  <h1>Nadpis</h1>
  <button>Zmáčkni mě</button>
  <script src="index.js"></script>
</body>
```

Nejdříve tlačítko z dokumentu vybereme a poté na něm zavoláme speciální metodu `addEventListener`. Ta očekává název události a funkci, která se má spustit, když událost nastane. V našem případě se událost jmenuje `click` a naše funkce je `changeTitle`. Celý program tedy bude vypadat takto.

```js
const changeTitle = () => {
  const h1Elm = document.querySelector('h1');
  h1Elm.textContent = 'Baf!';
};

const btnElm = document.querySelector('button');
btnElm.addEventListener('click', changeTitle);
```

### Nástrahy

S událostmi přichází několik nástrah, na které když si nedáme pozor, naše stránka nejen že nebude fungovat, ale nevyhodí ani žádnou chybu. V takové situací může být těžké odhalit, v čem přesně je zakopaný pes. Tyto nástrahy se často rády objevjí těsně před deadlinem odevzdání projektu a jejich hektické řešení pak má neblahý vliv na naše zdraví a zdraví našich kolegů.

Nástraha první spočítá v předávání funkce `changeTitle`. Všimněte si opět toho, že používáme funkci `changeTitle` jeko hodnotu a předáváme ji jako vstup metodě `addEventListener`. Nikde v našem kódu funkci sami nevoláme. Zavolá ji až JavaScript runtime ve chvíli, kdy na tlačíku nastane událost `click`. Častou začátečnickou chybou je pokušet se funkci zavolat sami.

```js
btnElm.addEventListener('click', changeTitle());
```

V tomto případě se funkce `changeTitle` zavolá už ve chvíli, kdy voláme metodu `addEventListener`. Té se pak jako druhý vstup předá **výsledek** volání funkce `changeTitle`, nikoliv funkce samotná. Jelikož `changeTitle` nic nevrací (přesněji řečeno, vrací `undefined`), k události `click` se žádný posluchač nepřipojí. Naše tlačítko tedy nebude fungovat. Co nás může zmást je to, že takováto stránka nevyhodí žádnou chybu. Náš JavaScript kód totiž funguje jak má. Jen jsme ho napsali tak, že dělá něco jiného než chceme. JavaScript runtime však nemůže telepaticky nahlížet do našich hlav aby věděl, co doopravdy chceme. Prostě dělá to, co jsme mu řekli.

Nástraha druhá spočívá v názvech událostí. To jsou obyčejné řetězce jak je známe už z první lekce. Není vůbec těžké udělat v názvu události překlep, obzvlášť, pokud je název delší, nebo nejsme tolik zdatní v angličtině.

```js
btnElm.addEventListener('clik', changeTitle);
btnElm.addEventListener('keypress', changeTitle);
```

JavaScript runtime bohužel nekontroluje, zda událost `clik` nebo `keypres` může skutečně nastat nebo nikoliv. Jenoduše k tomuto názvu připojí posluchače a o nic dalšího se nestará. Jelikož takto pojmenované události nikdy nenastanou, naše stránka nebude fungovat a opět také nenastane žádná chyba. Z hlediska runtimu je jako v předchozím případě všechno v naprostém pořádku.

Když tedy pracujete s událostmi, vždy si dobře zkontrolujte, že jste jméno události napsali správně a že také správným způsobem předáváte posluchače.
