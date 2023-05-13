---
title: Plyšáci
demand: 2
---

Vytvořte v Reactu webovou stránku dle následujícího vzoru.

::fig[Stránka plyšáci]{src=assets/plysaci.jpg}

Postupujte dle následujících kroků.

1. Založte si nový Reactový projekt:
   ```shell
   npm init kodim-app@latest plysaci react
   ```
1. Projekt spusťte pomocí `npm run start` jak už to znáte z dřívejška.
1. Smažte komponentu `App`. Vytvořte si proměnnou `content` a vložte do ní JSX s následujícím obsahem.
   ```html
   <h1>Plyšáci</h1>
   <div className="plushies"></div>
   ```
   Nezapomeňte obsah správně obalit do fragmentu. Vaši proměnnou pak použíjte ve funkci `render`.
1. Vytvořte si dva objekty obsahující informace o plyšácích dle následujícího vzoru.
   ```js
   const plushy1 = {
     name: 'Silvestr',
     image: 'adresa obrazku',
     text: 'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.',
   };
   const plushy2 = {
     name: 'Ctirad',
     image: 'adresa obrazku',
     text: 'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.',
   };
   ```
1. Adresy obrázků si můžeme zkopírovat z těcho odkazů: [elephant](assets/elephant.jpg), [mouse](assets/mouse.jpg).
1. Karta s plyšákem by měla ve výsledné stránce vypadat takto.
   ```html
   <div class="plushy">
     <img class="plushy__image" src="odkaz na obrazek" />
     <h2 class="plushy__name">Jméno plyšáka</h2>
     <p class="plushy__text">Text o plyšákovi</p>
   </div>
   ```
   Převeďte tento kód na JSX a vložte jej do elementu s třídou `plushies`, jednou pro každého plyšáka. Nezapomeňte, že v JSX se místo `class` píše `className`. Data pro obě karty vezměte z objektů `plushy1` a `plushy2`.
1. Přidejte do stránky soubor se styly a nastylujte ji dle zadání.
