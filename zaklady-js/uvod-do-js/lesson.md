Milí účastníci webové akademie, v této části kurzu se postupně začneme učit programovat v jazyce JavaScript. Jak už jste poznali z předchozích lekcí, jazyky HTML a CSS dávají webovým stránkám strukturu a vzhled. Většina moderních stránek a aplikací však potřebuje také nějaké chování a interaktivitu. Tu zajišťuje právě v JavaScriptu napsaný program.

Svět programování může ve srovnání s HTML a CSS ze začátku působit velmi tajemně, plný zlých nástrah a neproniknutelných složitostí. Nutnost zapojovat možná trochu zaprášená zákoutí vašeho mozku může ze začátku být velká výzva. Proto společně vykročíme zvolna a krůček po krůčku. Budeme věnovat náležitou péči každému jednotlivému tématu tak, abyste do něj dokázali skutečně proniknout a nepřipadali si jako na jiné planetě. Vězte, že po chvíli se možná trochu zrezivělá mozkové kolečka začnou točit lehčeji a programování vám bude přinášet velkou radost z tvoření.

## JavaScript

Jazyk JavaScript je jedním z nejdůležitějších programovacích jazyků nejen v prostředí webu ale i v IT obecně. V tomto kurzu se tedy budeme zaměřovat pouze na něj. Do začátku počítáme s tím, že jste už nějaký programovací jazyk viděli alespoň z jedoucího vlaku. I tak však budeme při představování JavaScriptu postupovat od úplných základů.

Než se naplno pustíme do JavaScriptu, je dobré si pořádně ujasnit terminologii. JavaScript je programovací jazyk, tedy sada nějakých pravidel jak sestavovat textové příkazy pro počítač. Pokud chceme, aby náš počítač tyto příkazy vykonal, protřebujeme takzvaný _JavaScript runtime_. To je program, který čte JavaScriptové příkazy, a jeden za druhým je provádí. Pokud bychom použili divadelní analogii, můžeme si představit, že JavaScriptový program je scénář nějakého představení, a JavaScript runtime je herec, který představení podle tohoto scénáře zahraje.

![JavaScript runtime](assets/runtime.jpg)

Velkou výhodu máme do zacátku v tom, že každý webový prohlížeč v sobě obsahuje JavaScript runtime. Naše první JavaScriptové příkazy tak můžeme psát rovnou v prohlížeči. Stačí otevřít takzvané _Developer Tools_.

## Hodnoty a operátory

<term cs="Hodnoty" en="Values"> a <term cs="operátory" en="operators"> jsou základním stavebním kamenem veškerého programování. V této lekci se představíme ty nejzákladnější a v dalších lekcích budeme postupně přidávat další.

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

Vždy, když v konzoli napíšete příkaz a stisknete klávesu [[Enter]], pošlete tím JavaScriptovému runtimu uvnitř prohlížeče příkaz. Runtime tento příkaz vykoná a ihned vám odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme však základní JavaScriptové hodnoty a operátory. Hodnoty jsou v našem případě čísla. Později uvidíme další druhy hodnot, které na kalkulačce nepotkáte.

:::warn
Pozor na to, že ve všech programovacích jazycích (s výjimkou MS Excel) se destinná čísla píší s tečkou, nikoliv s čárkou.
:::

Operátory jsou v našem případě sčítání, odčítání, násobení a dělení. Je potřeba si zvyknout na to, jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku.

Kromě výše zmíněných nabízí JavaScript dva další zajímavé operátory: mocnění a zbytek po dělení.

```jscon
> 2 ** 4
16
> 12 % 5
2
```

Mocnění si nejspíš pamatujete ještě ze základní školy. Zbytek po dělení však může být překvapení obzvlášť proto, že se zapisuje symbolem procenta. Výsledek této operace je zbytek po celočíselném dělení. Můžeme pomocí něj například zjistit, zda je číslo sudé, tedy zbytek po dělení dvěma je roven nule. Později uvidíme užitečnější a také zajímavější použití této operace.

Z operátorů a hodnot můžete samozřejmě stavět mnohem složitější konstrukce třeba i s použitím závorek.

```jscon
> 5 * (9 + 7) ** (1/2)
20
```

Konstrukcím vytvořeným z hodnot a operátorů se odborně říká <term cs="výrazy" en="expressions">. Pokud necháme JavaScript runtime spočítat výsledek výrazu, získáme tak jeho hodnotu. Každý výraz tedy má svoji hodnotu a JavaScript runtime nám ji rád sdělí, když mu výraz pošleme v konzoli. Je dobré zde zmínit, že ne všechny konstrukce v JavaScriptu jsou výrazy. To se však ukáže jako důležité až později.

