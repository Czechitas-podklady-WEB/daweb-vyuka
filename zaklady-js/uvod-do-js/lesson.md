Milí účastníci webové akademie, v této části kurzu se postupně začneme učit programovat v jazyce JavaScript. Jak už jste poznali z předchozích lekcí, jazyky HTML a CSS dávají webovým stránkám strukturu a vzhled. Většina stránek a aplikací však také nabízí nějaké chování a interaktivitu, kterou zajišťuje právě program napsaný v JavaScritpu.

Svět programování může ve srovnání s HTML a CSS ze začátku působit velmi tajemně, plný zlých nástrah a neproniknutelných složitostí. Nutnost zapojovat možná trochu zaprášená zákoutí vašeho mozku může ze začátku být velká výzva. Proto společně vykročíme zvolna a krůček po krůčku. Budeme věnovat péči každému jednotlivému tématu tak, abyste do něj dokázali skutečně proniknout a nepřipadali si jako na jiné planetě. Vězte, že po chvíli se možná trochu zrezivělá mozkové kolečka začnou točit lehčeji a programování vám bude přinášet velkou radost z tvoření.

## JavaScript

Jazyk JavaScript je jedním z nejdůležitějších programovacích jazyků v prostředí webu. V tomto kurzu se tedy budeme zaměřovat pouze na něj. Do začátku počítáme s tím, že jste už nějaký programovací jazyk viděli alespoň z jedoucího vlaku. I tak však budeme při představování JavaScriptu postupovat od úplných základů.

Než se naplno pustíme do JavaScriptu, je dobré si pořádně ujasnit terminologii. JavaScript je programovací jazyk, tedy sada nějakých gramatických pravidel jak sestavovat textové příkazy pro počítač. Pokud chceme, aby náš stroj tyto příkazy vykonal, protřebujeme takzvaný _JavaScript runtime_. To je program, který čte JavaScriptové příkazy a jeden za druhým je provádí. Pokud bychom použili divadelní analogii, můžeme si představit, že JavaScriptový program je scénář nějakého představení, a JavaScript runtime je herec, který představení podle tohoto scénáře zahraje.

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

Vždy, když v konzoli napíšete příkaz a stisknete klávesu [[Enter]], pošlete tím JavaScriptovému runtimu uvnitř prohlížeřč příkaz. Runtime tento příkaz vykoná a ihned vám odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme však základní JavaScriptové hodnoty a operátory. Hodnoty jsou v našem případě čísla. Později uvidíme další druhy hodnot, které na kalkulačce nepotkáte.

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

Mocnění si nejspíš pamatujete ještě ze základní školy. Zbytek po dělení však může být překvapení obzvlášť proto, že se zapisuje symbolem procenta. Výsledek této operace je zbytek po celočíselném dělení. Tento operátor se hodí v různých situacích. Můžeme pomocí něj například zjistit, zda je číslo sudé, tedy zbytek po dělení dvěma je roven nule.

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
```

Textové řetězce vždy uzavíráme do uvozovek. V JavaScriptu můžete používat jak apostrofy (jednoduché uvozovky), tak dvojité uvozovky. Z hlediska funkčnosti programu na druhu použitých uvozovek nezáleží. Můžete si tak pomaličku začít budovat svůj programátorský styl a používat ty uvozovky, které se vám líbí. Občas se dvojité uvozovky hodí pokud chceme mít uvnitř řetězce například apostrof. Pro tento případ si však později ukážeme obecnější techniku.

Textové řetězce jdou sčítat podobně jako čísla, můžete tedy psát například následující.

```jscon
> 'Digitální akademie' + ' Web'
'Digitální akademie Web'
> 'Digitální akademie' + ' ' + 'Web'
'Digitální akademie Web'
> 'Digitální akademie' + ''
'Digitální akademie'
```

Všimněte si v druhém příkladu řetězce, který obsahuje pouze mezeru. V třetím případě dokonce vidíme řetězec, který neobsahuje vůbec nic. To je takzvaný <term cs="prázdný řetězec" en="empty string">. Chová se podobně jako nula při sčítání čísel a bude se nám pozdějí hodit.

## Proměnné

Při složitějších operacích a výpočtech často vyvstane potřeba si nějaký mezivýpočet uložit pro pozdější použití. K tomu nám slouží takzvané <term cs="proměnné" en="variables">. Proměnná je jakási pojmenovaná krabička nebo šuplík, do kterého si můžeme uložit nějakou hodnotu, abychom ji neztratili a mohli ji používat v dalších výpočtech. Abychom si procvičili proměnné a zajímavé operátory, zkusíme vyřešit následující úlohu.

Mějme čas v hodinách zadaný ve 24-hodinovém formátu. Tři hodiny odpoledne tedy píšeme jako 15h. Nyní chceme spočítat, kolik hodin uvidíme na hodinách po uplynutí zadané doby. Například jaký bude čas po uplynutí 15 hodin?

```jscon
> const cas = 13
> const novyCas = (cas + 15)
```

V tomto kusu kódu jsme vytvořili hned dvě proměnné: <var>cas</var> a <var>novyCas</var>. Každá proměnné v JavaScriptu musí mít své jméno. To by mělo dobře vystihovat, co je v proměnné uloženo. Pokud chceme v programu používat nějakou promennou, musíme ji vždy nejdříve vytvořit. To se dělá pomocí klíčového slova `const`. Takovou proměnnou pak můžeme použít v libovolném výrazu tak, že prostě uvedeme její jméno.

Většinu proměnných budeme používat tak, že jim při vytvoření přiřadíme nějakou hodnotu a tato hodnota už v proměnná zůstane až do konce jejího života. Občas se však stane, že potřebujeme hodnotu uloženou v nějaké proměnné změnit. V takovém případě musíme proměnnou vytvořit pomocí slovíčka `let`.

Takto můžeme například zkusit spočítat svou budoucí výplatu, pokud budeme pracovat na plný úvazek 21 dní v měsíci za 500 kč na hodinu.

```jscon
> let sazba = 500
> let vyplata = 8 * 21 * sazba
```

Pokud chceme spočítat výplatu pro jinou sazbu, můžeme hodnotu v proměnné změnit. V takovém případě už **nepoužíváme** `const` ani `let`.

```jscon
> sazba = 600
```

Zde si však musíme všimnout jedné velmi důležité věci.

### JavaScript není Excel

Dejte pozor na to, že do proměnné se jako do šuplíku ukládá pouze hodnota a nikoliv celý výraz. Všimněte si, že v příkladu výše jsem změnili hodnotu proměnné <var>sazba</var>. Po této změně bude v proměnné <var>vyplata</var> pořád původní hodnota. Pokud chceme obsah této proměnné aktualizovat, musíme příkaz spustit znova.

```jscon
> vyplata = 8 * 21 * 500
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

