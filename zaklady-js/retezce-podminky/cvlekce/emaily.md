---
title: Emaily
demand: 2
---

Vytvořme stránku, která bude pracovat s emailovými adresami ve formátu

```
jmeno.prijmeni@domena
```

Tedy například:

- `petr.novak@gmail.com`
- `romana.nejedla@czechitas.cz`
- `slavomir.ponuchalek@yahoo.com`

Postupujte dle následujících kroků.

1. Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
1. Nechte uživatele zadat jeho email a uložte si jej do promměné `email`.
1. Pomocí metody `indexOf` najděte v tomto emailu pozici znaku zavináč. Tuto pozici si uložte do proměnné :var[atIndex].
1. Pomocí metody `slice` vyřízněte z emailu první část představující jméno a příjmení uživatele.
1. Dále z emailu vyřízněte název domény tedy například `gmail.com`.
1. Ve získaných informací vytvořte objekt, který bude vypadat například takto:
   ```js
   const parsedEmail = {
     userName: 'slavomir.ponuchalek',
     domain: 'yahoo.com',
   }
   ```
1. Pro kontrolu vypište tento objekt do konzole.