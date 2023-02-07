## Server

Následující příkaz pro příkazovou řádku spustí na vašem počítači webový server s kořenem v dané složce. Bývá zvykem v této složce mít soubor `index.html`, kde vše začíná. Takto spuštěný server umožní návštěvníkům webu zobrazit pouze obsah uvnitř. Soubory v nadřazených složkách jsou tím pádem v „bezpečí“ i kdyby obsahovaly nějaké vaše tajnosti.

```sh
npx serve
```

Občas se program `npx` ještě dozeptá, jestli si do sebe může doinstalovat rozšiřující balíček `serve`. Otázku odsouhlasíte stisknutím klávesy :kbd[Enter].

```text
Need to install the following packages:
  serve
Ok to proceed? (y)
```

::fig[npx serve]{src=assets/serve.png}

Server poté můžete navštívit na adrese [localhost:3000](http://localhost:3000) ve webovém prohlížeči.

Všimněte si názvu _localhost_, který slouží jako přezdívka vašeho počítače. Na server přes tuto adresu můžete přistoupit jen vy, je lokální/místní.

Důležité je i číslo, port `3000` za dvojtečkou. Na vašem počítači může běžet více než jen jedna aplikace pro server. Pokud například souběžně pustíte v druhé příkazové řádce druhé `npx serve`, nastartuje na jiném portu, aby se adresa netloukla s tou první.

::fig[jiný port]{src=assets/serve-port.png}

V tomto kurzu paralelně více `npx serve` pouštět nebudeme. Může se ale stát, že vám na pozadí zůstane nějaký nepotřebný běžet a bude blokovat to hezké kulaté číslo `3000`. Pro jeho ukončení stiskněte v příslušné příkazové řádce :kbd[Ctrl] + :kbd[C] nebo :kbd[Cmd] + :kbd[C] na Macu. Dokud běží, nejde v dané řádce zadávat další příkazy jako `cd` apod.

## Script s `type="module"`

Při servírování webových stránek přes server, i když lokální, dovoluje prohlížeč používat pokročilejší funkce, které z bezpečnostních důvodů při obyčejném otevření HTML souboru nefungují. Od teď dále používejme HTML základ z minulé lekce se `<script type="module" src="index.js">`.

```html
<!DOCTYPE html>
<html lang="cs">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>První program</title>

		<script type="module" src="index.js"></script>
	</head>
	<body>
		<h1>První program</h1>
	</body>
</html>
```