### Řetězce

Pokud chceme v JavaScriptu pracovat s textem, použijeme hodnotu, které se říká <term cs="řetězec" en="string">. Můžeme pak psát například toto.

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

Všimněte si v druhém příkladu řetězce, který obsahuje pouze mezeru. V třetím případě dokonce vidíme řetězec, který neobsahuje vůbec nic. To je takzvaný <term cs="prázdný řetězec" en="empty string">. Chová se podobně jako nula při sčítání čísel a bude se nám pozdějí hodit.

## Funkce

Pouze s hodnotami a operátory bychom se v programování daleko nedostali. Často budeme potřeboval vykonat složitější operaci než jen matematický výpočet. Pokud nějakou takovou složitější operaci programátoři používají často, šance je, že pro ni existuje <term cs="funkce" en="function">.

Funkce je kousek programu řešící nějakou konkrétní úlohu. Většinou jde o úlohu, kterou řešime často a opakovaně. Příkladem může být například zaokrouhlování desetinných čísel na celá čísla. To je operace, která se hodí skoro ve všech výpočtech, a bylo by zbyteční ji programovat neustále znova. V JavaScriptu proto máme k dispozici funkci jménem `Math.round`.

Pokud chceme nějakou funkci použít, uděláme to tak, že napíšeme její jméno a do kulatých závorek vložíme hodnotu, se kterou má funkce pracovat. Takto například použijeme naši funci `Math.round`.

```jscon
> Math.round(3.14)
3
```

Hodnotě uvnitř kulatých závorek říkáme <term cs="vstup" en="input"> funkce. Spuštění funkce se mezi programátory říká <term cs="volání" en="call">. Jakmile funkce dokončí operaci, <term cs="vrátí" en="return"> nám takzvaný <term cs="výstup" en="output">. V programátorském žargonu tedy říkáme, že když **zavoláme** funkci s nějakým **vstupem**, ona nám **vrátí výstup**.

### Rychlé občerstvení

Funkce jsou rozsáhlé téma, které nás bude provázet až do konce kurzu. Již brzy se také naučíme psát funkce vlastní. Pro lepší představu o tom, jak funce fungují, se nám bude hodit následující analogie. 

Můžeme si představovat, že funkce je něco jako stánek s rychlým občerstvením. Takový stánek má dvě okýnka. Jedno vstupní, do kterého zadáte svoji objednávku, a druhé výstupní, kde po chvíli obdržíte svůj hamburger nebo smažák v housce. Objednávání rychlé svačiny je pak podobné jako volání funkce. Do stánku vložíte nějaké vstupy a ven vám vypadne výstup. Pokud nejste vysloveně zvědaví nebo paranoidní, dění uvnitř stánku vás až tolik nezajímá, podobně jako vás až tolik nezajímá, jak vlastně JavaScript technicky provádní zaokrouhlování. Důležité je, že funkce funguje, a že párek v rohlíku nakonec chutná tak, jak jste zvyklí. 

![Zaokrouhlování](assets/zaokrouhlovani.png){.fig .fig-60}

### Výrazy s funkcemi

Volání funkce je také výraz podobně jako operace s hodnotami a proměnnými. Můžeme jej tedy použít uvnitř libovolného jiného výrazu. Navíc vstup pro funkci lze také vytvořit pomocí výrazu. Nabízí se tedy mnoho způsobů, jak skládat složitější výpočty, jako například tento.

```jscon
> 17 % Math.round(30 ** 0.5)
2
```

### Užitečné funkce

JavaScript obsahuje spousty a spousty funkcí, díky kterým lze provádět mnoho užitěčných a zajímavých věcí. Během celého kurzu je budeme společně objevovat. Takto zkraje si ukážeme jen ty nejzákladnější.

Pokud bychom místo klasického zaokrouhlování chtěli zaokrouhlovat vždy dolů nebo vždy nahoru, můžeme použít funkce `Math.floor` a `Math.ceil`.

```jscon
> Math.floor(3.9)
3
> Math.ceil(3.1)
4
```

Jednou z funkcí, se kterými si užijeme více zábavy, je `Math.random`. Ta při každém zavolání vrátí náhodné desetinné číslo mezi 0 a 1.

```jscon
> Math.random()
0.3533144240115158
> Math.random()
0.30269146855422213
> Math.random()
0.3730206392247666
```

