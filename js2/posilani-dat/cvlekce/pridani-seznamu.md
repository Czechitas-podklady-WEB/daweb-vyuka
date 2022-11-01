---
title: Nákupní seznam
demand: 2
---

Rozšiřme náš nákupní seznam o možnost přídání nové položky. API pro nákupní seznam, na kterém si můžeme vyzkoušet POST se jmenuje :i[Shoplist] a umožňuje pracovat s nákupními seznamy tak, jak je známe z předchozích lekzí. API umožňuje vytvářet nové seznamy, přidávat či odebírat položky ze seznamů nebo nastavovat položky jako koupené. Dokumentaci k tomuto API nejdete [zde](https://apps.kodim.cz/daweb/shoplist/docs/).

Nejdříve si vyzkoušíme vytvoření nového seznamu.

1. V prohlížeči si vyzkoušejte enpoint `/api/lists`. Měl by vrátit názvy všech nákupních seznamů. Vždy byste měli vidět alespoň jeden seznam s názvem :i[default].
1. Pomocí endpointu `/api/lists/default` si prohlédněte obsah seznamu :i[default].
1. Prohlédněte si [dokumentaci](https://apps.kodim.cz/daweb/shoplist/docs/sending#create-new-shopping-list-post) a podívejte se, jak se dělá přidání nového nákupního seznamu.
1. Založte si prázdnou stránku s JavaScriptovým programem.
1. Zkuste pomocí funkce `fetch` vytvořit prázdný seznam s nějakým názvem. Pozor na název seznamu, může obsahovat pouze malá písmena bez diakritiky a čísla.
1. Vytvořte na stránce formulář, který umožné uživateli zadat název seznamu a odesláním formuláře tento seznam vytvořit.
1. V prohlížeči si pomocí enpodointu `/api/lists` zkountrolujte, že se vámi vytvořené seznamy skutečně objevují na serveru.
