Jak přibývá naších programátorských schopností, tak se naše aplikace stávají většími a složitejšími. Budou postupně obsahovat více a více komponent, knihoven, stylů a dalších. Budeme proto potřebovat pokročilejší nástroje, jak tuto rostoucí komplexitu zkrotit a dát jí nějaký řád.

## Systém NPM

NPM je nástroj, který umožňuje spravovat knihovny a kód pro větší JavaScriptové projekty. V systému NPM se knihovnám říká :term{cs="balíčky" en="packages"}, můžeme tedy říct, že NPM je správce balíčků.

Vytvořit projekt založený na NPM není nic těžkého. Jediné, co k tomu potřebujeme, je založit prázdnou složku a do ní vložit speciální soubor `package.json`. Ten obsahuje základní informace o našem projektu, jako je jméno, verze a seznam balíčků (dříve knihoven), které náš projekt používá.

Založíme si tedy složku `muj-projekt` a otevřeme ji ve VS Code. Do ní vložíme soubor `package.json` s tímto obsahem

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {}
}
```

Vlastnost `dependencies` říká, jaké všechny balíčky náš projekt používá. Odborně se takovým balíčkům říká závislosti. V našem případě zatím žádné závislosti nemáme.

Mohli bychom však v našem projektu chtít použít například nám už známé knihovny `validator.js` a `dayjs`. Abychom je zapojili jako závislosti do našeho projektu, musíme je nainstalovat. V terminálu proto spustíme tento příkaz:

```sh
$ npm install validator dayjs
```

Po spuštění tohoto příkazu nám v našem projektu přibyla složka `node_modules`. Ta obsahuje stažený kód nainstalovaných balíčků. Dále nám ve složce přibyl soubor `package-lock.json`. Jeho význam je malinko komplikovanější, takže jej pro tuto chvíli necháme být.

Zároveň se nám změnil také soubor `package.json`.

```json
{
  "name": "muj-projekt",
  "version": "0.0.1",
  "dependencies": {
    "dayjs": "^1.10.4",
    "validator": "^13.5.2"
  }
}
```

Vidíte, že pod klíčem `dependencies` je seznam balíčků a jejich verzí, které jsou teď součástí naseho projektu. Vaše verze mohou mít trochu jiná čísla v závislosti na tom, jak daleko v budoucnosti si čtete tento text.
