---
title: Kreditní karta
demand: 2
---

1. Vytvořte prázdnou stránku, do které vložte knihovnu `validator.js` a svůj JavaScript `index.js`. 
1. Otevřete stránku v prohlížeči a pomocí metody `validator.isEmail` ověřte svoji e-mailovou adresu. Výsledek ověření vypište do konzole. 
1. Pokud máte po ruce svoji platební kartu, ověřte, že má platné číslo pomocí metody `isCreditCard`.
1. Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživetele.
   ```html
   <p id="msg" class="msg"></p>
   ```
1. Pomocí funkce `prompt` požádejte uživatele o jeho e-mail. V případě, že jde o platný e-mail, zobrazte v připraveném odstavci zprávu "E-mail v pořádku". V opačném případě zobrazte "Neplatný e-mail".
1. Pokud je e-mail platný, přidejte zároveň na odstavec CSS třídu `msg--valid`. V opačném případě použijte třídu `msg--invalid`. Třídy nastylujte například tak, že `msg--valid` bude mí zelené pozadí a `msg--invalid` naopak červené.
