---
title: Pobočky dětského koutku
lead: Přidejte do projektu dětského detail jednotlivých poboček.
demand: 4
context: cvlekce
solutionAccess: protected
---

Budeme pokračovat v projektu dětského koutku. Přidáme možnost zobrazit seznam poboček a každou pobočku rozkliknout pro získání více informaci.

1. Pokračujte v projektu z předchozího cvičení.
1. Nejprve do projektu přidejte stránku, která správně ošetří přístup na neexistující stránku, tedy chybu 404.
1. Dále přidejte do navigace stránku _Pobočky_ a vytvořte pro ni samostatnou komponentu `CentersPage`. Na této stránce budeme chtít zobrazit jednotlivé pobočky našeho dětského koutku (viz další bod).
1. Rozjeďte si API server s daty. Naklonujte si k sobě repozitář [api-centers](https://github.com/Czechitas-podklady-WEB/api-centers) a spusťte v něm `jsonhost` dle instrkukcí v README. Prohlédněte si data na endpointu `/api/centers`.
1. V komponentě `CentersPage` si tytvořte stav `center` a do něj pomocí klasikého postupu s `useEffect` a `fetch` stáhněte pole dat z API. Pomocí mapování zobrazte seznam odkazů na jednotlivé pobočky. Odkaz bude vždy cesta `/pobocky/id-pobocky`. Zatím nezobrazujte detail pobočky, pouze její název a adresu. Tento seznam bude sloužit jako navigace mezi jednotlivými pobočkami.
1. Vytvořte komponentu `CenterDetail` pro zobrazení detailu pobočky. Tato komponenta bude sídlit pod cestou `/pobocky/:id`. Pomocí `useParams` a API endpointu `/api/centers/:id` získejte položku podle parametru `:id`. Zobrazte detail pobočky s otvíracími hodinami i popisem.
1. Komponentu `CenterDetail` zobrazte jako `<Outlet />` uvnitř komponenty `CentersPage`.
1. Nyní by měla stránka správně fungovat. Po kliknutí na pobočku se uživatel dostane na stránku s detailem každé pobočky. Zároveň na stránce uvidí hlavní navigaci i seznam ostatních poboček.

### Bonus

1. Přidejte zajímavé featury z dokumentace. Například stylování odkazů podle toho, která stránka je zrovna aktivní. S tím nám pomůže komponenta [NavLink](https://reactrouter.com/en/6.10.0/start/tutorial#active-link-styling).
