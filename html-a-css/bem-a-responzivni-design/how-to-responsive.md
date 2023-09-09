## Kódování responzivních stránek

### Meta značka viewport

Prvním krokem pro tvorbu responzivního webu je přidat `meta` značku `viewport` v hlavičce HTML se správným nastavením atributu `content`. To zajistí, že se obsah stránky bude přizpůsobovat šířce zařízení a že nebude prohlížečem nijak _přizoomovaný_ nebo _odzoomovaný_. Bez použití této značky použije prohlížeč defaultní rozměr 980px a stránku dostatečně oddálí, aby se vmáčkla na menší zařízení. (HTML šablona generovaná přes emmet má toto nastavení automaticky a není třeba ho přidávat).

```html
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document Title</title>
  </head>
  <body>
    ...
  </body>
</html>
```


## Techniky responzivního webdesignu

Máme tři hlavní techniky responzivního webdesignu:

- flexibilní layout
- flexibilní obrázky
- media queries

V této lekci si projdeme flexibilní layout.

### Flexibilní layout

Pro tvorbu flexibilního layoutu pomáhá designérům grid, neboli mřížka. Jde o systém sloupců a řádků, kde elementy zabírají vždy nějaký poměr stránky nehledě na na velikost zařízení. Oproti neresponsivním webům se tak třeba několikaslopcový grid nezmenší (neodzoomuje), aby se vmáčkl na telefon, ale sloupce se zalomí pod sebe. [Příklad komponent navrhovaných do grid systému.](https://dribbble.com/shots/15341964-Grid-System-UI-Components)

Pružného layoutu, který se přizpůsobí jakékoli velikosti stránek, dosáhneme pomocí relativních jednotek. Díky procentům budou elementy na stránce zabírat stejný poměr prostoru nehledě na rozlišení. 



Mřížku napři. tří sloupců si tak jednoduše vytvoříme pomocí procent a funkce calc()

Stejně tak se hodí jednotky vh a vw, kde pracujeme s poměrem aktuálního viewportu. 

Flexbox

Další nástroj pro tvorbu reponsivního layoutu už znáte - je o flexbox. Pomocí něj např. zařídíte responsivní galerii obrázků, které se budou zalamovat pod sebe nehledě na velikost obrazovky.
