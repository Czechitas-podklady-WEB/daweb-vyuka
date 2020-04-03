Milí účastníci webové akademie, v tomto kurzu si možná úplně poprvé v životě vyzkoušíte co je to programování a osaháte si svůj první programovací jazyk. Programování ze začátku může působit jako velmi tajemný svět plný zlých nástrah a neproniknutelných složitostí. Nutnost zapojovat možná trochu zaprášená zákoutí vašeho mozku může ze začátku být velká výzva. Proto společně vykročíme zvolna a krůček po krůčku. Budeme věnovat péči každému jednotlivému tématu tak, abyste do něj dokázali skutečně proniknout a nepřipadali si jako na jiné planetě. Vězte, že po chvíli se možná trochu zrezivělá mozkové kolečka začnou točit lehčeji a programování vám bude přinášet velkou radost z tvoření.

Na začátku počítáme s tím, že jste programováním zcela nepolíbeni. Není tedy od věci trochu si přiblížit, jak programátorský svět vlastně funguje, abyste si dokázali představit do jakých vod se chystáte vrhnout. Ještě před tím, než spustíte svůj první JavaScriptový příkaz, si společně osaháme jak programátoři přemýšlejí a jaké problémy v praxi doopravdy řeší.

## Co je to programování

Programátora si možná představujete jako týpka či týpčici, který/která sedí před počítačem ve ztemnělém sklepení nebo hipsterské kavárně a do klávesnice buší nesrozumitelné tajemné kódy.

![Programátor](assets/programmer.jpg)

Je pravda, že psaní kódu je velkou částí programátorské práce. Podstata programování ovšem tkví v něčem jiném. Například takový spisovatel jistě tráví hodně času psaním textu, zvládat dobře česky psát však není jádro jeho umění. Dobrý spisovatel či spisovatelka především umějí vybudovat poutavý příběh, který čtenáře zaujme a vtáhne. Podobně programátorům také zdaleka nestačí umět kódit. Musí především umět přemýšlet a řešit problémy, což znamená mít dobré logické a analytické myšlení.

### Problém spolubydlení

Logické a analytické myšlení rozhodně není spojeno jen s programo&shy;váním, matematikou apod. Spousta problémů přímo ze života vyžaduje, abychom se dokázali nad řešením opravdu zamyslet. Na následujícím příkladu si názorně ukážeme, jak takové zamyšlení vypadá z programá&shy;torského hlediska.

Mějme následujících šest studentů, kteří společně bydlí v jednom bytě.

![Studenti](assets/roommates.jpg)

Jak často bývá zvykem, tito spolubydlící se dohodli, že některé spotřební věci budou nakupovat vždy pro všechny, aby si každý nemusal kupovat vlastní mouku, vlastní toaleťák a podobně. Po čase tedy vznikne tabulka nákupů podobné této.

<table>
  <thead>
    <tr><th>Jméno</th><th>Věc</th><th>Částka</th></tr>
  </thead>
  <tbody>
    <tr><td>Petr</td><td>Prací prášek</td><td>240 kč</td></tr>
    <tr><td>Ondra</td><td>Savo</td><td>80 kč</td></tr>
    <tr><td>Pavla</td><td>Toaleťák</td><td>65 kč</td></tr>
    <tr><td>Zuzka</td><td>Mýdlo</td><td>50 kč</td></tr>
    <tr><td>Pavla</td><td>Závěs do koupelny</td><td>350 kč</td></tr>
    <tr><td>Libor</td><td>Pivka na kolaudačku</td><td>124 kč</td></tr>
    <tr><td>Petr</td><td>Pytle na odpadky</td><td>75 kč</td></tr>
    <tr><td>Míša</td><td>Utěrky na nádobí</td><td>130 kč</td></tr>
    <tr><td>Ondra</td><td>Toaleťák</td><td>120 kč</td></tr>
    <tr><td>Míša</td><td>Pečící papír</td><td>30 kč</td></tr>
    <tr><td>Zuzka</td><td>Savo</td><td>80 kč</td></tr>
    <tr><td>Petr</td><td>Tapeta na záchod</td><td>315 kč</td></tr>
    <tr><td>Ondra</td><td>Toaleťák</td><td>64 kč</td></tr>
  </tbody>
</table>

Představme si, že naši studenti se chtějí rozestěhovat a potřebují se finančně vyrovnat. Někteří totiž přirozaně utratili za společné věci o něco víc než jiní. Váš úkol je zamyslet se nad tím, jakým postupem takového vyrovnání dosáhnout. Je zde však několik důležitých pravidel a omezení.

