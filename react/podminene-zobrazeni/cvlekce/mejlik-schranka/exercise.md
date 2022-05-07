---
title: Mejlík - schránka
demand: 2
---

V tomto cvičení vytvoříme základ komponenty pro zobrazování příchozí e-mailové pošty v naší nové aplikaci jménem :i[Mejlík.cz].

1. Založte si nový React projekt dle již známého postupu.
1. Vytvořte komponentu `Inbox`, která se použije takto.

   ```js
   <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
   ```

   Komponenta bude zobrazovat e-mail uživatele a počet jeho nepřečtených zpráv. Komponentu nastylujte dle následujícího vzoru

   ::fig[Schránka]{src=assets/inbox.png size=60}

1. Použijte v komponentě podmíněný operátor tak, aby zobrazila jinou zprávu v případě, že nepřečtených zpráv je nula.

   ::fig[Schránka]{src=assets/inbox-empty.png size=60}

1. Upravte vaši komponentu tak, že zpráva udávající počet zpráv bude složitější JSX než pouze text. Pokud máme nepřečtené zprávy, zobrazte

   ```js
   <div className="unread">Nepřečtených zpráv: 5</div>
   ```

   Pokud žádné nepřečtené zprávy nemáme, zobrazte

   ```js
   <div className="no-unread">Žádné nepřečtené zprávy</div>
   ```

1. Upravte CSS styly tak, aby zpráva s třídou `no-unread` měla jiné stylování, například světlejší text.
