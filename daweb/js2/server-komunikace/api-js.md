## Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějakou adresu a server vám pošle odpověď s kýženými daty, nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou zkusit napsat toto.

```js
const response = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažení také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevíme, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezitím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Aby se toto nestalo, funkce `fetch` je takzvaně :term{cs="asynchronní" en="asynchronous"}. V JavaScriptu pak máme speciální klíčové slovo `await`, které nám umožní počkat na výsledek takové funkce, aniž bychom tím zablokovali celý program. Správně tedy volání `fetch` vypadá takto.

```js
const response = await fetch(
  'https://api.sunrise-sunset.org/json?lat=50&lng=14.5'
);
```

V parametru `response` máme uloženou odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tato metoda je také asynchronní. Musíme tedy znova použít `await` abychom počkali, než se JSON z odpovědi vytvoří.

```js
const response = await fetch(
  'https://api.sunrise-sunset.org/json?lat=50&lng=14.5'
);
const data = await response.json();
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že „takto se to prostě dělá“. Asynchronní funkce jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hlouběji, než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Zatím jsme získaná data pouze vypisovali do konzole. S daty však můžeme dělat, cokoliv se nám zamane. Takto například můžeme zobrazit čas dnešního západu slunce v elementu s třídou `sunset`.

```js
const response = await fetch(
  'https://api.sunrise-sunset.org/json?lat=50&lng=14.5'
);
const data = await response.json();

const sunsetElm = document.querySelector('.sunset');
sunsetElm.textContent = data.results.sunset;
```
