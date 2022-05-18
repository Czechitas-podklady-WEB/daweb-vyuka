---
title: Kontakty
demand: 2
---

Pomocí `create-czechitas-app` založte projekt s názvem `contacts`.

```sh
$ npx create-czechitas-app contacts vanilla
```

Budeme chtít vytvořit aplikaci, která zobrazuje seznam kontaktů. U každého kontaktu bychom chtěli evidovat jméno, email a telefonní číslo.

1. V souboru `index.html` smažte obsah elementu `#app`.
1. Uvnitř souboru`index.js` pomocí `document.createElement` vytvořte element `div` a uložte jej do proměnné `contact1`.
1. Na váš element přidejte CSS třídu `contact`.
1. Nastavte `innerHTML` vašho elementu na následujicí obsah
   ```html
   <span class="name">Jaromír Bystřina</span>
   <span class="phone">+420 777 666 323</span>
   <span class="email">lesni.bystrina@gmail.com</span>
   ```
1. Vyberte ze stránky element `#app` a vložte do něj element s kontaktem.
1. Stejným postupem přidejte na stránku ještě další dva kontakty `contact2` a `contact3`.
1. Nepovinně si můžete pohrát se stylováním. U každého kontaktu se vám například může hodit takováto hezká [ikonka](assets/contact.png).

---solution

Řešení naleznete v samostatném [Codesanboxu zde](https://codesandbox.io/s/da-web-kontakty-17c8bc?file=/index.js).
