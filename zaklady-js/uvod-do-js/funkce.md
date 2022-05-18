## Funkce

Pouze s hodnotami a operátory bychom se v programování daleko nedostali. Často budeme potřeboval vykonat složitější operaci než jen matematický výpočet. Pokud nějakou takovou složitější operaci programátoři používají často, šance je, že pro ni existuje :term{cs="funkce" en="function"}.

Funkce je kousek programu řešící nějakou konkrétní úlohu. Většinou jde o úlohu, kterou řešime často a opakovaně. Příkladem může být například zaokrouhlování desetinných čísel na celá čísla. To je operace, která se hodí skoro ve všech výpočtech, a bylo by zbyteční ji programovat neustále znova. V JavaScriptu proto máme k dispozici funkci jménem `Math.round`.

Pokud chceme nějakou funkci použít, uděláme to tak, že napíšeme její jméno a do kulatých závorek vložíme hodnotu, se kterou má funkce pracovat. Takto například použijeme naši funci `Math.round`.

```jscon
> Math.round(3.14)
3
```

Hodnotě uvnitř kulatých závorek říkáme :term{cs="vstup" en="input"} funkce. Spuštění funkce se mezi programátory říká :term{cs="volání" en="call"}. Jakmile funkce dokončí operaci, :term{cs="vrátí" en="return"} nám takzvaný :term{cs="výstup" en="output"}. V programátorském žargonu tedy říkáme, že když **zavoláme** funkci s nějakým **vstupem**, ona nám **vrátí výstup**.

### Rychlé občerstvení

Funkce jsou rozsáhlé téma, které nás bude provázet až do konce kurzu. Již brzy se také naučíme psát funkce vlastní. Pro lepší představu o tom, jak funce fungují, se nám bude hodit následující analogie.

Můžeme si představovat, že funkce je něco jako stánek s rychlým občerstvením. Takový stánek má dvě okýnka. Jedno vstupní, do kterého zadáte svoji objednávku, a druhé výstupní, kde po chvíli obdržíte svůj hamburger nebo smažák v housce. Objednávání rychlé svačiny je pak podobné jako volání funkce. Do stánku vložíte nějaké vstupy a ven vám vypadne výstup. Pokud nejste vysloveně zvědaví nebo paranoidní, dění uvnitř stánku vás až tolik nezajímá, podobně jako vás až tolik nezajímá, jak vlastně JavaScript technicky provádní zaokrouhlování. Důležité je, že funkce funguje, a že párek v rohlíku nakonec chutná tak, jak jste zvyklí.

::fig[Zaokrouhlování]{src=assets/zaokrouhlovani.png size=60}

### Výrazy s funkcemi

Volání funkce je také výraz podobně jako operace s hodnotami a proměnnými. Můžeme jej tedy použít uvnitř libovolného jiného výrazu. Navíc vstup pro funkci lze také vytvořit pomocí výrazu. Nabízí se tedy mnoho způsobů, jak skládat složitější výpočty, jako například tento.

```jscon
> 70 % Math.round(100 / 3)
4
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
0.5533144240115158
> Math.random()
0.30269146855422213
> Math.random()
0.8730206392247666
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
