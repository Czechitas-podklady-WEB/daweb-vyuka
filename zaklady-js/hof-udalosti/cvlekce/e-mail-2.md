---
title: E-mail podruhé
demand: 2
---

Pojďme dále rozvinout cvičení s [vyplňováním e-mailu](/kurzy/daweb/zaklady-js/funkce-obory/cv-funkce#cvlekce%3Ee-mail-telo) z předchozí lekce. 

1. Opět si naklonujte [repozitář](https://github.com/Czechitas-podklady-WEB/email-zadani) se zadáním pro předchozí cvičení.
1. Do souboru `index.js` vložte kód [vzorového řešení](/kurzy/daweb/zaklady-js/funkce-obory/cv-funkce/cvlekce%3Ee-mail-telo). Na tomto kódu budeme dále stavět.
1. Všimněte si funkce `goodbye`, která generuje pozdrav na konec e-mailu. Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. Například `formalGoodbye` pro velmi formální pozdravy jako „S uctivou poklonou…“, nebo naopak `rudeGoodbye` typu „Se měj…“, pokud se chcete rozloučit nevybíravě.
1. Udělejte z funkce `fillBody` funkci vyššího řádu. Přidejte jí třetí parametr `goodbyeFunc`, který představuje funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci `fillBody` postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.
