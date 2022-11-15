---
title: Odhlášení
demand: 3
---

Z každé slušně vyhované aplikace se lze odhlásit. V naší aplikaci s nákupními seznami odhlášení umožníme tak, že vytvoříme stránku zobrazující účet přihlášeného uživatele. Na této stránce pak bude tlačíkto pro ohlášení.

1. Vytvořte komponentu `AccountPage` a zapojte ji pod URL `/account`. Zatím v komponentě nechte pouze `h1` nadpis *Účet*.
1. V hlavičce stránky zařiďte, aby e-mail přihlášeného uživatele byl odkaz na stránku s účtem.
1. Komponentě `AccountPage` předejte *prop* `session`. Pokud uživatel není přihlášený, přesměrujte jej na login podobně jako to děláme v `HomePage`.
1. Pokud uživatel přihlášený je, zobrazte na stránce jeho e-mail. Ten najdete v `session.user`. Zároveň zobrazte tlačíko pro odhlášení. Při jeho stisknutí pošlete autentizovaný GET požadavek na endpoint
   ```
   https://apps.kodim.cz/daweb/shoplist/api/me/logout`
   ```
   Jakmile vám ze serveru přijde kladná odpověd, pomocí metody `removeItem` odstraňte z *localStorage* starý autentizační token a přesměrujte uživatele na login.
1. Vyzkoušejte, že se můžete do aplikace plynule přihlásit i odhlásit.
