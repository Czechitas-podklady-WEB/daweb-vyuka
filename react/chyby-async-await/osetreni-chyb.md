## Ošetření chybových stavů API
Dosud jsme při komunikaci s backendem přes API spoléhali na to, že vždy všechno dopadne dobře a server nám odpoví tak, jak očekáváme. Realite je ale jiná – občas nebude mít server dobrý den a místo očekávané odpovědi nám vrátí chybu. Někdy stačí, že sednete do vlaku, dojedete někam (z pohledu mobilních operátorů) mimo civilizaci (třeba na Vysočinu) a mobilní signál včetně připojení k internetu zmizí. Nebo nemáte nejlepší den vy a chyba bude v tom, co na server posíláte – a server vám místo odpovědi, kterou byste chtěli, pošle něco ve smyslu „tomu nerozumím“.

My jsme se dosud tvářili, že svět je ideální a nic takového se neděje, ale nejspíš už jste si všimly, jak takové případy dopadnou – váš kód někde skončí chybou, do konzole prohlížeče se vypíše chyba, ale uživatel se na stránce nedozví, že došlo k nějakému problému. V lepším případě se na stránce nic nestane, uživatel bude zběsile klikat na tlačítko, ale z jeho pohledu se nic dít nebude. V horším případě se stránka rozpadne, přestane úplně reagovat a uživatel bude mít (celkem oprávněný) pocit, že *je to rozbité*.

Pojďme to nyní spravit a upravit aplikaci tak, aby přežila (alespoň některé) chyby při komunikaci s backendem. Než se do toho pustíme, je potřeba si říct, že existují dva základní typy chyb, se kterými se můžete při komunikaci s backendovým API setkat. První možnost je, že se podaří dovolat serveru, server požadavek zpracuje a nějak odpoví – ale protože bylo něco špatně, odpoví chybou zprávou. Druhá možnost je, že zkusíte poslat požadavek na server, a prohlížeči se vůbec nepodaří se serverem spojit – například proto, že jste zadali špatnou adresu serveru, a nebo proto, že vůbec nefunguje připojení k internetu.

Začneme první variantou, ale nejprve si ukažme aplikaci, se kterou budeme v této lekci pracovat. Aplikace je velmi jednoduchá, obsahuje jedno tlačítko, když na něj uživatel klikne, zavolá se backend serveru, který vrací náhodná čísla od 1 do 6 (simuluje hod kostkou). Když přijde odpověď od serveru, náhodné číslo se zobrazí. To je vše. Používat budeme API na adrese `https://random.zkusmo.eu/`, jeho stručnou dokumentaci najdete na adrese https://random.zkusmo.eu/swagger-ui/. Jsou tam i endpointy týkající se přihlašování, těch si pro dnešek nevšímejte, ty budou zajímavé až v příští lekci.

Hlavní komponenta aplikace může vypadat třeba takhle – komunikace se serverem je schválně vytažená do funkce `nacistData`, protože teď až do konce lekce budeme už jen měnit tělo této funkce:

```jsx
function App() {
  const [cislo, setCislo] = useState();

  const nacistData = () => {
    fetch('https://random.zkusmo.eu/reliable')
      .then(resp => resp.json())
      .then(data => setCislo(data.randomNumber))
  }

  const handleClick = () => {
    nacistData();
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Budiž číslo</button>
      </div>
      <div>Náhodné číslo: {cislo}</div>
    </>
  );
}
```

### Stavové kódy HTTP odpovědi
Zatím jsme pracovali s backendovým API takovým způsobem, že jsme poslali na server nějaký požadavek (metodou `GET` nebo `POST`) a server nám vrátil nějaká data, se kterými jsme dál pracovali. Ve skutečnosti ale server kromě samotných dat vždy vrací i stavový kód – číselný kód v rozsahu 100–599, který říká, jak to s vaším požadavkem dopadlo. Nejčastější (doufejme) stav, se kterým se setkáte, je stav `200`, který znamená *OK* – volání bylo úspěšné, server provedl, co jste po něm chtěly a vrací data, která jste chtěly. Další častý stavový kód je `404`, který znamená *Not Found* – server nenalezl adresu (URL), kterou jste po něm chtěli. (Teď už budete chápat programátorské vtipy na téma „404“, třeba proč se webový vývojář v hotelu nemůže ubytovat v pokoji 404 – protože ho nikdy nenajde.) Každý číselný kód má k sobě nadefinovaný i krátký vysvětlující text, úplný kód (číslo i text) je tedy třeba `200 OK` nebo `404 Not Found`. Server teoreticky může k číselnému kódu poslat i jiný text, ale s tím se setkáte málokdy.

