---
title: Objednávka
demand: 2
---

Podle instrukcí níže vytvořte jednoduchý formulář pro dokončení objednávky na nějakém e-shopu. Formulář umožní uživateli zadat číslo platební karty a způsob dopravy.

1. Vytvořte HTML stránku s JavaScriptem. Vložte do stránky [styly pro formuláře](https://raw.githubusercontent.com/Czechitas-podklady-WEB/formulare/main/style.css) ať se nemusíte trápit se stylováním.
1. Vytvořte formulář s textovým políčkem pro číslo platební karty. Dejte mu štítek „Platební karta“ a atribut `type` nastavte na `text`.
1. Přidejte do formuláře rozbalovací nabídku se štítkem „Doprava“. Jako jednotlivé možnosti použijte prvky `option` s následujícím obsahem:

   - vyzvednout na pobočce, atribut `value="pobocka"`,
   - Zásilkovna, atribut `value="zasilkovna"`,
   - Česká pošta, atribut `value="posta"`,
   - PPL, atribut `value="ppl"`.

1. Přidejte tlačítko „Odeslat objednávku“.
1. Přidejte posluchače na událost `submit`. Jakmile uživatel formulář odešle, nahraďte celý formulář zprávou „Objednávka odeslána ke zpracování“.
