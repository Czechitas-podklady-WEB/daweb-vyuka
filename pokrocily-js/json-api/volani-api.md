## Volání API

Většina webových aplikací pracuje s daty, která jsou uložena na nějakém vzdáleném serveru. Pokud chceme s takovými daty pracovat, musíme si serveru o tato data říct. Požadavky na data se provádějí prostřednictvím takzvaného API (:i[Application Programming Interface]). Jak už jsme si řekli výše, většina API poskytuje data ve formátu JSON.

K tomu, abychom mohli pracovat s API, je potřeba si detailněji popsat, jak funguje komunikace s webovým serverem. Pokud po webovém serveru něco chceme, například HTML stránku nebo nějaká data, musíme odeslat takzvaný :term{cs="HTTP požadavek" en="HTTP request"}. Každý požadavek musí být zacílený na nějakou URL adresu. Adresy URL mají následující formát.

```
protokol://adresa_serveru/cesta?parametr1=hodnota1&amp;parametr2=hodnota2
```

Protokol je většinou `http` nebo `https`. Adresa serveru může být například `www.google.com`. Za adresou serveru následuje cesta, která specifikuje kam v rámci serveru se má požadavek odeslat. Za otazníkem se píšou takzvané parametry, které dále upřesňují požadavek.

Takto například vypadá adresa požadavku na server `www.google.com`, který spustí vyhledávání.

```
https://www.google.com/search?q=praha&amp;sourceid=chrome
```

Cesta v požadavku je tedy `/search`, parametr `q` udává, že se má vyhledat slovo `praha` a parametr `sourceid` říká, že se ptáme z prohlížeče `chrome`. Tuto adresu můžete normálně zadat do prohlížeče a uvidíte výsledky vyhledávání.

### Dotazy na API

Dotazy na API fungují naprosto stejně jako jsme popsali výše. Jedno z nejjednodušších API, které si můžete sami vyzkoušet, poskytuje informace o tom, kdo má který den v jaké zemi svátek. Pokud chcete vědět, kdo má zrovna dneska svátek v České republice, vložte do prohlížeče následující adresu.

```
https://api.abalin.net/today?country=cz
```

Zkuste si pro sebe určit, co je zde adresa serveru, cesta a parametry. Podle toho, jaký je zrovna den, dostanete odpověď podobnou této.

<!-- prettier-ignore -->
```json
{"data":{"dates":{"day":9,"month":5},"namedays":{"cz":"Ctibor"}}}
```

Server se snaží posílat data co nejúsporněji a vynechává v JSONu pro počítače zbytečné mezery. Naštěstí dat není mnoho, takže jsou čitelná i v této formě.

Většina API poskytuje více různých cest. Pro vyhledání jména pro dnešní den jsme použili cestu `/today`. Můžeme však položit i obrácený dotaz a zeptat se, kdy má v Americe svátek Suzanne. K to mu použijeme cestu `/getdate` s parametry `name` a `country`.

```
https://api.abalin.net/getdate?name=suzanne&amp;country=us
```

Pokud server poskytuje API, cestám v rámci jednoho serveru se říká _endpointy_. Z našeho API pro získání jsme zatím viděli dva různé endpointy. Toto API jich má však ještě více. Vrátíme se k nim v příkladech na procvičení.

### Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějaký endpoint a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažení také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevíme, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezi tím by náš program zcela zamrznul a uživatel by neměl ze stránky dobrý pocit. Z tohoto důvodu funkce `fetch` nevrací data, nýbrž takzvaný _promise_. Promise je speciální JavaScriptová konstrukce podobná události. Podobně jako na událost můžeme na promise pověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
promise.then((response) => {
  console.log(response);
});
```

Promise můžeme uložit do proměnné jako vidíme výše, je to však trochu zbytečné. Metodu `then` můžeme zavolat roznou na výsledku funkce `fetch`.

```js
fetch('https://api.abalin.net/today?country=cz').then((response) => {
  console.log(response);
});
```

V parametru `response` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí na něm zavolat metodu `json`. Čeká nás však podraz. Tado metoda opět nevrací samotný JSON nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám takováto kaskáda.

```js
fetch('https://api.abalin.net/today?country=cz')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Tento zápis může na první pohled vypadat poněkud složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že „takto se to prostě dělá“. Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hluběji než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá cokoliv chceme. Takto například můžeme zobrazím jméno mající dnes svátek v elementu s třídou `name`.

```js
const displayName = (json) => {
  const nameElm = document.querySelector('.name');
  nameElm.textContent = json.data.namedays.cz;
};

fetch('https://api.abalin.net/today?country=cz')
  .then((response) => response.json())
  .then(displayName);
```