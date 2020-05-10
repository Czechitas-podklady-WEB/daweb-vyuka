Většina webových aplikací pracuje s daty, která jsou uložena na nějakém vzdáleném serveru. Pokud chceme s daty na nějakém serveru pracovat, server musí poskytovat takzvané API (<i>Application Programming Interface</i>). Většina API poskytuje data ve formátu JSON. Nejprve si tedy povíme o tomto formátu a pak se naučíme si data stahovat pomocí JavaScriptu.

## Formát JSON

Podle většiny moderních doporučení je lepší v JavaScriptu používat v řetězcích jednoduché uvozovky. V počátcích JavaScriptu však bylo běžné používat spíše dvojité. Pokud v našich objektech schválně uzavřeme všechny klíče a řetězce do dvojitých uvozovek i tam, kde by to jinak nebylo potřeba, dostaneme reprezentaci zapsanou takto.

<!-- prettier-ignore-start -->
```js
const row = {
  "name": {
    "first": "Petr",
    "last": "Bílek"
  },
  "product": {
    "name": "Prací prášek",
    "amount": 1.5,
    "unit": "kg"
  },
  "price": 240
};
```
<!-- prettier-ignore-end -->

Toto je z hlediska JavaSriptu naprosto korektní zápis. Vznikne tak zcela stejný objekt, jak ten, který by vznikl bez použití uvozovek kolem klíčů. Tento způsob zápisu má své speciální jméno - <i>JavaScript Object Notation</i>, nebo-li <i>JSON</i>. Za dobu existence JavaScriptu se tento zápis rozšířil po celém internetu a dnes jde o nejpoužívanější formát pro výměnu dat. Pokud si tedy budeme chtít stáhnout data z nějakého API, dostaneme je většinou právě ve formátu JSON.

## Volání API

K tomu, abychom mohli pracovat s API je potřeba si detailněji popsat, jak funguje komunikace s webovým serverem. Pokud po webovém serveru něco chceme, například HTML stránku nebo nějaká data, musíme odeslat takzvaný <term cs="HTTP požadavek" en="HTTP request">. Každý požadavek musí být zacílený na nějakou URL adresu. Adresy URL mají následující formát.

```
protokol://adresa_serveru/cesta?parametr1=hodnota1&parametr2=hodnota2
```

Protokol je většinou `http` nebo `https`. Adresa serveru může být například `www.google.com`. Za adresou serveru následuje cesta, která specifikuje kam v rámci serveru se má požadavek odeslat. Za otazníkem se píšou takzvané parametry, které dále upřesňují požadavek.

Takto například vypadá adresa požadavku na server `www.google.com`, který spustí vyhledávání.

```
https://www.google.com/search?q=praha&sourceid=chrome
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

Většina API poskytuje více různých cest. Pro vyhledání jména pro dnešní den jsme použili cestu `/today`. Můžeme však poližit i obrácený dotaz a zeptat se, kdy má v Americe svátek Suzanne. K to mu použijeme cestu `/getdate` s parametry `name` a `country`.

```
https://api.abalin.net/getdate?name=suzanne&country=us
```

Pokud server poskytuje API, cestám v rámci jednoho serveru se říká _endpointy_. Z našeho API pro získání jsme zatím viděli dva různé endpointy. Toto API jich má však ještě více. Vrátíme se k nim v příkladech na procvičení.

### Volání API z JavaScriptu

Většina API funguje velmi přímočaře. Odešlete správně zformulovaný požadavek na nějaký endpont a server vám pošle odpověď s kýženými daty nejčastěji ve formátu JSON.

Pokud chceme tento proces provést v JavaScriptu, máme k dispozici velmi šikovnou metodu `fetch`. Můžeme si tedy založit nový program a rovnou napsat toto.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
```

Je zde však drobný zádrhel. Servery jsou různě rychlé podle toho, jak jsou vytížené nebo jak jsou od nás geograficky daleko. Dat ke stažené také může být poměrně hodně. Všechny tyto faktory přispívají k tomu, že stahování dat může trvat nějakou chvíli, a my dopředu nevím, jak dlouhá tato chvíle bude. Dokonce se může stát, že server data nakonec nepošle vůbec, protože je přetížený požadavky jiných klientů, nebo dokonce úplně spadnul a už není dostupný.

Kdybychom tedy v našem programu na prvním řádku čekali, až funkce `fetch` skončí, mohli bychom si taky počkat notnou chvíli. Mezi tím by náš program zcela zamrznul a uživatel by neměl radost. Funkce `fetch` proto nevrací data, nýbrž takzvaný _promise_. Promise je speciální konstrukce podobná časovači, u kterého však dopředu nevím, kdy skončí. Promise v podstatě říká "až to bude, tak to bude". Na promise můžeme pověsit funkci, která se má zavolat ve chvíli, kdy dorazí odpověď od serveru. To se provede pomocí metody `then`.

