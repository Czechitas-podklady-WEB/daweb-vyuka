---
title: Pobočky dětského koutku
demand: 4
---

Budete pokračovat v projektu dětského koutku. Přidáme možnost zobrazit seznam poboček a každou pobočku rozkliknout pro získání více informaci.

1. Pokračujte v projektu s předchozího cvičení.
1. Nejprve do projektu přidejte stránku, která správně ošetří přístup na neexistující stránku, tedy chybu 404.
1. Dále přidejte do navigace stránku _Pobočky_ a vytvořte pro ni samostatnou komponentu `CentersPage`. Na této stránce budeme chtít zobrazit jednotlivé pobočky našeho dětského koutku (viz další bod).
1. Do složky `src` si stáhněte soubor [`centers.js`](assets/centers.js), který bude představovat databázi poboček.
1. Do souboru s komponentou pro seznam poboček si importuje funkci `getAllCenters`. Pomocí mapování zobrazte seznam odkazů na jednotlivé pobočky. Odkaz bude vždy cesta `/pobocky/id-pobocky`. Zatím nezobrazujte detail pobočky, pouze její název a adresu. Tento seznam bude sloužit jako navigace mezi jednotlivými pobočkami.
1. Vytvořte komponentu `CenterDetail` pro zobrazení detailu pobočky. Tato komponenta bude sídlit pod cestou `/pobocky/:id`. Pomocí `useParams` a funkce `getCenterById` získejte položku podle parametru `:id`. Zobrazte detail pobočky s otvíracími hodinami i popisem.
1. Komponentu `CenterDetail` zobrazte jako `<Outlet />` uvnitř komponenty `CentersPage`.
1. Nyní by měla stránka správně fungovat. Po kliknutí na pobočku se uživatel dostane na stránku s detailem každé podbočky. Zároveň na stránce uvidí hlavní navigaci i seznam ostatních poboček.

#### Bonus

1. Přidejte zajímavé featury z dokumentace. Například stylování odkazů podle toho, která stránka je zrovna aktivní. S tím nám pomůže komponenta [NavLink](https://reactrouter.com/en/6.10.0/start/tutorial#active-link-styling).
