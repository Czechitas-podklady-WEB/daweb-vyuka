## Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějakou adresu a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažení také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevíme, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezitím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Z tohoto důvodu funkce `fetch` nevrací data, nýbrž takzvaný _promise_. Promise je speciální JavaScriptová konstrukce podobná události. Podobně jako na událost můžeme na promise pověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
promise.then((response) => {
  console.log(response);
});
```

Promise můžeme uložit do proměnné jako vidíme výše, je to však trochu zbytečné. Metodu `then` můžeme zavolat rovnou na výsledku funkce `fetch`.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5').then(
  (response) => {
    console.log(response);
  }
);
```

V parametru `response` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tato metoda opět nevrací samotný JSON, nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám takováto kaskáda.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že „takto se to prostě dělá“. Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hlouběji, než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá, cokoliv chceme. Takto například můžeme zobrazit čas dnešního západu slunce v elementu s třídou `sunset`.

```js
const displaySunset = (data) => {
  const sunsetElm = document.querySelector('.sunset');
  sunsetElm.textContent = data.results.sunset;
};

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => {
    return response.json();
  })
  .then(displaySunset);
```
