---
title: Kartička - specificita
demand: 2
---

Stáhněte si [připravenou stránku](assets/specificita-zadani.zip).
Spusť si soubor `index.html`.

Všimněte si, že soubor `style.css` je prázný. I přesto ale na stránce vidíme nějaké stylování - písmo, padding, barva tlačítka. Je to proto, že v html hlavičce je kromě souboru `style.css` nalinkovaný také další styl. V tomto dokumentu máme napojenou stylovací knihovnu [Bootstrap](https://getbootstrap.com/). Tato knihovna dokáže to, že pouze přidáním určitých tříd přidá na dané elementy stylování, aniž bychom ho museli my sami psát.

- Zkuste z elementu `a` odebrat třídu `btn-primary` a podívejte se, jak se stylování změní. Poté třídu zase přidete zpátky.

Úkolem v tomto cvičení je upravit stylování knihovny bootstrapu a dosáhnout tohoto výsledku:
::fig[Specificity result]{src=assets/result.png}
<br/>

Přepsání Boostrap stylů dosáhneme tak, že v našem CSS souboru použijeme selektory s větší specificitou. Nestačí tedy pouze přestylovat třídy, ale použít kombinátory selektorů. Můžete si vybrat, zda použijete vícenásobný selektor, selektor typu potomek nebo jiné.
Do souboru `style.css` napiš stylování podle zadání v obrázku níže.
::fig[Specificity result]{src=assets/specificita-zadani.jpg}

- kartičce změň barvu pozadí a padding
- nadpis udělej kapitálkami a přidej margin
- tlačítku změň barvu pozadí a borderu
  Pokud bysis nevěděla rady, na které elementy cílit, ve staženém souboru máš obrázek s názvem `hint_specificita`. Na obrázku uvidíš, kterým elementům je třeba změnit stylování. Nezapomeň, že ve svém stylování musíš vybrat selektory s vyšší specificitou.