```js
const promise = fetch('https://api.abalin.net/today?country=cz');
promise.then((resp) => {
  console.log(resp);
});
```

V parametru `resp` máme uloženu odpověd ze serveru. Pokud z této odpovědi chceme získat JSON, stačí zavolat metodu `json`. Čeká nás však podraz. Tado metoda opět nevrací samotný JSON nýbrž pouze promise. Musíme tedy znova použít metodu `then` a vznikne nám trochu zamotaný kód.

```js
const respPromise = fetch('https://api.abalin.net/today?country=cz');
const jsonPromise = respPromise.then((resp) => resp.json());
jsonPromise = jsonPromise.then((json) => console.log(json));
```

Po spuštění tohoto programu už se nám v konzoli objeví naše data. Kǒd výše však začiná být nepřehledný. Naštěstí se však můžeme snadno vyhnout ukládání promisů do proměnných, které jsou v tomto případě stejně zbytečné. Výsledný kód se pak o kus zpřehlední.

```js
fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then((json) => console.log(json));
```

Tento zápis na první pohled může pořád vypadat složitě. Jeho použití je však pořád stejné. Stačí si jej tedy prostě zapamatovat a zvyknout si na to, že "takto se to prostě dělá." Promisy jsou relativně komplikované a hluboké téma. Nebudeme proto do nich zabíhat hluběji než je v tuto chvíli nezbytně nutné.

### Zpracování dat

Naše funkce pro zpracování získaných dat je zatím pouze vypisovala do konzole. Můžeme si však napsat funkci, která dělá cokoliv chceme. Takto například můžeme zobrazím jméno mající dnes svátek v elementu s třídou `name`.

```js
const displayName = (json) => {
  const nameElm = document.querySelector('.name');
  nameElm.textContent = json.data.namedays.cz;
};

fetch('https://api.abalin.net/today?country=cz')
  .then((resp) => resp.json())
  .then(displayName);
```

Funkce `fetch` tedy funguje podobně jak událost. Naše funkce `displayName` se zavolá až ve chvíli, kdy skutečně dorazí data ze serveru.

@exercises ## Cvičení - volání API [

- svatek-zitra
- svatek-v-den
  ]@

## Google Sheets API

Většina webových aplikací potřebuje kromě frontendu také backend. Moderní aplikace často fungují tak, že backend poskytuje API, skrze které může frontend přistupovat k datům aplikace. Backendové API se dá napsat přímo v JavaScriptu. Bohužel je to však obsáhlé téma, které se nám už do tohoto kurzu nevejde. Vlastní API si tedy v JavaScriptu bohužel nenapíšeme. Jednoduchá data pro naši aplikaci si však můžeme uložit například do Google Sheets. Ty poskytují vlastní API, pomocí kterého můžete číst i zapisovat obsah tabulek a vytvořit si tak jednoduchý datový zdroj pro váš frontend.

K nastavení Google Sheets API následujte kroky níže.

