Ve chvíli, kdy začneme pracovat na seriózních projektech s větším množstvím kódu, objeví se starosti, které s programováním až tolik nesouvisí. Budeme chtít

1. zajistit, aby se nám projekt nerozpadl pod rukama tím, jak přibývá stále více a více kódu,
1. zálohovat náš kód, aby se nestalo, že nám klekne počítač a příjdeme třeba o rok práce,
1. spravovavat různé verze projektu, abychom mohli zákazníkovi předat funkčí produkt a zároveň jej dále vylepšovat,
1. organizovat spolupráci více lidí na jednom projektu tak, aby si navzájem nelezli do zelí.

Se všemi těmito výzvami nám pomůže takzvaný <term cs="verzovací systém" en="version control system">. Takových systémů je k dispozici vícero, ale zdaleka nejpopulárnější je systém jménem Git.

## Systém Git

Verzovací systém Git je jeden z nejpopulárnější systémů pro správu verzi, protože je velmi dobře promyšlený. Díky tomu se dá použít jak na malé projekty například v rámci tohoto kurzu, tak na rozsáhlý software, na kterém pracují desítky lidí zároveň.

Git je velmi flexibilní a dá se použít mnoha různými způsoby. Existuje vícero různých metodik jak s Gitem pracovat, které se liší podle typu a velikosti projektu. Základní princip je však víceméně pořád stejný.

### Repozitář

Základním pojmem Gitu je takzvaný <term cs="repozitář" en="repository">, ve kterém se nachází všechny soubory, které tvoří váš projekt. Většinou bývá na nějakém serveru, na který mají přistup všichni vývojáři projektu a mohou do něj přispívat svým kódem. Takový server může běžet například v rámci nějaké firmy a pouze vývojáři z této firmy něj mají přístup. Pokud na projektu pracujete sami, můžete si pro něj vytvořit repozitář na některé hostovací službě jako [GitHub](https://github.com/), [GitLab](https://gitlab.com/), [Bitbucket](https://bitbucket.org/) a další.
  
My si společně vytvoříme účet na GitHubu.

## Základní pojmy

Představte si, že jste právě dokončili nějakou ucelenou věc na vašem projektu. Například jste opravili nějakou chybu nebo přidali nějakou funkčnost. V tuto chvíli si chcete udělat jakýsi snímek toho, v jakém stavu se projekt právě teď nachází, abyste se případně do tohoto stavu mohli kdykoliv vrátit. Je to podobné, jako když hrajete počítačovou hru a chcete si ji v nějakém místě uložit, abyste se pak na toto místo mohli vrátit, kdyby vaši postavu později ve hře potkal neblahý osud.

Náš snímek si tedy pamatuje stav celého projektu v určitém čase. V teorii verzování kódu se takovému snímku říká <term cs="revize" en="revision">. Git však místo termínu revize používá slovo _commit_, které nemá žádný časký překlad. Toto slovo ale používají naprosto všichni, kdo s Gitem pracují. Budeme jej tedy používat i my.

Ke každému commitu se navíc přidává zpráva o tom, co se v něm dokončilo za práci. Po čase si pak můžeme prohlédnout historii commitů v projektu a přehledně vidět, co se přesně dělo.

![Commity](assets/commits.svg)

Všimněte si, že každý commit obsahuje zprávu a takzvaný <term cs="digitální otisk" en="hash">. Tento otisk jednoznačně identifikuje každý commit, abychom se kdykoliv mohli k libovolnému commitu vrátit.

## Důležité příkazy

**clone**
: Vytvoří lokální kopii vzdáleného repozitáře.

**add**
: Přidá změny do oblasti připravených změn.

**status**
: Zobrazí všechny rozpracované změny proti poslednímu commitu.

**reset**
: Vyprázdní oblast připravených změn.

**commit**
: Vytvoří novou revizi.

**push**
: Nahraje všechny nově vytvořené commity do vzdáleného repozitáře.

**log**
: zobrazí historii commitů.

### Příkazy pro počáteční nastavení

```sh
$ git config --global user.name "Jméno Příjmení"
$ git config --global user.email "muj-email@example.com"
```

### Časté příkazy

Zahrnout do stage všechny změny z aktuálního adresáře

```sh
$ git add .
```

Zobrazit lokální stav (ukáže například, co je a není na stage)

```sh
$ git status
```

Vytvořit commit ze stage

```sh
$ git commit -m "Zpráva"
```

Nahrát nové commity na server (GitHub, GitLab, Bitbucket, …)

```sh
$ git push
```

@exercises ## Cvičení [

- saturejka
  ]@
