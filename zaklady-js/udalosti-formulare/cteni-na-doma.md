## Povinné čtení na doma

`event.shiftKey`, `event.altKey`, `event.ctrlKey`
: Tyto vlastnosti obsahují pravdivostní hodnoty, které udávají, zda byla při kliknutí stisknuta klávesa :kbd[Alt], :kbd[Shift] nebo :kbd[Ctrl].

`event.code`
: Pokud nastala událost stisknutí klávasy, tato vlastnost obsahuje jméno této klávesy.

### Vlastnost code

Pokud chceme zjistit, jaká klávesa byla stisknuta při událostech `keyup` a `keydown`, musíme znát název této klávesy. Názvy kláves snadno najdete na [keycode.info](https://keycode.info). Zjistíme tak například, že klávesa :kbd[Enter] se jmenuje prostě `Enter`, klávesa :kbd[D] se jmenuje `KeyD` a tak dále. Takto pak na stránce můžeme zareagovat například na stisknutí :kbd[Enter].

```js
document.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    console.log('enter');
  }
});
```

Nebo na stisknutí :kbd[Ctrl]+:kbd[C].

```js
document.addEventListener('keyup', (e) => {
  if (e.code === 'KeyC' && e.ctrlKey) {
    console.log('Ctrl+C');
  }
});
```


Formulářové prvky mají mnoho dalších atributů, které jsme v lekci nezmínili. Patří mezi ně

- `autocomplete` pro lepší automatické doplňování. Více zde: [The HTML autocomplete attribute | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete).
- `autofocus` zaměří políčko hned po načtení stránky, aby do něj mohl uživatel okamžitě psát. Užitečné hlavně v případech, kdy očekáváme, že uživatel začne vyplňovat první políčko bezprostředně po načtení stránky,
- `disabled` zamezí vyplnění políčka,
- `value` políčko předvyplní daným obsahem,
- `checked` říká, že zaškrtávací políčko má být v počátečním stavu předzaškrtnuté,
- `placeholder` je nevýrazná nápověda v místě, kam uživatel píše text. Není vidět, pokud uživatel začne psát. Protože je nápověda nevýrazná a mizí, není vhodné ji používat pro důležité informace,
- `required` přiměje uživatele před odesláním vyplnit aspoň něco,
- `minlength` přiměje uživatele vyplnit políčko o minimální délce.
