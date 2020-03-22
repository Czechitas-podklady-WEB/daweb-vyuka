Ke tvorbě webů budeme potřebovat několik speciálních programů, které většina profesionálů z praxe používá každý den. Tyto programy pomáhají psát a spravovat kód, komunikovat s počítačem nebo se vyznat v různých verzích vašich rozpracovaných projektů.

## Prohlížeč Chrome

## Visual Studio Code

Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty. VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

Aktuální verzi editoru si naistalujte podle instrukcí na [oficiálních stránkách](https://code.visualstudio.com/). VS Code je dostupný pro všechny operační systémy.

### Visual Studio Code - Extensions

VS Code lze přizpůsobit instalací různých rozšíření, které vývojářům psokytují nové možnosti. Rozšíření nainstalujete tak, že kliknete na ikonu rozšíření (Extensions) v levém sloupci na kraji okna VS Code (případně můžete zmáčknout klávesovou zkratku Ctrl + Shift + X). Pak do okna pro vyhledávání ("Search Extensions in Marketplace") zadáte název příslušného rozšíření.

My Doporučujeme použití následujících rozšíření.

- **Prettier** - Kontroluje a upravuje formát sytlu, jak píšete kód a sám ho podle toho upraví. Díky tomu Váš kód vypadá hezky a "profesionálně" :-)
- **Live Server** - Díky tomuto rozšíření nemusíte pokaždé dát refresh stránky, když něco v kódu upravíte. Rozšíření spustí vývojový místní server s funkcí živého opětovného načtení statických a dynamických stránek.
- **Bracket Pair Colorizer** - Díky tomuto rozšířené lépe poznáte, k čemu patří specifické závorky. :-)

## NPM a Node.js

Jakmile máme nainstalován balíčkovací systém NPM, hned si nainstalujeme první balíček jménem `eslint`, který nám pomůže psát hezký JavaScriptový kód

```shell
$ npm install eslint -g
```

Na Linuxu a Macu budete možná muset napsat

```shell
$ sudo npm install eslint -g
```

## Git
