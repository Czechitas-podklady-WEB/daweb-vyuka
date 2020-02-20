Milí účastníci webové akademie, v tomto kurzu si možná úplně poprvé v životě vyzkoušíte co je to programování a osaháte si svůj první programovací jazyk. Programování ze začátku může působit jako velmi tajemný svět plný zlých nástrah a neproniknutelných složitostí. Nutnost zapojovat možná trochu zaprášená zákoutí vašeho mozku může ze začátku být velká výzva. Proto společně vykročíme zvolna a krůček po krůčku. Budeme věnovat opravdovou péči každému tématu tak, abyste mu dokázali skutečně porozumět a nepřipadali si jako na jiné planetě. Vězte, že po chvíli se možná trochu zrezivělá mozkové kolečka začnou točit lehčeji a programování vám bude přinášet velkou radost z tvoření.  

Na začátku počítáme s tím, že jste programováním zcela nepolíbeni. Není tedy od věci trochu si přiblížit, jak programátorský svět vlastně funguje, abyste si dokázali představit do jakých vod se chystáte vrhnout. Ještě před tím, než spustíte svůj první JavaScriptový příkaz, si společně osaháme jak programátoři přemýšlejí a jaké problémy v praxi doopravdy řeší.

## Co je to programování

Programátora si možná představujete jako týpka či týpčici, který/která sedí před počítačem ve ztemnělé místnosti a do klávesnice buší nesrozumitelné tajemné kódy.

![Programátor](/img/kurzy/uvod-do-progr/programmer.jpg)

Je pravda, že psaní kódu je velkou částí programátorské práce. Podstata programování ovšem tkví v něčem jiném. Například takový spisovatel jistě tráví hodně času psaním textu. Zvládat dobře česky psát však není jádro jeho umění. Dobrý spisovatel či spisovatelka především umějí vybudovat poutavý příběh, který čtenáře zaujme a vtáhne. Podobně programátorům také zdaleka nestačí umět kódit. Musí především umět přemýšlet a řešit problémy, což znamená mít dobré logické a analytické myšlení. 

## Problém spolubydlení

Logické a analytické myšlení rozhodně není spojeno jen s programováním, matematikou apod. Spousta problémů přímo ze života vyžaduje, abychom se dokázali nad řešením opravdu zamyslet. Pojďme si na jednom takovém problému ukázat, jak by se řešil takříkajíc programátorsky.

Představte si následujících šest studentů, kteří společně sdílejí v jeden byt. 

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

## Čísla a počítání


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

Všimněte si, že vždy, když v konzoli napíšete příkaz a stiknete klávesu [[Enter]], pošlete tím JavaScriptu příkaz a ten vám ihned odpoví výsledek. Zatím jsme sice nic závratného nespočítali, použili jsme ovšem dva zcela základní stavební bloky všech programů: *hodnoty* a *operátory*. Hodnoty jsou v našem případě celá a desetinná čísla.

:::warn
Pozor na to, že ve všech programovacích jazycích se destinná čísla píší s tečkou, nikoliv s čárkou. 
:::

Později uvidíme, že hodnot v JavaScriptu existuje mnohem více než jen čísla.

Operátory jsou v našem případě sčítání, odčítání, násobení a dělení. Je potřeba si zvyknout na to jakými symboly se JavaScriptu zapisují. Možná budete muset malinko prohledat klávesnici, než najdete například dopředné lomítko nebo hvězdičku. 

## Hodnoty
*Hodnoty* představují všechny možné druhy dat, se kterými můžou naše programy pracovat. Hodnoty se dle způsobu použití dělí do různých kategoríí zvaných *datové typy*. Datových typů existuje velké množství. V tuto chvíli si představíme ty nejzákladnější, tedy *čísla*.

@exercises[
- jednoducha-aritmetika
]@