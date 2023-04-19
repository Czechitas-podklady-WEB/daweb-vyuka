---
title: Změna množství u položky
demand: 3
---

Rozšiřme náš nákupní seznam o možnost změnit množství u jednotlivých položek. Vyjděte z kódu aplikace [vytvořené na lekci](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/posilani-dat). Změnu množství provedete podobně jako změnu zaškrtnutí odesláním požadavku PATCH.

1. V komponentě `ListItem` zobrazte `amount` ne jako `div` ale jako `input` s typem `number`. Hodnota `amount` se použije jako `value`.
1. Pro vytvořené políčko naprogramujte reakci na událost `change`. Zatím pouze do konzole vypisujte novou hodnotu zadanou uživatelem.
1. Zařiďte, aby se nově zadaná hodnota odeslala na server. Zpátky vám přijde nová položka podobně, jako jsme to viděli ve výkladu. Tuto položku zobrazte pomocí nového volání komponenty.
1. Vyzkoušejte, že aplikace funuguje. Když změníte množství a obnovíte stránku, měla by změna zůstat na stránce viditelná.
