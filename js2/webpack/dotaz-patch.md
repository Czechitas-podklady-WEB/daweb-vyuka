## Dotaz PATCH

Zatím jsme pro úpravu dat na serveru používali pouze dotaz POST. Tento se používá, pokud chceme přidat nějakou novou datovou položku, například položku do nákupního seznamu, zboží do nákupního košíku apod. Pro úpravu již existujících položek se používá dotaz PATCH. Ten nám spolouží například

1. k zaškrtnutí/pdškrtnutí položky v seznamu,
1. ke změně jména, množství nebo jednotky,
1. ke změne pořadí jednotek v seznamu.

Nejprve si ukážeme, jak můžeme změnit zaškrtnutí položky.
