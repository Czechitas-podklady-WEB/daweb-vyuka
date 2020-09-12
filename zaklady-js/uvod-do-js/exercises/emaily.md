---
title: Emaily
demand: 2
---

Představte si, že máme emailovou adresu ve formátu

```
<jmeno>.<prijmeni>@<domena>
```

Tedy například:

- `petr.novak@gmail.com`
- `romana.nejedla@czechitas.cz`
- `slavomir.ponuchalek@yahoo.com`

Postupujte dle následujících kroků.

1. Do proměnné `email` si uložte některý z výše uvedených emailů.
1. Pomocí metody `indexOf` najděte v tomto emailu pozici znaku zavináč. Tuto pozici si uložte do proměnné <var>atIndex</var>.
1. Pomocí metody `slice` vyřízněte z emailu první část představující jméno a příjmení uživatele.
1. Vyřízněte z emailu název domény tedy například `gmail.com`.
