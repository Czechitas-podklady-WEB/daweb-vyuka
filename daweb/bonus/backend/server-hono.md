## Hono

[Hono](https://hono.dev/) je rychlý webový server pro Node a Deno, založený na webových standardech.

Příklad nejjednoduššího webového serveru:

```javascript
import { Hono } from '@hono/hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello from Hono!'));

export default app;
```