Samotné zpracování tabulky nebudete dělat vy, nýbrž člověk, o kterém bychom mohli říct, že je to pečlivý blbec. To znamená, že není vůbec schopen přemýšlet sám za sebe. Je pouze schopen do puntíku plnit vaše pokyny jsou-li dostatečně detailní a přímočaré. Tento náš úřednický blbec má navíc k dispozici pouze tužku, papír a kalkulačku. Kalkulačku k tomu, aby mohl spolehlivě provádět jednoduché výpočty a tužku a papír, aby si mohl poznamenávat mezivýsledky.

![Tužka, papír, kalkulačka a blbec](assets/dummy.jpg)

Počítač ve svojí nejzákladnější podstatě funguje přesně jako náš blbec. Nic za vás nevymyslí, pouze slepě vykonává postup řešení, který musíte do detailu popsat vy. Papír pak pro nás představuje pamět počítače a kalkulačka procesor.

@exercises[

- spolubydleni
  ]@

## První JavaScript příkazy

Po dlouhých povídáních konečně přichází ten čas, kdy si začneme ušpiníme ruce skutečným JavaScriptem. Nejdříve si ovšem pořádně ujasníme terminologii. JavaScript je programovací jazyk, tedy sada nějakých pravidel jak sestavovat textové příkazy pro počítač. Pokud chceme, aby náš stoj tyto příkazy vykonal, protřebujeme takzvaný _JavaScript runtime_. To je program, který čte naše JavaScriptové příkazy a jeden za druhým je provádí.

Každý webový prohlížeč má v sobě JavaScript runtime, můžeme tedy naše první JavaScriptové příkazy psát rovnou v prohlížeči. Stačí otevřít takzvané _Developer Tools_.

### Hodnoty a operátory

Každý počítač je ve svojí nejniternější podstatě jen hrozně rychlá kalkulačka. Proto je přirozené, že si v JavaScriptu nejdříve vyzkoušíme počítání. Do žádné tvrdé matematiky se však pouštět nebudeme. Zcela vám postačí znalosti nabyté ve školce. Můžete to JS konzole rovnou zkusit napsat následující příkazy

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

Všimněte si, že vždy, když v konzoli napíšete příkaz a stisknete klávesu [[Enter]], pošlete tím JavaScriptu příkaz a ten vám ihned odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme ovšem dva zcela základní stavební bloky všech programů: <term cs="hodnoty" en="values"> a <term cs="operátory" en="operators">. Hodnoty jsou v našem případě čísla, později však uvidíme ještě další druhy hodnot, které už na kalkulačce nepotkáte.

:::warn
Pozor na to, že ve všech programovacích jazycích (s výjimkou MS Excel) se destinná čísla píší s tečkou, nikoliv s čárkou.
:::

Operátory jsou v našem případě sčítání, odčítání, násobení a dělení. Je potřeba si zvyknout na to, jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku.

Kromě výše zmíněných nabízí JavaScript dva další zajímavé operátory: mocnění a zbytek po dělení, tzv. _modulo_.

```jscon
> 2 ** 4
16
> 12 % 5
2
```

Mocnění si nejspíš pamatujete ještě ze základní školy. Modulo však může být překvapení obzvlášť proto, že se zapisuje symbolem procenta. Výsledek této operace je zbytek po celočíselném dělení. Tento operátor se hodí v různých situacích. Můžeme pomocí něj například zjistit, zda je číslo sudé, tedy zbytek po dělení dvěma je roven nule.

Z operátorů a hodnot můžete samozřejmě stavět mnohem složitější konstrukce třeba i s použitím závorek.

```jscon
> 5 * (9 + 7) ** (1/2)
20
```

Konstrukcím vytvořeným z hodnot a operátorů se odborně říká <term cs="výrazy" en="expressions">. Pokud necháme JavaScript spočítat výsledek výrazu, získáme tak jeho hodnotu. Každý výraz tedy má svoji hodnotu a JavaScript runtime nám ji rád sdělí, když mu výraz pošleme v konzoli. Je dobré zde zmínit, že ne všechny konstrukce v JavaScriptu jsou výrazy. To se však ukáže jako důležité až později.

### Řetězce

Pokud chceme v JavaScriptu pracovat s textem, použijeme hodnotu, které se říká <term cs="řetězec" en="string">. Můžeme pak psát například

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

Textové řetězce vždy uzavíráme do uvozovek. V JavaScriptu můžete používat jak apostrofy (jednoduché uvozovky), tak dvojité uvozovky, z hlediska funkčnosti programu je to jedno. Můžete si tak pomaličku začít budovat svůj programátorský styl a používat ty uvozovky, které se vám líbí. Občas se dvojité uvozovky hodí pokud chceme mít uvnitř řetězce například apostrof. Pro tento případ si však později ukážeme obecnější techniku.

Textové řetězce jdou sčítat podobně jako čísla, můžete tedy psát například

```jscon
> 'Digitální akademie' + ' Web'
'Digitální akademie Web'
> 'Digitální akademie' + ' ' + 'Web'
'Digitální akademie Web'
> 'Digitální akademie' + ''
'Digitální akademie'
```

