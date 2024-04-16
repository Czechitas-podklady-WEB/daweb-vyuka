## Lokální API server

Abychom se při vývoji různých cvičných projektů vyhnuli potížím s veřejnými API, naučíme se spustit si lokální API server na svém vlastním počítači. Je to podbné, jak když si rozbíháme lokální server pro vývoj frontendu. 

Nad lokálním API serverem máme plnou kontrolu. Můžeme jej spouštět a zastavovat jak potřebujeme, můžeme do něj vložit vlastní data, a můžeme si nastavit, jak bude API fungovat.

Frontend postavený nad takovým API pak samozřejmě nepůjde zveřejnit na internetu a bude fungovat jen na našem počítači. To nám ale pro tuto chvíli bude stačit.

### Zdroj dat

Abychom mohli lokální server spustit, potřebujeme mít nějaká data, která nám API bude poskytovat. V pozdějších lekcích si ukážeme, jak si můžete sami vytvořit data pro své lokální API. Do té doby si data vždy stáhneme z nějakého připrazeného git repozitáře.

Lokální server spustím ve složce příkazem:

```shell
npx jsonhost
```

Pokud neřekneme jinak, server běží na adrese [http://localhost:4000](http://localhost:4000).
