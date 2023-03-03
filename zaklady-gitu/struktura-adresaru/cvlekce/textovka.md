---
title: Textovka
demand: 3
---

Pomocí příkazové řádky vytvořte hru podle následujícího scénáře. Nepoužívejte _VS Code_ ani aplikaci _Průzkumník_/_Finder_, pokud se vyloženě nezamotáte, ať si ovládání příkazové řádky osvojíte.

1.  Kořenovou složku pro textovou hru příkazem `mkdir` vytvořte a pojmenujte `vetrelec` uvnitř složky, kde typicky zakládáte nové projekty.

1.  Příkazem `cd` (možná opakovaným použitím) se přesuňte do složky `vetrelec`.

1.  V ní vytvořte soubor `index.md` s textem:

    #### Cesta: `vetrelec/index.md`

    ```text
    # Hra Vetřelec

    Vítejte v naší zbrusu nové hře „Vetřelec“.

    [Začít hrát](zacatek.md)
    ```

    Připomeňte si příkaz `notepad` pro Windows nebo `touch` a `open` pro Mac z předchozí sekce.

1.  Otevřete si ještě jedno okno terminálu (`cmd` ve Windows).

1.  V prvním okně si pomocí `pwd` vypište aktuální adresář, v novém okně se pomocí příkazu `cd` a cesty přesuňte do stejného adresáře.

1.  V druhém okně spusťte následující příkaz:

    ```sh
    npx markserve index.md
    ```

    Nastartuje se vám prohlížeč, ve kterém se zobrazí uvítací obrazovka vaší hry.

1.  Ve složce `vetrelec` dále vytvořte soubor `zacatek.md` s textem:

    #### Cesta: `vetrelec/zacatek.md`

    ```text
    Ze sladkého spánku tě probudí podivný šramot. Zdá se, že se ozývá
    z obýváku v přízemí. Tiše otevřeš dveře ložnice a pokradmu scházíš
    schody dolů zkontrolovat situaci.

    [Přejít na schodiště](obyvak/schodiste.md)
    ```

    Zkuste v prohlížeči přejít na začátek hry.

1.  Všimněte si, že text navádí hráče do podsložky `obyvak` se souborem `schodiste.md`. Vytvořte tuto složku a soubor s textem:

    #### Cesta: `vetrelec/obyvak/schodiste.md`

    ```text
    Když sejdeš do půlky schodů, skrze zábradlí zahlédneš postavu
    v kapuci. Zloděj! Zdá se, že již spoustu cenných věcí stihl odnést.

    Je třeba jednat rychle:

    1. Vrhneš se do konfrontace se zlodějem

    [Konfrontovat](konfrontace.md)

    2. Vydáš se zpět do ložnice zavolat policii

    [Zavolat Policii](../loznice/mobil.md)
    ```

    V prohlížeči opět vyzkoušejte, že stránka funguje. Pokud upravíte aktuálně zobrazený soubor, v prohlížeči použijte F5 (refresh) pro znovunačtení stránky.

1.  Tím textovka nekončí. Doplň další soubory podle následujícího klíče:

    #### Cesta: `vetrelec/obyvak/konfrontace.md`

    ```text
    Sebehneš zbytek schodů, ale v nervozitě a tmě nešikovně zakopneš
    o křeslo. Zloděj se vyleká a přiskočí k vchodovým dveřím. Než se
    naděješ, slyšíš, jak venku odjíždí auto s tvým majetkem.
    ```

    #### Cesta: `vetrelec/loznice/mobil.md`

    ```text
    Tiše vystoupáš schody zpět nahoru. Jenže ouha, tvůj mobilní telefon
    leží na nočním stolku - vybitý. Nabíječku jsi samozřejmě zapomněl
    dole v obýváku. V tom slyšíš na schodech kroky.

    1. Rychle se schováš do šatní skříně

    [Schovat se](skrin/ve-skrini.md)

    2. Pohotově otevřeš okno a sešplháš před dům na ulici

    [Sešplhat na ulici](../pred-domem/ulice.md)
    ```

1.  Zkuste si textovku zahrát. Přesuňte se do kořenové složky `vetrelec` a otevřete soubor `zacatek.md`. Protože je hra ještě neúplná postupujte následovně:

    1. Pokračujte na **schodiště**.
    1. Dále **konfrontujte** zloděje.

### Bonus

1. Pro úplnost příběhu doplňte následující soubory:

   #### Cesta: `vetrelec/loznice/skrin/ve-skrini.md`

   ```text
   Škvírkou mezi dveřmi pozoruješ, jak jeden z lupičů vstupuje
   do ložnice. Co čert nechtěl, jde rovnou ke skříni.

   1. Bereš do ruky ramínko a rozhodneš se pro rychlou akci

   [Akce s ramínkem](akce.md)

   2. Strachy se ti sevřou půlky a strnule vyčkáváš svého osudu

   [Odevzdat se osudu](osud.md)
   ```

   #### Cesta: `vetrelec/loznice/skrin/akce.md`

   ```text
   A válečným rykem a ramínkem v ruce vyrazíš ze skříně. Lupič
   v úleku přepadne přes postel a zamotá se do prostěradla.
   Vybíháš dolů po schodech a ven na ulici před dům.

   [Vyběhnout na ulici]()../../pred-domem/ulice.md)
   ```

   #### Cesta: `vetrelec/loznice/skrin/osud.md`

   ```text
   Lupič otevře skříň a vteřinu na sebe překvapeně hledíte. Kriminálník
   je ovšem duchapřítomnější, zabouchne dveře skříně a zamkne je zvenku
   klíčem, který trčel v zámku. Zamčený ve skříni slyšíš, jak za okny
   lupič odjíždí do tmy s tvým majetkem.
   ```

   #### Cesta: `vetrelec/pred-domem/ulice.md`

   ```text
   Na ulici stojí lupičova škodovka s otevřeným kufrem.

   1. Vydáš se k autu

   [K autu](auto.md)

   2. Běžíš po chodníku k sousedům

   [K sousedům](sousedi.md)
   ```

   #### Cesta: `vetrelec/pred-domem/auto.md`

   ```text
   V lupičově autě najdeš klíčky nachystané přímo v zapalování a na sedadle,
   hurá, lupičův mobil. Bereš klíče i mobil, přiskočíš za roh domu a točíš
   tísňovou linku. Policie už je na cestě. Tvůj majetek je zachráněn.
   ```

   #### Cesta: `vetrelec/pred-domem/sousedi.md`

   ```text
   Zloděj vybíhá před dům a vidí tě, jak běžíš k vedlejšímu vchodu. Ryche
   nasedne do auta a ujíždí pryč s tvým majetkem.
   ```

1. Zkuste si textovku znovu zahrát. Tentokrát volte další kroky podle sebe.
