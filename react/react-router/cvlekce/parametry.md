---
title: URL parametry
demand: 4
---

Vyzkoušejme si práci s URL parametry v naší React Router aplikaci. Podíváme se na to, jak vytvořit detailovou stránku a dostat na ní relevantní data.

1. Vycházejme z podkladů v [repozitáři zde](https://github.com/Czechitas-podklady-WEB/Cviceni-React-Router).
1. Po otevření projektu nezapomeňme na příkazy `npm install` a `npm start`, abychom mohli začít vyvíjet.
1. V souboru `data.js` se podívejme na seznam faktur, jejich strukturu a na funkci `getInvoices`, která je jednoduše vrací. Tu můžeme použít v nějaké komponentě, abychom faktury získali a dále s nimi pracovali.
1. Všimněme si, jak v souboru `Invoices.jsx` importujeme funkci `getInvoices` a jak ji voláme, abychom získali seznam faktur.
1. Použijme proměnnou `invoices` a uvnitř `<nav>` prvku vytvořme seznam odkazů na jednotlivé faktury. Inspirovat se můžeme v lekci [Zobrazování seznamů](https://stage.kodim.cz/kurzy/daweb/react/seznamy/seznamy-v-jsx) nebo v [dokumentaci](https://reactrouter.com/docs/en/v6/getting-started/tutorial#listing-the-invoices). Používat budeme komponentu [Link](https://reactrouter.com/docs/en/v6/components/link).

   ```js
   import { Link } from 'react-router-dom';

   <Link
     style={{ display: 'block', margin: '1rem 0' }}
     to={`/invoices/${invoice.number}`}
     key={invoice.number}
   >
     {invoice.name}
   </Link>;
   ```

1. Vyzkoušejme, že klikání na odkazy faktur na stránce správně mění náš parametr v adresním řádku (například na `http://localhost:8081/invoices/1997`). Na obsahu stránky se zatím nic nemění.
1. Podívejme se do `index.jsx`, jak je naimportována a použita komponenta `Invoice.jsx`. Uvnitř `<Routes>` je připravena chovat se jako stránka detailu a přijímá URL parametr `invoiceId`, se kterým bude umět vnitřně pracovat.
   ```js
   <Route path="invoices" element={<Invoices />}>
     <Route path=":invoiceId" element={<Invoice />} />
   </Route>
   ```
1. Abychom detail jedné faktury viděli na stránce, v souboru `Invoices.jsx` naimportujeme `Outlet` z `react-router-dom`
   ```js
   import { Link, Outlet } from 'react-router-dom';
   ```
   a přidáme ji na konec naší komponenty.
   ```js
         </nav>
      <Outlet />
   </div>
   ```
   Při klikání na jednotlivé odkazy bychom nyní na stránce měli vidět základní statickou šablonu z `Invoice.jsx`.
1. Upravme komponentu `Invoice.jsx` tak, aby uměla číst `invoiceId` z URL paremtrů. Všimněme si, že `invoiceId` se shoduje s tím, co je v `<Route path=":invoiceId" element={<Invoice />} />` zmíněném dříve. `:invoiceId -> params.invoiceId`

   ```js
   import { useParams } from 'react-router-dom';

   export default function Invoice() {
     const params = useParams();
     return <h2>Invoice: {params.invoiceId}</h2>;
   }
   ```

   Při klikání na různé odkazy bychom nyní na stránce měli vidět měnící se `id` faktury.

1. Do souboru `data.js` přidejme funkci, která na zákadě vstupního parametru čísla faktury umí vrátit jednu konkrétní fakturu.
   ```js
   export function getInvoice(number) {
     return invoices.find((invoice) => invoice.number === number);
   }
   ```
   Pro zvědavé, více o funkci `find` nalezneme [zde](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
1. V komponentě `Invoice.jsx` naimportujte tuto funkci a s její pomocí získejte vždy podle `params.invoiceId` jednu konkrétní fakturu k zobrazení. Pro inspiraci, velmi podobné použití již máme v komponentě `Invoices.jsx` s funkcí `getInvoices`. Níže vidíme použití tak, jak by mělo vypadat uvnitř `Invoice.jsx`.
   ```js
   const invoice = getInvoice(parseInt(params.invoiceId, 10));
   ```
1. Upravme JSX tak, aby zobrazovalo získaná data pro konkrétní fakturu. Například takto:
   ```js
   <main style={{ padding: '1rem' }}>
     <h2>Total Due: {invoice.amount}</h2>
     <p>
       {invoice.name}: {invoice.number}
     </p>
     <p>Due Date: {invoice.due}</p>
   </main>
   ```
1. Na stránce bychom nyní měli vidět dynamicky se měnící informace o různých fakturách podle toho, jak klikáme na odkazy a jak se nám mění URL parametr v adresním řádku.

#### Bonus

1. Aplikaci libovolně nastylujme nebo změňme téma z faktur třeba na sbírku filmů či knihovnu.
1. Přidejme zajímavé featury z dokumentace. Například stylování odkazů podle toho, která stránka je zrovna aktivní. S tím nám pomůže komponenta [NavLink](https://reactrouter.com/docs/en/v6/getting-started/tutorial#active-links).
