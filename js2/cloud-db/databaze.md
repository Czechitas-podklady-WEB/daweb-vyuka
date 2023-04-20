## Databáze

Databáze nám slouží k ukládání dat, která následně můžeme číst, editovat, mazat či různými způsoby filtrovat. Velice časté jsou databáze, se kterými můžeme komunikovat pomocí jazyka SQL. Toto je i případ supabase, které jako svou databázi používá PostgreSQL.

Databáze je strukturována do tabulek. Každá tabulka má svůj název a obsahuje položky jednoho typu.
Každá tabulka obsahuje sloupce, které představují atributy (vlastnosti), které můžeme do tabulky ukládat. Každý sloupec má nastaven svůj datový typ, který do něj může být uložen, zároveň je možné nastavit, zda je vyplnění hodnoty v daném sloupci povinné, nebo zda hodnota ve sloupci může být null. Řádky v tabulce poté představují jednotlivé záznamy.

Jednotlivé tabulky si můžeme představit jako tabulku v Excelu, pokud bychom chtěli v Excelu reprezentovat náš nákupní seznam, mohl by vypadat takto:
::fig[Excel tabulka]{src=assets/excel_db.jpg}

Podobným způsobem to můžeme udělat i v supabase. Bude zde rozdíl v tom, že oproti Excelu zde musíme nastavit datové typy jednotlivých sloupců a rozhodnout se, zda mohou hodnoty v jednotlivých sloupcích nabývat hodnoty null.

Poslední, co potřebujeme vědět, je, že databázové tabulky spolu mohou být propojeny pomocí relací, jedná se o provázání informace ve sloupci v nějaké tabulce s nějakým řádkem v tabulce jiné. V našem případě tuto vazbu použijeme ve sloupci pro ID uživatele.

Přejdeme na záložku **Table editor** a klikneme na tlačítko **Create a new table**. Nastavíme název tabulky na **shopping_item**, prozatím vypneme položku Enable Row Level Security (RLS) (o té si ještě povíme později). A nastavíme jednotlivé sloupce. Takto:
::fig[Sloupce v tabulce]{src=assets/db_cols.jpg}

Abychom zajistili provázání položek s uživateli, tak ještě klikneme na ikonu řetězu vedle user_id a nastavíme takto propojení sloupec **id** v tabulce **users** takto:
::fig[Propojení tabulek]{src=assets/db_relation.jpg}

Když máme tabulku vytvořenou, můžeme do ní začít ukládat data a následně je číst, s tím nám opět pomůže [dokumentace](https://supabase.com/docs/reference/javascript/select).
Na základě té si opět připravíme vlastní funkce pro čtení a ukládání dat. Ve složce `functions` si vytvoříme soubor `db.js` s následujícím obsahem:

```js
import { getSupabase } from './supabase.js';

export const getShopingItems = (userId) => {
  const supabase = getSupabase();

  return supabase.from('shopping_item').select('*').eq('user_id', userId);
};

export const addShoppingItem = (product, amount, unit, userId) => {
  const supabase = getSupabase();
  return supabase.from('shopping_item').insert({
    product: product,
    amount: amount,
    unit: unit,
    done: false,
    user_id: userId,
  });
};
```

Nyní již stačí tyto funkce použít v našem projektu a zajistit překreslování komponent. To si vyzkoušíme v následujícím cvičení.
