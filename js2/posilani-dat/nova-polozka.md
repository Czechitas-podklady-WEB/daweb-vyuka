## Nákupy: nová položka

Abychom si procvičili dotaz POST s autentizací, rozšíříme naši aplikaci _Nákupy_ o možnost přidání nové položky do seznamu. To znamená, že už nebudeme pracovat s veřejnými daty na adrese https://nakupy.kodim.app/api/sampleweek, neboť ta se nedají nijak měnit. Pokud máte účet na kodim.cz, máte automaticky účet i v aplikaci _Nákupy_, pod kterým máte svá data, která můžete libovolně upravovat.

Nejprve si vyzkoušíme získat informace o vašem účtu pomocí dotazu GET s autentizací. Nejprve si vyzvedněte svůj autentizační token pro aplikace. Potom si založte čistý JavaScriptový projekt a vyzkušejte přístup k vašemu účtu v aplikaci _Nákupy_.

```js
fetch('https://nakupy.kodim.app/api/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer váš-token',
  },
}).then((resp) => resp.json());
  .then((data) => console.log(data.result));
```

Pokud jste vše provedli správně, měli byste získat data o svém účtu.

### Přechod na soukromá data

Nyní jsme připravení pokračovat v našem projektu _Nákupy_. Začneme tak, jsme náš projekt zanechali v minulé lekci v repozitáři [projekt-nakupy-dom](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-dom).

Jelikož chceme v naší aplikaci pracovat s daty na vašem účtu, musíme všechny položky seznamu získávat z jiné API adresy. Proto je nejprve potřeba upravit stahování dat v komponentě `ShopList`.

```js
if (dayResult === 'loading') {
  fetch(`https://nakupy.kodim.app/api/me/week/${day}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer váš-token`,
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

Takto si stáhnete data přímo na vašem účtu, se kterými si můžete dělat, co chcete.

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

Na tlačítko pro odeslání formuláře si napojíme posluchač, který zatím pouze sesbírá obsah textových políček.

```js
const handleAdd = (e) => {
  e.preventDefault();
  const product = element.querySelector('.product-input').value;
  const amount = element.querySelector('.amount-input').value;
  const unit = element.querySelector('.unit-input').value;

  console.log('položka', product, amount, unit);
};

element.querySelector('.btn-add').addEventListener('click', handleAdd);
```

Data sesbíraná z textových políčk nyní pošleme pomocí metody POST na API endpoint

```
https://nakupy.kodim.app/api/me/week/:day/items
```

Budeme na to potřebovat nový `fetch` ve funkci `handleAdd`.

```js
const handleAdd = (e) => {
  e.preventDefault();
  const product = element.querySelector('.product-input').value;
  const amount = element.querySelector('.amount-input').value;
  const unit = element.querySelector('.unit-input').value;

  fetch(`https://nakupy.kodim.app/api/me/week/${day}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer váš-token`,
    },
    body: JSON.stringify({
      product: product,
      amount: amount,
      unit: unit,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(ShopList({ day, result: data.result }));
    });
};
```
