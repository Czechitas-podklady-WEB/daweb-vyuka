---
title: Pozdravy
demand: 1
---

Představte si, že tvoříte aplikaci na odesílání e-mailů. Každý e-mail je třeba zakončit zdvořilým pozdravem.

1. Vytvořte HTML stránku s následujícím obsahem uvnitř `body`.
   ```html
   <div class="email">
     <p class="email__greeting">Vážená paní, vážený pane,</p>
     <p class="email__body">píšu Vám ve věci...</p>
     <p class="email__closing">Pozdrav</p>
   </div>
   ```
1. Přidejte do stránky JavaScript a v něm napište funkci bez parametrů s názvem `goodbye`. Tato funkce vloží do odstavce s třídou `email__closing` rozloučení „Na shledanou“.
1. Zavolejte funkci v konzoli a ověřte, že změnila pozdrav na konci e-mailu.
1. Končit e-mail slovy „na shledanou“ je nezdvořilé. Přidejte proto do funkce `goodbye` parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
   ```js
   goodbye('Pavel Ovesný')
   ```
   Ve stránce bude
   ```jsc
   S pozdravem Pavel Ovesný
   ```