Stavové kódy jsou rozdělené do skupin podle významu, vždy první číslice (řád stovek) určuje, o jakou skupinu se jedná. Význam skupin je následující:
* `1xx` – Informační kódy – řídí komunikaci mezi prohlížečem a serverem, ve svém kódu se s nimi nepotkáte, vyřídí je za vás samotný prohlížeč.
* `2xx` – Úspěšné provedení – vrací se v případě, když bylo volání serveru úspěšné. Patří sem všemi oblíbený kód `200 OK`.
* `3xx` – Přesměrování – požadavek byl zpracován úspěšně, ale prohlížeč má nyní pokračovat na jiné adrese. Mezi kód přesměrování je zařazen i kód `304 Not Modified`, který znamená „volání dopadlo dobře, ale odpověď ode mne nepotřebuješ, protože se nic nezměnilo“. Prohlížeč pak použije data, která má uložené v lokální cache, tj. data se nemusí stahovat z internetu, čímž se ušetří čas i data, což ocení třeba uživatel na mobilním připojení s limitem na data. Na kód `304` se můžeme dívat jako na *přesměrování do lokální cache*, proto je mezi *třístovkovými* kódy.
* `4xx` – Chyba klienta – server požadavku porozuměl, ale požadavek byl chybný a chyba je nejspíš na straně klienta. Může to být chyba v kódu frontendové aplikace, nebo uživatel zadal špatná data. Sem patří i kód `404 Not Found` – adresa na serveru neexistuje, buď ji máte špatně zadanou v aplikaci, nebo zadal uživatel špatnou adresu (cestu v adrese).
* `5xx` – Chyba klienta – podobné, jako předchozí případ, ale v tomto případě server sebekriticky přiznává, že chyba je pravděpodobně na jeho straně. Asi nejčastější je chyba `500 Internal Server Error`, která znamená zhruba to, že došlo k nějaké nečekané chybě, se kterou si server neví rady (tedy zhruba: „Já vím, co s tím je. Je to rozbitý“).

Přehled všech standardních stavovývh kódu najdete třeba v dokumentaci MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Stavové kódy všech odpovědí od serveru nám prohlížeč zobrazuje v *Dev Tools*, když si otevřete záložku *Network*. Zobrazuje se (překvapivě) ve sloupečku *Status*. Zároveň prohlížeč zobrazí červeně požadavky/odpovědi, které skončily chybou (kódem 400 nebo 500, čímž se myslí vše od 400 po 499 a vše od 500 po 599 – programátoři někdy celou skupinu označují názvem té „stovky“, takže „čtyři sta“ může znamenat *jakýkoli kód začínající „čtyři sta“, tedy od 400 do 499*. Na to si zvyknete.)

## Bez ošetření chyb
Než se začneme zabývat ošetřením chyb, podívejme se naposledy na krásný přehledný kód, který předpokládá, že svět je ideální a k žádné chybě nemůže dojít:

```js
  const nacistData = () => {
    fetch('https://random.zkusmo.eu/reliable')
      .then(resp => resp.json())
      .then(data => setCislo(data.randomNumber))
  }
```

Použitý endpoint `/reliable` o sobě tvrdí, že vždy vrátí náhodné číslo od 1 do 6. Doufejme, že „vždy“ bude platit alespoň do konce lekce…

## Ošetření chyb vracených ze serveru
Stavový kód, který nám vrátil server, nám prohlížeč ukládá do objektu `Response`. To je ten objekt, který dostaneme jako parametr naší funkce, kterou předáváme prvnímu `then()` po volání `fetch()`. Konkrétně číselný stav je uložen v property `status`, textový popis stavu pak v property `statusText` (pokud by textový stav někoho zajímal). Pokud si v naší funkci zpracovávající odpověď pojmenujeme parametr s odpovědí (Response) jako `resp`, jak jsme si v tomto kurzu zvykli, stavový kód načteme pomocí `resp.status`. Teď už nám nezbývá nic jiného, než se podle stavového kódu rozhodnout, zda vše dopadlo dobře a zpracujeme data z odpovědi, nebo se něco nepovedlo a chceme uživateli zobrazit nějakou hezkou chybovou zprávu (nebo ošklivé modální okno pomocí `alert()`).   

Nezapomeňte na to, že v této první funkci obvykle říkáme, že se z odpovědi mají vzít data a zpracovat jako JSON, tj. převést z JSONu na JavaScriptový objekt. Tedy obvykle z funkce vracíme výsledek volání `resp.json()`. Tohle v naší funkci zůstalo v podobě `return resp.json()` (místo jednořádkové krátké funkce používáme plnohodnotnou funkci ve složených závorkách, takže nemůžeme vynechat klíčové slovo `return`). Tento jeden řádek se stále krčí ve větvi `switch`e zpracovávající stavový kód `200` – doufejme, že i když je to jen takový nenápadný řádek, půjde náš program touto větví nejčastěji.

Tentokrát použijeme endpoint `/shaky`, který není tak sebejistý a přiznává, že se občas něco nepovede a vrátí serverovou chybu.

```js
  const nacistData = () => {
    fetch("https://random.zkusmo.eu/shaky")
      .then((resp) => {
        switch (resp.status) {
          case 200:
            return resp.json();
          case 500:
            alert("Server vrátil chybu.");
            break;
        }
      })
      .then((data) => {
        if (data) {
          setCislo(data.randomNumber);
        }
      });
  }
```

