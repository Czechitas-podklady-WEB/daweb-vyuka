---
title: E-maily
demand: 2
lead: Vyzkoušejte si práci s řetězci obsahující e-mailové adresy.
solutionAccess: protected
---

Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

```
jmeno.prijmeni@domena
```

Tedy například:

- `petr.novak@gmail.com`
- `romana.nejedla@czechitas.cz`
- `slavomir.ponuchalek@yahoo.com`

Postupujte dle následujících kroků.

1. Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
1. Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné `email`.
1. Pomocí metody `indexOf` najděte v tomto e-mailu pozici znaku zavináč. Tuto pozici si uložte do proměnné `atIndex`.
1. Pomocí metody `slice` získejte z e-mailu první část představující uživatelské jméno uživatele.
1. Dále z e-mailu získejte název domény tedy například `gmail.com`.
1. Ze získaných informací vytvořte objekt, který bude vypadat například takto:
   ```js
   const parsedEmail = {
     userName: 'slavomir.ponuchalek',
     domain: 'yahoo.com',
   };
   ```
1. Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.

:::solution

```js
const email = prompt('Zadejte e-mail:');
const atIndex = email.indexOf('@');
const parsedEmail = {
  userName: email.slice(0, atIndex),
  domain: email.slice(atIndex + 1),
};
document.body.innerHTML =
  '<p>Uživatelské jméno: ' + parsedEmail.userName + '</p>';
document.body.innerHTML += '<p>Doména: ' + parsedEmail.domain + '</p>';
```

:::
