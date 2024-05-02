---
title: Komponenty
lead: Rozsekejte hlavní stránku na komponenty.
demand: 3
context: lekce
---

Jako první budeme chtít rozsekat hlavní stránku index.jsx na následující komponenty:

- `Header` - hlavička stránky,
- `Banner` - uvítací obrázek,
- `Menu` - meníčko s nápoji,
- `Gallery` - obrázek kavárny a texty,
- `Contact` - kontakt a otvírací hodiny,
- `Footer` - patička.

1.  Ve složce `src` vytvořte složku `components` a v ní postupně vytvořte všechny výše zmíněné komponenty pro hlavní stránku. Rozsekejte JSX i CSS tak, aby každá komponenta měla vlastní styly i obrázky. Globální styly pro celou aplikaci najdete v souboru `global.css`, ten ponechte beze změny. Styly komponent hlavní stránky najdete v souboru `index.css`. Soubor `index.css` je strukturovaný tak, aby styly pro jednotlivé komponenty byly seskupené u sebe, nemusíte tak zoufale lovit styly po celém projektu. V souboru `order.css` jsou styly pro detail objednávky – ty zatím neřešte, detailem se budete zabývat až v druhé části projektu.

    Chceme dosáhnout toho, aby kód pro obsah hlavní stránky aplikace v `index.jsx` vypadal takto:

    ```jsx
    document.querySelector('#root').innerHTML = render(
      <div className="page">
        <Header />
        <main>
          <Banner />
          <Menu />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    );
    ```

1.  Vyzkoušejte, že máte hotovou stránku, která vypadá stejně jako stránka ze zadání s funkční navigací. Proveďte commit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.
