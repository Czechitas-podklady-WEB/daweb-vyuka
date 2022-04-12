## Volání API

Většina webových aplikací pracuje s daty, která jsou uložena na nějakém vzdáleném serveru. Pokud chceme s takovými daty pracovat, musíme si serveru o tato data říct. Požadavky na data se provádějí prostřednictvím takzvaného API (:i[Application Programming Interface]). Jak už jsme si řekli výše, většina API poskytuje data ve formátu JSON.

K tomu, abychom mohli pracovat s API, je potřeba si detailněji popsat, jak funguje komunikace s webovým serverem. Pokud po webovém serveru něco chceme, například HTML stránku nebo nějaká data, musíme odeslat takzvaný :term{cs="HTTP požadavek" en="HTTP request"}. Každý požadavek musí být zacílený na nějakou URL adresu. Adresy URL mají následující formát.

```
protokol://adresa_serveru/cesta?parametr1=hodnota1&parametr2=hodnota2
```

Protokol je většinou `https`, někdy ještě zastarale `http`. Adresa serveru může být například `www.google.com`. Za adresou serveru následuje cesta, která specifikuje kam v rámci serveru se má požadavek odeslat. Za otazníkem se píšou takzvané parametry, které dále upřesňují požadavek.

Takto například vypadá adresa požadavku na server `www.google.com`, který spustí vyhledávání.

```
https://www.google.com/search?q=praha&sourceid=chrome
```

Cesta v požadavku je tedy `/search`, parametr `q` udává, že se má vyhledat slovo `praha` a parametr `sourceid` říká, že se ptáme z prohlížeče `chrome`. Tuto adresu můžete normálně zadat do prohlížeče a uvidíte výsledky vyhledávání.

### Dotazy na API

Dotazy na API fungují naprosto stejně jako jsme popsali výše, jen místo HTML stránky obdržíme data ve formátu JSON. Můžeme si například vyzkoušet veřejné API poskytující časy východu a západu slunce na různých místech na Zemi. Takto například zjistíme, kdy dnes vychází a zapadá slunce v České republice. 

```
https://api.sunrise-sunset.org/json?lat=50&lng=14.5
```

Všimněte si parametrů `lat` a `lng`, které udávají souřadnice místa na Zemi v zeměpisné šířce a délce. Bod s hezkými souřadnicemi :i[50, 14.5] je [kousek za Prahou](https://mapy.cz/s/dulojodano) směrem na jihozápad. 

Po zadání dotazu do prohlížeče obdržíme odpověd podobnou této

<!-- prettier-ignore -->
```json
{
  "results": {
    "sunrise": "4:19:40 AM",
    "sunset": "5:47:30 PM",
    "solar_noon": "11:03:35 AM",
    "day_length": "13:27:50",
    "civil_twilight_begin": "3:47:52 AM",
    "civil_twilight_end": "6:19:18 PM",
    "nautical_twilight_begin": "3:07:05 AM",
    "nautical_twilight_end": "7:00:05 PM",
    "astronomical_twilight_begin": "2:22:48 AM",
    "astronomical_twilight_end": "7:44:22 PM"
  },
  "status": "OK"
}
```

Pozor na to, že časy jsou zde v UTC ([Koordinovaný světový čas](https://cs.wikipedia.org/wiki/Koordinovan%C3%BD_sv%C4%9Btov%C3%BD_%C4%8Das)), takže v závislosti na letním nebo zimním čase mohou být o hodinu nebo dvě dříve než v našem časovém pásmu.

Většina API poskytuje více či méně přívětivou dokumentaci, ze které lze vyčíst, jak se s API pracuje. Dokumentaci k výše zmíněnému API najdete [zde](https://sunrise-sunset.org/api).

### Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějakou adresu a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažení také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevíme, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezi tím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Z tohoto důvodu funkce `fetch` nevrací data, nýbrž takzvaný _promise_. Promise je speciální JavaScriptová konstrukce podobná události. Podobně jako na událost můžeme na promise pověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
promise.then((response) => {
  console.log(response);
});
```

Promise můžeme uložit do proměnné jako vidíme výše, je to však trochu zbytečné. Metodu `then` můžeme zavolat rovnou na výsledku funkce `fetch`.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5').then((response) => {
  console.log(response);
});
```

V parametru `response` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tato metoda opět nevrací samotný JSON nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám takováto kaskáda.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že „takto se to prostě dělá“. Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hlouběji než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá cokoliv chceme. Takto například můžeme zobrazit čas dnešního západu slunce v elementu s třídou `sunset`.

```js
const displaySunset = (data) => {
  const sunsetElm = document.querySelector('.sunset');
  sunsetElm.textContent = data.results.sunset;
};

fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
  .then((response) => response.json())
  .then(displaySunset);

```
