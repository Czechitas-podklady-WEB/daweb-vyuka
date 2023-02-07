---
title: Textovka
demand: 3
---

Pomocí příkazové řádky vytvořte hru podle následujícího scénáře. Nepoužívejte _VS Code_ ani aplikaci _Průzkumník_/_Finder_, pokud se vyloženě nezamotáte, ať si ovládání příkazové řádky osvojíte.

1.  Kořenovou složku pro textovou hru příkazem `mkdir` vytvořte a pojmenujte `vetrelec` uvnitř složky, kde typicky zakládáte nové projekty.

1.  Příkazem `cd` (možná opakovaným použitím) se přesuňte do složky `vetrelec`.

1.  V ní vytvořte soubor `zacatek.txt` s textem:

    #### Cesta: `vetrelec/zacatek.txt`

    ```text
    Ze sladkého spánku tě probudí podivný šramot. Zdá se, že se ozývá z obýváku v přízemí. Tiše otevřeš dveře ložnice a pokradmu scházíš schody dolů zkontrolovat situaci.

    > obyvak/schodiste.txt
    ```

    Připomeňte si příkaz `notepad` pro Windows nebo `touch` a `open` pro Mac z předchozí sekce.

1.  Všimněte si, že text navádí hráče do podsložky `obyvak` se souborem `schodiste.txt`. Vytvořte tuto složku a soubor s textem:

    #### Cesta: `vetrelec/obyvak/schodiste.txt`

    ```text
    Když sejdeš do půlky schodů, skrze zábradlí zahlédneš postavu v kapuci. Zloděj! Zdá se, že již spoustu cenných věcí stihl odnést.

    Je třeba jednat rychle:

    1. Vrhneš se do konfrontace se zlodějem

    > konfrontace.txt

    2. Vydáš se zpět do ložnice zavolat policii

    > ../loznice/mobil.txt
    ```

1.  Tím textovka nekončí. Doplň další soubory podle následujícího klíče:

    #### Cesta: `vetrelec/obyvak/konfrontace.txt`

    ```text
    Sebehneš zbytek schodů, ale v nervozitě a tmě nešikovně zakopneš o křeslo. Zloděj se vyleká a přiskočí k vchodovým dveřím. Než se nadeješ, slyšíš, jak venku odjíždí auto s tvým majetkem.
    ```

    #### Cesta: `vetrelec/loznice/mobil.txt`

    ```text
    Tiše vystoupáš schody zpět nahoru. Jenže ouha, tvůj mobilní telefon leží na nočním stolku - vybitý. Nabíječku jsi samozřejmě zapomněl dole v obýváku. V tom slyšíš na schodech kroky.

    1. Rychle se schováš do šatní skříně

    > skrin/ve-skrini.txt

    2. Pohotově otevřeš okno a sešplháš před dům na ulici

    > ../pred-domem/ulice.txt
    ```

1.  Zkuste si textovku zahrát. Přesuňte se do kořenové složky `vetrelec` a otevřete soubor `zacatek.txt`. Protože je hra ještě neúplná postupujte následovně:

    1. Pokračujte na **schodiště**.
    1. Dále **konfrontujte** zloděje.

### Bonus

1. Pro úplnost příběhu doplňte následující soubory:

   #### Cesta: `vetrelec/loznice/skrin/ve-skrini.txt`

   ```text
   Škvírkou mezi dveřmi pozoruješ, jak jeden z lupičů vstupuje do ložnice. Co čert nechtěl, jde rovnou ke skříni.

   1. Bereš do ruky ramínko a rozhodneš se pro rychlou akci

   > akce.txt

   2. Strachy se ti sevřou půlky a strnule vyčkáváš svého osudu

   > osud.txt
   ```

   #### Cesta: `vetrelec/loznice/skrin/akce.txt`

   ```text
   A válečným rykem a ramínkem v ruce vyrazíš ze skříně. Lupič v úleku přepadne přes postel a zamotá se do prostěradla. Vibíháš dolů po schodech a ven na ulici před dům.

   > ../../pred-domem/ulice.txt
   ```

   #### Cesta: `vetrelec/loznice/skrin/osud.txt`

   ```text
   Lupič otevře skříň a vteřinu na sebe překvapeně hledítě. Kriminálník je ovšem duchapřítomnější, zabouchne dveře skříně a zamkne je zvenku klíčem, který trčel v zámku. Zamčený ve skříni slyšíš, jak za okny lupič odjíždí do tmy s tvým majetkem.
   ```

   #### Cesta: `vetrelec/pred-domem/ulice.txt`

   ```text
   Na ulici stojí lupičova škodovka s otevřeným kufrem.

   1. Vydáš se k autu

   > auto.txt

   2. Běžíš po chodníku k sousedům

   > sousedi.txt
   ```

   #### Cesta: `vetrelec/pred-domem/auto.txt`

   ```text
   V lupičově autě najdeš klíčky nachystané přímo v zapalování a na sedadle, hurá, lupičův mobil. Bereš klíče i mobil, přiskočíš za roh domu a točíš tísňovou linku. Policie už je na cestě. Tvůj majetek je zachráněn.
   ```

   #### Cesta: `vetrelec/pred-domem/sousedi.txt`

   ```text
   Zloděj vybíhá před dům a vidí tě, jak běžíš k vedlejšímu vchodu. Ryche nasedne do auta a ujíždí pryč s tvým majetkem.
   ```

1. Zkuste si textovku znovu zahrát. Tentokrát volte další kroky podle sebe.
