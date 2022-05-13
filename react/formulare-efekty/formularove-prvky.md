Díky tomu, že jsem se v minulé lekci naučili pracovat se stavem, otvírají se nám v Reactu mnohé nové možnosti.

## Formulářové prvky

Formulářové prvky jako textová políčka, zaškrtávací tlačítka apod. jsou jedním z hlavních způsobů, jak získat vstup od uživatele. V čistém JavaScritpu jsme zvyklí získávat hodnoty z těchto prvků tak, že je vybereme pomocí `querySelector` a použijeme například vlastnost `value`.

```js
const inputElm = document.querySelector('input');
const value = inputElm.value;
```

V Reactu však k DOM elementům na stránce přístup nemáme. Hodnotu uvnitř textového políčka si tak musíme uložit do stavu.

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

Tímto postupem se snažíme provázat obsah políčka s hodnotou ve stavu. Kdykoliv uživatel obsah políčka změní, my na to zareagujeme změnou stavu `age`. Tomuto principu se anglicky říká <em>data binding</em>.

Pozor však, že náš data binding zatím funguje pouze jedním směrem, tedy _změna políčka_ ⟶
_změna stavu_. Pokud se z nějakého důvodu změní hodnota ve stavu `age`, obsah políčka se zatím neaktualizuje.

### Obousměrný data binding

To, co jsme viděli v ukázce výše bychom mohli nazvat one-way (jednosměrný) data binding. V praxi však téměř vždy budeme chtít takzvaný two-way (obousměrný) data binding. Ten zařídíme jednoduše tak, že hodnotu ve stavu vždy nastavíme jako hodnotu políčka.

```js
const AgeField = () => {
  const [age, setAge] = useState(null);

  return (
    <label>
      Zadej svůj věk:
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    </label>
  );
};
```

Takto zajistíme provázanost i druhým směrem, tedy _změna stavu_ ⟶ _změna políčka_.
