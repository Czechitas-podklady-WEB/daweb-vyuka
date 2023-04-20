## Ošetření chyb

Než se začneme zabývat ošetřením chyb, podívejme se naposledy na krásný přehledný kód, který předpokládá, že svět je ideální a k žádné chybě nemůže dojít:

```js
const fetchData = () => {
  fetch('https://random.kodim.app/api/diceroll/reliable')
    .then((resp) => resp.json())
    .then((data) => setRoll(data.result.number));
};
```

Stavový kód, který nám vrátil server, nám prohlížeč ukládá do objektu `Response`. To je ten objekt, který dostaneme jako parametr naší funkce, kterou předáváme prvnímu `then()` po volání `fetch()`. Konkrétně číselný stav je uložen v property `status`. Pokud si v naší funkci zpracovávající odpověď pojmenujeme parametr s odpovědí (Response) jako `resp`, jak jsme si v tomto kurzu zvykli, stavový kód načteme pomocí `resp.status`. 

Nyní se musíme dle stavového kódu rozhodnout, zda vše dopadlo dobře a zpracujeme data z odpovědi, nebo se něco nepovedlo a chceme uživateli zobrazit nějakou hezkou chybovou zprávu pomocí stavu `errorMessage`. Tentokrát použijeme endpoint `/shaky`, který není tak sebejistý a přiznává, že se občas něco nepovede a vrátí serverovou chybu.

```js
const nacistData = () => {
  fetch('https://random.kodim.app/api/diceroll/shaky')
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      }

      if (resp.status === 500) {
        setErrorMessage('Server vrátil chybu.');
      }
    })
    .then((data) => {
      if (data !== undefined) {
        setRoll(data.result.number);
      }
    });
};
```

Nezapomeňte na to, že v této první funkci obvykle říkáme, že se z odpovědi mají vzít data a zpracovat jako JSON, tj. převést z JSONu na JavaScriptový objekt. Tedy obvykle z funkce vracíme výsledek volání `resp.json()`. Tohle v naší funkci zůstalo v podobě `return resp.json()` ve větvi zpracovávající stavový kód `200`.

Nafoukla se i funkce v druhém `then`. Když se podíváte na první funkci pozorněji, zjistíte, že je tam jediný `return` ve větvi s kodem `200`. Ve všech ostatních větvích, tj. pro všechny ostatní stavové kódy, tato funkce nevrací nic (přesněji, když se vrátíte k lekcím kdysi ze začátku JavaScriptu, připomenete si, že vrací `undefined`). Návratová hodnota naší první funkce se dostane na vstup naší druhé funkce – tedy se objeví v parametru `data` v druhé funkci. V druhé funkci tedy potřebujeme ošetřit případ, kdy data je `undefined`. Resp. v kódu výše je podmínka opačná – pokud `data` je něco, co se při převedení na logickou hodnotu tváří jako `true` (přičemž libovolný – i prázdný – objekt se převádí na `true`, zatímco `undefined` se převádí na `false`), pak z objektu `data` přečti property `randomNumber` a nastav uvedenou hodnotu do stavu `cislo`. Pokud bychom v kódu tuto podmínku neměli, v případě jakékoli odpovědi od serveru jiné než `200` by nám prohlížeč v té druhé funkci do konzole vynadal „Cannot read properties of undefined (reading 'randomNumber')“.

### Ošetření fatálních chyb

Chyby, které nám posílá server, máme (aspoň trochu) ošetřené. Nyní je na čase postarat se o případy, kdy se komunikace se serverem vůbec nezdaří, např. protože náš uživatel cestuje vlakem po koridoru mezi dvěma největšími českými městy, což je pro naše mobilní operátory něco jako amazonský prales, kde rozhodně nikdo nemůže očekávat mobilní signál.

Abychom při testování této funkcionality nemuseli vytahovat z počítače síťový kabel nebo balit notebook do alobalu kvůli WiFi, můžeme v prohlížeči v Dev Tools nasimulovat situaci, kdy prohlížeč nemá připojení k internetu (zbytek počítače bude dál k internetu připojen, což má třeba tu výhodu, že nevypadnete ze Zoomu). Půjdeme opět na záložku Network a v horní liště vpravo od _Disable cache_ je rozbalovací nabídka, kde pravděpodobně máte vybráno _No throttling_. V této nabídce můžete omezovat rychlost připojení prohlížeče, abyste si tak nasimulovali pomalé připojení k internetu. A je tam také volba _Offline_, která způsobí, že se (jen) prohlížeč od internetu úplně odpojí. Pozor na to, že se odpojí celý prohlížeč a nebude fungovat ani `localhost` – tj. svou aplikaci si musíte načíst, když máte internet v prohlížeči zapnutý, pak přepnete mód na _Offline_, zkusíte volání API, zjistíte, že máte něco špatně, opravíte to, zapnete internet, obnovíte stránku, přepnete do _Offline_, zkusíte volat API… No, pořád lepší než lézt pokaždé pod stůl a vytahovat a zasouvat síťový kabel, že.

Pro ošetření fatálních chyb slouží funkce `catch()`, kterou můžete zavolat všude, kde voláte `then()`. Rozdíl mezi nimi je v tom, že funkce předaná dovnitř `then()` se zavolá tehdy, když nedošlo k chybě, naproti tomu funkce předaná do `catch()` se zavolá jenom tehdy, když došlo k fatální chybě. Zjednodušeně si to můžete představit tak, že se prochází postupně všechny funkce předané pomocí `then()` a `catch()`, a podle toho, zda to bylo úspěšné nebo neúspěšné, se hledá první `then()` nebo první `catch()`. Z volání funkce uvnitř `then()` nebo `catch()` se může zase vrátit výsledek nebo chyba, a pak se prochází zase dál další `then()` a `catch()` a zase se použije první podle toho, zda šlo o úspěch nebo o chybu. Pozor na to, že uvnitř volání `catch()` se chyba zpracuje, tím se stav jakoby vyčistí a dál se bude pokračovat, jako by to bylo úspěšné. Pokud byste chtěly ve svém kódu zařídit, aby se dál pokračovalo chybou (tzv. „vyhodit chybu“ nebo „vyhodit výjimku“), počkejte si na druhou polovinu lekce 😀

```js
const nacistData = () => {
  fetch('https://random.zkusmo.eu/shaky')
    .then((resp) => {
      switch (resp.status) {
        case 200:
          return resp.json();
        case 500:
          alert('Server vrátil neočekávanou chybu.');
          break;
        case 503:
          alert('Server je přetížen.');
          break;
      }
    })
    .then((data) => {
      if (data) {
        setCislo(data.randomNumber);
      }
    })
    .catch((error) => {
      console.error('Chyba komunikace se serverem:', error.message);
      alert('Chyba komunikace se serverem. Jste připojeni k internetu?');
    });
};
```
