## Složitější příkazy

Program `whoami` byl velmi prostý. Vypsal nám jen název přihlášeného uživatele. Složitější příkazy mohou mít i parametry, které jim podrobněji říkají, co mají dělat. Parametry se zadávají za jménem příkazu a oddělují se od něj mezerou.

Víceslovné parametry je potřeba obalit do uvozovek, aby bylo jasné, že patří k sobě.

```sh
nazev-prikazu první druhý třetí 100 "delší text"
```

### `echo`

Ukázkou programu, který pracuje s více parametry je například `echo` (zvěna). Tento program vypíše zpět na obrazovku všechno, co mu zadáte jako parametry.

```sh
echo Ahoj
```

### Chat

Vést konverzaci se sebou samým je trochu zvláštní a rychle omrzí. Pokud si chcete popovídat s někým dalším, může vyzkoušet následující příkazy.

První odešle zprávu do společného chatu.

```sh
npx @czechitas/chat send "Jak se máte?"
```

Druhý vypíše všechny zprávy, které byly do chatu odeslány.

```sh
npx @czechitas/chat list
```

Občas se program `npx` ještě dozeptá, jestli si do sebe může doinstalovat rozšiřující balíček `@czechitas/chat`. Otázku odsouhlasíte stisknutím klávesy :kbd[Enter].

```text
Need to install the following packages:
  @czechitas/chat
Ok to proceed? (y)
```

::fig[výsledek `npx @czechitas/chat list`]{src=assets/chat-list.png}
