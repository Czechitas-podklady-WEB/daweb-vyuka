---
title: Kalkulačka
demand: 4
---

Naše úvodní povídání o funkcích vyššího řádu přímo vybízí k tomu, abychom dotáhli do konce aplikaci kalkulačka. Naprogramovat kalkulačku, aby skutečně fungovala dle běžných očekávání není tak přímočaré, jak by se na první pohled mohlo zdát. Prohlédněte si [toto video](assets/kalkulacka.mp4), které ukazuje, jak klasická kalkulačka skutečně funguje. Povšimněte si především následujících funkčností.

1. Displej kalkulačky slouži pro vstup i výstup. Musíme si tedy dávat pozor, kdy jej používáme pro vstup a kdy pro výstup.
1. Všechne matematické operace se dají řetězit. Můžeme tedy napsat například :kbd[2]:kbd[5]:kbd[+]:kbd[4]:kbd[-]:kbd[1]:kbd[6] a displej nám bude ukazovat mezivýsledky. Konečnou hodnotu se dozvíme po stisknutí :kbd[=].

Abychom dostáli těmto požadavkům, musíme si strukturu kódu zatraceně dobře rozmyslet dopředu. Z takové věci by vám v tuto chvíli mohla ještě vybuchnout hlava. Proto si zde můžete stáhnout [předpřipravenou strukturu](assets/kalkulacka-zadani.zip) projektu se všemi funkcemi, které budou potřeba. Na vás je jen do těchto funkcí doplnit odpovídající kód. Pokud však cítíte chuť a sebedůvěru, můžete zkusit kalkulačku napsat zcela od začátku podle sebe a pořádně tím procvičit svoje mozkové závity.

**Struktura programu**

Náš program obsahuje funkci `calc` a funkce pro jednotlivé operátory tak, jak jsme je vymysleli v této lekci.

Dále máme tři hlavní proměnné:

`acc`
: Takzvaný akumulátor, který obsahuje výsledek naposledy provedené operace.

`op`
: Operace, která se má provést s následujícím vstupem. Sem uložíme jednu z operátorových funkcí nebo hodnotu `null`, která říká, že žádná operace zatím není zadána.

`diplay`
: Obsahuje řetězec `output` nebo `input` podle toho, za jakým účelem zrovna používáme display kalkulačky.

Vaším úkolem je doplnit kód do následujicích funkcí:

`numClick`
: Funkce, která se spustí při stisknutí tlačítka s číslicí. Pokud je zrovna na displeji zobrazen výstup, tedy proměnná `display` obsahuje řetězec `'output'`, stisknutá cifra nahradí celý obsah displeje a přepne displej do stavu `'input'`. Pokud je displej ve stavu `'input'`, znamená to, že jsme v procesu zadávání čísla. Cifra se tedy přidá na konec všech cifer, které už na displeji svítí. Pozor na cifru 0, které se nepřídává na konec, pokud na displeji svítí jen nula. To je proto, abychom nemohli zadat čísla jako 00007.

`getValue`
: Získá hodnotu z displeje kalkulačky. Hodnotu vrátí jako datový typ číslo.

`setAccumulator`
: Tuto funkci používáme ve chvíli, kdy chceme do akumulátoru uložit nějakou hodnotu (parametr `value`) a zároveň ji zobrazit na displeji. Pozor, že v tuto chvíli používáme displej jako výstup, takže kromě nastavení proměnné `acc` a zobrazení na displeji musíme také proměnnou `display` nastavit na hodnotu `'output'`.

`equalsClick`
: Toto je nejdůležitejší funkce celé kalkulačky, protože provádí skutečný výpočet výsledku. Mačkáme-li :kbd[=], chceme vzít hodnotu z akumulátoru (proměnná `acc`), hodnotu z displeje (funkce `getValue`) a provést na nich operaci uloženou v proměnné `op`. Výsledek uložíme do akumulátoru a zobrazíme jej na display pomocí funkce `setAccumulator`. Může se stát, že v proměnné `op` je zrovna uložena hodnota `null`. To znamená, že jsme stiskli :kbd[=] dříve, než jsme zadali nějakou operaci. V takovém případě hodnotu z displeje rovnou vložíme do akumulátoru. V každém případě však musíme na konci nastavit `op` na `null`, aby se při opakováném stisku :kbd[=] neprováděla poslední operace pořád dokola.

`clearClick`
: Tlačítko :kbd[=] restartuje kalkulačku do počátečního stavu. Nastaví tedy akumulátor na 0, poslední operaci na `null` a displej do stavu `output`.

`plusClick`, `minusClick`, `timesClick`, `divideClick`
: Tyto funkce reagují na stiskl tlačítek s operátory. Samy však nic nepočítají. Pouze zařídí zavolání předchozí zaznamenané operace pomocí funkce `equalsClick` a nastaví aktuální operaci na příslušnou funkci `plus`, `minus` atp. V tomto spočívá celý trik toho, jak kalkulačka vnitřně funguje. Na začátku je totiž nutné si uvědomit, že při každém stisku nějaké operace se tváříme, jako bychom automaticky před ní stisknuli :kbd[=] a tím vlastně provedeme předchozí zaznamenanou operaci.

Pokud jste funkce naprogramovali podle zadání, kalkulačka by měla fungovat. Pokud se podíváte na výsledný program, nejspíše zjistíte, že na to, kolik se toho děje pod kapotou, je docela krátký. V tomto spočívá největší umění programování, tedy umět i pro obtížný problém navhrnout strukturu programu tak, aby působil přímočaře a čitelně. Toto umění se programátoři učí celý život a nikdy nelze dojít na konec. Čím jsou v tomto programátoři lepší, tím jsou cennější členové týmu.
