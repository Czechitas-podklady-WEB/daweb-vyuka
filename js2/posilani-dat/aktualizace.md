## Aktualizace obsahu stránky

V této části se opět vrátíme k naší aplikaci s nákupními seznamy. V předchozí části jsme sice komponentu `ShoppingItem` uděleli hezky interaktivní, a můžeme v ní označovat položky jako koupené, ale zaškrtnutí položky se projeví pouze na frontendu. Když stránku obnovíme, vrátí se seznam do stavu, v jakém je na backendu. Budeme tedy změnu zaškrnutí chtít odeslat na server.

Abychom mohli různými způsoby měnit data na serveru, potřebujeme několik dalších metod pro naše HTTP požadavky. V předchozí částí jsme viděli metodu POST. Běžně se dále používají metody PATCH a DELETE. Jejich významy jsou následující:

- POST: slouží k přídání nového prvku do kolekce,
- PATCH: slouží k změně už existujícího prvku,
- DELETE: slouží k odstranění prvku z kolekce.

Většina backendových API funguje tak, že když nějakým požadavkem změníme data na serveru, jako odpověď vám přijdou aktualizovaná data, která pak můžeme rovnou zobrazit. Když tedy změníme zaškrtnutí položky, server nám jako odpověď pošle objekt s aktualizovanou položkou, kterou vykreslíme opět pomocí komponenty `ShoppingItem`.

### Implementace

Vyjdeme z [poslední verze](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/dom-elementy) našeho nákupního seznamu.

V našem příkladu nejdříve musíme přejít na nové API na adrese

```
https://apps.kodim.cz/daweb/shoplist/api
```

Naše staré stréninkové API totiž neumí aktualizovat data na serveru.

Při stisknutí zaškrtávacího tlačítka odešleme PATCH požadavek, který označí nebo odznačí položku seznamu na backendu. Kód tlačítka uvnitř komponenty `ShoppingItem` pak bude vypadat takto:

```js
element.querySelector('button').addEventListener('click', () => {
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/0/days/mon/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ done: !done }),
  })
    .then((response) => response.json())
    .then((data) => element.replaceWith(ShoppingItem(data.results)));
});
```

Nyní si můžeme vyzkoušet, že po obnovení stránky náš seznam bude už ve správném stavu podle toho, jak s ním interagujeme na frontendu.

Kód celé aplikace najdete na ve větvi [posilani-dat](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/posilani-dat) repozitáře s nakupním seznamem.
