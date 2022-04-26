---
title: Přidání prvku do nákupního seznamu
demand: 3
---

Zopakujte si přidání prvku do nákupního seznamu pomocí tlačíka. Jde o stejný projekt jako jste viděli ve výkladu, stačí jej tedy jen zopakovat a pořádně se seznámit s tím, co se uvnitř děje. Vyjdeme z [repozitáře](https://github.com/podlomar/skladani-komponent), který pomocí dvou komponent zobrazuje nákupní seznam tak, že jej stáhne z API.

1. Naklonujte si výše zmíněný repozitář, do HTML přidejte pod nadpis stránky nový oddíl `.container` a vložte do něj tlačítko :i[Přidat].
1. Při stisknutí tlačítka si vymyslete nějakou položku a přidejte ji pomocí požadavku POST do seznamu jménem `default`.
1. Jakmile získáte nový seznam jako odpověď ze serveru, pošlete jej komponentě `ShoppingList` a aktualizujte stránku.

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-nakupni-seznam-s-tlacitkem-kccdzq?file=/index.js).