Všimněte si, že tato funkce nemá žádný vstup. I takové funkce jsou možné a nejsou žádnou velkou výjimkou. 

Chytrým použitím zaokrouhlování a trochou matematiky můžeme pomocí `Math.random` generovat náhodná celá čísla například v rozmezí 0 až 9.

```jscon
> Math.floor(Math.random() * 10)
8
> Math.floor(Math.random() * 10)
2
> Math.floor(Math.random() * 10)
5
```

To se nám může hodit pokud programujeme nějakou hru nebo třeba chceme-li vygenerovat náhodná testovací data.

[[[ excs Cvičení: Výrazy a funkce
- vyplata
- delka-filmu
- email
]]]

[[[ excs Cvičení: Bonusy
- uroky
- novy-koberec
]]]

## První program

Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme poslali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou.

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím bude obsahovat jen nadpis.

```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>První program</title>
  </head>
  <body>
    <h1>První program</h1>
  </body>
</html>
```

Pro náš JavaScriptový kód budeme vždy vytvářet oddělený soubor podobně jako jste zvyklí vytvářet oddělený soubor pro CSS styly. JavaScriptovému programu většinou budeme dávat název `index.js`. Jeho obsah bude vypadat takto.

```js
'use strict';

console.log('ahoj');
```

Pokud chceme náš program propojit se stránkou, vložíme odkaz na konec značky `body`.

```html
<body>
  <h1>První program</h1>
  <script src="index.js"></script>
</body>
```

Pokud nyní soubor `index.html` otevřete v prohlížeči, měli byste v konzoli vidět text, který jsme předali funkci `console.log`. Tato do konzole vypíše cokoliv, co jí předáme na vstupu. 

### console.log vs document.write

Funkce `console.log` vypisuje obsah do konzole. To se hodí nám programátorům, abychom si mohli vypsat informace o tom, co se v našem programu děje. Uživateli však chceme informace zobrazovat přímo na stránce. Než se naučíme lepší postupy, můžeme k tomu využít funkci `document.write`. 

```js
'use strict';

document.write('<p class="message">ahoj</p>');
```

Pomocí této funkce lze na konec stránky vložit libovolné HTML. Můžete pak v CSS nastylovat třídu `message` a váš program tak bude vytvářet hezký výstup. Tuto funkci budeme používat do chvíle, než se naučíme chytřejší funkce pro práci s obsahem stránky. 

Funkcie `console.log` i `document.wrtie` jsou zajímavé tím, že jim můžete předat libovolný počet vstupů. 

```js
'use strict';

console.log('Zpráva:', 'ahoj', 15);
document.write('<h2>Zpráva</h2>', '<p>ahoj</p>');
```

### Direktiva use strict

Všimněte si, že náš program začíná řetězcem `use strict`. Tímto způsobem dáváme najevo, že chceme náš program spouštět v přísnějším režimu. JavaScript runtim tak bude náš program přísněji kontrolovat na chyby, což se nám obzvlášť v začátcích velmi hodí. 

<!-- Zakazuje JavaScript runtimu například vytvářet nové proměnné bez použití `let`, `const` nebo `var`. Vždy, když přiřadíte hodnotu do neexistující proměnné, obdržíte chybovou hlášku místo toho, aby runtime vytvořil novou proměnnou, jako by se nechumelilo.  -->

### Středníky

Téměř každý příkaz v JavaScriptu končí středníkem. Tím JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript poznal i bez středníků a ve skutečnosti bychom je na většině míst ani psát nemuseli. Zakopaný pes je však ve slovíčku <i>většině</i>. Pokud středníky nepíšeme, v některých situacích se může stát, že runtime pochopí náš kód špatně. Abychom si nepřidělávali takto ze začátku starosti, budeme vkládat středníky všude, kde to je možné.

## Proměnné

Při složitějších operacích a výpočtech často vyvstane potřeba si nějaký mezivýpočet uložit pro pozdější použití. K tomu nám poslouží takzvané <term cs="proměnné" en="variables">. Proměnná je jakási pojmenovaná krabička nebo šuplík, do kterého si můžeme uložit nějakou hodnotu, abychom ji neztratili a mohli ji používat v dalších výpočtech. Abychom si procvičili proměnné a zajímavé operátory, zkusíme vyřešit následující úlohu.

Mějme čas v hodinách zadaný ve 24-hodinovém formátu. Tři hodiny odpoledne tedy píšeme jako 15h. Nyní chceme spočítat, kolik hodin uvidíme na hodinách po uplynutí zadané doby. Například jaký bude čas po uplynutí 15 hodin?

