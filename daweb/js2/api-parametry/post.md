## POST dotazy

V minulé lekci už jsme si ukazovali, jak pomocí JavaScriptu posílat POST dotazy na server. Když si založíme kolekci pro `apidroid`, získáme zároveň také možnost pomocí POST dotazů vkládat do kolekce nové prvky.

Když chceme přidat nový prvek, pošleme na endpoint příšlušící dané kolekci POST dotaz s tělem, které obsahuje nový prvek. 

```js
fetch('http://localhost:4000/api/studenti', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Eva',
    age: 16,
    grade: 2,
  }),
});
```

Všimněte si, že v těle dotazu posíláme objekt, který obsahuje všechny vlastnosti nového studenta kromě vlastnosti `id`. Server `id` pro nový prvek vygeneruje sám, abychom se nemuseli starat o to, aby bylo číslo unikátní.

Když se nám podaří úspěšně odeslat POST dotaz, server nám vrátí odpověď s kódem `201 Created` a v těle odpovědi nám vrátí `id` nově vytvořeného prvku.

```json
{
  "data": {
    "insertedId": 10
  }
}
```
