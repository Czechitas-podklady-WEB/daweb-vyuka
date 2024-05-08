## Komunikace rodič → dítě

V předchozích lekcích už jsme se naučili téměř všechno, co v Reactu potřebujeme k vývoji opravdových webových aplikací. Dostáváme se tedy do bodu, kdy postupně začneme stavět rozsáhlejší aplikace se stále větším množstvím komponent. Brzy tak narazíme na situaci, kdy si budeme potřebovat předávat informace mezi různými komponentami.

Komponenty v Reactu často vkládáme do sebe. Vnořená komponenta může obsahovat zase další vnořené komponenty, a takto nám vzniká celý strom komponent. Kořenem (někdy se také říká vrcholem – jak víte, programátoři si představují stromy kmenem vzhůru) tohoto stromu je komponenta na nejvyšší úrovni, která obvykle tvoří celou stránku – v našich cvičných projektech je to často komponenta `HomePage`. Podle toho, jak se do sebe jednotlivé komponenty zanořují, pak vzniká strom koponent.

Jak víte už z prnví lekce kurzu, metafora stromu se při programování používá docela často – znáte adresářový strom, DOM elementy v prohlížeči také tvoří strom a teď máme strom komponent. Abychom dokázali snadno popsat, jak spolu jednotlivé prvky ve stromu souvisí, používají se termíny :term{cs="rodič" en="parent"} a :term{cs="dítě" en="child"}. _Rodič_ je vnější komponenta, _dítě_ je komponenta, která je obsažena v rodiči. Dceřiná komponenta pak může být sama rodičovskou komponentou pro další vnořené komponenty. Komponenty, které mají stejného rodiče, někdy nazýváme :term{cs="sourozenci" en="siblings"}.

_(Češtinářská perlička – sice komponentám říkáme „rodič“ a „dítě“, ale když chceme označit komponentu, neříkáme jí „dětská komponenta“ nýbrž „dceřiná komponenta“.)_

Způsob, jakým si komponenty budou předávat informace, pak bude záviset na tom, jaký spolu mají vztah. V podstatě máme tři základní možnosti.

1. Komunikace rodič → dítě
1. Komunikace dítě → rodič
1. Komunikace mezi sourozenci

V této lekci rozebereme první dvě možnosti a třetí si necháme do další lekce. K ilustraci komunikace mezi komponentami použijeme jednoduchou webovou aplikaci, ve které si budeme hrát na prezidentské volby. Pro tyto účely si vytvořte repozitář ze šablony [cviceni-volby](https://github.com/Czechitas-podklady-WEB/cviceni-volby). Repozitář si naklonujeme a prohlédneme si jeho strukturu.

Naše volební aplikace zobrazuje čtyři kandidáty pomocí komponenty `Candidate`. Pole obsahující jména a podobizny kandidátů najdeme ve stavu komponenty `HomePage`. Tato data bychom normálně stáhli odněkud ze serveru. V tomto případě si život malinko ulehčíme a obsah stavu zadrátujeme přímo do kódu.

Z kódu můžeme vyčíst, že komponenta `HomePage` používá komponentu `Candidate`. Budeme tedy říkat, že `HomePage` je _rodič_ a komponenta `Candidate` je její _dítě_.

Předávání informací směrem od rodiče k dítěti je z našich tří situací nejjednodušší a už jsme je dokonce mnohokrát viděli. Tato komunikace totiž probíhá předáváním hodnot skrze _props_.

V našem příkladu s volbami vidíme, že komponenta `HomePage` předává pomocí _props_ data komponentám `Candidate`. Tuto situaci můžeme znázornit následujícím diagramem.

::fig{src=assets/rodic-dite.png}

Směr šipky ukazuje směr komunikace. V našem případě tečou data směrem z komponenty `HomePage` do komponenty `Candidate` pomocí dvou props `name` a `avatar`.
