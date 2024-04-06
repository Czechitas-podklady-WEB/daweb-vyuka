---
title: Objednávka
lead: 'Formulář pro dokončení objednávky na e-shopu.'
demand: 2
context: lekce
solutionAccess: protected
---

Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

::fig[Objednávka]{src=assets/objednavka.gif}

1. Založte si HTML stránku s JavaScriptem.

1. Do souboru `style.css` vložte [styly pro formuláře](https://raw.githubusercontent.com/Czechitas-podklady-WEB/formulare/main/style.css) ať se nemusíte trápit se stylováním.
1. Vytvořte formulář s textovým políčkem pro číslo platební karty. Dejte mu štítek „**Platební karta**“ a atribut `type` nastavte na `text`.
1. Přidejte do formuláře rozbalovací nabídku se štítkem „**Doprava**“. Jako jednotlivé možnosti použijte prvky `option` s následujícím obsahem:

   - vyzvednout na pobočce, atribut `value="pobocka"`,
   - Zásilkovna, atribut `value="zasilkovna"`,
   - Česká pošta, atribut `value="posta"`,
   - PPL, atribut `value="ppl"`.

1. Přidejte tlačítko „**Odeslat objednávku**“.
1. Přidejte posluchače na událost `submit`. Jakmile uživatel formulář odešle, nahraďte celý formulář zprávou „**Objednávka odeslána ke zpracování.**“

#### Bonus 1

- Zkuste si po odeslání formuláře zobrazit všechny hodnoty, které uživatel vyplnil. Vypište je do konzole.
- Pohledem do konzole ověřte, že pokud uživatel zadá jako dopravu **Českou poštu**, v konzoli se objeví hodnota `posta`.

#### Bonus 2

- Platební karta musí mít přesně 16 číslic. Pokud uživatel zadá méně nebo více, zobrazte pod formulářem chybovou hlášku. Pro hlášku si v HTML souboru připravte prvek `<p>`. Hlášku zobrazte s každým novým vstupem od uživatele (událost `input` na prvku `<input>`). Pokud je vše v pořádku, chybovou hlášku smažte.

  - Pro příliš krátkou kartu použijte text „**Číslo karty je příliš krátké. Chybí X číslic.**“
  - Pro příliš dlouhou kartu použijte text „**Číslo karty je moc dlouhé. Přebývá X číslic.**“

- Zkuste místo události `input` poslouchat na událost `change`. Jak se liší jejich chování? Která varianta je lepší? `input` nebo `change`?

:::solution

Obsah souboru `index.html`:

```html
<div class="container">
  <form>
    <h1>Objednávka</h1>
    <label class="field">Platební karta: <input type="text" /> </label>
    <label class="field">
      Doprava:
      <select>
        <option value="pobocka">Vyzvednout na pobočce</option>
        <option value="zasilkovna">Zásilkovna</option>
        <option value="posta">Česká pošta</option>
        <option value="ppl">PPL</option>
      </select>
    </label>
    <div class="controls">
      <button type="submit">Odeslat objednávku</button>
    </div>
  </form>
</div>
```

Obsah souboru `index.js`:

```js
const formular = document.querySelector('form');
formular.addEventListener('submit', (event) => {
  event.preventDefault();
  formular.innerHTML = `
      <h1>Hotovo</h1>
      <p>Objednávka odeslána ke zpracování.</p>
   `;
});
```

:::
