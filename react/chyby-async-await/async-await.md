## Asynchronní funkce

Jak si možná pamtujete z některé z předchozích lekcí, funkce `fetch`, kterou používáme ke stahování dat ze serveru, vrací takzvaný _promise_. Funkcím, které vracejí _promise_, se obecně říká _asynchronní funkce_. Asynchronnost nám umožňuje spustit nějakou operaci (například stažení dat ze serveru) a nemuset při vykonávání kódu čekat, než se tato operace dokončí. 

Představme si například volání API, které bez ošetření chyb vypadá takto:

```js
const nacistData = () => {
  fetch('https://random.zkusmo.eu/reliable')
    .then((resp) => resp.json())
    .then((data) => setCislo(data.randomNumber));
  console.log('Konec funkce nacistData()');
};

nacistData();
console.log('Zavolána funkce nacistData()');
```

Když je kód obsluhující nějaký _promise_ složitější, můžeme se v něm pro samé `then` metody začít ztrácet. Takové situaci se mezi programátory říká _callback hell_.

V novějších verzích JavaScriptu existují dvě nová klíčová slova, která umožňují napsat kód přehledněji: `async` a `await`. S použitím `async`/`await` můžeme kód zjednodušit a zlepšit čitelnost:

```js
const nacistData = async () => {
  const resp = await fetch('https://random.zkusmo.eu/reliable');
  const data = await resp.json();
  setCislo(data.randomNumber);
  console.log('Konec funkce nacistData()');
};

console.log('Zavolána funkce nacistData()');
```

Klíčovým slovem `await` vlastaně říkáme, že na místě, kdy se volá nějaká asynchronní funkce se chceme opravdu zastavit a počkat, dokud se operace skutečně nedokončí. Možná si řeknete, co jsme tím získali, když hlavním smyslem _promisů_ je, abychom nemuseli čekat na dlouho trvající operace. Vtip je v tom, 6e pokud nějaká funkce obsahuje volání pomocí `await`, musí se sama také stát asynchronní. Musíme ji tedy vytvořit pomocí slovíčka `async`. Taková funkce automaticky vrací `Promise` a opět bychom ji buď museli volat s `await` a nebo se smířit s tím, že při jejím volání nebudeme mít její výsledek. 

V Reactu to většinou funguje tak, že se nám touto cestou asynchronnost zpropaguje až do nějakého posluchče události, který stejně nic nevratí, takže klidně může být asynchronní, aniž by se nám v kódu cokoliv rozbilo.

## Ošetření chyb serveru

Pro ošetření chyb serveru můžeme použít `if-else` nebo `switch`, stejně jako v předchozí části lekce. Uvidíte, že kód s `await` je čitelnější (porovnejte si ho s kódem z předchozí části lekce):

```js
const nacistData = async () => {
  const resp = await fetch('https://random.zkusmo.eu/shaky');
  switch (resp.status) {
    case 200:
      const data = await resp.json();
      setCislo(data.randomNumber);
      break;
    case 500:
      alert('Server vrátil neočekávanou chybu.');
      break;
    case 503:
      alert('Server je přetížen.');
      break;
  }
};
```

Kód se v tomto případě provádí jednoduše shora dolů, lépe se v něm proto orientuje. Všimněte si, že tentokrát nemusíme ošetřovat případ, že `data` neexistují – část kódu pro zpracování dat je pouze ve větvi ošetřující případ, kdy server vrátil `200 OK` – můžeme očekávat, že v takovém případě nám server data poslal.

## Použití try-catch pro ošetření fatálních chyb

Ošetření serverových chyb ve funkci používající `await` už máme vyřešené. Zbývá ošetřit chyby komunikace (např. nedostupný internet), který jsme v předchozí části lekce ošetřovali ve funkci `catch()`. Pro ošetření takovýchto chyb v případě použití `await` potřebujeme použít `try-catch` blok. To je další z konstrukcí JavaScriptu, se kterou jsme se ještě nesetkali. Tato konstrukce se používá pro ošetření chyb, které mohou nastat v kódu. Celá konstrukce vypadá tak, že kód, ve kterém může dojít k chybě, se uzavře do bloku `try { … }`. Za ním pak následuje blok `catch { … }`, který se provede v případě, kdy v bloku `try { … }` dojde k chybě. V takovém případě se provádění v bloku `try { … }` na řádku s chybou ukončí, zbytek bloku `try` se přeskočí a skočí se rovnou do bloku `catch`.

Následující kód z předchozí sekce:

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

tedy můžete pomocí `async/await` a `try-catch` přepsat takto:

```js
const nacistData = async () => {
  try {
    const resp = await fetch('https://random.zkusmo.eu/shaky');
    switch (resp.status) {
      case 200:
        const data = await resp.json();
        setCislo(data.randomNumber);
        break;
      case 500:
        alert('Server vrátil neočekávanou chybu.');
        break;
      case 503:
        alert('Server je přetížen.');
        break;
    }
  } catch (error) {
    console.error('Chyba komunikace se serverem:', error.message);
    alert('Chyba komunikace se serverem. Jste připojeni k internetu?');
  }
};
```

