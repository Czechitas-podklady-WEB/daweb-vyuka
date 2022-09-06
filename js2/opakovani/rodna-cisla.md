Na začátku kurzu JavaScript 2 předpokládáme, že máte znalosti jazyka JavaScript srovnatelné s obsahem kurzu JavaScript 1. Možná jste tyto znalosti získali jiným způsobem, možná jste už některé věci malinko pozapomněli. V této první lekci si tedy projdeme sérii cvičení, která vám přiomnenou většinu toho, co jsme se v čistém JavaScriptu učili.

## Rodná čísla

Všechna cvičení se točí kolem úlohy ověřování platnosti rodného čísla občana České republiky. Co všechno je považováno za platné rodné číslo si můžete přečít na [Wikipedii](https://cs.wikipedia.org/wiki/Rodn%C3%A9_%C4%8D%C3%ADslo). Je zde spousta různých výjimek a detailů, které si pro dnešní den odpustíme a pravidla si zjednodušíme takto:

Rodné číslo se skládá z deseti číslic. Prvních šest číslic popisuje datum narození ve formátu RRMMDD, tj. po dvou číslicích pro rok, měsíc a den narození. Např. 701020 označuje datum narození 20. října 1970. Přitom ženy mají k měsíci narození připočteno 50 (tzn. 706020 označuje ženu narozenou 20. října 1970). Zbytek rodného čísla (tzv. koncovka) odlišuje osoby stejného pohlaví narozené ve stejný den a zpravidla se odděluje lomítkem. My jej však lomítkem oddělovat nebudeme. Celé rodné číslo musí být beze zbytku dělitelná jedenácti, aby bylo možno snadno detekovat překlepy či jiné náhodné chyby. Celé rodné číslo by tedy mohlo vypadat takto 7060201236.
