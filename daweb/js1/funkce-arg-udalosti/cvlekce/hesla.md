---
title: Hesla
lead: 'Generujte bezpečná i nebezpečná hesla.'
demand: 2
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-hesla](https://github.com/Czechitas-podklady-WEB/cviceni-hesla) se stránkou, která obsahuje tři různé funkce na generování hesel. Každá funkce vygeneruje heslo zadané délky s určitou bezpečnostní silou. Kód funkcí zkoumat nemusíte, obsahuje věci, které jsme zatím neprobírali.

Příklad samostatného použití jednotlivých funkcí:

```js
weakPassword(5); // → '01234'
```

```js
mediumPassword(8); // → '48140525'
```

```js
strongPassword(6); // → 'azc7mw'
```

Napište funkci `createAccount`, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít **dva parametry** `user` a `generatePassword`. **První bude uživatelské jméno** a **druhý bude funkce**, pomocí které se má vygenerovat heslo pro tento účet.
Ve funkci `createAccount` si do proměnné `password` uložte heslo vygenerované voláním funkce `generatePassword`.
Funkci `generatePassword` při volání předejte **číslo 9** jako délku požadovaného hesla.
Funkce `createAccount` nakonec **vrátí řetězec**, který bude obsahovat jméno uživatele a vygenerované heslo z proměnné `password`.
Například vrátí `"Uživateli Míša s heslem 012345678"`. 

Na konci javascriptového kódu vyzkoušejte založit více různých účtů (volání funkce `createAccount`) s různými typy hesel. Například:

```js
document.body.innerHTML += `
	<p>${createAccount('Míša', weakPassword)}</p>
	<p>${createAccount('Řízek', mediumPassword)}</p>
	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
`;
```

by mělo vepsat do stránky něco jako:

```text
Uživatel Míša s heslem 012345678.
Uživatel Řízek s heslem 074031827.
Uživatel Mápodčepicí s heslem mwwf9epts.
```

:::solution

```js
const createAccount = (user, generatePassword) => {
  const password = generatePassword(9);
  return `Uživatel ${user} s heslem ${password}.`;
};

document.body.innerHTML += `
	<p>${createAccount('Míša', weakPassword)}</p>
	<p>${createAccount('Řízek', mediumPassword)}</p>
	<p>${createAccount('Mápodčepicí', strongPassword)}</p>
`;
```

:::
