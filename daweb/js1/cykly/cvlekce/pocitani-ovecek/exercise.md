---
title: Na dobrou noc
demand: 2
solutionAccess: allow
---

Vytvořte JavaScriptový program, který vepíše do stránky ovčí příběh pro děti na dobrou noc. Výsledkem by měl být text počítající ovečky.

::fig[ovce]{src=assets/ovce.jpg}

1. Pro rychlejší vytvoření základní struktury použijte příkaz níže:

   ```bash
   npm init kodim-app@latest na-dobrou-noc html-css-js
   ```

1. Využijte následujících dvacet jmen oveček:

   ```js
   const ovciJmena = [
     'Bětuška',
     'Cína',
     'Dolly',
     'Heidy',
     'Líza',
     'Belinda',
     'Celia',
     'Elvíra',
     'Karla',
     'Otýlie',
     'Škraboška',
     'Kopretinka',
     'Berta',
     'Růženka',
     'Bobinka',
     'Žofka',
     'Dášenka',
     'Vlnka',
     'Květuše',
     'Pampeliška',
   ];
   ```

1. Pomocí metody `forEach` do stránky vepište deset za sebou jdoucích vět v následující podobě:

   > Ovečka Bětuška jako 1. přeskočila přes plot. Ovečka Cína jako 2. přeskočila přes plot. Ovečka Dolly jako 3. přeskočila přes plot…

:::solution

```js
ovciJmena.forEach((jmeno, index) => {
  document.body.textContent += `Ovečka ${jmeno} jako ${
    index + 1
  }. přeskočila přes plot. `;
});
```

:::
