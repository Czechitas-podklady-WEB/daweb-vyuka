## Přihlášení

Zatím naše aplikace s nákupními seznamy funguje tak, že jsou v ní autentizační údaje uložené přímo v kódu. Tokto samozřejmě reálná aplikace fungovat nemůže. Zároveň u většiny aplikací chceme mít možnost se přihlásit a odhlásit. Abychom toto dokázali, budeme se nám hodit jiný způsob autentizace zvaný *bearer*.

*Bearer* autentizace funguje tak, že svoje přihlašovací údaje pošleme na speciální přihlašovací endpoint, který je ověří a zpět nám pošla takzvaný *autentizační token*.

