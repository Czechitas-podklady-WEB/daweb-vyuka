## Hodnoty a operátory

:term{cs="Hodnoty" en="Values"} a :term{cs="operátory" en="operators"} jsou základním stavebním kamenem veškerého programování. V této lekci se představíme ty nejzákladnější a v dalších lekcích budeme postupně přidávat další.

### Čísla a aritmetika

Každý počítač je ve své nejniternější podstatě jen ohromně rychlá kalkulačka. Proto je přirozené, že si v JavaScriptu nejdříve vyzkoušíme počítání. Počítání s čísly se odborně říká _aritmetika_. Nemusíte se vůbec bát, do žádné tvrdé matematiky se určitě pouštět nebudeme. Zcela nám postačí znalosti nabyté ve školce. Do vašeho souboru `index.js` napište

```js
document.body.innerHTML += 12 + 5;
```

Všimněte si, že opět používáme náš tajemný příkad pro výstup do stránky. Budeme jej v následujících lekcích hojně používat, abychom si mohli výsledky našich programů snadno prohlédnout. Když nyní obnovíte stránku v prohlížeči, měli byste vidět číslo 17, tedy výsledek sčítání 12 a 5. Můžete si vyzkoušet i jiné operace:

```js
document.body.innerHTML += 12 - 5;
```

```js
document.body.innerHTML += 12 * 5;
```

```js
document.body.innerHTML += 12 / 5;
```

Vždy, když náš program změníme, je potřeba udělat refresh stránký v prohlížeči, aby se program spustil znovu.

Zatím jsme sice nic závratného nespočítali, použili jsme však základní JavaScriptové hodnoty a operátory. Hodnoty jsou v našem případě _čísla_. Později uvidíme další druhy hodnot, které na kalkulačce nepotkáte.

:::warn
Pozor na to, že ve všech programovacích jazycích (s výjimkou MS Excel) se desetinná čísla píší s tečkou, nikoliv s čárkou.
:::

Operátory jsou v našem případě _sčítání_, _odčítání_, _násobení_ a _dělení_. Je potřeba si zvyknout na to, jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku.

Kromě výše zmíněných nabízí JavaScript jeden zajímavý operátor, který jste možná ještě nepotkali. Jmenuje se _zbytek po dělení_.

```js
document.body.innerHTML += 12 % 5;
```

Pro zbytek po dělení se překvapivě používá znak procenta, přestože s procenty tento operátor nemá nic společného. Jeho výsledek je zbytek po celočíselném dělení prvního čísla druhým číslem. Zbytek po dělení můžeme použít například ke zjištění, zde ja číslo sudé nebo liché. Sudá čísla totiž mají po dělení dvěma zbytek 0. Také se nám tento operátor bude hodit pro práci s časem a daty.

Z operátorů a hodnot můžete samozřejmě stavět mnohem složitější konstrukce třeba i s použitím závorek.

```js
document.body.innerHTML += 5 * (3 + 7) % 9;
```

Konstrukcím vytvořeným z hodnot a operátorů se odborně říká :term{cs="výrazy" en="expressions"}. Pokud necháme JavaScript runtime spočítat výsledek výrazu, získáme tak jeho hodnotu. Každý výraz tedy má svoji hodnotu a můžeme si ji vždy vypsat do stránky, abychom ji viděli. Je dobré zde zmínit, že ne všechny konstrukce v JavaScriptu jsou výrazy. To se však ukáže jako důležité až později.

### Řetězce

Pokud chceme v JavaScriptu pracovat s textem, použijeme hodnotu, které se říká :term{cs="řetězec" en="string"}. Můžeme pak psát například:

```js
document.body.innerHTML += 'Pavel';
```

```js
document.body.innerHTML += 'Prací prášek';
```

```js
document.body.innerHTML += "I'am awesome";
```

```js
document.body.innerHTML += 'Řekl: "ahoj"';
```

```js
document.body.innerHTML += '<h1 class="title">Digitální akademie Web</h1>';
```

Textové řetězce vždy uzavíráme do uvozovek. V JavaScriptu můžete používat jak apostrofy (jednoduché uvozovky), tak dvojité uvozovky. Z hlediska funkčnosti programu na druhu použitých uvozovek nezáleží. Můžete si tak pomaličku začít budovat svůj programátorský styl a používat ty uvozovky, které se vám líbí. Občas se dvojité uvozovky hodí, pokud chceme mít uvnitř řetězce například apostrof. Pro tento případ si však později ukážeme obecnější techniku.

Textové řetězce jdou sčítat podobně jako čísla, můžete tedy psát například následující:

```js
document.body.innerHTML += 'Digitální akademie' + ' Web';
```

```js
document.body.innerHTML += 'Digitální akademie' + ' ' + 'Web';
```

```js
document.body.innerHTML += 'Digitální akademie Web' + '';
```

```js
document.body.innerHTML += '<h1>' + 'Digitální akademie Web' + '</h1>';
```

Všimněte si v druhém příkladu řetězce, který obsahuje pouze mezeru. V třetím případě dokonce vidíme řetězec, který neobsahuje vůbec nic. To je takzvaný :term{cs="prázdný řetězec" en="empty string"}. Chová se podobně jako nula při sčítání čísel a bude se nám pozdějí hodit.
