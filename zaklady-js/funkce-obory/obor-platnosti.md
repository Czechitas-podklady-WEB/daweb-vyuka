## Obor platnosti proměnných

Mějme následující podmínku, která kontroluje věk uživatele a vypisuje neurvalé hlášky.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains <= 2) {
    console.log('Už to máš za pár');
  } else if (remains <= 5) {
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log('Vítej mezi dospěláky');
}
```

Zatím nebudeme řešit odkud se vzala proměnná :var[age]. Především si všimneme, že celý program obsahuje dohromady pět různých bloků kódu oddělených složenými závorkami. Pokud uvnitř nějakého bloku vytvoříme proměnnou, například :var[remains], tato proměnná je "vidět" pouze uvnitř tohoto bloku. Tento blok se stává jejím :term{cs="oborem platnosti" en="scope"}. Jakmile její blok kódu skončí, proměnná :var[remains] zanikne a již s ní není možné pracovat.

Pokud se proměnnou pokusíme použít mimo její obor platnosti, JavaScript runtime se bude tvářit jako kdyby tuto proměnnou nikdy neviděl.

```js
if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    console.log('Už to máš za pár');
  } else if (remains >= 5) {
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log(remains); // Zde vznikne chyba
  console.log('Vítej mezi dospěláky');
}

console.log(remains); // Zde vznikne chyba
```

Naopak všechny bloky zanořené uvnitř bloku, ve kterém byla proměnná vytvořene, k této proměnné přistupovat mohou. To můžeme v našem kódu vidět v bloku `else if`, kde proměnnou `remains` normálně používáme, přestože je vytvořena o blok výše.

Pokud tedy JavaScript runtime narazí uvnitř nějakého bloku na něco, co vypadá jako jméno proměnné, zkusí tuto proměnnou najít uvnitř tohoto bloku. Pokud se mu to nezdaří, podívá se do bloku a patro výš. Takto postupně prochází všechny nadřezené bloky, dokud nenarazí na nejvyšší patro -- takzvaný :term{cs="globální obor platnosti" en="global scope"}.

### Globální obor platnosti

Každý JavaScriptový program si můžeme představeit jako jeden velký blok kódu, který v sobě obsahuje všechny příkazy. Takto vznikne globální obor platnosti, ve kterém JavaScript runtime nakonec hledá všechny proměnné, které nanašel nikde jinde. Ukažme si náš program kontrolující věk v celé své kráse.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const remains = 18 - age;

  if (remains >= 2) {
    console.log('Už to máš za pár');
  } else if (remains >= 5) {
    console.log(age); // V pořádku
    console.log(`Ještě si počkáš ${remains} let`);
  } else {
    console.log('Utíkej za mamkou');
  }
} else {
  console.log(age); // V pořádku
  console.log('Vítej mezi dospěláky');
}

console.log(age); // V pořádku
```

V tomto programu vidíme, že proměnná :var[age] je vytvořená v globálním oboru platnosti. Takové proměnné říkáme prostě <em>globální</em>. Globální proměnné jsou vidět v celém programu a můžeme je tedy použít kdekoliv. Pokud proměnná není globální a je tedy vytvořena uvnitř nějakého bloku, říkáme o ni, že je :term{cs="lokální" en="local"}.

Obory platnosti nám pomáhají rodělit náš kód na menší samostatné celky, které se navzájem neovlivňují. Můžete tak bez problému mít ve dvou blocích stejně pojmenovavnou lokální proměnnou a význam bude zcela jasný.

```js
const age = Number(prompt('Zadej svůj věk:'));

if (age < 18) {
  const message = 'Utíkej za mamkou';
  console.log(message);
} else {
  const message = 'Vítej mezi dospěláky';
  console.log(message);
}
```

V tom příkladu máme dvě lokální proměnné :var[message], které náhodou mají stejné jméno, jinak však spolu nemají nic společného.
