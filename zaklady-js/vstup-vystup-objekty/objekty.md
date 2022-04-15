## Objekty

Prozatím jsme v naších programech pracovali pouze s čísly a řetězci. V reálnějších programech však budeme potřebovat do naších proměných uložit více než pouze jednu informaci. Představte si například, že chceme evidovat doručovací adresu uživatele e-shopu. Každá adresa má ulici, číslo domu, město a PSČ. Takovou informaci bychom mohli zkusit nacpat do jednoho řetězce třeba takto. 

```js
const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy';
```

Vysekat z takového řetězce jednotlivé údaje je ovšem dost pracné a našikovné. Pokud chceme informace lépe strukturovat, použijeme v JavaScriptu takzvané :term{cs="objekty" en="objects"}. 

```js
const address = {
  streetName: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postalCode: '123 11',
};
```

Objekt vytvoříme tak, že do složených závorek vložíme čárkou oddělené záznamy, kterým se říká :term{cs="vlastnosti" en="properties"}. Každá vlastnost sestává z takzvaného :term{cs="klíče" en="key"} a :term{cs="hodnoty" en="value"}.

::fig[Struktura objektu]{src=assets/object.png size=50}

Pomocí klíčů pak můžeme z objektu získat jednotlivé hodnoty použitím takzvané :term{cs="tečkové notace" en="dot notation"}.

```jscon
> address.city
"Horní Dlouhonosy"
> address.streetName
"Pod Kaštany"
> address.number
31
```

Klíče v objektu se chovají podobně jako proměnné. Řídí se stejnými pravidly pro názvosloví. Můžete tedy mít objekty třeba v hadí notací.

```js
const address = {
  street_name: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postal_code: '123 11',
};
```

Nelze však použít například klíče s pomlčkou.

```js
const address = {
  street-name: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postal-code: '123 11',
};
```

Pokud trváme na tom, že v klíči chceme mít pomlčku nebo dokonce mezeru, můžeme jej uzavřít do uvozovek jako řetězec. 

```js
const address = {
  'street name': 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  'postal-code': '123 11',
};
```

Potíž je v tom, že k takovým klíčům se už pomocí tečkové notace nedostaneme a musíme použít jiný zápis. 

```jscon
> address['street name']
"Pod Kaštany"
> address['postal-code']
"123 11"
```

Tento zápis není tak šikovný jako tečková notace a proto se budeme klíčům v uvozovkách snažit co nejvíce vyhýbat. 

Hodnoty uvnitř objektů lze také měnit. Takto například můžeme změnit číslo ulice. 

```jscon
> address.number = 28
```

Všimněte si, že při vytváření objekt ukládáme do proměnné, jde tedy o nový typ hodnoty, podobně jako číslo nebo řetězec. To mimo jiné znamená, že uvnitř objektu můžeme mít vnořené další objekty. Takto bychom mohli například reprezentovat uživatele i s doručovací adresou. 

```js
const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos', 
  address: {
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11',
  },
  cartItems: 0,
};
```

Kdybychom pak chtěli získat například město, kam máme objednané zboží doručit, opět použijeme tečkovou notaci. 

```jscon
> user1.address.city
"Horní Dlouhonosy"
```

Díky objektům tak můžeme v našich programech reprezentovat i velmi komplikovaná data. 