---
title: Profil herce
demand: 1
---

# Zadání:

> Vytvořte HTML stránku s profilem herce **Rowana Atkinsona** jen za použití běžných HTML tagů, podle [vzoru](https://codepen.io/SimonB87/full/gOpdZpY).
> Smyslem tohoto úkolu je si zopakovat psaní HTML kódu, nikoliv vytvořit skvostnou stránku.
>
> ## Stránka bude obsahovat tyto prvky:
>
> Jako zdroj infromací čerpejte Wikipedii. Text bude rozdělen na tyto části
>
> - ### A) Hlavička
> - Obrázek herce :man: (použijte odkaz přímo z webu `src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip"`)
> - Nadpis (použijte tag `<h1>`) se jménem herce `Rowan Atkinson`
> - Pod obrázkem bude popis s původem a povoláním:
>
>   > `Britský herec a komik. Znamý pro postavu Mr. Beana.`
>
> * Menu s očíslovaným seznamem
>
> - Odkazy jsou směřovány na 3 částí (`1. Obecné údaje, 2. Život, 3. Odkazy a zdroje`).
> - Každá položka představuje odkaz, který vede k přislušnému nadpisu, který je značen pomocí id:
>   `<a href="#obecneUdaje">Obecné údaje</a>` > `<a href="#zivot">Život</a>` > `<a href="#odkazy">Odkazy</a>`
>
> * ### B) Obsah
>
> * #### Část 1: **Obecné údaje**
>
>   - Je zde uvedena se o HTML **tabulku**, kde budou údaje:
>   - Pro **nadpis** použijte tag `<h2>`, který obsahuje atribut `id="obecneUdaje"`

     | Celé jméno   | Rowan Sebastian Atkinson                          |
     |--------------|---------------------------------------------------|
     | Narození     | 6. ledna 1955, Spojené království Consett, Anglie |
     | Aktivní roky | 1978 - dosud                                      |
     | Hlavní žánr  | komedie                                           |

> - #### Část 2: **Život**
>
>   - Pro **nadpis** použijte tag `<h2>`, který obsahuje atribut `id="zivot"`
>   - obsahuje text dostupný na webu v **odstavcích** (použijte tagy `<p>`) (text můžete ho zkopírovat ze zadání):
>     > Narodil se do selské rodiny. Po studiích na univerzitách se stal komikem. Začal psát pro divadlo Oxford Playhouse a uplatnil se i jako divadelní komik.
>     > Je světově známý hlavně jako představitel Mr. Beana.
>     > Poprvé se Rowan Atkinson dostal do povědomí lidí svým pořadem The Atkinson Family který se vysílal v rádiu v roce 1979. Do roku 1982 slavil úspěch se svým skečovým pořadem Not the Nine O'Clock News. Hrál hlavní roli v seriálu Černá zmije (1989), který ho proslavil. Zlom jeho kariéry přišel v roce 1990 s vysíláním seriálu Mr. Bean, kde si Atkinson zahrál hlavní roli - Mr. Beana. Vysílal se v 245 zemích a bylo natočeno celkem 15 45minutových epizod. Seriál se vysílal až do roku 1995, některé televize ho reprízují i v současnosti. O dva roky později (1997) si Beana zopakoval ve filmu Mr. Bean: Největší fimová katastrofa.
>     > V roce 2003 se objevil jako neschopný agent Johnny English ve filmu Johnny English. V roce 2007 se objevil znovu jako Mr. Bean ve filmu Prázdniny pana Beana. V roce 2011 se vrátil jako Johnny English ve filmu Johnny English se vrací. Od té doby ztvárnil mnoho dalších rolí, mezi poslední patří komisař Mairgaret v nové trilogii z roku 2017. V roce 2018 se vrátil jako Johnny English ve filmu Johnny English strikes again (Johnny English znovu zasahuje).
>     > Od roku 1990 byl ženatý se Sunetrou Sastry, s níž má dvě děti, Lily a Benjamina. Rozvedl se v roce 2015.
>     > Vlastní dvě filmové společnosti, Tiger Television a Tiger Aspect Films. Je velký milovník rychlých aut
>
> * #### Část 3: Odkazy a zdroje
>
>   - Pro **nadpis** použijte tag `<h2>`
>   - Obsahuje **nečíslovaný seznam** s odkazy, které po kliku otevřou stránku na nové záložce, pomocí atributu `target="_blank"`
>     > - Článek [Rowana Atkinsona](https://cs.wikipedia.org/wiki/Rowan_Atkinson) z Wikipedie
>     > - Oficiální youtube kanál [Mr. Beana](https://www.youtube.com/channel/UCkAGrHCLFmlK3H2kd6isipg)
>
> * ### D) Patička s údaji o stránce
>
> - Pro **nadpis** použijte tag `<h2>
> - Zde napište své jméno a datum vytvoření stránky a další vhodné infromace :blush:
>
> ## Doporučení:
>
> Pro konec řádku a prázdný řádek zatím můžete použít tag `<br>`