@exercises ## Cvičení - hodnoty a proměnné [

- vyplata
- ultramaraton
- prijem-divadla
  ]@

@exercises bonuses [

- uroky
- novy-koberec
  ]@

## Funkce a metody

Pouze s proměnnými, hodnotami a operátory bychom se v programování daleko nedostali. Často budeme potřeboval vykonat nějakou složitější operaci než jen matematický výpočet. Pokud nějakou takovou složitější operaci programátoři potřebují často, šance je, že pro ni existuje <term cs="funkce" en="function">.

Funkce je kousek programu řešící nějakou konkrétní úlohu, kterou potřebujeme řešit velmi často. Příkladem může být například zaokrouhlování desetinných čísel na celá čísla. To je operace, která se hodí skoro ve všech výpočtech a bylo by zbyteční ji programovat neustále znova. V JavaScriptu proto máme k dispozici funkci jménem `Math.round`.

Pokud chceme použít nějakou funkci, uděláme to tak, že napíšeme její jméno a do kulatých závorek vložíme hodnotu, se kterou má funkce pracovat. Takto například použíjeme naši funci `Math.round`.

```jscon
> Math.round(3.14)
3
```

Hodnotě uvnitř kulatých závorek říkáme <term cs="vstup" en="input"> funkce. Spuštění funkce se mezi programátory říká <term cs="volání" en="call">. Jakmile funkce dokončí operaci, <term cs="vrátí" en="return"> nám takzvaný <term cs="výstup" en="output">. V programátorském žargonu tedy říkáme, že když **zavoláme** funkci s nějakým **vstupem**, ona nám **vrátí výstup**.

Podobně jako operace s hodnotami a proměnnými, volání funkce je také výraz. Volání funkce tedy můžeme použít uvnitř libovolného jiného výrazu. Navíc vstup pro funkci taky můžeme vytvořit pomocí výrazu. Nabízí se tedy mnoho způsobů, jak skládat složitější výrazy, jako například tento.

```jscon
> 17 % Math.round(30 ** 0.5)
2
```

### Další užitečné funkce

JavaScript obsahuje spousty a spousty funkcí, díky kterým můžeme provádět mnoho užitěčných a zajímavých věcí. Budeme je postupně společně objevovat během celého kurzu. Takto z kraje si ukážeme jen ty nejzákladnější.

Pokud bychom místo klasického zaokrouhlování chtěli zaokrouhlovat vždy dolů nebo vždy nahoru, můžeme použít funkce `Math.floor` a `Math.ceil`.

```jscon
> Math.floor(3.9)
3
> Math.ceil(3.1)
4
```

Funkce, se kterou si lze užít více zábavy je `Math.random`. Ta při každém zavolání vrátí náhodné desetinné číslo mezi 0 a 1.

```jscon
> Math.random()
0.3533144240115158
> Math.random()
0.30269146855422213
> Math.random()
0.3730206392247666
```

