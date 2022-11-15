---
title: Registrace
demand: 3
---

Vyjděte z [poslední verze](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/routing) projektu s nákupním seznamem a routováním.

1. Pomocí registračního formuláře si založte na serveru vlastní účet. E-mail nemusí být váš skutečný e-mail. **V žádném případě** však nepoužívejte heslo, které používate k přihlášení kdekoliv jinde!
1. Upravte aplikaci tak, aby se všechny `fetch` požadavky týkající se nákupních seznamů posílaly na endpoint `/api/me/week` místo původního `/api/weeks/:cislo`.
1. U všech těchto požadavků přidejte `Authorization` hlavičku s *basic* autentizací. K autentizaci použijte svůj nově vytvořený účet.
1. Vyzkoušejte, že aplikace funguje. Nyní máte k dispozici vlastní data, která můžete dle libosti používat.
