---
title: Plyšáci
demand: 2
context: lekce
lead: Vyrobte jednoduchou stránku s plyšáky.
solutionAccess: protected
---

Vytvořte pomocí JSX webovou stránku dle následujícího vzoru.

::fig[Stránka plyšáci]{src=assets/plysaci.jpg}

Postupujte dle následujících kroků.

1. Založte si nový JSX projekt:
   ```shell
   npm init kodim-app@latest plysaci jsx
   ```
1. Projekt spusťte pomocí `npm run dev`, jak už to znáte z dřívejška.
1. V hlavním souboru `index.jsx` smažte JSX ve funkci `render` a vložte do ní JSX s následujícím obsahem.
   ```jsx
   <h1>Plyšáci</h1>
   <div className="plushies"></div>
   ```
   Nezapomeňte obsah správně obalit do fragmentu.
1. Vytvořte si proměnné obsahující informace o plyšácích dle následujícího vzoru.

   ```js
   const name1 = 'Silvestr';
   const image1 = 'adresa obrazku';
   const text1 =
     'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechno kolemjdoucí.';

   const name2 = 'Ctirad';
   const image2 = 'adresa obrazku';
   const text2 =
     'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';
   ```

1. Adresy obrázků si můžeme zkopírovat z těchto odkazů: [elephant](assets/elephant.jpg), [mouse](assets/mouse.jpg).
1. Karta s plyšákem by měla ve výsledné stránce vypadat takto.
   ```html
   <div class="plushy">
     <img class="plushy__image" src="odkaz na obrazek" />
     <h2 class="plushy__name">Jméno plyšáka</h2>
     <p class="plushy__text">Text o plyšákovi</p>
   </div>
   ```
   Převeďte tento kód na JSX a vytvořte dvě komponenty `Silvestr` a `Ctirad`, kde každá bude vracet JSX pro jednoho plyšáka. Nezapomeňte, že v JSX se místo `class` píše `className`. Data pro obě karty vezměte přímo z proměnných výše.
1. Vložte obě komponenty do stránky a vyzkoušejte si, že se zobrazují.
1. Nastylujte stránku dle zadání.
