## Scénář 2: Automatický merge

Pamatujete si ještě z první lekce, že Git je tzv. „decentralizovaný“?

To znamená, že každý vývojář má u sebe plnohodnotný repozitář. V drtivé
většině případů pak existuje ještě jeden hlavní (také plnohodnotný) repozitář,
kde se všechny změny následně scházejí dohromady. V DA takový repozitář máme
na Githubu.

Každý vývojář pracuje na svém repozitáři, nezávisle na těch ostatních. Když na
jednom projektu pracuje víc lidí, Git musí umět jejich práci následně nějak
konsolidovat do jednoho „stavu“. Existuje několik způsobů, jak toho dosáhnout,
a vždycky záleží na tom, v jakém stavu se zrovna nacházíme.

Nejběžnější způsob je využití větví, kde na každé větvi pracuje jen omezený
počet vývojářů a řeší v ní nějaký samostatný a izolovaný problém, který v ideálním
světě nijak nezasahuje do jiných částí projektu, na kterých pracují ostatní.

Následně musí dojít k nějakému spojení větví, aby byl kód ucelený.

My budeme pro jednoduchost pracovat jen s jednou větví.

Git má tři nejběžnější způsoby (v gití terminologii zvané _strategie_), jak dosáhnout
spojení změn z různých zdrojů do jednoho místa. Spojení změn se obvykle (a ne vždycky
správně) říká _merge_.

- _fast-forward only_ `git pull --ff-only`
- _fast-forward_ `git pull --ff`
- _merge_ `git pull --no-ff`
- _rebase_ `git rebase <...>`

Každý způsob se dá použít v různých situacích.

> „Počkej, neříkal jsi _tři_ způsoby?“

Ano, říkal :) _fast-forward_ je hybrid mezi `--ff-only` a `--no-ff`.

Ukážeme si jen první tři body. _Rebase_ je sice velmi mocný a oblíbený, ale také poměrně
složitý na pochopení, a vystačil by na samostatnou lekci.

Proč se scénář jmenuje _automatický_ merge? Protože Git všechno udělá za nás!
Tedy, pokud může… Pokud ne, nastane _konflikt_. Ten si ukážeme v dalším scénáři.