Všimněte si v druhém příkladu řetězce, který obsahuje pouze mezeru. V třetím případě dokonce vidíme řetězec, který neobsahuje vůbec nic. To je takzvaný <term cs="prázdný řetězec" en="empty string">. Chová se podobně jako nula při sčítání čísel a bude se nám pozdějí hodit v různých situacích.

## Proměnné

Při složitějších operacích a výpočtech často vyvstane potřeba si nějaký mezivýpočet uložit pro pozdější použití. K tomu nám slouží takzvané <term cs="proměnné" en="variables">. Proměnná je jakási pojmenovaná krabička nebo šuplík, do kterého si můžeme uložit nějakou hodnotu, abychom ji neztratili a mohli ji používat v dalších výpočtech.

Abychom si procvičili zajímavé operátory, zkusíme vyřešit následující úlohu. Mějme čas v hodinách zadaný ve 24-hodinovém formátu. Tři hodiny odpoledne tedy píšeme jako 15h. Nyní chceme spočítat, kolik hodin bude po uplynutí doby zadané také v hodinách. Například jaký bude čas po uplynutí 15 hodin?

```jscon
> const cas = 13
> const novyCas = (cas + 15)
```

Každá proměnné v JavaScriptu musí mít své jméno. To by mělo vystihovat, co je v ní uloženo. Pokud chceme používat nějakou promennou, musíme ji nejdříve vytvořit, což se dělá pomocí klíčového slova `const`. Takovou proměnnou pak můžeme použít v libovolném výrazu tak, že prostě uvedeme její jméno.

Většinu proměnných budeme používat tak, že jim při vytvoření přiřadíme nějakou hodnotu a tato hodnota už v proměnná zůstane až do konce jejího života. Občas se však stane, že potřebujeme hodnotu uloženou v nějako proměnné změnit. V takovém případě musíme proměnnou vytvořit pomocí slovíčka `let`.

```jscon
> let sazba = 500
> let vyplata = 8 * 21 * sazba
> sazba = 600
```

Pokud měníme hodnotu v proměnné, už **nepoužíváme** `const` ani `let`. Zde je dobré si zapamatovat několik důležitých věcí.

### Preferujte const

Proměnné vytvořené pomocí `const` měnit nelze. U dobrých programátorů je zvykem vytvářet proměnné téměř výhradně pomocí `const` a používat `let` pouze v případě, že k tomu máme dobrý důvod. Čím méně proměnných lze měnit, tím menší je totiž riziku vzniku nežádoucích chyb v programu.

### JavaScript není Excel

Dejte pozor na to, že do proměnné se jako do šuplíku ukládá pouze hodnota a nikoliv celý výraz. Všimněte si, že v příkladu výše jsem změnili hodnotu proměnné <var>sazba</var>. Po této změně bude v proměnné <var>vyplata</var> pořád původní hodnota. Pokud chceme obsah této proměnné aktualizovat, musíme příkaz spustit znova.

```jscon
> vyplata = 8 * 21 * 500
```

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

## Volání funkcí

Pouze s proměnnými, hodnotami a operátory bychom se v programování daleko nedostali. Často budeme potřeboval vykonat nějakou složitější operaci než jen matematický výpočet. Pokud takovou operaci programátoři potřebují často, šance je, že pro ni existuje <term cs="funkce" en="function">.

Funkce je kousek programu řešící nějakou konkrétní úlohu, která se často opakuje. Příkladem může být například zaokrouhlování desetinných čísel na celá čísla. To je operace, která se hodí velmi často a bylo by zbyteční ji programovat pořád znova. V JavaScriptu proto máme k dispozici funkci jménem `Math.round`. Pokud chceme funkci použít, napíšeme její jméno a do kulatých závorek vložíme hodnotu.

```jscon
> Math.round(3.14)
3
```

Hodnotě uvnitř kulatých závorek říkáme <term cs="vstup" en="input"> funkce. Spuštění funkce se říká <term cs="volání" en="call">. Jakmile funkce dokončí operaci, <term cs="vrátí" en="return"> nám takzvaný <term cs="výstup" en="output">. V programátorském žargonu tedy říkáme, že když zavoláme funkci s nějakým vstupem, ona nám vrátí výstup. Podobně jako operace s hodnotami a proměnnými, volání funkce je také výraz. Volání funkce také můžeme použít uvnitř libovolného jiného výrazu. Navíc vstup pro funkci taky můžeme vytvořit pomocí výrazu. Nabízí se tedy mnoho způsobů, jak vytvářet složitější výrazy, jak například tento.

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

@exercises ## Povinné úložky na doma [

- delka-filmu
- schopnejsi-zaokrouhlovani
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

@exercises ## Nepovinné úložky na doma [

- schopnejsi-zaokrouhlovani-2
  ]@
