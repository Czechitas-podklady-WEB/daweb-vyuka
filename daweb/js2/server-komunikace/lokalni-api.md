## Lokální API server

Abychom se při vývoji různých cvičných projektů vyhnuli potížím s veřejnými API, naučíme se spustit si lokální API server na svém vlastním počítači. Je to podbné, jak když si rozbíháme lokální server pro vývoj frontendu.

Nad lokálním API serverem máme plnou kontrolu. Můžeme jej spouštět a zastavovat jak potřebujeme, můžeme do něj vložit vlastní data, a můžeme si nastavit, jak bude API fungovat.

Frontend postavený nad takovým API pak samozřejmě nepůjde zveřejnit na internetu a bude fungovat jen na našem počítači. To nám ale pro tuto chvíli bude stačit.

### Zdroj dat

Abychom mohli lokální server spustit, potřebujeme nejprve mít nějaká data, která nám API bude poskytovat. V pozdějších lekcích si ukážeme, jak si můžete sami vytvářet data pro svá lokální API. Do té doby si data vždy stáhneme z nějakého připrazeného git repozitáře.

Pro následující ukázku si naklonujte [následující repozitář](https://github.com/Czechitas-podklady-WEB/ukazka-simpsons-api), který obsahuje data o několika postavách z animovaného seriálu Simpsonovi. Nakonovanou složku si otevřete ve VS Code a v terminálu spusťte následující příkaz:

```shell
npx apidroid@latest
```

Balíček `apidroid` je nástroj, který nám umožní spustit lokální API. Je podobný balíčku `serve`, který jste používali k spuštění lokálního serveru pro frontend. Po spuštění příkazu se vám v terminálu zobrazí informace o tom, na jaké adrese a portu je API dostupné. Většinou to bude `http://localhost:4000`, pokud není port 4000 obsazený jiným procesem.

### Použití lokálního API

Vždy, když budeme mít k dispozici repoziář s daty pro lokální API, dokumentace k API bude vždy v souboru `README.md` v kořenové složce repozitáře. Na GitHubu si tak vždy na hlavní stránce repozitáře můžete přečíst, jaké endpointy API nabízí a jak je můžete použít.

V případě Simpsonových z dokumentace vyčteme, že API nabízí endpointy pro získání seznamu všech postav a detaily jedné postavy podle ID.

- Seznam všech postav: `http://localhost:4000/api/characters`
- Detail jedné postavy: `http://localhost:4000/api/characters/:id`

Vyzkoušejte si v prohlížeči otevřít jak seznam postav, tak například postavu s ID 1.

:::box{type=remember}
Vždy, když budete chtít použít lokální API, musíte mít spuštěný `apidroid` v samostatném okně VS Code. Při vývoji tak budete mít otevřena vždy dvě okna VS Code - jedno s frontendem a druhé s API.
:::
