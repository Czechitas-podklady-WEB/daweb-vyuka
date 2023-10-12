## Odeslání dat z formuláře

```html
<h1>Nákupní seznam</h1>
<div id="seznam"></div>

<h2>Přidat</h2>
<form id="formular-pridat">
  <div>
    <label for="nazev">Název zboží</label>
    <input id="nazev" />
  </div>
  <div>
    <label for="mnozstvi">Množství</label>
    <input id="mnozstvi" />
  </div>
  <div>
    <button type="submit">Přidat</button>
  </div>
</form>
```

```js
const handleSubmit = async (event) => {
  event.preventDefault();
  const zbozi = {
    nazev: document.getElementById('nazev').value,
    mozstvi: document.getElementById('nazev').value,
  };

  const resp = await fetch('…', {
    method: 'POST',
    body: JSON.stringify(zbozi),
  });
  const result = await resp.json();
  location.refresh();
};
```
