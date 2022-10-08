## Volání API

V této lekci směřujeme k tomu, abychom dokázali požadavek na server odeslat sami. Každý požadavek musí být zacílený na nějakou URL adresu. Podívejme se například na detail požadavku na hlavní styl stránky.

::fig{src=assets/detail-pozadavku.png}

Jako první informaci ihned vidíme, na jakou URL se požadavek poslal. Pokud tuto URL zadáme přímo do adresního řádku prohlížeče, vykonáme tak požadavek vlastnoručně a přímo v prohlížeči vidíme obsah odpovědi, kterou nám server poslal. 

### Struktura URL

Adresy URL mají následující formát.

```
protokol://adresa_serveru/cesta?parametr1=hodnota1&parametr2=hodnota2
```

Protokol je většinou `https`, někdy ještě zastarale `http`. Adresa serveru může být například `www.google.com`. Za adresou serveru následuje cesta, která specifikuje kam v rámci serveru se má požadavek odeslat. Za otazníkem se píšou takzvané parametry, které dále upřesňují požadavek.

Takto například vypadá adresa požadavku na server `www.google.com`, který spustí vyhledávání.

```
https://www.google.com/search?q=praha&sourceid=chrome
```

Cesta v požadavku je tedy `/search`, parametr `q` udává, že se má vyhledat slovo `praha` a parametr `sourceid` říká, že se ptáme z prohlížeče `chrome`. Zadejte tuto adresu do prohlížeče a uvidíte výsledky vyhledávání.

### Dotazy na API

V našich aplikacích většinou chceme ze serveru získat data v čisté podobě, tedy rovnou jako JavaScriptové pole a objekty. Pokud takovou možnost server nabízí, poskytuje k tomuto účelu jasně danou sadu URL. Na tyto URL můžeme posílat požadavky a obdržíme data nejčastěji ve formátu JSON (viz dále). Sadě URL adres, na které server takto poskytuje čistá data pak říkáme API (Application Programming Interface). 

Některé servery poskytují API zcela veřejně a nemusíme za ně nic platit. Vyzkoušejme si veřejné API poskytující časy východu a západu slunce na různých místech na Zemi. Takto například zjistíme, kdy dnes vychází a zapadá slunce v České republice.

```
https://api.sunrise-sunset.org/json?lat=50&lng=14.5
```

Všimněte si parametrů `lat` a `lng`, které udávají souřadnice místa na Zemi v zeměpisné šířce a délce. Bod s hezkými souřadnicemi :i[50, 14.5] je [kousek za Prahou](https://mapy.cz/s/dulojodano) směrem na jihozápad.

Po zadání dotazu do prohlížeče obdržíme odpověd podobnou této

<!-- prettier-ignore -->
```json
{
  "results": {
    "sunrise": "4:19:40 AM",
    "sunset": "5:47:30 PM",
    "solar_noon": "11:03:35 AM",
    "day_length": "13:27:50",
    "civil_twilight_begin": "3:47:52 AM",
    "civil_twilight_end": "6:19:18 PM",
    "nautical_twilight_begin": "3:07:05 AM",
    "nautical_twilight_end": "7:00:05 PM",
    "astronomical_twilight_begin": "2:22:48 AM",
    "astronomical_twilight_end": "7:44:22 PM"
  },
  "status": "OK"
}
```

Pozor na to, že časy jsou zde v UTC ([Koordinovaný světový čas](https://cs.wikipedia.org/wiki/Koordinovan%C3%BD_sv%C4%9Btov%C3%BD_%C4%8Das)), takže v závislosti na letním nebo zimním čase mohou být o hodinu nebo dvě dříve než v našem časovém pásmu.

Většina API poskytuje více či méně přívětivou dokumentaci, ze které lze vyčíst, jak se s API pracuje. Dokumentaci k výše zmíněnému API najdete [zde](https://sunrise-sunset.org/api).
