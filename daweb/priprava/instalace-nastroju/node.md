## Node.js a NPM

::fig[logo Node.js]{src=assets/nodejs.svg size=10}

Nyní je potřeba nainstalovat Node.js a balíčkovací systém `npm`. Tyto programy slouží ke spouštění JavaScriptových programů a díky nim budeme moct vytvářet moderní webové stránky. Opět následujte instrukce na [oficiální stránce](https://nodejs.org). Stáhněte a nainstalujte verzi označenou jako LTS. V současné době je to verze `22.14.0`. Číslo verze může být i vyšší, pokud tento manuál čtete někdy v budoucnosti. (Nepoužívejte však, alespoň z počátku, lichá čísla hlavní verze, třeba 23.x.x. Tyto verze nejsou tak stabilní a jsou určené spíš pro zkušené vývojáře. ) Pokud už máte Node.js z dřívějška, stejně si nainstalujte nejnovější verzi.

`npm` je součást instalace Node.js, takže se nainstaluje společně s ním. Obvykle se tedy neřeší zvlášť, my ovšem **důrazně** doporučujeme i `npm` aktualizovat na nejnovější verzi, protože se tím odstraní i jedna nepěkná chyba v aktuální instalaci Node.js. K aktualizaci budete opět potřebovat terminál nebo-li příkazovou řádku. Pokud vám nezůstal otevřený z instalace gitu, znovu ho otevřete postupem popsaným v [czechitas-podklady.cz/git-instalace/](https://czechitas-podklady.cz/git-instalace/).

Do terminálu napište následující příkaz:

```shell
npm i -g npm
```

Pozor na mezery, všechna písmena jsou malá, před `g` je jedna pomlčka (správněji spojovník). Vypíše se pár řádků o tom, z jaké verze na jakou verzi se `npm` aktualizuje (skončit byste měli na verzi 11.0.0 nebo novější, ověřit si číslo vaší verze můžete příkazem `npm -v`) a po chvilce se objeví opět řádek s výzvou (končí zobáčkem `>` ve Windows nebo dolarem `$` na MacOS a Linuxu), za kterou můžete psát další příkaz.

Okno terminálu se vám bude hodit ještě pro ověření celé instalace, takže ho ještě nezavírejte.
