---
title: Přidání prvku do nákupního seznamu
demand: 3
---

Zopakujte si přidání prvku do nákupního seznamu pomocí tlačíka. Jde o stejný projekt jako jste viděli ve výkladu, stačí jej tedy jen zopakovat a pořádně se seznámit s tím, co se uvnitř děje. Vyjdeme z [repozitáře](https://github.com/Czechitas-podklady-WEB/skladani-komponent), který pomocí dvou komponent zobrazuje nákupní seznam tak, že jej stáhne z API.

1. Naklonujte si výše zmíněný repozitář a do HTML přidejte na začátek nový oddíl `.container` a vložte do něj tlačítko :i[Přidat].
1. Při stisknutí tlačítka si vymyslete nějakou položku a přidejte ji pomocí požadavku POST do seznamu jménem `default`.
1. Jakmile získáte nový seznam jako odpověď ze serveru, pošlete jej komponentě `ShoppingList` a aktualizujte stránku.
