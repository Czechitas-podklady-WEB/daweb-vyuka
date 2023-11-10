Pokud jste všemi předchozíme lekcemi doputovali až sem, naučili jste se toho opravdu hodně. Možná vám nově nabyté znalosti v hlavách pořád šplouchají a hledají ty správné šuplíky. Proto na závěr kapitoly o Reactu zkusíme vytvořit jednu ucelenou webovou aplikaci, ve které spojíme dohromady všechny věci, které jste se v Reactu naučili.

## Zadání

Vaším úkolem bude vytvořit webovou stránku fiktivní dopravní společnosti s názvem :i[LeviExpress]. Ta každý den vypravuje dvě autobusové linky spojující východní a západní Evropu. Jedna linka vyjíždí o půlnoci z Budapešti a končí opět o půlnoci v Amsterdamu. Protí ní vždy vyráží linka v opačném směru, tedy z Amsterdamu do Budapešti.

Výsledná webová stránka bude mít dvě podstránky. Jedna bude umožňovat rezervaci jízdenky, druhá bude zobrazovat již rezervovanou jízdenku.

### Průběh projektu

Aplikaci budeme vytvářet postupně ve dvou fázích.

1. Nejprve vytvoříme základní verzi, kde si uživatel vybere den a odkud kam chce cestovat. Systém mu pak automaticky zarezervuje nějaké volné místo v autobuse.
1. V další lekci umožníme uživateli, aby si sám vybral místo v autobuse.

### API

K projektu je již připravný funkční backend s API na adrese

https://apps.kodim.cz/daweb/leviexpress/api

Podrobnou dokumentaci ke všem endpointům najdete [zde](https://apps.kodim.cz/daweb/leviexpress/docs).
