---
title: Mixér barev
demand: 3
---

Cílem projektu je vytvořit Reactovou aplikaci, která umožňuje namíchat si barvu ze složek RGB tak, jak jste na to zvyklí z různých grafických programů. Na začátku máte připravenou funkční aplikaci v čistém JavaScriptu. Vaším úkolem bude tuto aplikaci přepsat do Reactu.

1. Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/mixer-barev) s funkční aplikací. Otevřete si projekt ve VS Code. Stránka je napsána v čistém JavaScriptu bez Webpacku, stačí ji tedy spustit pomocí `npx serve`. Vyzkoušejte si, jak aplikace funguje.
1. Budeme chtít tuto aplikaci přepsat do Reactu. Za tímto účelem si založte vlastní prázdný repozitář na vašem GitHubu. Naklonujte si jej k sobě do počítače a vytvořte v něm základ Reactové aplikace pomocí
   ```
   npm init kodim-app .
   ```
1. Vytvořte hlavní komponentu `App`, která zobrazuje celý obsah stránky včetně stylů a obrázků podle zadání. Stránka zatím nebude funkční, protože původní JavaScriptový kód nám v Reactu fungovat nebude.
1. Vytvořte nejprve komponentu `ColorSlider` zobrazující jeden posuvník. Přesuňte do složky s komponentou správné CSS styly. Komponenta `ColorSlider` bude mít dvě props: `baseColor` a `colorName`. Prop `baseColor` udává, jakou posuvník ovládá barvu, tedy `red`, `green` nebo `blue`. Prop `colorName` udává zobrazený název barvy.
1. Použijte komponentu `ColorSlider` k zobrazení všech tří posunvíků uvnitř `App`.
1. Opět uvnitř komponenty `App` vytvořte tři stavy `redValue`, `greenValue`, `blueValue`. Každý reprezentuje hodnotu jedné z barevných složek. Použijte tyto hodnoty k vytvoření finální barvy uvnitř prvku `.color-bor`. K tomu budete potřebovat vědět jak se v Reactu nastavují inline styly. Hezký článek najdete například na [w3chools](https://www.w3schools.com/react/react_css.asp). Vyzkoušejte, si, že když stavůn nastavíte nějaké výchozí hodnoty, bude na stránce vidět správně namíchaná barva.
1. Nyní budeme chtít propojit hodnoty posuvníků se těmito stavy aby se barva měnila v reakci na vstup od uživatele. Budeme tedy potřebovat komunikaci dítě -> rodič. `ColorSlider` (dítě) musí být schopen sdělit komponentě `App` (rodič), že uživatel změnil hodnotu na posuvníku.
1. V komponentě `ColorSlider` přidejte novou prop s názvem `onValueChange`. Bude to callback s jedním parametrem `value`. Tuto funkci komopnenta zavolá pokaždé, když se změní hodnota posuvníku. Volání této funkce je způsob, jak předat hodnotu posuvníku nahoru do `App`. Funkci tedy zavolejte v reakci na událost `onChange` na posuvníku a předejte jí aktuální hodnotu v posuvníku.
1. Jako poslední krok stačí každé komponeně `ColorSlider` předat funkci pro změnu stavu skrze prop `onValueChange.` `ColorSlider` pro červenou barvu tak v prop `onValueChange` dostane funkci `setRedValue` atd.
1. Pokud jste všechno propojili správně, měla by vaše aplikace nyní fungovat.