```js
'use strict';

const cas = 13;
const novyCas = (cas + 15);
console.log(novyCas);
```

V tomto kusu kódu jsme vytvořili hned dvě proměnné: <var>cas</var> a <var>novyCas</var>. Každá proměnné v JavaScriptu musí mít své jméno. To by mělo dobře vystihovat, co je v proměnné uloženo. Pokud chceme v programu používat nějakou promennou, musíme ji vždy nejdříve vytvořit. To se dělá pomocí klíčového slova `const`. Takovou proměnnou pak můžeme použít v libovolném výrazu tak, že prostě uvedeme její jméno.

Většinu proměnných budeme používat tak, že jim při vytvoření přiřadíme nějakou hodnotu a tato hodnota už v proměnná zůstane až do konce jejího života. Občas se však stane, že potřebujeme hodnotu uloženou v nějaké proměnné změnit. V takovém případě musíme proměnnou vytvořit pomocí slovíčka `let`.

Takto můžeme například zkusit spočítat svou budoucí výplatu, pokud budeme pracovat na plný úvazek 21 dní v měsíci za 500 kč na hodinu.

```js
'use strict';

let sazba = 500;
let vyplata = 8 * 21 * sazba;
console.log(vyplata);
```

Pokud chceme spočítat výplatu pro jinou sazbu, můžeme hodnotu v proměnné změnit. V takovém případě už **nepoužíváme** `const` ani `let`.

```js
let sazba = 500;
let vyplata = 8 * 21 * sazba;

sazba = 600;
console.log(vyplata);
```

Zde si však musíme všimnout jedné velmi důležité věci.

### JavaScript není Excel

Dejte pozor na to, že do proměnné se jako do šuplíku ukládá pouze hodnota a nikoliv celý výraz. Všimněte si, že v příkladu výše jsem změnili hodnotu proměnné <var>sazba</var>. Po této změně bude v proměnné <var>vyplata</var> pořád původní hodnota. Pokud chceme obsah této proměnné aktualizovat, musíme příkaz spustit znova.

```js
let sazba = 500;
let vyplata = 8 * 21 * sazba;
console.log(vyplata);

sazba = 600;
vyplata = 8 * 21 * sazba
console.log(vyplata);
```

Při práci s proměnnými je také dobré dodržovat určitá pravidla.

### Preferujte const

Proměnné vytvořené pomocí `const` měnit nelze. U dobrých programátorů je zvykem vytvářet proměnné téměř výhradně pomocí `const` a používat `let` pouze v případě, že k tomu máme dobrý důvod. Čím méně proměnných lze měnit, tím menší je totiž riziko vzniku nežádoucích chyb v programu.

### Pojmenování proměnných

Už od úplných začátků s programováním je dobré učit se dobrým návykům, které budou později prospěšné nejen vám, ale hlavně lidem ve vašem okolí. Jedním z takových návyků je správné pojmenovávání proměnných.

1. Název proměnné by neměl začínat velkým písmenem, např. ~~<var>Pocet</var>~~. Takové názvy jsou rezervované pro speciální typy proměnných, ke kterým se v tomto kurzu dostaneme až téměř na konci.
1. Název proměnné by neměl obsahovat diakritiku, např. ~~<var>počet</var>~~. Programovací jazyky vznikaly v anglickém prostředí, kde se diakritika nepoužívá, takže si s ní většina jazyků neporadí.
1. Víceslovné proměnné nesmí obsahovat mezeru, např. ~~<var>pocet hodin</var>~~. To by si JavaScript myslel, že to jsou dvě proměnné za sebou a nevěděl by co s tím. Pokud chcete proměnnou s více slovy, použijte takzvanou <term cs="velbloudí notaci" en="camel case"> <var>pocetHodin</var> nebo <term cs="hadí notaci" en="snake case"> <var>pocet_hodin</var>.
1. Vždy proměnnou pojmenujte tak, aby její název jasně napovídal, co se uvnitř ní nachází. Například proměnná <var>pocet_hodin</var> jasně říká, že v ní bude uložen asi nějaký počet hodin. Můžeme podlehnout touze název proměnné zkrátit například na <var>pcthdn</var>, aby se nám lépe psala. Až ovšem někdo další bude takový program číst, bude mlátit hlavou do stolu, cože proboha znamená zkratka <var>pcthdn</var>.
1. Naposledy je dobré si uvědomit, že programy i programátoři se téměř vždy pohybují v mezinárodním prostředí. Takže je vždycky lepší pojmenovávat proměnné anglicky. V tomto kurzu ještě tohle pravidlo trošku rozvolníme, ale i tak si můžete začít zvykat na proměnné s názvem <var>number_of_hours</var>.

