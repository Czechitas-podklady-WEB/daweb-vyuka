## Obnova stránky – location

- použití `location.reload()` pro znovunačtení stránky po odeslání dat

```js
const data = {
  /*…*/
};
const handleSubmit = async (event) => {
  const resp = await fetch('…', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const result = await resp.json();
  location.refresh();
};

document.querySelector('.submit').addEventListener('click', handleSubmit);
```
