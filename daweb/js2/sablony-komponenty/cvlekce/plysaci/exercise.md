---
title: Plyšáci
demand: 2
lead: Vyrobte jednoduchou stránku s plyšáky.
solutionAccess: lock
---

Vytvořte pomocí JSX webovou stránku dle následujícího vzoru.

::fig[Stránka plyšáci]{src=assets/plysaci.jpg}

Postupujte dle následujících kroků.

1. Založte si nový vanilla projekt:
   ```shell
   npm init kodim-app@latest plysaci vanilla
   ```
1. Projekt spusťte pomocí `npm run dev`, jak už to znáte z dřívejška.
1. V hlavním souboru `index.jsx` vytvořte proměnnou `content` a vložte do ní JSX s následujícím obsahem.
   ```jsx
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
   Převeďte tento kód na JSX a vytvořte dvě komponenty `Silvestr` a `Ctirad`, kde každá bude vracet JSX pro jednoho plyšáka. Nezapomeňte, že v JSX se místo `class` píše `className`. Data pro obě karty vezměte přimo z objektů `plushy1` a `plushy2`.
1. Vložte obě komponenty do stránky a vyzkoušejte si, že se zobrazují.
1. Přidejte do stránky soubor se styly a nastylujte ji dle zadání.
