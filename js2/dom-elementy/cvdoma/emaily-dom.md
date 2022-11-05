---
title: E-maily pomocí DOM elementů
demand: 3
---

Budeme pokračovat v naší aplikaci zobrazující přečtené a nepřečtené e-maily. Nejdříve celý kód převedeme na komponenty.

1. Udělejte si fork [repozitáře](https://github.com/Czechitas-podklady-WEB/emaily-reseni) s řešením příkladu o e-mailech.
1. V separátní složce vytvořte komponentu `Email`. Komponenta bude očekávat následující _props_:
   ```js
   const { senderName, subject, time, unread } = props;
   ```
   Zařiďte, aby komponenta vracela DOM element.
1. Do složky s komponentou vložte také styly a obrázky související s e-mailem.
1. V hlavním souboru `index.js` upravte funkci `renderSection` tak, by používala komponentu `Email` a metodu `append`.
1. Zkontrolujte, že aplikace funguje správně, zobrazuje správné e-maily ve správných složkách se správnými ikonami.
