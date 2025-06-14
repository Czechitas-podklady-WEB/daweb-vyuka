## Deno

[Deno](https://deno.com) je JavaScript runtime pro běh skriptů napsaných v JavaScriptu (a TypeScriptu) přímo v počítači (mimo prohlížeč).
Umožňuje také spouštět testy, používat JSX, používat mnoho API známých z prohlížečů (např. `fetch`,`JSON`) a také vlastní API (třeba pro práci se soubory).
Deno je moderní a bezpečnější alternativa k Node.js, od stejného autora – vzniklo tak, že si původní autor Node.js po 10 letech řekl: „Kdybych dnes vytvářel Node.js znovu, co bych udělal lépe?“
Deno je zároveň kompatibilní s `node/npm`, jeho kompatibilita se stále zlepšuje a mnoho projektů a knihoven vytvořených původně pro `node` funguje i s Deno.

### Instalace

Postupujte podle návodu na [úvodní stránce Deno](https://deno.com).
Příkaz pro **Windows** je nutné spustit v **PowerShellu** (ne v CMD).

Spouštění skriptů:

```shell
deno run nazev-skriptu.js
```

Pokud má skript provádět operace, které mohou být potenciálně nebezpečné (např. čtení z disku, zápis na disk, síťová komunikace), musí se při spuštění skriptu explicitně povolit:

```shell
deno run --allow-read --allow-write --allow-net nazev-skriptu.js
```

Je možné povolit i přístup jen ke konkrétním souborům, síťovou komunikaci ke konkrétním serverům apod.


### Konfigurace projektu

Místo `package.json`, který používá `npm`, používá Deno vlastní konfigurační soubor `deno.json`.

Příklad `deno.json`:

```json
{
  "tasks": {
    "hello": "deno run hello.js",
    "weather": "deno run --allow-net weather.js",
    "svatky": "deno run --allow-read --allow-write --allow-net svatky.js",
    "hello-serve": "deno serve hello-server.js",
    "serve": "deno serve --watch --unstable-kv server.js"
  },
  "imports": {
    "@hono/hono": "jsr:@hono/hono@^4.7.11",
    "@std/ulid": "jsr:@std/ulid@^1.0.0"
  }
}
```