[[[ excs Cvičení: Programy, proměnné
- nahodna-cisla
- prevod-meny
- ultramaraton
]]]

[[[ excs Doporučené úložky na doma
- prijem-divadla  
- schopnejsi-zaokrouhlovani
- hazeni-kostkou
]]]

## Doporučené čtení na doma

JavaScript je programovací jazyk s dlouhou historií. Ta se píše už od roku 1995, kdy jistý pán jménem [Brendan Eich](https://cs.wikipedia.org/wiki/Brendan_Eich) vytvořil první verzi JavaScriptu tak, že spojil koncepty ze tří různých jazyků: Scheme, Self a Java. Od té doby si JavaScript s sebou nese některé zajímavé a užitečné koncepty, které v jiných mainstreamových jazycích moc nenajdete. Zároveň však obsahuje myšlenky, jež programování spíše komplikují. Na obojí, dobré i zlé, budeme v tomto kurzu často narážet.

### ECMAScript

Podobně jako má čeština <i>Pravidla českého pravopisu</i>, má i JavaScript svoje standardizovaná pravidla, kterým se říká _ECMAScript_. Podobně jako pravidla češtiny i ECMAScript se v čase vyvíjí a proměňuje. Aby se vždy vědělo o jaké verzi ECMAScript pravidel se mluví, používají se čísla verzí jako ECMAScript 1, ECMAScript 2 apod. Ke dnešnímu dni je aktuálně nejpoužívanější JavaScript ve verzi ECMAScript 6, zkráceně ES6. Je to poměrně mladá verze z roku 2015, takže často ještě narazíte na kód, který je napsaný ve verzi ES5 z roku 2009 nebo ještě starší.

Ve verzi ES5 se například proměnné nevytvářejí pomocí `let` a `const` nýbrž pomocí `var`. Náš příklad s výplatou by tedy ve verzi ES5 vypadal takto.

```jscon
> var celkem = 1 + 2 + 4 + 1 + 6
> var prumer = celkem / 5
```

Proměnné vytvořené pomocí `var` se dají měnit podobně jako proměnné vytvořené pomocí `let`. Platí pro ně ovšem trochu jiná pravidla a ta jsou právě často na překážku dobrému programátorskému stylu. To je důvod, proč toto klíčové slovo bylo v ES6 nahrazeno klíčovými slovy `let` a `const`. Klíčové slovo `var` už je tedy zastaralé a není žádný důvod jej používat. My v tomto kurzu budeme striktně používat `let` a `const`. Pokud v nějakém starším online kurzu nebo knize narazíte na `var`, použíjte místo něj vždy `let` nebo `const`.

### Vytváření proměnných

V JavaScriptu se ukrývá mnoho různých pastí, ve kterých je možné snadno uvíznout. Jedna z opravdu záludných věci je, že k vytvoření proměnné ve skutečnosti nepotřebujete ani `let`, ani `const`, ani `var`. Pokud přiřadíte hodnotu do proměnné, která ještě neexistuje, JavaScript runtime ji pro vás vytvoří automaticky. To však otvírá velký prostor pro chyby vzniklé překlepem. Uvažte například tento kód.

```jscon
> let mzda = 500
> nzda = 350
```

JavaScript runtime si zde neuvědomí, že jsme udělali překlep a vytvoří novou proměnnou <var>nzda</var> s hodnotou 350. Původní proměnná tedy zůstane nezměněná a už máme zaděláno na problém. Naštěstí se tento zdroj chyb dá odstranit tím, že JavaScript runtimu zakážeme vytvářet proměnné bez uvedení `let`, `const` nebo `var`. Jak se toto zařídí si ukážeme v následující lekci.

[[[ excs Volitelné úložky na doma
- schopnejsi-zaokrouhlovani-2
]]]

## Shrnutí

Po této lekci byste měli vědět a znát

* první důležité hodnoty - čísla a řetězce,
* aritmetické operátory - sčítání, odčítání, násobení, dělení, mocnění, zbytek po dělení,
* základní funkce:
  - `Math.round`, `Math.floor`, `Math.ceil`,
  - `Math.random`,
  - `console.log`, `document.write`,
* jak vytvořit stránku s JavaScriptovým programem,
* jak používat a správně pojmenovávat proměnné,
* rozdíl mezi `let` a `const`.
