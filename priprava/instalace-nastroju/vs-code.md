## Visual Studio Code

Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty. VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

Aktuální verzi editoru si naistalujte podle instrukcí na oficiálních stránkách https://code.visualstudio.com. VS Code je dostupný pro všechny operační systémy. Následující video obsahuje detailní postup instalace.

::youtube{uid=ewWehsif0X8}

### VS Code - Extensions

VS Code lze přizpůsobit instalací různých rozšíření, které vývojářům poskytují nové možnosti. Rozšíření nainstalujete tak, že kliknete na ikonu rozšíření (Extensions) v levém sloupci na kraji okna VS Code. Případně můžete zmáčknout klávesovou zkratku :kbd[Ctrl] + :kbd[Shift] + :kbd[X]. Pak do okna pro vyhledávání ("Search Extensions in Marketplace") zadáte název příslušného rozšíření.

Pro webovou akademii doporučujeme použití následujících rozšíření.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automaticky formátuje váš kód tak, aby vypadal hezky a "profesionálně" 🙂. Budeme jej používat na jazyky jako HTML, CSS, JavaScript, JSON a další.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Díky tomuto rozšíření nemusíte pokaždé obnovovat stránku, když něco v kódu upravíte. Rozšíření spustí vývojový místní server s funkcí živého opětovného načtení statických a dynamických stránek.
- [Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2) - Díky tomuto rozšířené lépe poznáte, které závorky k sobě patří. Pro nováčky neocenitelná pomoc, pro staré harcovníky možná spíš otrava 🙂.

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

::youtube{uid=8rv6gK5FN1k}