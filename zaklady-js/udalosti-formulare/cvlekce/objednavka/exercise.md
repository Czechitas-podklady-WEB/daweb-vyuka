---
title: Objednávka
demand: 2
offerSolution: true
---

:::assign
Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

::fig[Objednávka]{src=assets/objednavka.gif}

1. Vytvořte HTML stránku s JavaScriptem. Vložte do stránky [styly pro formuláře](https://raw.githubusercontent.com/Czechitas-podklady-WEB/formulare/main/style.css) ať se nemusíte trápit se stylováním.
1. Vytvořte formulář s textovým políčkem pro číslo platební karty. Dejte mu štítek „Platební karta“ a atribut `type` nastavte na `text`.
1. Přidejte do formuláře rozbalovací nabídku se štítkem „Doprava“. Jako jednotlivé možnosti použijte prvky `option` s následujícím obsahem:

   - vyzvednout na pobočce, atribut `value="pobocka"`,
   - Zásilkovna, atribut `value="zasilkovna"`,
   - Česká pošta, atribut `value="posta"`,
   - PPL, atribut `value="ppl"`.

1. Přidejte tlačítko „Odeslat objednávku“.
1. Přidejte posluchače na událost `submit`. Jakmile uživatel formulář odešle, nahraďte celý formulář zprávou „Objednávka odeslána ke zpracování.“

:::

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
const formular = document.querySelector('form')
formular.addEventListener('submit', (event) => {
   event.preventDefault()
   formular.innerHTML = `
      <h1>Hotovo</h1>
      <p>Objednávka odeslána ke zpracování.</p>
   `
})
```