---
title: Mejlík - schránka
demand: 2
---

V tomto cvičení vytvoříme základ komponenty pro zobrazování příchozí e-mailové pošty v naší nové aplikaci jménem <i>Mejlík.cz</i>.

1. Založte si React projekt dle šablony z předchozí lekce.
1. Vytvořte komponentu `Inbox`, která se použije takto.

   ```js
   <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
   ```

   Komponenta bude zobrazovat e-mail uživatele a počet jeho nepřečtených zpráv. Komponentu nastylujte dle následujícího vzoru

   ![Schránka](assets/inbox.png){.fig .fig-60}

1. Použijte v komponentě podmíněný operátor tak, aby zobrazila jinou zprávu v případě, že nepřečtených zpráv je nula.

   ![Schránka](assets/inbox-empty.png){.fig .fig-60}

1. Použijte atribut `style` k tomu, abyste text o nepřečtených zprávách zobrazili červeně, pokud nemáme žádné nepřečtené zprávy.
