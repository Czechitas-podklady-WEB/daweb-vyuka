## Doporučené čtení na doma

JavaScript je programovací jazyk s dlouhou historií. Ta se píše už od roku 1995, kdy jistý pán jménem [Brendan Eich](https://cs.wikipedia.org/wiki/Brendan_Eich) vytvořil první verzi JavaScriptu tak, že spojil koncepty ze tří různých jazyků: Scheme, Self a Java. Od té doby si JavaScript s sebou nese některé zajímavé a užitečné koncepty, které v jiných mainstreamových jazycích moc nenajdete. Zároveň však obsahuje myšlenky, jež programování spíše komplikují. Na obojí, dobré i zlé, budeme v tomto kurzu často narážet.

### ECMAScript

Podobně jako má čeština :i[Pravidla českého pravopisu], má i JavaScript svoje standardizovaná pravidla, kterým se říká _ECMAScript_. Podobně jako pravidla češtiny i ECMAScript se v čase vyvíjí a proměňuje. Aby se vždy vědělo o jaké verzi ECMAScript pravidel se mluví, používají se čísla verzí jako ECMAScript 1, ECMAScript 2 apod. Ke dnešnímu dni je aktuálně nejpoužívanější JavaScript ve verzi ECMAScript 6, zkráceně ES6. Je to poměrně mladá verze z roku 2015, takže často ještě narazíte na kód, který je napsaný ve verzi ES5 z roku 2009 nebo ještě starší.

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

JavaScript runtime si zde neuvědomí, že jsme udělali překlep a vytvoří novou proměnnou :var[nzda] s hodnotou 350. Původní proměnná tedy zůstane nezměněná a už máme zaděláno na problém. Na tuto situaci je dobré si v začátcích dávad dobrý pozor. V profesionální praxi se pak často používá takzvaný linter, který autamaticky označuje podezřelá místa v kódu, abychom se vyhnuli častým chybám. V tomto kurzu linter používat nebudeme, protože jeho správné nastavení vyžaduje určité zkušenosti a musí se dělat pro každý projekt zvlášť.
