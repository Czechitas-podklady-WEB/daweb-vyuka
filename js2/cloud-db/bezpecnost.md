## Bezpečnost aplikace

V toto chvíli máme klíč pro přístup k databázi uložení v localStorage. My jej budeme chtít přesunout do našeho kódu. Tím ale narazíme na problém, že pokud by nějaký útočník zíkal náš klíč, tak můžu přidávat, upravovat i mazat veškeré položky v naší databázi.

Pro vyřešení našeho problému poskytuje supabase funkci **Row level security**, která umožňuje nastavit přístupová práva k jednotlivým řádkům v tabulce na základě určitých podmínek. Můžeme nastavovat podmínky, na základě kterých může konkrétní uživatel číst, vkládat, upravovat či mazat jednotlivé řádky. Pokud u tabulky aktivujeme **RLS**, dojde k tomu, že se všem uživatelům zakáže vše včetně čtení z tabulky. Následně můžeme začít nastavovat jednotlivé podmínky. Tyto podmínky mohou být v některých aplikacích poměrně komplikované. Pro představu, kdybych například programoval nějaký blog, začal bych nyní nastavovat podmínky asi takto:

1. Všichni návštěvníci mohou číst články, které jsou publikované
1. Všichni návštěvníci mohou číst komentáře u článků, které jsou publikované
1. Přihlášení uživatelé mohou k publikovaným článkům přidávat komentáře
1. Přihlášení uživatelé mohou mazat a upravovat komentáře, které sami vytvořili
1. Přihlášení uživatelé, kteří mají roli administrátor, mohou číst, přidávat, upravovat a mazat všechny články a komentáře

Pro náš nákupní seznam budou podmínky celkem jednoduché, nám zatím stačí povolit, že každý uživatel může číst, upravovat, mazat i přidávat své vlastní položky v nákupním seznamu. K tomu se nám bude hodit relace mezi položkami nákupního seznamu a tabulkou uživatelů, které již máme vytvořeny.

Začneme tím, že u naší tabulky zapneme **Row level security** a následně klikneme na tlačítko **New Policy**
::fig[Zapnutí RLS]{src=assets/rls_zapnuti.jpg}

Následně vybereme možnost **For full customization**

Nyní nastavíme pravidlo, že každý uživatel může přidávat, číst, upravovat a mazat všechny položky, kde souhlasí jeho `id`
::fig[Pravidlo pro plný přístup ke svým záznamům]{src=assets/rls_all.jpg}

Důležitý je zde výraz `auth.uid() = user_id`, který říká, že pro čtení řádku musí být splněna podmínka, že ID přihlášeného uživatele se rovná hodnotě ve sloupci `user_id` na danném řádku.

Nyní když je naše databáze zabezpečená, můžeme klíč přesunout do našeho kódu. Upravíme soubor `supabase.js`:

```js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tgocafisnqldtwrlyort.supabase.co';
const SUPABASE_KEY = 'vas klic';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
```
