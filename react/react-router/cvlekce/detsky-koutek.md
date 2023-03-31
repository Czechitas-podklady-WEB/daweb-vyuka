---
title: Dětský koutek
demand: 3
---

V tomto cvičení vytvoříte jednoduchou stránku pro dětský koutek. Pomocí knihovny React Router vytvoříte navigaci která umožní zobrazit různé komponenty na základě cesty v URL.

1. Vygenerujte si novou aplikaci pomocí příkazu
   ```sh
   npm init kodim-app detsky-koutek
   ```
1. Nainstalujte si knihovnu React Router pomocí _npm_:
   ```sh
   npm install react-router-dom
   ```
1. Spusťte aplikaci příkazem `npm start` a zkontrolujte, že vám v prohlížeči správně běží.
1. Nebojte se v následujících krocích inspirovat dokumentací [React Routeru](https://reactrouter.com/en/main/start/overview)!
1. V hlavním souboru `index.jsx` založte objekt s routami. Zatím zobrazujte pouze hlavní komponentu `App` pod cestou `/`. Nezapomeňte použít `RouterPorivder` ve funkci `render`. Vyzkoušejte, že takto vaše aplikace funguje.
1. V `src` adresáři vytvořte složku `pages` a uvnitř složky s komponentemi pro jednotlivé stránky _Home_, _About_ a _Contact_.
1. Stránka _Home_ bude obsahovat nadpis a odstavec s textem:

   ```
   Dětský koutek

   Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6ti let. Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti pomůže jim učit se nové věci. Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!
   ```

1. Stránka _About_ bude obsahovat nadpis a odstavec s textem:

   ```
   O nás

   Jsme tým mladých nadšenců do vzdělávání a zábavy pro děti. Naše poslání je vytvářet podnětné a zábavné aktivity pro děti, které podporují jejich rozvoj a učení nových dovedností. Vytvořili jsme dětský koutek jako místo, kde se děti cítí v bezpečí, mohou objevovat a zároveň se něco nového naučit. Doufáme, že se k nám vydáte a budete s námi sdílet své zážitky a nápady na další aktivity!
   ```

1. Stránka _Contact_ bude obsahovat nadpis a odstavec s textem:

   ```
   O nás

   Pokud máte jakékoliv otázky, nápady nebo nám chcete prostě jen napsat, zanechte nám zprávu přes náš kontaktní formulář a my se vám co nejdříve ozveme. Pokud preferujete jiný způsob komunikace, můžete nám také napsat e-mail na adresu info@detskykoutek.cz nebo nás kontaktovat přes naše sociální sítě. Děkujeme vám za vaši zpětnou vazbu a těšíme se na vaše zprávy!
   ```

1. V souboru `index.jsx` si naimportujme všechny vytvořené stránky a přidejte je jako ;`children` vašeho routeru pod cesty `/`, `about` a `contact`.
1. V komponentě `App` vytvořte navigaci pomocí `Link` komponent a dejte do ní odkazy na všechny výše uvedené stránky. Použijte komponentu `Outlet` na vyznačení místa, kam se máji vkládat jednotlivé stránky.
1. Vyzkoušejte, že aplikace správně naviguje - mění adresu a obsah podle klikání na odkazy.
1. Pokud máte čas a chuť, přidejte na web zajímavější obsah dle libosti a nastylujte jednotlivé stránky i navigaci.
