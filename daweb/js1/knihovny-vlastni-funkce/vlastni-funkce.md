## Vlastní funkce

Funkce jsou jednou z nejdůležitějších součástí programování. Všimněte si, jak často vaše programy sestávají z volání různých funkcí. Ve všech programovacích jazycích je již od začátku mnoho funkcí rovnou k dispozici. Často ale potřebujeme funkci, která dělá něco specifického, důležitého pouze pro náš program. V takovém případě nám nezbývá, než si takovou funkci naprogramovat sami.

Představme si například, že vyměřujeme pozemek a chceme spočítat plochu pozemku, který má tvar pravoúhlého trojúhelníku o šířce `width` a výšce `height` jako na obrázku.

::fig[Pozemek]{src=assets/fields.svg}

Naše funkce tedy bude mít dva vstupy – šířku a výšku. Ze školy si pamatujeme, že plochu pravoúhlého trojúhelníku spočítáme tak, že vynásobíme šířku výškou a výsledek vydělíme dvěma. Už tedy víme, co má funkce dělat a zbývá nám tento postup zapsat v JavaScritpu.

<!-- prettier-ignore -->
```js
(width, height) => {
	return (width * height) / 2;
}
```

Zápis funkce se dělí na definici :term{cs="vstupů" en="inputs"} (před šipkou) a :term{cs="tělo" en="body"} (za šipkou). Jako vstupy v kulatých závorkách vidíme dvě slova `width` a `height`. To jsou speciální proměnné, kterým říkáme :term{cs="parametry" en="parameters"}.

Ve složených závorkách pak máme takzvané _tělo funkce_. To obsahuje kód, který se má vykonat, když funkci _zavoláme_. Úkolem naší funkce je vrátit nějaký výsledek. Speciální slovíčko `return` proto říká, co má být výsledkem naší funkce.

Zbývá ukázat, jak naší funkci zavoláme. Zde přichází jedno z nejdůležitějších uvědomění, které v JavaScriptu kdy zažijete.

**Funkce je hodnota, podobně jako číslo nebo řetězec!**

Funkci můžeme uložit do proměnné stejně jako každou jinou hodnotu. Uložením do proměnné tak funkci dáme jméno. Všimněte si, že jde o stejný postup jako s jakoukoliv jinou hodnotou:

```js
const age = 25;
const user = 'robert';
const married = false;
const element = document.querySelector('.card');
const landArea = (width, height) => {
  return (width * height) / 2;
};
```

Jakmile máme funkci takto hezky uloženou v proměnné, můžeme ji zavolat známým způsobem.

```js
landArea(5, 3);
```

Jakmile funkci takto zavoláme, například s hodnotami 5 a 3, JavaScript tyto hodnoty uloží do parametrů `width` a `height`. V těle funkce pak parametry použijeme jako normální proměnné pro náš výpočet.
