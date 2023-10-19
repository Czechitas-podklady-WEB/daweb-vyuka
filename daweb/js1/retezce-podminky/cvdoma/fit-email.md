---
title: FIT e-mail
demand: 2
lead: Vytvořte e-mailovou adresu pro studenty FIT ČVUT.
solutionAccess: lock
---

Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního jména první tři. Výsledek se převede na malá písmena a připojí se doména `fit.cvut.cz`. Pro jméno Jana Procházková tak vznikne adresa `prochjan@fit.cvut.cz`.

1. Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho **křestní jméno** a pak **příjmení**, obojí bez diakritiky.
1. Pomocí metody `trim` zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
1. Pomocí metody `slice` vyřízněte ze jména i příjmení příslušné části.
1. Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.

:::solution

```js
const jmeno = prompt('Zadejte křestní jméno (bez diakritiky).')
  .toLocaleLowerCase()
  .trim()
  .slice(0, 3);
const prijmeni = prompt('Zadejte příjmení (bez diakritiky).')
  .toLowerCase()
  .trim()
  .slice(0, 5);

const email = `${prijmeni}${jmeno}@fit.cvut.cz`;
document.body.innerHTML = `<p>Váš e-mail je: ${email}.</p>`;
```

:::
