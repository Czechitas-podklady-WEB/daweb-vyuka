## Import a export

Čím větší webové aplikace budeme psát, tím důležitější je umět si dobře zorganizovat kód, abychom se v něm vyznali. Nikomu se dobře nepracuje uprostřed neproniknutelného nepořádku a nekončně dlouhého JavaScriptového souboru.

V minulých lekcích už jsme viděli, že si můžeme pro každou stránku našeho webu udělat samostatný JavaScriptový soubor. To je rozhodně dobrý začátek. V aplikacích jako FilmBox jsem však narazili na to, že se některý kód v souborech opakoval a musel se kopírovat tam a zpět. Tomu se chceme za každou cenu vyhnout. Pokud se totiž v budoucnu rozhodneme něco v takovém kódu změnit, musíme to udělat na všech místech, kde se kód opakuje. To je velmi nepraktické a zvyšuje to nebezpčí zanesení chyby.

V této lekci si ukážeme jak používat `import` a `export` ke sdílení částí kódu mezi soubory. To nám umožní kód lépe organizovat a zároveň se vyhnout opakování.

Základní postup si ukážeme na aplikaci _Zprávičky_, kterou jsem viděli, když jsme se učili tvořit vícestránkové aplikace. 

## Export

V aplikaci _Zprávičky_ jsme měli ve dvou souborech zkopírovaný tentýž kód s daty pro jednotlivé články.

```js
const articles = {
  prase_pekac: {
    title: 'Ztracené prase na dobrodružství v supermarketu',
    lead: 'Prase jménem Pekáč udělalo včerejší noc zmatky v supermarketu, když se rozhodlo prozkoumat regál s vepřovými výrobky.',
    content: 'Naštěstí se nepokusilo otevřít konzervy s masem, ale místo toho si vybralo balení klobás a rozuteklo se po prodejně. Zaměstnanci byli nuceni zavolat do práce zvířecího dobrodruha a nakonec se jim podařilo prase bezpečně chytit a vrátit ho zpět do svého domova na farmě.'V něm vytvořím proměnnou `articles` a do ní uložím objekt s daty.ocour Felix se stal novým mistrem letošného ročníku tradiční soutěže ve schovávané mezi kočkami.',
    content: 'Felixova majitelka prohlásila, že kocour vyniká ve své schopnosti se skrývat až do té míry, že ho někdy nemůže najít ani sama. Nyní zvažuje, zda by ho neměla přihlásit do celostátní televizní soutěže. Na otázku, jak Felix přišel na tak dobrý úkryt, pouze odfrkl a zmizel za gauč.',
  },
  veverka_viki: {
    title: 'Místní veverka založila vlastní "ořechovou banku"',    
    lead: 'Veverka jménem Viki se rozhodla investovat své oříšky do nového podnikání a založila na kraji místního lesa úspěšnou ořechovou banku.',
    content: 'Viki začala sbírat ořechy a ukrývat je ve stromových dutinách, které přetvořila na svou vlastní "ořechovou banku". Místní zvířata rychle začala chodit s žádostí o úvěry, a tak si Viki rychle vytvořila pověst váženého finančního institutu. Jen doufáme, že se banka nezhroutí, když se některé zvířecí dlužníky rozhodnou splácet ve formě lískového krému.',
  },
};
```

Abychom jej měli na jednom místě, vyčlením si pro tato data samostatný soubor `data.js`. Aby byla proměnná `articles` dostupná i v jiných souborech, musíme ji exportovat. To uděláme pomocí klíčového slova `export`.

```js
export const articles = {
  // objekty s články
};
```

## Import

V souborech `index.js` a `article.js` pak můžeme proměnnou `articles` importovat pomocí klíčového slova `import`.

```js
import { articles } from './data.js';
```

Můžeme ji pak použít stejně jako kdybychom ji definovali přímo v daném souboru. Už tímto jednoduchým krokem se nám podařilo kód hodně pročistit a zpřehlednit.