### Sekce finally

Kromě `try` a `catch` můžeme také použít sekci `finally`. Tento blok se vykonává vždy, ať už došlo k chybě nebo ne. Je to ideální místo, pokud potřebujeme něco _uklidit_ poté, co je komunikace se serverem dokončena, ať už úspěšně nebo neúspěšně. Např. pokud máme v komponentě stav `loading`, který zobrazuje točící se kolečko při načítání dat, v sekci `finally` ho nastavíme na `false`, aby uživatel věděl, že komunikace se serverem už neprobíhá.

```js
const nacistData = async () => {
  try {
    const resp = await fetch('https://random.zkusmo.eu/shaky');
    switch (resp.status) {
      case 200:
        const data = await resp.json();
        setCislo(data.randomNumber);
        break;
      case 500:
        alert('Server vrátil neočekávanou chybu.');
        break;
      case 503:
        alert('Server je přetížen.');
        break;
    }
  } catch (error) {
    console.error('Chyba komunikace se serverem:', error.message);
    alert('Chyba komunikace se serverem. Jste připojeni k internetu?');
  } finally {
    setLoading(false);
  }
};
```

## Připomenutí `Promise`

Připomeňme, že funkce `then()` (a také `catch()`) nejsou specifické pro `fetch`. Funkce `fetch` vrací objekt typu `Promise`, funkce `then()` a `catch()` jsou metodami právě objektu `Promise`. Objekt `Promise` mohou vracet i jiné funkce – např. funkce pro načtení souboru z disku nebo funkce pro export obrázku z `canvasu`. Používá se v moderních API všude tam, kde nějaká operace může trvat delší dobu a nechceme, aby její volání zablokovalo prohlížeč. Použít `async/await` můžeme ve všech případech, kdy máme k dipozici objekt `Promise`, ne jen spolu s fukcí `fetch`.

## Bonus: Paralelní zpracování více požadavků

Klíčová slova `async/await` umožňují psát kód, který se lépe čte. Důležité je ale uvědomovat si, co se pod tímto kódem skrývá a že ve skutečnosti si to prohlížeč sám převede na volání funkce `then()`. Existují však případy, kdy `await` nechceme použít a budeme potřebovat pracovat přímo s `Promise` objekty. Je to v situacích, když chceme pracovat s více `Promise` objekty najednou.

Pokud bychom chtěli poslat dva nezávislé požadavky na server a udělali bychom to pomocí následujícího kódu, bude se nejprve čekat na dokončení prvního požadavku a teprve pak se pošle druhý požadavek. Představme si, že nechceme hodit jednou kostkou, ale chceme hodit dvěma kostkami najednou – a abychom je lépe rozlišili, jedno bude klasická šestiboká kostka, druhé bude dvanáctistěn.

```js
const nacistData = async () => {
  const resp6 = await fetch('https://random.zkusmo.eu/random-6');
  const data6 = await resp6.json();
  setKostka1(data6.randomNumber);

  const resp12 = await fetch('https://random.zkusmo.eu/random-12');
  const data12 = await resp12.json();
  setKostka2(data12.randomNumber);
};
```

Toto čekání je ale zbytečné a zbytečně zpomaluje aplikaci – obou výsledků se dočkáme později, než by bylo nutné. Lepší by bylo poslat oba požadavky najednou a počkat, než budou oba dva splněné. Mohli bychom kód přepsat zpátky pomocí `then()`, ale to by nám umožnilo reagovat na dokončení každého požadavku zvlášť, ale nemohli bychom čekat na to, až budou splněné oba dva požadavky (resp. museli bychom při skončení jednoho požadavku kontrolovat, zda už nebyl dokončet i ten druhý, a opačně).

Naštěstí existuje způsob, jak zpracovat požadavky paralelně a čekat na dokončení všech požadavků najednou. Tímto způsobem je použití statické metody `Promise.all()`. `Promise.all()` přijímá pole `Promise` objektů a vrací novou `Promise`, která se splní až když se splní všechny původní promisy.

Příklad použití:

```js
const promises = [
  fetch('https://random.zkusmo.eu/random-6'),
  fetch('https://random.zkusmo.eu/random-12'),
];
const [resp6, resp12] = await Promise.all(promises);
const data6 = await resp6.json();
const data12 = await resp12.json();
setKostka1(data6.randomNumber);
setKostka2(data12.randomNumber);
```

`Promise` má i další [statické metody](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#static_methods), které umožňují pracovat s více `Promise` dalšími způsoby – např. počkat na první splněnou `Promise` (např. pokud pošlete požadavky na předpověď počasí na několik různých serverů a zobrazíte první odpověď, která dorazí).
