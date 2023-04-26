## Databáze

Databáze nám slouží k ukládání dat, která následně můžeme číst, editovat, mazat či různými způsoby filtrovat. Velice časté jsou databáze, se kterými můžeme komunikovat pomocí jazyka SQL. Toto je i případ supabase, které jako svou databázi používá PostgreSQL.

Databáze je strukturována do tabulek. Každá tabulka má svůj název a obsahuje položky jednoho typu.
Každá tabulka obsahuje sloupce, které představují atributy (vlastnosti), které můžeme do tabulky ukládat. Každý sloupec má nastaven svůj datový typ, který do něj může být uložen, zároveň je možné nastavit, zda je vyplnění hodnoty v daném sloupci povinné, nebo zda hodnota ve sloupci může být null. Řádky v tabulce poté představují jednotlivé záznamy.

Jednotlivé tabulky si můžeme představit jako tabulku v Excelu, pokud bychom chtěli v Excelu reprezentovat náš nákupní seznam, mohl by vypadat takto:
::fig[Excel tabulka]{src=assets/excel_db_2.jpg}

Podobným způsobem to můžeme udělat i v supabase. Bude zde rozdíl v tom, že oproti Excelu zde musíme nastavit datové typy jednotlivých sloupců a rozhodnout se, zda mohou hodnoty v jednotlivých sloupcích nabývat hodnoty null.

Poslední, co potřebujeme vědět, je, že databázové tabulky spolu mohou být propojeny pomocí relací, jedná se o provázání informace ve sloupci v nějaké tabulce s nějakým řádkem v tabulce jiné. Provazování tabulek využijeme až v pozdější části lekce.

Přejdeme na záložku **Table editor** a klikneme na tlačítko **Create a new table**. Nastavíme název tabulky na **shopping_item**, prozatím vypneme položku Enable Row Level Security (RLS) (o té si ještě povíme později). A nastavíme jednotlivé sloupce. Takto:
::fig[Sloupce v tabulce]{src=assets/db_cols_2.jpg}

Když máme tabulku vytvořenou, můžeme do ní začít ukládat data a následně je číst, s tím nám pomůže [dokumentace](https://supabase.com/docs/reference/javascript/select).

Zde narazíme na drobný problém, dokumentace supabase ukazuje práci s asynchronními funkcemi jinak, než jsme se učili v rámci našeho kurzu. Tím se ale nenecháme odradit a popíšeme si, jak můžeme kód z dokumentace používat tak, jak jsme zvyklí. V dokumentaci vidíme kód:

```js
const { data, error } = await supabase
  .from('countries')
  .select()
```

Většina metod, se kterými budeme v rámci supabase pracovat, vrací Promise (slib), který již dobře známe z funkce `fetch`. Na slibu jsme zvyklí volat metodu `then`, která přijímá funkci, která se vykoná po naplnění slibu. Výše uvedenou funkci bychom mohli tedy upravit tímto způsobem:

```js
supabase
  .from('countries')
  .select('*')
  .then((response) => {
    const { data, error } = response;
  });
```

Na základě té si můžeme připravit vlastní funkce pro čtení, ukládání a editaci záznamů z databázi. Ve složce `functions` si vytvoříme soubor `db.js` s následujícím obsahem:

```js
import { getSupabase } from './supabase.js';

export const getShoppingItems = () => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').order('created_at');
};

export const getShoppingItemById = (id) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').eq('id', id).single();
};

export const addShoppingItem = (product, amount, unit) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
  });
};

export const updateShoppingItem = (id, done) => {
  const supabase = getSupabase();

  return supabase
    .from('shopping_item')
    .update({
      done: done,
    })
    .eq('id', id);
};
```

Nyní již stačí tyto funkce použít v našem projektu a zajistit překreslování komponent. Jak metody použít lze vidět v repozitáři [projekt-nakupy-supabase](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-supabase), ze kterého budeme vycházet v následujícím cvičení.