Chytrým použitím zaokrouhlování a trochou matematiky můžeme pomocí této funkce generovat náhodná celá čísla například v rozmezí 0 až 9.

```jscon
> Math.floor(Math.random() * 10)
8
> Math.floor(Math.random() * 10)
2
> Math.floor(Math.random() * 10)
5
```

## Metody

Často se stane, že některé funkce se hodí na práci pouze s jedním typem hodnoty.
Například bychom mohli mít funkci `toUpperCase`, která by převedla všechna písmena
v řetězci na velká písmena. Kdyby taková funkce existovala, mohli bychom ji
volat třeba takto

```jscon
> toUpperCase('martin')
'MARTIN'
```

Je pochopitelné, že taková funkce funguje pouze pro řetězce. Pro ostatní
hodnoty nedává smysl. Těžko si představit, co by taková funkce měla vrátit
například v takovémto případě.

```jscon
> toUpperCase(3.14)
```

Funkce, které pracují pouze na jednom typu hodnoty, se tvůrci JavaScriptu
rozhodli svázat přímo s touto hodnotu. Můžeme tedy říct, že funkce `toUpperCase`
patří pouze řetězcům. Máme-li funkci, která patří pouze typu řetězec, voláme ji pomocí takzvané <term cs="tečkové notace" en="dot notation">.

```jscon
> 'martin'.toUpperCase()
'MARTIN'
```

Funkcím jako výše, které patří jen konkrétním typům hodnot, říkáme <term cs="metody" en="methods">. Všimněte si, že metoda `toUpperCase` v JavaScriptu skutečně existuje, takže výše
uvedený kód bude opravdu fungovat. Podobně existuje například metoda
`toLowerCase`. Vyzkoušejte si ji!

### Užitečné metody na řetězcích

Na řetězcích máme v JavaScriptu spoustu metod, které nám umožňují provádět mnoho užitečných operací. Zde pro začátek vybereme pár z nich.

`toUpperCase()`
: Převede všechna písmena na velká.

```jscon
> 'popokatepetl'.toUpperCase()
'POPOKATEPETL'
```

`toLowerCase()`
: Převede všechna písmena na malá.

```jscon
> 'Popokatepetl'.toLowerCase()
'popokatepetl'
```

`trim()`
: Odstraní bílé znaky ze začátku a konce.

```jscon
> '  popokatepetl '.trim()
'popokatepetl'
```

`slice(start, end)`
: Vyřízne z řetězce kus podle zadaných pozic začátku a konce. U této metody poprvé narážíme na jednu programátorskou výstřednost, kterou budeme potkávat pořád znovu a znovu: **programátoři vždy počítají od nuly**, nikoliv od jedničky jako běžní lidé. V řetězci `'martin'` je tedy písmenko `'m'` na pozici nula, písmenko `'a'` na pozici 1 a tak dále. Metoda `slice` navíc bere dolní mez **včetně**, kdežto horní mez se bere **vyjma**.

```jscon
> 'popokatepetl'.slice(4, 7)
'kat'
> 'popokatepetl'.slice(0, 3)
'pop'
```

`indexOf(value)`
: Vyhledá řetězec zadaný v parametru `value` uvnitř řetězce, na kterém tuto metodu voláme. Vrací pozici prvního výskytu nebo -1 pokud se obsah `value` v 5et2zci nenachází.

```jscon
> 'popokatepetl'.indexOf('kat')
4
> 'popokatepetl'.indexOf('po')
0
> 'popokatepetl'.indexOf('t')
6
> 'popokatepetl'.indexOf('katka')
-1
```

`padStart(targetLength, padString)`
: Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce `padString`. Hodí se na zarovnávání nebo na formátování čísel.

```jscon
> '12'.padStart(4, '0')
'0012'
> '12'.padStart(4, ' ')
'  12'
> '12'.padStart(3, ' ')
' 12'
> '12'.padStart(2, ' ')
'12'
```

Možná vám nyní vrtá hlavou, jestli funkce `Math.round` není také náhodou metoda, když používá tečkovou notaci. Je to skutečně tak. Nyní se ale budete chtít zeptat, co že teda je to `Math` za hodnotu a tady se dostáváme do úzkých, protože na zodpovězení této otázky ještě nemáme dost terminologie a znalostí. Takže `Math` pro nás na chvíli ještě zůstane tajemstvím.

@exercises ## Cvičení - funkce a metody [

- prevod-meny
- nazev-knihy
- emaily
  ]@

@exercises ## Doporučené úložky na doma [

- delka-filmu
- schopnejsi-zaokrouhlovani
- jmeno-z-emailu
- hazeni-kostkou
  ]@

## Povinné čtení na doma

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

@exercises ## Volitelné úložky na doma [

- schopnejsi-zaokrouhlovani-2
  ]@
