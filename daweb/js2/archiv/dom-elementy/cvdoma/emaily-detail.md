---
title: E-maily – detail
demand: 4
context: nadoma
---

Aplikaci _E-maily_ rozšíříme tak, aby zobrazovala detail e-mailu. Když uživatel klikne na ikonu obálky, e-mail se rozbalí a zobrazí textový obsah stažený z API.

1. Abychom mohli v komponentě `Email` stahovat obsah e-mailu, potřebujeme přidat dvě nové _props_.
   ```js
   const { id, senderName, subject, time, unread, body } = props;
   ```
1. Upravte komponentu `EmailSection` tak, aby komponentě `Email` posílala `id` e-mailu. Základní API endpoint v e-mailech nevrací `body`, takže do _prop_ zatím pošlete nějaký testovací text.
1. V komponentě `Email` zaříďte, aby se na hlavní element přidala třída `email--expand` v případě, že _prop_ `body` není prázdná (`undefined`). Text v `body` zakomponujte do prvku `.email__body`.
1. Vykoušejte, že pokud do komponenty `Email` pošlete `body`, e-mail bude rozbalený. Pokud `body` nepošlete, e-mail bude zobrazovat pouze hlavičku.
1. Nyní stačí zařídit, aby se tělo e-mailu stáhlo z API. Přidejte posluchač události na tlačítko s obálkou. Při kliknutí na obálku zkontrolujte, jestli je _prop_ `body` prázdná. Pokud ano, stáhněte detail e-mailu dle [dokumentace](https://apps.kodim.cz/daweb/trening-api/docs/e-mailove-api#detail-e-mailu-get). Pomocí `replaceWith` aktualizujte komponentu a pošlete jí získané `body`.
1. Pokud při kliknutí na obáku už `body` máme, chceme e-mail zase sbalit. Aktualizujte tedy komponentu tak, že jí pošlete _props_ bez `body`.

:::solution

Řešení célé série cvičení o e-mailech najdete v repozitáři v branchi [reseni](https://github.com/Czechitas-podklady-WEB/cviceni-emaily-dom/tree/reseni).

:::
