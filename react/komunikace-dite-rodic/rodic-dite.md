V předchozích lekcích už jsme se naučili téměř všechno, co v Reactu potřebujeme k vývojí opravdových webových aplikací. Dostáváme se tedy do bodu, kdy postupně začneme stavět rozsáhlejší aplikace se stále větším množstvím komponent. Brzy tak narazíme na situaci, kdy si budeme potřebovat předávat informace mezi různými komponentami. Způsob, jakým si komponenty budou předávat informace bude záviset na tom, jaký spolu mají vztah. V podstatě máme tři základní možnosti.

1. Komunikace rodič → dítě
1. Komunikace dítě → rodič
1. Komunikace mezi sourozenci

V této lekci rozeberme první dvě možnosti a třetí si necháme do další lekce. K ilustraci komunikace mezi komponentami použijeme jednoduchou webovou aplikaci, ve které si budeme hrát na prezidentské volby. Zdrojové kódy aplikace najdete v tomto [repozitáři](https://github.com/Czechitas-podklady-WEB/volby). Repozitář si naklonujeme a prohlédneme si jeho strukturu.

Naše volební aplikace zobrazuje čtyři kandidáty pomocí komponenty `Candidate`. Pole obsahující jména a podobizny kandidátů najdeme ve stavu komponenty `App`. Tato data bychom normálně stáhli odněkud ze serveru. V tomto případě si život malinko ulehčíme a obsah stavu zadrátujeme přímo do kódu.

Z kódu můžeme vyčíst, že komponenta `App` používá komponenty `Candidate`. Budeme tedy říkat, že `App` je takzvaný rodič a komponenty `Candidate` jsou její děti.

## Komunikace rodič → dítě

Předávání informací směrem od rodiče k dítěti je z našich tří situací nejjednodušší a už jsme ji dokonce mnohkrát viděli. Tato komunikace totiž probíhá předáváním hodnot skrze props.

V našem příkladu s volbami vidíme, že komponenta `App` předává pomocí props data komponentám `Candidate`. Tuto situaci můžeme znázornit následujícím diagramem.

::fig{src=assets/rodic-dite.png}

Směr šipky ukazuje směr komunikace. V našem případě tečou data směrem z komponenty `App` do komponenty `Candidate` pomocí dvou props `name` a `avatar`.
