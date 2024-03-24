---
title: Routování
lead: Rozběhněte základní routování.
demand: 2
context: lekce
solutionAccess: protected
---

Hned na začátku rozběháme routování, abychom ho pak nemuseli složitě včlenňovat do již rozpracovaného projektu. Knihovna `react-router` už je v naklonovaném projektu nainstalovaná, můžete ji rovnou začít používat.

Naše aplikace bude mít dvě hlavní stránky: :i[Home] a :i[Reservation]. Obě obsahují stejnou hlavičku i patičku. Stránka :i[Home] bude pod routou `/`, stránka s detaily rezervace bude mít adresu `/reservation`.

1. Uvnitř komponenty `App` již máte připravenou strukturu s hlavičkou a patičkou stránky. Mezi ně budeme pomocí `Outlet` vkládat naše stránky. Stránku `HomePage` již míte připravenou. Vložte ji do routeru jako dítě routy `/` v hlavním `index.jsx`. Stránku `HomePage` chceme umístit na adresu: `/`. Vyzkoušejte, že se vaše stránka správně zobrazuje. Měli byste vidět formulář pro vyhledání spojení.
1. Dále vytvořte komponentu `ReservationPage`. Tuto komponentu zobrazte na adrese `/reservation`. Zatím může také vracet pouze nadpis `h2`, abychom viděli, že se na stránce něco děje. Obsah komponenty vytvoříme později.
1. Vyzkoušejte, že vaše stránka správně funguje (adresu `/reservation` vyzkoušejte tak, že ji prostě napíšete do adresního řádku prohlížeče).
1. Proveďte commit změn se smysluplnou commit zprávou.
