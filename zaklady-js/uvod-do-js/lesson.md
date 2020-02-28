Milí účastníci webové akademie, v tomto kurzu si možná úplně poprvé v životě vyzkoušíte co je to programování a osaháte si svůj první programovací jazyk. Programování ze začátku může působit jako velmi tajemný svět plný zlých nástrah a nepronik&shy;nutelných složitostí. Nutnost zapojovat možná trochu zaprášená zákoutí vašeho mozku může ze začátku být velká výzva. Proto společně vykročíme zvolna a krůček po krůčku. Budeme věnovat péči každému jednotlivému tématu tak, abyste do něj dokázali skutečně proniknout a nepřipadali si jako na jiné planetě. Vězte, že po chvíli se možná trochu zrezivělá mozkové kolečka začnou točit lehčeji a programování vám bude přinášet velkou radost z tvoření.  

Na začátku počítáme s tím, že jste programováním zcela nepolíbeni. Není tedy od věci trochu si přiblížit, jak programátorský svět vlastně funguje, abyste si dokázali představit do jakých vod se chystáte vrhnout. Ještě před tím, než spustíte svůj první JavaScriptový příkaz, si společně osaháme jak programátoři přemýšlejí a jaké problémy v praxi doopravdy řeší.

## Co je to programování

Programátora si možná představujete jako týpka či týpčici, který/která sedí před počítačem ve ztemnělém sklepení nebo hipsterské kavárně a do klávesnice buší nesrozumitelné tajemné kódy.

![Programátor](/czechitas/daweb/assets/zaklady-js/uvod-do-js/programmer.jpg)

Je pravda, že psaní kódu je velkou částí programátorské práce. Podstata programování ovšem tkví v něčem jiném. Například takový spisovatel jistě tráví hodně času psaním textu, zvládat dobře česky psát však není jádro jeho umění. Dobrý spisovatel či spisovatelka především umějí vybudovat poutavý příběh, který čtenáře zaujme a vtáhne. Podobně programátorům také zdaleka nestačí umět kódit. Musí především umět přemýšlet a řešit problémy, což znamená mít dobré logické a analytické myšlení. 

### Problém spolubydlení

Logické a analytické myšlení rozhodně není spojeno jen s programo&shy;váním, matematikou apod. Spousta problémů přímo ze života vyžaduje, abychom se dokázali nad řešením opravdu zamyslet. Na následujícím příkladu si názorně ukážeme, jak takové zamyšlení vypadá z programá&shy;torského hlediska. 

Mějme následujících šest studentů, kteří společně bydlí v jednom bytě. 

![Studenti](/czechitas/daweb/assets/zaklady-js/uvod-do-js/roommates.jpg)

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

Představme si, že naši studentni se chtějí rozestěhovat a potřebují se finančně vyrovnat. Někteří totiž přirozaně utratili za společné věci o něco víc než jiní. Váš úkol je zamyslet se nad tím, jakým postupem takového vyrovnání dosáhnout. Je zde však několik důležitých pravidel a omezení. 

Samotné zpracování tabulky nebudete dělat vy, nýbrž člověk, o kterém bychom mohli říct, že je to pečlivý blbec. To znamená, že není vůbec schopen přemýšlet sám za sebe. Je pouze schopen do puntíku plnit vaše pokyny jsou-li dostatečně detailní a přímočaré. Takto přesně totiž funguje počítač. Nic za vás nevymyslí, postup řešení mu musíte do detailu sdělit vy. Počítač pak jen váš postup bleskurychle vykoná. Podobně jako má počítač k dispozici pamět, náš blbec má k dispozici tužku a papír. Počítače také mají takzvaný procesor, což je pro našeho blbce bude kalkulačka. 

![Tužka, papír, kalkulačka a blbec](/czechitas/daweb/assets/zaklady-js/uvod-do-js/dummy.jpg)

Váš popis řešení tedy musí sestávat pouze z jednoduchých kroků s tužkou, papírem a kalkulačkou. Pokud například blbci řeknete, aby zjistil kolik různých jmen se v tabulce nachází, nebude vůbec vědět, co má dělat, protože jste mu neřekli, jak má použít tužku, papír a kalkulačku k tomu, aby splnil váš příkaz.



## První JavaScript příkazy

Po dlouhých povídáních konečně přichází ten čas, kdy si začneme ušpiníme ruce skutečným JavaScriptem. Nejdříve si ovšem pořádně unajasníme terminologii. JavaScript je programovací jazyk, tedy sada nějakých pravidel jak sestavovat příkazy. Pokud chceme, aby náš počítač tyto příkazy vykonal, protřebujeme takzvaný *JavaScript runtime*. To je program, který čte naše JavaScriptové příkazy a jeden za druhým je provádí. 

Každý webový prohlížeč má v sobě JavaScript runtime, můžeme tedy naše první JavaScriptové příkazy psát rovnou v prohlížeči. Stačí otevřít takzvané *Developer Tools*.

## Hodnoty a operátory

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

Všimněte si, že vždy, když v konzoli napíšete příkaz a stiknete klávesu [[Enter]], pošlete tím JavaScriptu příkaz a ten vám ihned odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme ovšem dva zcela základní stavební bloky všech programů: *hodnoty* a *operátory*. Hodnoty jsou v našem případě čísla, později však uvidíme ještě další druhy hodnot, které už na kalkulačce nepotkáte.

:::warn
Pozor na to, že ve všech programovacích jazycích se destinná čísla píší s tečkou, nikoliv s čárkou. 
:::

Operátory jsou v našem případě sčítání, odčítání, násobení a dělení. Je potřeba si zvyknout na to jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku. Z opetárotů a hodnot můžete samozřejmě stavět mnohem složitější konstrukce třeba i s použitím závorek.

```jscon
> 5 * (8 + 4) / 6
10
```

Konstrukcím vytvořeným z hodnot a operátorů se odborně říká *výrazy*. Pokud spočítáme výsledek výrazu, získáme tak jeho hodnotu. Každý výraz tedy má svoji hodnotu a JavaScript runtime nám ji rád sdělí, když mu výraz pošleme v konzoli. Ne všechny konstrukce v JavaScriptu jsou výrazy. To se však ukáže jako důležité až později.

## Řetězce

Pokud chceme v JavaScriptu pracovat s textem, použijeme hodnotu, které se říká *řetězec*. Můžeme pak psát například

## Proměnné

## Volání funkcí


@exercises[
- jednoducha-aritmetika
]@