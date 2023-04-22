## Nákupy: nová položka

Abychom si procvičili dotaz POST s autentizací, rozšíříme naši aplikaci _Nákupy_ o možnost přidání nové položky do seznamu. To znamená, že už nebudeme pracovat s veřejnými daty na adrese https://nakupy.kodim.app/api/sampleweek, neboť ta se nedají nijak měnit. Pokud máte účet na kodim.cz, máte automaticky účet i v aplikaci _Nákupy_, pod kterým máte svá data, která můžete libovolně upravovat.

Nejprve si vyzkoušíme získat informace o vašem účtu pomocí dotazu GET s autentizací.

1. Založte nový JavaScriptový projekt a spusťte jej v prohlížeči
1. Vyzvedněte si svůj autentizační token pro aplikace a uložte jej ručně do local storage pro vaši stránku.

Nyní vyzkoušejte přístup k vašemu účtu v aplikaci _Nákupy_.

```js
fetch('https://nakupy.kodim.app/api/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
}).then((resp) => resp.json());
  .then((data) => console.log(data.result));
```

Pokud jste vše provedli správně, měli byste získat data o svém účtu a jste připravení pokročit v práci na aplikaci _Nákupy_.

### Přechod na soukromá data

S projektem _Nákupy_ začneme tam, jak jsme jej zanechali v minulé lekci v repozitáři [projekt-nakupy-dom](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-dom). Jelikož chceme v naší aplikaci pracovat s daty na vašem účtu, musíme všechny položky seznamu získávat z jiné API adresy, která je chráněna autentizací. Proto je nejprve potřeba upravit stahování dat v komponentě `ShopList`.

```js
if (dayResult === 'loading') {
  fetch(`https://nakupy.kodim.app/api/me/week/${day}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(
        ShopList({
          day: day,
          dayResult: data.result,
        })
      );
    });
  return element;
}
```

Takto si stáhnete data přímo z vašeho účtu.

### Přidání položky

Nyní jsme připraveni umožnit přidání nové položky do nákupního seznamu. Nejprve si pro tento účel vytvoříme formulář v komopnentě `ShopList`.

```js
const element = document.createElement('div');
element.classList.add('shoplist');
element.innerHTML = `
  <div class="shoplist__head">
    <h2 class="shoplist__day">${dayName}</h2>
  </div>
  <form class="shoplist__new">
    <div class="form-fields">  
      <input class="field-input product-input" type="text" />
      <input class="field-input amount-input" type="text" />
      <input class="field-input unit-input" type="text" />
    </div>
    <div class="form-controls">
      <button class="btn-add">Přidat</button>
    </div>
  </form>
  <div class="shoplist__items"></div>
`;
```

Na událost odeslání formuláře si napojíme posluchač, který zatím pouze sesbírá obsah textových políček a poté je vymaže.

```js
const handleSubmit = (e) => {
  e.preventDefault();

  const productInput = element.querySelector('.product-input');
  const amountInput = element.querySelector('.amount-input');
  const unitInput = element.querySelector('.unit-input');

  console.log(
    'položka',
    productInput.value,
    amountInput.value,
    unitInput.value
  );
};

element
  .querySelector('.shoplist__new')
  .addEventListener('submit', handleSubmit);
```

Data sesbíraná z textových políčk nyní pošleme pomocí metody POST na API endpoint

```
https://nakupy.kodim.app/api/me/week/:day/items
```

Budeme na to potřebovat nový `fetch` ve funkci `handleSubmit`.

```js
const handleSubmit = (e) => {
  e.preventDefault();

  const productInput = element.querySelector('.product-input');
  const amountInput = element.querySelector('.amount-input');
  const unitInput = element.querySelector('.unit-input');

  fetch(`https://nakupy.kodim.app/api/me/week/${day}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      product: productInput.value,
      amount: Number(amountInput.value),
      unit: unitInput.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(ShopList({ day, dayResult: data.result }));
    });
};
```

Celý hotový projekt nejdete v repozitáři [projekt-nakupy-post](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-post).
