## Spolupráce na jedné větvi

Verzovací systém Git nabízí několik možnosti pro organizaci spolupráce mnoha lidí na jednom projektu. My se v této lekci pro začátek vybereme ten nejjednodušší případ, kdy na jednom projektu pracují pouze dva lidé. Taková spolupráce nevyžaduje použití složitějších Git možností jako je práce s větvemi a vystačíme si pouze s jedním novým příkazem.

### Vzdálený a lokální repozitář

Když na projektu pracuje pouze jeden vývojář, situace je téměř vždy stejný. Projekt má jeden vzdálený repozitář například na GitHubu a vývojář má naklonovanou jako lokální kopii. Pokud pracují na projektu vývojáři dva, každý má naklonovanou svou lokálni kopii a z té může pmocí příkazu `git push` odeslat svoje commity do společného vzdáleného repozitáře. Druhý vývojář si pak tyto nové změny může stáhnout do svého lokálního repozitáře pomocí příkazu `git pull`.

### Příkaz pull

Nejduležitější pravidlo spolupráce na jedné větvi zní: **Vždycky udělej pull dřív, než děláš commit!**
