Úplně posledním krokem v naší aplikace pro správu nákupních seznamů bude označení položky seznamu pomocí API. V předchozí části jsme sice komponentu `ShoppingItem` uděleli hezky interaktivní, ale zaškrtnutí položky seznamu se projeví pouze na frontendu. Když stránku obnovíme, vrátí se seznam do stavu, v jakém je na backendu.

Tuto situaci napravíme tak, že při stisknutí tlačítka odešleme POST požadavek, který označní nebo odznačí položku seznamu na backendu. Kód tlačítka uvnitř komponenty `ShoppingItem` pak bude vypadat takto:

```js
const doneButton = element.querySelector('.item__btn-done');
doneButton.addEventListener('click', (e) => {
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/default/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'toggleDone',
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.results.done) {
        doneButton.className = 'item__btn-done item__btn-done--check';
      } else {
        doneButton.className = 'item__btn-done';
      }
    });
});
```

Nyní si můžeme vyzkoušet, že po obnovení stránky náš seznam bude už ve správném stavu podle toho, jak s ním interagujeme na frontendu.
