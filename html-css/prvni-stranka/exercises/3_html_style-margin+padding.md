---
title: Profil herce
demand: 2
---

# Zadání:

> - Použijte HTML strukturu stránku s profilem herce **Rowana Atkinsona** na zdrojove adrese vzor [vzoru](https://codepen.io/SimonB87/pen/qBdMgKN) nebo použijte Váš výsledek z předchozího cvičení.
> - Kód zkopírujte do svého vlastního nového HTML souboru.
>
> **Proveďte následující úpravy**:
>
> - Založíme novou sekci "**Nejslavnější role**". Podívejte se na výsledek [zde](https://codepen.io/SimonB87/full/XWbxBrJ)
> - Pod sekci s napisiem `<h2 id="obecneUdaje">Obecné údaje</h2>` dodejte nadpis `<h2 id="role">Nejslavnější role</h2>`
> - Pod tento nadpis vložte jeden element `<div>` se třídou `class="container"`
> - Do div s třídou `"container"` vložte další `<div>` se třídou `class="role"`, který bude obsahovat další `<div>` se třídou `class="role-frame"`. Do `<div>` se třídou `class="role-frame"` pak zadejte nadpis `<h3 class="role-name roundEdge">Mr. Bean</h3>`
> - Výsledný `<div>` se třídou `class="role"` pak bude vypadat takto:
> > `<div class="role">` 
> >   `<div class="role-frame">` 
> >     `<h3 class="role-name">Mr. Bean</h3>` 
> >   `</div>` 
> > `</div>`
> - Dále udělejte další dva `<div class="role">`, kde bude v nadpisu `<h3>` název `Johny English` a `Černá Zmije`
> - Založte v CSS blok pro třídu `.role{ }`
> - Dodejte do závorek `{ }` u třídy `.role` pravidla pro nastavení:
>
> * Výška `300px` a šířka `25%`
> * Zadejte `margin` pro levou a pravou stranu `4%`
>
> - Pro jednotlivé `<div class="role">` přidejte do pozadí obrázek z webu
> - Každá postava bude mít pro sebe určen jeden obrázek. Můžete využít toho, že vyberete postupně první, druhý a třetí div pomocí **pseudo class** `:nth-child(number)` každý bude mít specifický obrázek. Budete to pak vypadat takto:
> > `/* Mr. Bean */` 
> > `.role:nth-child(1) {` 
> > `background-image: url('https://www.fandimefilmu.cz/files/images/2018/07/03/article_main_mr-bean_d.jpg');`
> > `}`
> >
> > `/* Johny English */` 
> >`.role:nth-child(2) {` 
> >`background-image: url('https://www.kranjska-gora.si/media/SlikeIT/Novice/18569-johnny_english_800x600_r.jpg');` 
> >`}`
> >
> > `/* Černá Zmije */` 
> >`.role:nth-child(3) {`
> > `background-image: url('https://ichef.bbci.co.uk/images/ic/1200x675/p01gqw7f.jpg');`
> > `}`
> >
> - Do třídy `.role` v CSS souboru přidejte pravidla pro formátování  pozadí:
> > `background-size: cover;`
> > `background-repeat: no-repeat;`
> > `background-position: top center;`
>
> - Aby se tří elementy `<div class="role">` vedle sebe hezky zobrazovaly, přidejte k třídě `.role` v CSS souboru pravidlo na zobrazení:
> > `display: inline-block;`
>
> - Přídejte do CSS pro třídu `.role-frame` s pravidly pro:
> * Automatické vycentrování elementu do prostřed: `margin: 0 auto;`
> * Šířku elementu `150px`
> * Přidejte `margin` z vrchu o `200px`
> * Upravte průhlednost elementu na 80% pro vizuální efekt `opacity: 0.80;`
>
> - Přídejte do CSS pro třídu `.role-name` s pravidly pro: 
> * Dodejte vnitřní okraj nadpisu: `padding: 10px;`
> * Přidejte elementu tmavé pozadí: `background-color: darkblue;`
> * Přidejte elementu bílou barvu textu: `color: white;`
> * Vycentrujte text nadpisu na střed: `text-align: center;`
>
> - Výsledekné řešení můžete vidět na [zde](https://codepen.io/SimonB87/pen/XWbxBrJ)
