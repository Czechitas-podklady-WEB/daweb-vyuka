## Přihlášení

Zatím naše aplikace s nákupními seznamy funguje tak, že jsou v ní autentizační údaje uložené přímo v kódu. Takto samozřejmě reálná aplikace fungovat nemůže. Zároveň u většiny aplikací chceme mít možnost se přihlásit a odhlásit. Abychom toto dokázali, budeme se nám hodit jiný způsob autentizace zvaný _bearer_.

_Bearer_ autentizace funguje tak, že svoje přihlašovací údaje pošleme na speciální přihlašovací endpoint, který je ověří, a zpět nám pošla takzvaný _autentizační token_. To je často změť písmen a číslic, která vypadá například takto:

```
k6nHCNQNSdSOEEwFYXery
```

Tento token slouží k identifikaci uživatele místo přihlašovacích údajů.
