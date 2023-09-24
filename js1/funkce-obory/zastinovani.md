## Zastiňování proměnných

Uvažujíc nad příkladem z předchozí sekce vás možná napadne, co by se stalo, kdybychom proměnné `message` vytvořili takto.

```js
const age = Number(prompt('Zadej svůj věk:'));
const message = 'Utíkej za mamkou';

if (age < 18) {
  document.body.innerHTML = `<p>${message}</p>`;
} else {
  const message = 'Vítej mezi dospěláky';
  document.body.innerHTML = `<p>${message}</p>`;
}
```

Pravidlo při hledání proměnných říká, že se použije ta deklarace, na kterou runtime při procházení nadřazených bloků narazí nejdříve. Díky tomu, že se prohledává vždy od nejnižšího patra k nejvyššímu, v bloku `if` narazíme nejdřív na globální proměnnou `message`. Naopak v bloku `else` dříve najdeme lokální proměnnou. Tomuto principu se říká :term{cs="zastínění" en="shadowing"}. Proměnná, která je z hlediska hierarchie bloků níže, takzvaně _zastíní_ stejně pojmenovou proměnnou, která se nachází výše.

V praxi je nejlepší, když má náš program tak dobře pojmenované proměnné, že se nevzájem nazastiňují. Zjednodušujeme tak práci všem čtenářům, kteří tak mají o starost méně při louskání našeho kódu. Rozhodně je ale dobré vědět, že zastínění může nastat a JavaScript runtime se s ním snadno vypořádá.

### Obory platnosti a funkce

Jak po předchozích lekcích už všichni víme, bloky kódu se používají také k vytváření funkci. Zde do oborů platnosti vstupuje další hráč, a to jsou parametry funkce. Jsou napsané ještě před blokem funkce, před otevírací závorkou `{`. Z hlediska oboru platnosti se ale chovají tak, jako by byly uvnitř bloku funkce, na jeho samém začátku. Prohlédněte si porozně následující kód:

```js
const message = 'Vítej ve světě slasti';

const checkAge = (age, message) => {
  // Z hlediska oboru platnosti jsou „age“ a „message“ jakoby definovány až zde, uvnitř bloku funkce
  if (age < 18) {
    return message;
  } else {
    const message = 'Vítej mezi dospěláky';
    return message;
  }
};
```

Vytváříme zde funkci `checkAge`, která má dva parametry `age` a `message`. Uvnitř této funkce parametr `message` zastíní globální proměnnou `message`. V bloku `else` je však tento parametr dále zastíněn lokální proměnnou `message`. Zkuste si rozmyslet, co pak bude výsledkem těchto volání.

```js
document.body.innerHTML += checkAge(15, 'Utři si sopel') + '<br>';
document.body.innerHTML += checkAge(21, 'Oh yeah!') + '<br>';
```

Je dobré připomenout, že program výše je napsán zvlášť zlovolně, a je zde především ze vzdělávacích důvodů. Pokud takový kód někady napíšete v praxi, dostanete od vašich kolegů nejspíš pořádně za uši. Nikdo nechce číst kód, nad kterým musí zbytečně hodinu přemýšlet.
