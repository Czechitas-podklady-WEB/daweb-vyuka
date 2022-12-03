## Základní autentizace

Téměř každá webová aplikace implementuje nějakou formu správy uživatelů, aby měl každý uživatel svoje vlastní data oddělená od ostatních. Pokud chce uživatel přistoupit ke svým datům, musí prokázat, že je to skutečně on. Tomuto prokazování se odborně říká :term{cs="autentizace" en="authentication"}.

Autentizace ve většině případá probíhá tak, že uživatel pošle spolu s požadavkem na server hlavičku `Authorization` s údaji, podle kterých server pozná, o jakého jde uživatele. My v této lekci probereme dva různé způsoby autentizace které nazveme _basic_ a _bearer_.

Autentizace typu _basic_ funguje tak, že v hlavičce `Authorization` odešleme hodnotu ve formátu

```
Basic muj.email@exmaple.com:mojeheslo
```

Server ověří, zda tento uživatel existuje a zda zadal správné heslo. Tuto hlavičku musíme odeslat s každým požadavkem.
