Díky tomu, že jsem se v minulé lekci naučili pracovat se stavem, otvírají se nám v Reactu mnohé nové možnosti.

## Formulářové prvky

Formulářové prvky jako textová polížka, zaškrtávací tlačítka apod. jsou jedním z hlavních způsobů, jak získat vstup o uživatele. V čístém JavaScritpu jsme zvyklí získávat hodnoty z těchto prvků tak, že je vybereme pomocí `querySelector` a použijme například vlastnost `value`.

```js
const inputElm = document.querySelector('input');
const value = inputElm.value;
```

V Reactu však k DOM elementům na stránce přístup nemáme. Hodnotu uvnitř textového políčka se tak musíme uložit do stavu.

Představme si jednoduchou komponentu, kde uživatel zadá svůj věk.

```js
const AgeField = () => {
  return (
    <label>
      Zadej svůj věk:
      <input type="text" />
    </label>
  );
};
```

Hodnotu uvnitř elementu `input` si chceme uložit do stavu pokaždé, když dojde k její změně. Vytvoříme si proto stav `age` a budeme jej měnit v reakci na událost `onChange`.

```js
const AgeField = () => {
  const [age, setAge] = useState(null);

  return (
    <label>
      Zadej svůj věk:
      <input type="text" onChange={(e) => setAge(e.target.value)} />
    </label>
  );
};
```
