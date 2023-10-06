---
title: Rádio
demand: 3
lead: Vytvořte webové stránky pro přehled rádií.
solutionAccess: lock
---

Vytvořime web, kde na každné stránce zobrazíme datail jedné stanice rádia.

1. Založte si nový prázdný projekt jen se souborem `radio.js`.
1. V souboru založte datovou strukturu pro rádio. Každá stanice bude mít název, frekvenci, popis a odkaz. Např:
   ```js
    const radio = [
      { 
        name: "Evropa 2",
        frequency: "88.6 FM",
        description: "Evropa 2 je nejposlouchanější česká komerční rádio mezi mladými posluchači. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
        link: "/evropa2.html",
      },
      { 
        name: "Frekvence 1",
        frequency: "102.1 FM",
        description: "Frekvence 1 je česká soukromá rozhlasová stanice, která vysílá od roku 1991. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
        link: "/frekvence1.html",
      },
      { 
        name: "Radiožurnál",
        frequency: "92.6 FM",
        description: "Radiožurnál je česká rozhlasová stanice Českého rozhlasu. Vysílá hudbu z žebříčků, kterou si sami vybírají posluchači a nejnovější hity.",
        link: "/radiozurnal.html",
      },      
    ];
    ```
1. Tuto datovou strukturu ze souboru správně exportujte.
1. Vytvořte stránku pro první stanici `evropa2.html` a na ni napojený soubor `evropa2.js`. V souboru `evropa2.js` importujte data ze souboru `radio.js` a pomocí JavaScriptu zobrazte na stráce stanici z prvního indexu pole. Použijte nějaké vhodné HTML elementy.
1. Nyní vytvoříme pro náš web navigaci. V `evropa2.html` vytvořte hlavičku `<header>`. V souboru `evropa2.js` vytvořte funkci `renderNavigation`, pomocí které vykreslíte do hlavičky stránky navigaci s odkazy na jednotlivé stanice. Použijte k tomu funkci `forEach`.
1. Vytvořte stránky pro zbylé dvě stanice. Pro každou vytvořte příslušný HTML soubor a soubor s JavaScriptem. V JavaScriptu vždy zobrazte na stránce příslušnou stanici. Stačí zkopírovat kód z první stránky a upravit index položky v poli.
1. Takto se nám samozřejmě bude kód pro zobrazení stanice opakovat na každé stránce znova. Vytvořte proto v souboru `radio.js` funkci `renderStation`, která bude mít jako parametr index stanice. Funkce vykreslí do stránky stanici, tak jako prve. Funkci tak nyní můžeme importovat do všech souborů s JavaScriptem a použít ji pro zobrazení stanice. Nesmíme však funkci zapomenout správně exportovat.
1. Všimněte si, že totéž můžeme provést s funkcí `renderNavigation`. Přesuňte tuto funkci do souboru `radio.js`. Správně ji exportujte a použijte ji na každé stránce pro vykreslení navigace.
