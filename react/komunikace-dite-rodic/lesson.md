V předchozích lekcích už jsme se naučili téměř všechno, co v Reactu potřebujeme k vývojí opravdových webových aplikace. Dostáváme se tedy do bodu, kdy postupně začneme stavět rozháhlejší aplikace se stále většího množstvím komponent. Brzy narazíme na situaci, kdy si budeme potřebovat předávat informace mezi různými komponentami. Způsob, jakým si komponenty budou předávat informace bude záviset na tom, jaký spolu mají vztah. V podstatě máme tři základní možnosti.

1. Komunikace rodič → dítě
1. Komunikace dítě → rodič

Obě tyto možnosti si ilustrujeme na jednoduché webové aplikaci, ve které si budeme hrát na prezidentské volby. Zdrojové kódy aplikace najdete v tomto [repozitáři](https://github.com/Czechitas-podklady-WEB/volby). Repozitář si naklonujeme a prohlédneme si jeho strukturu. 

Naše volební aplikace zobrazuje čtyři kandidáty pomocí komponenty `Candidate`. Pole obsahující jména a podobizny kandidátů najdeme ve stavu komponenty `App`. Tato data bychom normálně stáhli odněkud ze serveru. V tomto případě si život malinko ulehčíme a obsah stavu zadrátujeme přímo do kódu.

Z kódu můžeme vyčíst, že komponenta `App` používá komponenty `Candidate`. Budeme tedy říkat, že `App` je takzvaný rodič a komponenty `Candidate` jsou její děti. 

## Komunikace rodič → dítě

Předávání informací směrem od rodiče k dítěti je z našich tří situací nejjednodušší a už jsme ji dokonce mnohkrát viděli. Tato komunikace totiž probíhá předáváním hodnot skrze props.

V našem příkladu s volbami vidíme, že komponenta `App` předává pomocí props data komponentám `Candidate`. 

## Komunikace dítě → rodič

Nyní bychom chtěli zařídit, aby se uživatelem vybraný kandidát zobrazit vedle obrázku hradu. Jakmile tedy uživatel vybere nějakého kandidáta v některé z komoponent `Candidate`, potřebujeme jeho jméno poslat rodičovské komponentě `App` aby si jej tato mohla uložit do stavu `president`. 

Zde však narážíme na zásadní problém. Komponenta `Candidate` nemá nejmenší tušení, kdo je její rodič. Zevnitř této komponenty tato informace není nijak dostupná. Musíme si tedy pomoct malým trikem. 

### Callbacky

Náš trik bude spočívat v tom, že komponentě `Candidate` skrze props předáme takzvaný <em>callback</em>. Tímto pojmem se v JavaScriptu často označuje funkce, kterou někomu předáváme proto, aby ji tento někdy později zavolal. Anglický název tohoto postupu vzniká právě ze slovního spojení "zavolat zpátky", tedy "call back". 

S callbacky už jsme se ve skutečnosti setkali dávno, jen jsme jim tehdy říkali posluchače událostí. Každý posluchač události je ve skutečnosti callback. Tlačítku například předáváme funkci, která se má zavolat (call back) ve chvíli, kdy na tlačítku klikneme. V minulé lekci jste viděli, že v Reactu se takové věc zařídí poměrně jednoduše. 

```js
const SensitiveButton = (props) => {
  const handleClick = () => {
    console.log('Au');
  };

  return (
    <Button onClick={handleClick}>{props.caption}</Button>
  );
};
```

### Použití callbacků ke komunikaci

V našem příkladu však callback nebudeme používat k poslouchání událostí. Budeme jej volat sami zevnitř komponenty `Candidate` ve chvíli, kdy chceme rodiči předat jméno zvoleného kandidáta.

[[[ excs Cvičení: Komunikace
- kurzovni-listek
- hamburger-menu
- nazev-stranky
]]]
