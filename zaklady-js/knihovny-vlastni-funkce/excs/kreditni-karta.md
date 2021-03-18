---
title: Kreditní karta
demand: 2
---

1. Vytvořte prázdnou stránku, do které vložte knihovnu `validator.js`. 
1. Otevřete stránku v prohlížeči a pomocí metody `validator.isEmail` ověřte svoji emailovou adresu. 
1. Pokud máte po ruce svoji platební kartu, ověřte, že má platné číslo pomocí metody `isCreditCard`.
1. Do těla stránky vložte prázdný odstavec, který bude zobrazovat zprávu pro uživetele.
   ```html
   <p id="msg" class="msg"></p>
   ```
1. Pomocí funkce `prompt` požádejte uživatele o jeho email. V případě, že jde o platný email, zobrazte v připraveném odstavci zprávu "Email v pořádku". V opačném případě zobrazte "Neplatný email".
1. Pokud je email platný, přidejte zároveň na odstavec CSS třídu `msg--valid`. V opačném případě použijte třídu `msg--invalid`. Třídy nastylujte například tak, že `msg--valid` bude mí zelené pozadí a `msg--invalid` naopak červené.
