## Deno KV

[Deno KV](https://docs.deno.com/deploy/kv/manual/) je key-value databáze, je tedy podobná např. LocalStorage/SessionStorage ve webových prohlížečích.
Podstatné je, že je možné Deno KV používat v rámci Deno Deploy, takže pro ukládání dat již není potřeba žádná další služba nebo server.

Pro lokální vývoj je stále označená jako _unstable_, ale není problém ji používat.
Je však nutné při spuštění skriptu použití Deno KV explicitně povolit příznakem `--unstable-kv`.

Key-value databáze ukládá data jako dvojice klíč-hodnota.
Hledání podle klíčů je rychlé.
Deno KV používá jako klíče JavaScriptová pole.
Následně umožňuje (kromě načtení na základě přesného klíče) vypsat z databáze všechny hodnoty, jejichž klíč začíná uvedeným polem.

Lze si to představit jako ukládání souborů do souborového systému.
Jednotlivé složky a názvy souborů lze uložit jako položky do pole.
Celá cesta k souboru je pak klíčem, podle kterého lze soubor najít.
Deno KV pak navíc umožňuje vypsat obsah složky – tedy všechny soubory, které jsou uložené v dané složce a jejích podsložkách.

Díky tomu je možné ukládat do Deno KV i poměrně složitě strukturovaná data – např. ukládat data jendotlivých uživatelů tak, aby uživatel viděl jen svá data a ne data někoho jiného.
Stačí pro každého uživatele vytvořit jeho vlastní „složku“ a veškeré operace pak provádět jenom v ní.
V Deno KV by to tedy znamenalo na začátek pole, které tvoří klíč, vložit jednoznačný identifikátor uživatele.
(Podmínkou bezpečného přístupu je ale to, že uživatel musí být ověřený, např. heslem.)

Jako hodnoty je možné do Deno KV ukládat běžné JavaScriptové hodnoty (objekty, pole, `string`, `number`, `boolean`, `null` a další).

## Příklad – nákupní seznam

Příklad je jednoduchý webový server napsaný pomocí Hono, který umožňuje ukládat nákupní seznam do Deno KV.
Příklad podporuje základní CRUD operace, tedy **C**reate, **R**ead, **U**pdate a **D**elete.

```javascript
import { Hono } from '@hono/hono';
import { cors } from '@hono/hono/cors';
import { ulid } from '@std/ulid';

const generateId = () => ulid();
const db2item = (entry) => ({ id: entry.key[1], ...entry.value });
const item2db = (item) => {
  delete item.id;
  return item;
};

const kv = await Deno.openKv();

const app = new Hono();
app.use(cors());

app.post('/api/nakupni-seznam', async (c) => {
  const id = generateId();
  const polozka = await c.req.json();
  const result = await kv.set(['nakupni-seznam', id], polozka);
  return c.json(result, 201);
});

app.get('/api/nakupni-seznam/:id', async (c) => {
  const id = c.req.param('id');
  const entry = await kv.get(['nakupni-seznam', id]);
  const result = db2item(entry);
  return c.json(result);
});

app.put('/api/nakupni-seznam/:id', async (c) => {
  const id = c.req.param('id');
  const polozka = await c.req.json();
  const update = item2db(polozka);
  const result = await kv.set(['nakupni-seznam', id], update);
  return c.json(result);
});

app.patch('/api/nakupni-seznam/:id', async (c) => {
  const id = c.req.param('id');
  const polozka = await c.req.json();
  const patch = item2db(polozka);
  const entry = await kv.get(['nakupni-seznam', id]);
  const update = Object.assign(entry.value, patch);
  const result = await kv.set(['nakupni-seznam', id], update);
  return c.json(result);
});

app.delete('/api/nakupni-seznam/:id', async (c) => {
  const id = c.req.param('id');
  await kv.delete(['nakupni-seznam', id]);
  return c.body(null, 204);
});

app.get('/api/nakupni-seznam', async (c) => {
  const entries = kv.list({ prefix: ['nakupni-seznam'] });
  const list = await Array.fromAsync(entries);
  const result = list.map(db2item);
  return c.json(result);
});

export default app;
```