Nenápadně se nám nafoukla i funkce v druhm `then`. Když se podíváte na první funkci pozorněji, zjistíte, že je tam jediný `return` ve větvi s kodem `200`. Ve všech ostatních větvích, tj. pro všechny ostatní stavové kódy, tato funkce nevrací nic (přesněji, když se vrátíte k lekcím kdysi ze začátku JavaScriptu, připomenete si, že vrací `undefined`). Návratová hodnota naší první funkce se dostane na vstup naší druhé funkce – tedy se objeví v parametru `data` v druhé funkci. V druhé funkci tedy potřebujeme ošetřit případ, kdy data je `undefined`. Resp. v kódu výše je podmínka opačná – *pokud `data` je něco, co se při převedení na logickou hodnotu tváří jako `true` (přičemž libovolný – i prázdný – objekt se převádí na `true`, zatímco `undefined` se převádí na `false`), pak z objektu `data` přečti property `randomNumber` a nastav uvedenou hodnotu do stavu `cislo`. Pokud bychom v kódu tuto podmínku neměli, v případě jakékoli odpovědi od serveru jiné než `200` by nám prohlížeč v té druhé funkci do konzole vynadal „Cannot read properties of undefined (reading 'randomNumber')“.

## Ošetření fatálních chyb
Chyby, které nám posílá server, máme (aspoň trochu) ošetřené. Nyní je na čase postarat se o případy, kdy se komunikace se serverem vůbec nezdaří, např. protože náš uživatel cestuje vlakem po koridoru mezi dvěma největšími českými městy, což je pro naše mobilní operátory něco jako amazonský prales, kde rozhodně nikdo nemůže očekávat mobilní signál.

Abychom při testování této funkcionality nemuseli vytahovat z počítače síťový kabel nebo balit notebook do alobalu kvůli WiFi, můžeme v prohlížeči v Dev Tools nasimulovat situaci, kdy prohlížeč nemá připojení k internetu (zbytek počítače bude dál k internetu připojen, což má třeba tu výhodu, že nevypadnete ze Zoomu). Půjdeme opět na záložku Network a v horní liště vpravo od *Disable cache* je rozbalovací nabídka, kde pravděpodobně máte vybráno *No throttling*. V této nabídce můžete omezovat rychlost připojení prohlížeče, abyste si tak nasimulovaly pomalé připojení k internetu. A je tam také volba *Offline*, která způsobí, že se (jen) prohlížeč od internetu úplně odpojí. Pozor na to, že se odpojí celý prohlížeč a nebude fungovat ani `localhost` – tj. svou aplikaci si musíte načíst, když máte internet v prohlížeči zapnutý, pak přepnete mód na *Offline*, zkusíte volání API, zjistíte že máte něco špatně, opravíte to, zapnete internet, obnovíte stránku, přepnete do *Offline*, zkusíte volat API… No, pořád lepší než lézt pokaždé pod stůl a vytahovat a zasouvat síťový kabel, že.

Pro ošetření fatálních chyb slouží funkce `catch()`, kterou můžete zavolat všude, kde voláte `then()`. Rozdíl mezi nimi je v tom, že funkce předaná dovnitř `then()` se zavolá tehdy, když nedošlo k chybě, naproti tomu funkce předaná do `catch()` se zavolá jenom tehdy, když došlo k fatální chybě. Zjednodušeně si to můžete představit tak, že se prochází postupně všechny funkce předané pomocí `then()` a `catch()`, a podle toho, zda to bylo úspěšné nebo neúspěšné se hledá první `then()` nebo první `catch()`. Z volání funkce uvnitř `then()` nebo `catch()` se může zase vrátit výsledek nebo chyba, a pak se prochází zase dál další `then()` a `catch()` a zase se použije první podle toho, zda šlo o úspěch nebo o chybu. Pozor na to, že uvnitř volání `catch()` se chyba zpracuje, tím se stav jakoby vyčistí a dál se bude pokračovat, jako by to bylo úspěšné. Pokud byste chtěly ve svém kódu zařídit, aby se dál pokračovalo chybou (tzv. „vyhodit chybu“ nebo „vyhodit výjimku“), počkejte si na druhou polovinu lekce 😀 

```js
  const nacistData = () => {
    fetch("https://random.zkusmo.eu/shaky")
      .then((resp) => {
        switch (resp.status) {
          case 200:
            return resp.json();
          case 500:
            alert("Server vrátil neočekávanou chybu.");
            break;
          case 503:
            alert("Server je přetížen.");
            break;
        }
      })
      .then((data) => {
        if (data) {
          setCislo(data.randomNumber);
        }
      })
      .catch(error => {
        console.error("Chyba komunikace se serverem:", error.message)
        alert("Chyba komunikace se serverem. Jste připojeni k internetu?")
      })
  }
```
