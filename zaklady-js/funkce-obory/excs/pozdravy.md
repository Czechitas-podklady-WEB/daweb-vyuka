---
title: Pozdravy
demand: 1
---

Představte si, že tvoříte aplikaci na odesílání e-mailů. Každý e-mail je třeba zakončit zdvořilým pozdravem.

1. Napište funkci bez parametrů s názvem `goodbye`. Funkce do konzole vypíše rozloučení. Příklad použití:
   ```jscon
   > goodbye()
   Nashledanou
   ```
1. Končit e-mail slovy "nashledanou" je nezdvořilé. Přidejte proto do funkce `goodbye` parametr představující jméno pisatele e-mailu. Funkce do konzole vypíše koncový pozdrav i se jménem. Příklad použití:
   ```jscon
   > goodbye('Pavel Ovesný')
   S pozdravem Pavel Ovesný
   ```
1. Upravte funkci `goodbye` tak, aby místo vypisování do konzole vrátila pozdrav jako řetězec. Příklad:
   ```jscon
   > goodbye('Pavel Ovesný')
   'S pozdravem Pavel Ovesný'
   ```
