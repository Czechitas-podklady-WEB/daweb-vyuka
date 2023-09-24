---
title: Kartička – specificita
demand: 2
---

Použijte šablonu repozitáře [cviceni-specificita](https://github.com/Czechitas-podklady-WEB/cviceni-specificita).
Spusťte si soubor `index.html`.

Všimněte si, že soubor `style.css` je prázný. I přesto ale na stránce vidíme nějaké stylování - písmo, padding, barva tlačítka. Je to proto, že v HTML hlavičce je kromě souboru `style.css` nalinkovaný také další styl. Pomocí tohoto odkazu v linkování stylu jste do dokumentu napojili stylovací knihovnu [Bootstrap](https://getbootstrap.com/). Tato knihovna dokáže to, že pouze přidáním určitých tříd přidá na dané elementy stylování, aniž bychom styly museli my sami psát.

- Zkuste z elementu `button` odebrat třídu `btn-primary` a podívejte se, jak se stylování změní. Poté třídu zase přidete zpátky.

<br/>

Úkolem v tomto cvičení je upravit stylování knihovny bootstrapu a dosáhnout tohoto výsledku:
::fig[Specificity result]{src=assets/result.png}
<br/>

Přepsání Boostrap stylů dosáhneme tak, že v našem CSS souboru použijeme selektory s větší specificitou. Nestačí tedy pouze přestylovat třídy, ale použít kombinátory selektorů. Můžete si vybrat, zda použijete vícenásobný selektor, selektor typu potomek nebo jiné.
Do souboru `style.css` napiš stylování podle zadání v obrázku níže.
::fig[Specificity result]{src=assets/specificita_zadani.jpg}

- kartičce změňte barvu pozadí a `padding`
- nadpis udělejte kapitálkami a přidejte `margin`
- tlačítku změňte barvu pozadí a `border`u

Jako další pomůcka pro zjištění, na které elementy cílit, je staženém souboru obrázek s názvem `hint_specificita`. Na obrázku uvidíte, kterým elementům je třeba změnit stylování. Nezapomeňte, že ve svém stylování musíte vybrat selektory s vyšší specificitou.
