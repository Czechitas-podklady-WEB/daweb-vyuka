## Důležité příkazy

**clone**
: Vytvoří lokální kopii vzdáleného repozitáře.

**add**
: Přidá změny do :term{cs="oblasti připravených změn" en="stage"}.

**status**
: Zobrazí všechny rozpracované změny proti poslednímu commitu.

**reset**
: Vyprázdní oblast připravených změn.

**commit**
: Vytvoří novou revizi.

**push**
: Nahraje všechny nově vytvořené commity do vzdáleného repozitáře.

**log**
: Zobrazí historii commitů.

### Příkazy pro počáteční nastavení

```sh
$ git config --global user.name "Jméno Příjmení"
$ git config --global user.email "muj-email@example.com"
$ git config --global core.editor "code --wait"
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
