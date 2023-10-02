---
title: Recitály
demand: 2
lead: Vykoušejte si podrobné vysvětlování kódu.
solutionAccess: allow
---

U všech následujících úryvků kódů vytvořte technický popis jejich fungování a zároveň zkuste odhadnout záměr daného kódu. Obě dvě části si skutečně napište například do textového souboru.

1.  ```js
    const average = (a, b) => {
      return (a + b) / 2;
    };
    ```
1.  ```js
    const titleElement = document.querySelector('.title');
    titleElement.textContent = 'Nadpis';
    ```
1.  ```js
    let time = 0;
    setTimeout(() => {
      time += 1;
      console.log('time', time);
    }, 1000);
    ```
1.  ```js
    buttonOk.addEventListener('click', () => {
      document.body.innerHTML = '<p>Everything OK</p>';
    });
    ```
1.  ```js
    document.addEventListener('keyup', (event) => {
      if (event.code === 'KeyP') {
        console.log('paused');
      }
    });
    ```

:::solution

### 1

```js
const average = (a, b) => {
  return (a + b) / 2;
};
```

1. Vytvářím funkci, která očekává na vstupu dva parametry, které sipojmenovávám `a` a `b`. Funkci si ukládám do proměnné pojmenované `average`.
1. V těle funkce je jediný příkaz, který vypočítá součet parametrů `a` a `b`, součet vydělí dvěma a výslednou hodnotu vrátí pomocí `return` jako návratovou hodnotu funkce.

Funkce `average` počítá průměrnou hodnotu dvou zadaných čísel.

### 2

```js
const titleElement = document.querySelector('.title');
titleElement.textContent = 'Nadpis';
```

1. Pomocí metody `querySelector()` vyhledám první element v dokumentu, který odpovídá zadanému CSS selektoru `.title`. Selektor odpovídá všem prvkům s třídou `title`. Nalezený prvek se uloží do proměnné `titleElement`.
1. Do textového obsahu (`textContent`) nalezeného prvku se vloží text „Nadpis“ – původní obsah se přepíše.

Kód nastaví text „Nadpis“ do prvního elekemntu se třídou `title` v dokumentu. (Pokud by v dokumentu takový element nebyl, kód spadne s chybou.)

### 3

```js
let time = 0;
setTimeout(() => {
  time += 1;
  console.log('time', time);
}, 1000);
```

1. Vytvořím proměnnou `time`, do které se uloží číslo `0`. Obsah proměnné bude možné později v kódu změnit.
1. Zavolám funkci `setTimeout()`, která zavolá mou funkci (_callback_) za jednu sekundu.
1. Předaná callback funkce je anonymní.
1. Předaná callback funkce má v těle dva příkazy.
1. První příkaz funkce zvýší hodnotu proměnné `time` o `1`.
1. Druhý příkaz vypíše dvě hodnoty do konzole v DevTools prohlížeče. První hodnota je text „time“, druhá hodnota je aktuální hodnota proměnné `time` (tj. `1`).

Kód jednu sekundu po načtení stránky vypíše do konzole `time 1`.

### 4

```js
buttonOk.addEventListener('click', () => {
  document.body.innerHTML = '<p>Everything OK</p>';
});
```

1. Kód předpokládá existenci proměnné `buttonOk`, která obsahuje DOM element (pravděpodobně potvrzovací tlačítko).
1. Na proměnné `buttonOk` se volá metoda addEventListener se dvěma parametry. Metoda `addEventListener` nastaví posluchače událostí na DOM elementu `buttonOk`.
1. První parametr metody `addEventListener` je název události, které chceme poslouchat. Zde se nastavuje událost `click`, tedy kliknutí tlačítkem myši.
1. Druhý parametr je funkce (_callback_), která se zavolá v okamžiku, kdy došlo k dané události – v tomto případě kdy uživatel klikl na tlačítko `buttonOk`.
1. V tomto případě se předává anonymní funkce (_callback_).
1. V těle funkce je jediný příkaz. Z proměnné `document` (ve které je DOM element reprezentující celý dokument zobrazený v prohlížeči) se přečte vlastnost (_property_) `body`, která obsahuje DOM element odpovídající elementu `<body>` v HTML, tedy viditelnou část webové stránky.
1. Do vlastnosti (_property_) `innerHTML` property `body` se zapíše (přepíše) text „<p>Everything OK</p>“. Vlastnost `innerHTML` reprezentuje HTML kód příslušného DOM elementu (v tomto případě viditelného obsahu celé stránky).
1. Text „<p>Everything OK</p>“ představuje HTML kód – odstavec textu (element `<p>`) s vloženým textem „Everything OK“.

Při kliknutí na tlačítko `buttonOk` se přepíše obsah celé webové stránky, nahradí se jedním odstavcem, ve kterém bude text „Everything OK“.

### 5

```js
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {
    console.log('paused');
  }
});
```

1. Na proměnné `document` (reprezentující celý dokument zobrazený v prohlížeči) se zavolá metoda `addEventListener`, která nastavuje posluchač události. Metoda dostane dva parametry.
1. První parametr je text „keyup“, posluchač události tedy bude navěšen na události, když uživatel pustil dříve stisknutou klávesu.
1. Druhý parametr je funkce (_callback_), která se zavolá, když k uvedené události dojde.
1. Předávaná funkce je anonymní funkce, která očekává jeden parametr. Pojmenovává si ho `event`.
1. Tělo funkce tvoří jeden příkaz – podmínka (`if`), která testuje, zda vlastnost (_property_) `code` události (parametr `event`) je rovna řetězci „KeyP“. Testuje se, zda událost nese informaci, že uživatel pustil klávesu s písmenem „P“.
1. Pokud je podmínka splněna, zavolá se metoda `log` na objektu `console` s parametrem – textem „paused“.

Pokaždé, když uživatel kdekoli v dokumentu stiskne a pak pustí klávesu „P“, vypíše se do konzole v DevTools text „paused“.

:::
