---
title: Světový čas 2
demand: 3
---

Navažte na předchozí příklad se světovým časem. Naším cílem bude stáhnout seznam časových zón z API místo toho, abychom jej měli natvrdo zadrátovaný v HTML kódu.

Seznam časových zón stáhnete na adrese

```
https://worldtimeapi.org/api/timezone
```

1. Vytvořte komponentu `Timezones`, který vytvoří obsah pro element `zone-select`. Tato komponenta bude očekávat `props` v tomto formátu:

   ```js
   {
     zones: [
       // seznam zón
     ];
   }
   ```

1. Otestujte vaši komponentu s nějakým vymyšleným seznamem zón abyste ověřili, že správně vytváří rozbalovací nabídku.
1. Při načtení stránky zavolejte funkci `fetch` a stáhněte si skutečný seznam časových zón. Předejte jej komponentě `Timezones`.
