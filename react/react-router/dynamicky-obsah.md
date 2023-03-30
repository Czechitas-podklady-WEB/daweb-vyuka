## Dynamický obsah stránek

Jsou weby, kde si vystačíme s pár stránkami - _Domovská stránka_, _O nás_, _Kontakt_ apod. Tyto stránky si nachystáme v kódu, nastylujeme a máme hotovo. Jednou za pár let možná upravíme naši adresu nebo telefonní číslo.

Stránky jako blogy, zpravodajské weby, e-shopy a další však mívají mnohem složitější strukturu, tísíce článků, produktů, uživatelů a tak dále. Budeme tak potřebovat komponenty, které zobrazují data s databáze například na základě id. Adresy pro jednotlivé faktury za poslední měssíc pak mohou vypadat například takto:

```
/invoices/lastmonth/249857
/invoices/lastmonth/789771
/invoices/lastmonth/934568
```

Samozřejmě nechcem vytvářet speciální routu pro každou takovou stránku. Místo toho využijeme takzvané _URL parametry_.

### URL parametry

Pomocí URL parametru můžeme do URL cesty vložit jakousi proměnnou. Například můžeme říct, že toto je route pro všech faktury.

```
/invoices/lastmonth/:invoiceId
```

Parametr `invoiceId` pak udává, jaké id faktury chceme vytáhnout z databáze. Hodnotu této proměnné můžeme pak v naší komponentě vytáhnout pomocí hooku `useParams`.

```js
cosnt invoices = [
  {
    id: 12759,
    product: "Platba za marketingovou kampaň",
    amount: 5000
  },
  {
    id: 93241,
    product: "Konzultace s odborníkem",
    amount: 3500
  },
  {
    id: 28613,
    product: "Platba za servis PC",
    amount: 2000
  },
  {
    id: 41592,
    product: "Nákup nového zařízení pro kancelář",
    amount: 15000
  },
  {
    id: 75832,
    product: "Výrobu nového produktu",
    amount: 8000
  },
  {
    id: 36248,
    product: "Úpravu webové stránky za účelem zvýšení konverzí",
    amount: 10000
  },
  {
    id: 59483,
    product: "Dodání zboží na sklad",
    amount: 6500
  },
];

export const Invoice = () => {
  const { invoideId } = useParams();
  const invoiceData = invoices.find((inv) => inv.id === invoiceId);
  
  return (
    <div>
      <h3>{invoiceData.product} ({invoideData.invoiceId})</h3>
    </div>
  );
};
```
