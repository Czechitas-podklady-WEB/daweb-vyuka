## Stavové kódy HTTP odpovědi

S každou odpovědí ze serveru vždy kromě samotných dat přichází i stavový kód – číselný kód v rozsahu 100–599, který říká, jak to s vaším požadavkem dopadlo. Nejčastější stav, se kterým se setkáte, je stav `200`, který znamená _OK_ – volání bylo úspěšné, server provedl, co jste po něm chtěli a vrací data, která jste chtěli.

Další častý stavový kód je `404`, který znamená _Not Found_ – server nenalezl adresu (URL), kterou jste po něm chtěli. Každý číselný kód má k sobě nadefinovaný i krátký vysvětlující text, úplný kód (číslo i text) je tedy třeba `200 OK` nebo `404 Not Found`.

Stavové kódy jsou rozdělené do skupin podle významu, vždy první číslice (řád stovek) určuje, o jakou skupinu se jedná. Význam skupin je následující:

- `1xx` – Informační kódy – řídí komunikaci mezi prohlížečem a serverem, ve svém kódu se s nimi nepotkáte, vyřídí je za vás samotný prohlížeč.
- `2xx` – Úspěšné provedení – vrací se v případě, když bylo volání serveru úspěšné. Patří sem všemi oblíbený kód `200 OK`.
- `3xx` – Přesměrování – požadavek byl zpracován úspěšně, ale prohlížeč má nyní pokračovat na jiné adrese. Mezi kód přesměrování je zařazen i kód `304 Not Modified`, který znamená „volání dopadlo dobře, ale odpověď ode mne nepotřebuješ, protože se nic nezměnilo“.
- `4xx` – Chyba klienta – server požadavku porozuměl, ale požadavek byl chybný a chyba je nejspíš na straně klienta. Může to být chyba v kódu frontendové aplikace nebo uživatel zadal špatná data. Sem patří i kód `404 Not Found` – adresa na serveru neexistuje, buď ji máte špatně zadanou v aplikaci nebo uživatel zadal špatnou adresu (cestu v adrese).
- `5xx` – Chyba serveru – podobné jako předchozí případ, ale v tomto případě server sebekriticky přiznává, že chyba je pravděpodobně na jeho straně. Asi nejčastější je chyba `500 Internal Server Error`, která znamená zhruba to, že došlo k nějaké nečekané chybě, se kterou si server neví rady.

Přehled všech standardních stavových kódu najdete třeba v dokumentaci MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Stavové kódy všech odpovědí od serveru nám prohlížeč zobrazuje v _Dev Tools_, když si otevřete záložku _Network_. Zároveň prohlížeč zobrazí červeně požadavky/odpovědi, které skončily chybou.
