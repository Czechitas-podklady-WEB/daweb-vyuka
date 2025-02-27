## Visual Studio Code

::fig[logo Visual Studio Code]{src=assets/visual-studio-code.svg size=10}

Visual Studio Code je textový editor specializovaný na psaní programů a vývoj software. Obsahuje spoustu pomůcek, nástrojů a rozšíření, která zjednodušují programátorům život a umožňují jim spravovat obsáhlé projekty. VS Code je v současné době jedním z nejpoužívanějších programátorských editorů a mnoho profesionálů jej používá při své práci každý den.

Aktuální verzi editoru si nanistalujte podle instrukcí na [oficiálních stránkách](https://code.visualstudio.com). VS Code je dostupný pro všechny operační systémy.

Pokud máte VS Code nainstalován z dřívějška, zkontrolujte, že máte nejnovější verzi. Z hlavního menu vyberete _Help_ → _About_ (na Windows a Linuxu) nebo _Code_ , → _About Visual Studio Code_ (na Macu), v dialogovém okně by se měla zobrazit verze 1.97.0 nebo novější. Pokud máte starší verzi, zvolte v menu _Help_ → _Check for Updates…_, VS Code na pozadí stáhne novou verzi a nabídne její aktualizaci.

Poznámka na okraj: _Visual Studio Code_ a _Visual Studio_ jsou dva úplně jiné programy. My budeme používat pouze ten první, jehože názave se často zkracuje jen na _VS Code_, ale nikdy ne na _Visual Studio_.

### VS Code – Extensions

VS Code lze přizpůsobit instalací různých rozšíření, které vývojářům poskytují nové možnosti a usnadňují jim práci. Rozšíření nainstalujete tak, že kliknete na ikonu rozšíření (_Extensions_) v levém panelu okna VS Code. Případně můžete zmáčknout klávesovou zkratku :kbd[Ctrl] + :kbd[Shift] + :kbd[X] (na Windows či Linuxu) nebo :kbd[Command] + :kbd[Shift] + :kbd[X] (na Macu).

::fig[Rozšíření]{src=assets/rozsireni.png size=50}

Poté do okna pro vyhledávání (_Search Extensions in Marketplace_) zadáte název příslušného rozšíření.

Pro webovou akademii doporučujeme použití následujících rozšíření.

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Automaticky formátuje váš kód tak, aby vypadal hezky a „profesionálně“ 🙂. Budeme jej používat na jazyky jako HTML, CSS, JavaScript, JSON a další.
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) - Díky tomuto rozšíření se vám bude lépe pracovat s API v pozdějších lekcích JavaScriptu.

### Nastavení VS Code

Aby se nám s VS Code pracovalo dobře a zároveň nám všem fungovalo stejně, je potřeba provést základní nastavení. Z hlavního menu vyberete _View_ → _Command Palette..._ (nebo klávesová zkratka :kbd[Ctrl] + :kbd[Shift] + :kbd[P] resp. :kbd[Command] + :kbd[Shift] + :kbd[P], tahle zkratka se bude hodit i později) a do vyhledávacího políčka napište

```
Open Settings
```

a vyberte položku _Preferences: Open User Settings (JSON)_ viz obrázek.

::fig[Nastavení]{src=assets/nastaveni.png size=85}

Otevře se okno editoru. Jeho obsah smažte a místo něj vložte následující text. Nezapomeňte poté soubor uložit pomocí _File_ → _Save_.

```json
{
  "window.zoomLevel": 0,
  "files.autoSave": "off",
  "files.eol": "\n",
  "files.insertFinalNewline": true,
  "editor.tabSize": 2,
  "editor.links": false,
  "editor.renderWhitespace": "boundary",
  "editor.wordWrap": "on",
  "editor.fontSize": 16,
  "editor.multiCursorModifier": "alt",
  "editor.formatOnSave": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "vscode.css-language-features"
  },
  "prettier.singleQuote": true,
  "prettier.arrowParens": "always",
  "prettier.trailingComma": "all"
}
```
