---
title: Šachovnice
demand: 2
---

Založte JavaScriptový program a vytvořte v něm pole pojmenované `sachovnice`, které bude reprezentavat rozehranou šachovou partii jako na obrázku.

::fig[Počáteční rozestavení]{src=assets/sachovnice.png}

1. Zkopírujte na začátek vašeho programu předpřipravenou funkci `zobraz`, pomocí které později zobrazíte šachovnici. Ve funkci není potřeba nic měnit.
   ```js
   const zobraz = (data) => {
     const url = `https://czechitas-podklady.cz/vizualizace-sachovnice/?s=${JSON.stringify(
       data
     )}`;
     document.body.innerHTML += `
   		<div>
   			<pre>${JSON.stringify(data)
           .replace('[[', '[<br/>\t[')
           .replace(']]', ']<br/>]')
           .replaceAll(',[', ',<br/>\t[')
           .replaceAll(',', ',\t')}</pre>
   			<iframe src="${url}" width="550" height="420" frameBorder="0"></iframe>
   			<hr/>
   		</div>
   		`;
   };
   ```
1. Šachovnici reprezentujte jako pole polí, kde každý řádek šachovnice je reprezentován jako jedno pole. Políčka reprerezentujte jako čísla dle následujícího klíče. Pro prázdné políčko použijte číselnou hodnotu `0`.
   ::fig[Figury]{src=assets/figury.png}
1. Ověřte, že vaše pole má správnou podobu zavoláním funkce `zobraz(sachovnice)`.
1. Pokračujte v kódu programu. Napište příkazy pro přesun bílého koně z pozice `f3` na pozici `e5`, kde sebere černého pěšce. Výsledkem by mělo být upravené pole obsahující nové pozice figurek.
   ::fig[Výsledek]{src=assets/vysledek.png}
1. Opět ověřte, že vaše pole má správnou podobu zavoláním funkce `zobraz(sachovnice)`.

#### Nápověda

Výsledný kód by měl vypadat následovně:

```js
const zobraz = (data) => {
  // Zde bude kód zkopírovaný ze zadání výše.
};

const sachovnice = [
  /* Zde bude váš kód reprezentující rozehrané rozestavení. */
];

// Následující řádek zobrazí na stránce šachovnici s rozehraným rozestavení.
zobraz(sachovnice);

/*
Sem přijde váš kód, který na poli sachovnice provede tah koněm.
*/

// Následující řádek zobrazí na stránce šachovnici po provedeném tahu.
zobraz(sachovnice);
```

:::solution

```js
const zobraz = (data) => {
  // …
};

const sachovnice = [
  [0, 0, 0, 0, 0, -4, -6, 0],
  [0, 0, 0, 0, 0, -1, -1, -1],
  [0, 0, -1, 0, 0, 0, 0, 0],
  [0, -1, 1, 0, -1, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 1],
  [0, 0, 0, 0, 2, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 6, 0],
];

zobraz(sachovnice);

sachovnice[3][4] = 3;
sachovnice[5][5] = 0;

zobraz(sachovnice);
```

:::
