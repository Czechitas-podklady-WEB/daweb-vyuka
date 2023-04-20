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
