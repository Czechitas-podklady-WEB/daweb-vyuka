## Hodnoty a operátory

:term{cs="Hodnoty" en="Values"} a :term{cs="operátory" en="operators"} jsou základním stavebním kamenem veškerého programování. V této lekci se představíme ty nejzákladnější a v dalších lekcích budeme postupně přidávat další.

### Čísla a aritmetika

Každý počítač je ve svojí nejniternější podstatě jen hrozně rychlá kalkulačka. Proto je přirozené, že si v JavaScriptu nejdříve vyzkoušíme počítání. Počítání s čísly se odborně říká aritmetika. Nemusíte se vůbec bát, do žádné tvrdé matematiky se určitě pouštět nebudeme. Zcela nám postačí znalosti nabyté ve školce. Do JS konzole ve vašem prohlížeči můžete rovnou zkusit napsat následující příkazy a sledovat jejich výsledky.

```jscon
> 12 + 5
17
> 12 - 5
7
> 12 * 5
60
> 12 / 5
2.4
```

Vždy, když v konzoli napíšete příkaz a stisknete klávesu :kbd[Enter], pošlete tím JavaScriptovému runtimu uvnitř prohlížeče příkaz. Runtime tento příkaz vykoná a ihned vám odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme však základní JavaScriptové hodnoty a operátory. Hodnoty jsou v našem případě čísla. Později uvidíme další druhy hodnot, které na kalkulačce nepotkáte.

:::warn
Pozor na to, že ve všech programovacích jazycích (s výjimkou MS Excel) se destinná čísla píší s tečkou, nikoliv s čárkou.
:::

Operátory jsou v našem případě sčítání, odčítání, násobení a dělení. Je potřeba si zvyknout na to, jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku.

Kromě výše zmíněných nabízí JavaScript jeden zajímavý operátor, který jste možná ještě nepotkali. Jmenuje se zbytek po dělení.

```jscon
> 12 % 5
2
> 11 % 2
1
```

Pro zbytek po dělení se překvapivě používá znak procenta, přestože s procenty tento operátor nemá nic společného. Jeho výsledek je zbytek po celočíselném dělení prvního čísla druhým číslem. Zbytek po dělení můžeme použít například k zjištění zde ja číslo sudé nebo liché. Sudá čísla totiž mají po dělení dvěma zbytek 0. Později uvidíme užitečnější a také zajímavější použití této operace.

Z operátorů a hodnot můžete samozřejmě stavět mnohem složitější konstrukce třeba i s použitím závorek.

```jscon
> 5 * (3 + 7) % 9
5
```

Konstrukcím vytvořeným z hodnot a operátorů se odborně říká :term{cs="výrazy" en="expressions"}. Pokud necháme JavaScript runtime spočítat výsledek výrazu, získáme tak jeho hodnotu. Každý výraz tedy má svoji hodnotu a JavaScript runtime nám ji rád sdělí, když mu výraz pošleme v konzoli. Je dobré zde zmínit, že ne všechny konstrukce v JavaScriptu jsou výrazy. To se však ukáže jako důležité až později.

### Řetězce

Pokud chceme v JavaScriptu pracovat s textem, použijeme hodnotu, které se říká :term{cs="řetězec" en="string"}. Můžeme pak psát například toto.

```jscon
> 'Pavel'
"Pavel"
> 'Prací prášek'
"Prací prášek"
> "I'am awesome"
"I'am awesome"
> 'Řekl: "ahoj"'
"Řekl: "ahoj""
> '<h1 class="title">Digitální akademie Web</h1>'
"<h1 class="title">Digitální akademie Web</h1>"
```

Textové řetězce vždy uzavíráme do uvozovek. V JavaScriptu můžete používat jak apostrofy (jednoduché uvozovky), tak dvojité uvozovky. Z hlediska funkčnosti programu na druhu použitých uvozovek nezáleží. Můžete si tak pomaličku začít budovat svůj programátorský styl a používat ty uvozovky, které se vám líbí. Občas se dvojité uvozovky hodí pokud chceme mít uvnitř řetězce například apostrof. Pro tento případ si však později ukážeme obecnější techniku.

Textové řetězce jdou sčítat podobně jako čísla, můžete tedy psát například následující.

```jscon
> 'Digitální akademie' + ' Web'
"Digitální akademie Web"
> 'Digitální akademie' + ' ' + 'Web'
"Digitální akademie Web"
> 'Digitální akademie' + ''
"Digitální akademie"
> '<h1>' + 'Digitální akademie Web' + '</h1>'
"<h1>Digitální akademie Web</h1>"
```

Všimněte si v druhém příkladu řetězce, který obsahuje pouze mezeru. V třetím případě dokonce vidíme řetězec, který neobsahuje vůbec nic. To je takzvaný :term{cs="prázdný řetězec" en="empty string"}. Chová se podobně jako nula při sčítání čísel a bude se nám pozdějí hodit.
