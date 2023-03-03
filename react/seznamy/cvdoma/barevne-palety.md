---
title: Barevné palety
demand: 3
---

Cílem tohoto cvičení je na základě připraveného kódu vytvořit Reactovou aplikaci, která bude zobrazovat návrhy barevných palet. Takové palety používají například designéři při vybírání barevných schémata pro nové weby. Barevné palety se budou načítat z dat připravených přímo v kódu aplikace.

1. Pomocí tlačíka _Use this template_ si vytvořte vlastní GitHub repozitář z [této šablony](https://github.com/Czechitas-podklady-WEB/barevne-palety). **Nepoužívejte** forkování, protože pak všichni ostatní uvidí váš projekt.
1. Nově vytvořený repozitář si naklonujte na svůj počítat. **Neklonujte** přímo repozitář se zadáním, nemohli byste do něj pak pushnout.
1. Nainstalujte závislosti pomocí `npm install`.
1. Prohlédněte si strukturu projektu. Aplikace zatím obsahuje pouze jednu komponentu `App` v hlavním souboru `index.jsx`. V té je ukázka toho, jak by měla výsledná webová stránka vypadat. Spusťte si projekt pomocí `npm run start` a prohlédněte si dvě ukázkové barevné palety vykreslené na stránce.
1. V souboru `palettes.js` najdete připravená data pro další barevné palety, které budeme na stránce chtít zobrazit. Importujte si toto pole s daty do hlavního `index.jsx`, abychom s ním mohli dále pracovat.
1. Nejprve vybereme pouze první paletu v poli `palettes` a zobrazíme její barvy. Vezměte pole barev z této první palety a pomocí funkce `map` zobrazte všechny barvy přímo v komponentě `App`. Jako `key` použijte kód barvy.
1. Udělejte v komponentě `App` totéž i pro druhou paletu.
1. Vyrobíme si komponentu pro zobrazení jedné barvy. V samostatné složce vytvořte komponentu `SchemeColor`, která jako `prop` obdrží hodnotu barvy a vykreslí příslušný `div` s barvou pozadí a kódem. Do složky této komponenty vložte související styly ze souboru `style.css`. Použijte tuto komponentu uvnitř obou volání funkce `map` v souboru `index.jsx`.
1. Nyní jsme připraveni vyrobit komponentu pro celou paletu. Opět v samostatné složce vytvořte komponentu `Palette`, která jako `prop` s názvem `paletteData` obdrží objekt z pole `palettes`. Do komponenty přesuňte veškerý kód týkající se vykreslení palety a opět do složky s komponentou přesuňte příslušné styly.
1. V komponentě si dejte pozor na to, že máme dva druhy palet: vertikální a horizontální. Sestavte tedy v komponentě správně název příslušné CSS třídy podle toho, jaký typ palety zrovna zobrazujeme.
1. V komponentě `App` pomocí metody `map` zobrazte všechny palety z pole `palettes`. Jako `key` můžete použít název palety, který je vždy unikátní.
1. Na stránce byste měli vidět všechny palety se správnými barvami a obrázky, orientací, popiskem a fungujícím proklikem na autora obrázku. Otestujte, že všechny tyto náležitosti správně fungují.