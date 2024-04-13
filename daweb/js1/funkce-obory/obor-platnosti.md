## Obor platnosti proměnných

Mějme následující podmínku, která kontroluje věk uživatele a vypisuje neurvalé hlášky.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains <= 2) {
    document.body.innerHTML += '<p>Už to máš za pár</p>';
  } else if (remains <= 5) {
    document.body.innerHTML += `<p>Ještě si počkáš ${remains} let</p>`;
  } else {
    document.body.innerHTML += '<p>Utíkej za mamkou</p>';
  }
} else {
  document.body.innerHTML += '<p>Vítej mezi dospěláky</p>';
}
```

Zatím nebudeme řešit, odkud se vzala proměnná `age`. Především si všimněme, že celý program obsahuje dohromady pět různých bloků kódu oddělených složenými závorkami. Pokud uvnitř nějakého bloku vytvoříme proměnnou, například `remains`, tato proměnná je „vidět“ pouze uvnitř tohoto bloku. Tento blok se stává jejím :term{cs="oborem platnosti" en="scope"}. Jakmile její blok kódu skončí, proměnná `remains` zanikne a již s ní není možné pracovat.

Pokud se proměnnou pokusíme použít mimo její obor platnosti, JavaScript runtime se bude tvářit, jako kdyby tuto proměnnou nikdy neviděl.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    document.body.innerHTML += '<p>Už to máš za pár</p>';
  } else if (remains >= 5) {
    document.body.innerHTML += `<p>Ještě si počkáš ${remains} let</p>`;
  } else {
    document.body.innerHTML += '<p>Utíkej za mamkou</p>';
  }
} else {
  document.body.innerHTML += `<p>${remains}</p>`; // Zde vznikne chyba
  document.body.innerHTML += '<p>Vítej mezi dospěláky</p>';
}

document.body.innerHTML += `<p>${remains}</p>`; // Zde vznikne chyba
```

Naopak všechny bloky zanořené uvnitř bloku, ve kterém byla proměnná vytvořená, k této proměnné přistupovat mohou. To můžeme v našem kódu vidět v bloku `else if`, kde proměnnou `remains` normálně používáme, přestože je vytvořena o blok výše.

Pokud tedy JavaScript runtime narazí uvnitř nějakého bloku na něco, co vypadá jako jméno proměnné, zkusí tuto proměnnou najít uvnitř tohoto bloku. Pokud se mu to nezdaří, podívá se do bloku o patro výš. Takto postupně prochází všechny nadřazené bloky, dokud nenarazí na nejvyšší patro — takzvaný :term{cs="globální obor platnosti" en="global scope"}.

### Globální obor platnosti

Každý JavaScriptový program si můžeme představit jako jeden velký blok kódu, který v sobě obsahuje všechny příkazy. Takto vznikne globální obor platnosti, ve kterém JavaScript runtime nakonec hledá všechny proměnné, které nenašel nikde jinde. Ukažme si náš program kontrolující věk v celé své kráse.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    document.body.innerHTML += '<p>Už to máš za pár</p>';
  } else if (remains >= 5) {
    document.body.innerHTML += `<p>${age}</p>`; // V pořádku
    document.body.innerHTML += `<p>Ještě si počkáš ${remains} let</p>`;
  } else {
    document.body.innerHTML += '<p>Utíkej za mamkou</p>';
  }
} else {
  document.body.innerHTML += `<p>${age}</p>`; // V pořádku
  document.body.innerHTML += '<p>Vítej mezi dospěláky</p>';
}

document.body.innerHTML += `<p>${age}</p>`; // V pořádku
```

V tomto programu vidíme, že proměnná `age` je vytvořená v globálním oboru platnosti. Takové proměnné říkáme prostě <em>globální</em>. Globální proměnné jsou vidět v celém programu a můžeme je tedy použít kdekoliv. Pokud proměnná není globální a je tedy vytvořena uvnitř nějakého bloku, říkáme o ní, že je :term{cs="lokální" en="local"}.

Obory platnosti nám pomáhají rozdělit náš kód na menší samostatné celky, které se navzájem neovlivňují. Můžete tak bez problému mít ve dvou blocích stejně pojmenovanou lokální proměnnou a význam bude zcela jasný.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const message = 'Utíkej za mamkou';
  document.body.innerHTML += `<p>${message}</p>`;
} else {
  const message = 'Vítej mezi dospěláky';
  document.body.innerHTML += `<p>${message}</p>`;
}
```

V tomto příkladu máme dvě lokální proměnné `message`, které náhodou mají stejné jméno, jinak ale spolu nemají nic společného, každá je ve svém bloku a každá má jinou hodnotu.
