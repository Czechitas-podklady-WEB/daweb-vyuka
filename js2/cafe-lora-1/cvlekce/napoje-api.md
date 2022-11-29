---
title: Stáhnutí nápojů z API
demand: 3
---

Konečně zobrazíme celou nabídku nápojů, které si stáhneme z API.

1. Nejdříve si prohlédněte [dokumentaci](https://apps.kodim.cz/daweb/cafelora/docs/) k API a seznamte se s jednoltivými endpointy.
1. API vyžaduje autentizaci ve formátu
   ```
   Email vas.email@example.com
   ```
   odeslanou v `Authorization` hlavičce. Při první autentizaci vám server vytvoří účet, ve které můžete spravovat vlastní objednávku. Bez autentizace vás API k datům nepustí.
1. Upravte komponentu `Menu` tak, aby stahovala nápoje z API. K tomu je potřeba přidat *prop* s názvem `drinks`, která na začátku bude `undefined`. V takovém případě stáhneme data z API, zavoláme komponentu znova a načtená data pošleme do *prop* `drinks`.
1. Vyzkoušejte, že vaše stránka zobrazuje všechny nápoje. Commitněte se srozumitelnou zprávou a pushněte do zvdáleného repozitáře.
