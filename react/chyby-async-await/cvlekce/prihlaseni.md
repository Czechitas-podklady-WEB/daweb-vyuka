---
title: Přihlášení
demand: 3
---

Každá slušně vychovaná aplikace má nějakou správu uživatelů a možnost se zaregistrovat. Registrační formulář by však měl umět ověřit, že zadáváme správná data. Validaci dat bude dělat server a vždy, když pošleme neplatný e-mail nebo slabé heslo, vrátí nám chybu _400 Bad Request_.

1. Založte Reactovou aplikace s registračním formulářem. Formulář nechť obsahuje textová pole pro zadání e-mailu, hesla a zaškrtávací políčko pro souhlas s obchodními podmínkami.
1. Obsah formuláře odesílejte pomocí metody POST na API endpoint

   ```
   https://random.kodim.app/api/register
   ```

   Server očekává _body_ ve formátu JSON ve tvaru:

   ```json
   {
     "email": "pavel.ukazka@gmail.com",
     "password": "zenu_holi_stroj",
     "acceptTerms": true
   }
   ```

   Nejprve zkuste, že vám funguje happy path, tedy že server data přijme, pokud je vyplníte správně.

1. Server kontroluje, že adresa je opravdu platný e-mail, že heslo má alespoň osm znaků a že opravdu souhlasíte s obchodními podmínkami. Prohlédněte si chybové zprávy na serveru a zobrazte uživateli nějakou smysluplnou chybovou hlášku, aby věděl, že má ve formuláři něco špatně.
1. Pokud už vaše aplikace přežije všemožné hlouposti, co uživatel může do formuláře zadat, změňte adresu API endpointu na

   ```
   https://random.kodim.app/api/register?act=shaky
   ```

   Tento endpoint čas od času vyhodí chybu 500. I s tou se správně popasujte a zobrazte rozumnou hlášku.