1. Pokud nemáte účet na Googlu, založte si jej na [této stránce](https://accounts.google.com/signup);
1. Otevřete [konfiguraci](https://developers.google.com/sheets/api/quickstart/js) pro Google Sheets API. V části <i>Step 1</i> klikněte na tlačítko <i>Enable the Google Sheets API</i>. Pokud nejste přihlášení na svůj účet, stránka vás vyzve k přihlášení. Pokud vše proběhlo v pořádku, objeví se dialog s údaji <i>Client ID</i> a <i>Client Secret</i>. Pro tuto chvíli můžeme dialog zavřít.
1. V části <i>Step 1</i> dále klikněte na tlačítko <i>Create API Key</i>. Objeví se dlouhatánský řetězec písmenek a čísel, pomocí kterého budete moci komunikovat s Google Sheets. Tento řetězec si uložte, abyste jej měli po ruce, až budete psát váš první program.

### Čtení z tabulky

Připomeňme si naši tabulku výdajů z první lekce.

<table>
  <thead>
    <tr><th>Jméno</th><th>Věc</th><th>Částka</th></tr>
  </thead>
  <tbody>
    <tr><td>Petr</td><td>Prací prášek</td><td>240 kč</td></tr>
    <tr><td>Ondra</td><td>Savo</td><td>80 kč</td></tr>
    <tr><td>Pavla</td><td>Toaleťák</td><td>65 kč</td></tr>
    <tr><td>Zuzka</td><td>Mýdlo</td><td>50 kč</td></tr>
    <tr><td>Pavla</td><td>Závěs do koupelny</td><td>350 kč</td></tr>
    <tr><td>Libor</td><td>Pivka na kolaudačku</td><td>124 kč</td></tr>
    <tr><td>Petr</td><td>Pytle na odpadky</td><td>75 kč</td></tr>
    <tr><td>Míša</td><td>Utěrky na nádobí</td><td>130 kč</td></tr>
    <tr><td>Ondra</td><td>Toaleťák</td><td>120 kč</td></tr>
    <tr><td>Míša</td><td>Pečící papír</td><td>30 kč</td></tr>
    <tr><td>Zuzka</td><td>Savo</td><td>80 kč</td></tr>
    <tr><td>Petr</td><td>Tapeta na záchod</td><td>315 kč</td></tr>
    <tr><td>Ondra</td><td>Toaleťák</td><td>64 kč</td></tr>
  </tbody>
</table>

1. Zamiřte na adresu http://sheets.google.com a vytvořte novou Google Sheets tabulku. Dajte jí název <i>Výdaje</i> a zkopírujte do ní tabulku výdajů z této stránky. Stačí vybrat všechny řádky (kromě hlavičky) zde na stránce a pak je vložit do Google tabulky pomocí [[Ctrl]]+[[Shift]]+[[V]].
1. Aby byla tabulka přístupná pro váš program, musíte ji nastavit jako veřejnou. V pravém horním rohu klikněte na tlačíko <i>Sdílet</i>, vyberte <i>Získat odkaz</i> a z nabídky vyberte <i>Všichni uživatelé, kteří mají odkaz</i>. Nyní si můžete odkaz zkopírovat do schránky a kliknout na <i>Hotovo</i>.
1. V levé dolní části uvidíte název listu tabulky, který pravděpodobně zní <i>List 1</i>. Šipkou vedle názvu listu rozbalte menu a vyberte <i>Přejmenovat</i>. Jméno nastavte na <i>List1</i>. Mezery v názvech listů jsou nešikovné a je lepší se jich zbavit.

Nyní můžeme zkusit načíst naši tabulku z JavaScriptového programu. Nejdříve musíme znát identifikátor tabulky. Ten najdete v odkazu pro sdílení, který jste si zkopírovali do schránky. Odkaz bude vypadat nějak takto.

```
https://docs.google.com/spreadsheets/d/1_GQOBk3o7il-ZHam-yj1gFCZvoZdMe2kv8guk061tK8/edit?usp=sharing
```

Identifikátor ja pak tento řetězec.

```
1_GQOBk3o7il-ZHam-yj1gFCZvoZdMe2kv8guk061tK8
```

Dále potřebujete znát váš API klíč. Z těchto informací už můžeme sestavit adresu našeho API endpointu pro funkci `fetch`.

```js
const API_KEY = 'ALzaSyBfd-ebCiXVE-iwss6S4ZBj15WN651ynQU';
const spreadsheetId = '1_GQOBk3o7il-ZHam-yj1gFCZvoZdMe2kv8guk061tK8';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/List1?key=${API_KEY}`;

fetch(url)
  .then((resp) => resp.json())
  .then((json) => console.log(json));
```

Pokud v tomto programu nahradíte první dvě proměnné za vaše údaje a pokud jste tabulku vytvořili správně, uvidíte v konzoli takovouto odpověď.

```json
{
  "range": "List1!A1:Z1000",
  "majorDimension": "ROWS",
  "values": [
    ["Petr", "Prací prášek", "240 kč"],
    ["Ondra", "Savo", "80 kč"],
    ["Pavla", "Toaleťák", "65 kč"],
    ["Zuzka", "Mýdlo", "50 kč"],
    ["Pavla", "Závěs do koupelny", "350 kč"],
    ["Libor", "Pivka na kolaudačku", "124 kč"],
    ["Petr", "Pytle na odpadky", "75 kč"],
    ["Míša", "Utěrky na nádobí", "130 kč"],
    ["Ondra", "Toaleťák", "120 kč"],
    ["Míša", "Pečící papír", "30 kč"],
    ["Zuzka", "Savo", "80 kč"],
    ["Petr", "Tapeta na záchod", "315 kč"],
    ["Ondra", "Toaleťák", "64 kč"]
  ]
}
```

Tímto způsobem můžete snadno vytvořit zdroj dat pro vaši frontendovou aplikaci.

### Zápis do tabulky

Z Google Sheets lze pomocí API data nejen číst ale i zapisovat. Zde náš však čeká zklamání. Google Sheets pro zápis do tabulek vyžadují vyšší úroveň zabezpečení. Práce s takto zabezpečenou tabulkou však znamená provést mnoho technických kroků navíc, na což v této lekci nemáme prostor.

Napsat aplikaci, která někam posílá data se nám tedy pomocí Google Sheets napsat nepodaří. K tomu bychom už potřebovali skutečné vlastní API. Pokud však naše aplikace data pouze zobrazuje, jsou Google Sheets velmi šikovná volba.
