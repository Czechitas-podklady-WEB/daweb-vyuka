Ke tvorbě webů budeme potřebovat několik speciálních programů, které většina profesionálů z praxe používá každý den. Tyto programy pomáhají psát a spravovat kód, komunikovat s počítačem nebo se vyznat v různých verzích vašich rozpracovaných projektů.

## Prohlížeč Chrome

Abychom nemuseli hned zkraje řešit rodíly mezi jednotlivými prohlíženči, budeme všichni svorně používat Google Chrome. Tímto vás rozhodně nenutíme jej používat v soukromí nebo snad psát aplikace pouze pro tento prohlížeč. Krása internetu spočívá právě v tom, že je do velké míry nezávislý na konkrétním softwaru. Pro nás je však ze začátku praktičtější mít vývojová prostředí co nejpodobnější kvůli snadnajšímu řešení problémů, kterých bude i tak dost.

Prohlížeč Google Chrome najdete na jeho oficiálních stránkách https://www.google.com/chrome. Google Chrome je dostupný pro všechny operační systémy. Pokus si nejste jistí instalací, postupujte podle následujícího videa.

<youtube video="zSRc0MxoTFk">

## Visual Studio Code

Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty. VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

Aktuální verzi editoru si naistalujte podle instrukcí na oficiálních stránkách https://code.visualstudio.com. VS Code je dostupný pro všechny operační systémy. Následující video obsahuje detailní postup instalace.

<youtube video="ewWehsif0X8">

### VS Code - Extensions

VS Code lze přizpůsobit instalací různých rozšíření, které vývojářům poskytují nové možnosti. Rozšíření nainstalujete tak, že kliknete na ikonu rozšíření (Extensions) v levém sloupci na kraji okna VS Code. Případně můžete zmáčknout klávesovou zkratku [[Ctrl]] + [[Shift]] + [[X]]. Pak do okna pro vyhledávání ("Search Extensions in Marketplace") zadáte název příslušného rozšíření.

Pro webovou akademii doporučujeme použití následujících rozšíření.

- **Prettier** - Automaticky formátuje váš kód tak, aby vypadal hezky a "profesionálně" 🙂. Budeme jej používat na jazyky jako HTML, CSS, JavaScript, JSON a další.
- **Live Server** - Díky tomuto rozšíření nemusíte pokaždé obnovovat stránku, když něco v kódu upravíte. Rozšíření spustí vývojový místní server s funkcí živého opětovného načtení statických a dynamických stránek.
- **Bracket Pair Colorizer** - Díky tomuto rozšířené lépe poznáte, které závorky k sobě patří. Pro nováčky neocenitelná pomoc, pro staré harcovníky možná spíš otrava 🙂.

### Nastavení VS Code

Aby se nám s VS Code pracovalo dobře a zároveň nám všem fungovalo stejně, je potřeba vzít následující text a zkopírovat jej do nastavení editoru. Jak se dostat k nastavení ukazuje video pod tímto kódem.

```json
{
  "window.zoomLevel": 0,
  "files.autoSave": "off",
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.links": false,
  "editor.renderWhitespace": "boundary",
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.fontSize": 16,
  "editor.multiCursorModifier": "alt",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.singleQuote": true,
  "prettier.arrowParens": "always",
  "prettier.trailingComma": "all",
  "workbench.colorCustomizations": {
    "editorError.foreground": "#ffff00"
  }
}
```

<youtube video="8rv6gK5FN1k">

## Node.js a NPM

Nyní je potřeba nainstalovat Node.js a balíčkovací systém NPM. Díky nim budeme moct vytvářet moderní stránky v JavaScriptu. Opět následujte instrukce na oficiální stránce https://nodejs.org nebo si pusťte následující video.

<youtube video="qp_Clw7Pw8E">

## Git

Git je verzovací systém, bez kterého se dnes už žádný pořádný programátor neobejde. Najdete jej na adrese https://git-scm.com. Jako všechny zde prezentovaní nástroje, i Git je dostupný pro všechny operační systémy. Nainstalujte jej podle následujícího videa.

<youtube video="fAfgNNt8W68">
