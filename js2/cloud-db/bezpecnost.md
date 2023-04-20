## Bezpečnost aplikace

V tuto chvíli naše aplikace není vůbec zabezpečená, jelikož máme náš klíč v souboru `functions/supabase.js` a tento klíč bude i po zabalení webpackem veřejně přístupný v souboru `bundle.js`. Pokud by nějaký útočník nalezl náš klíč, může si napsat script, pomocí kterého například smaže všechny záznamy v databázi.

Pro vyřešení našeho problému poskytuje supabase funkci **Row level security**, která umožňuje nastavit přístupová práva k jednotlivým řádkům v tabulce na základě určitých podmínek. Můžeme nastavovat podmínky, na základě kterých může konkrétní uživatel číst, vkládat, upravovat či mazat jednotlivé řádky. Pokud u tabulky aktivujeme **RLS**, dojde k tomu, že se všem uživatelům zakáže vše včetně čtení z tabulky. Následně můžeme začít nastavovat jednotlivé podmínky. Tyto podmínky mohou být v některých aplikacích poměrně komplikované. Pro představu, kdybych například programoval nějaký blog, začal bych nyní nastavovat podmínky asi takto:

1. Všichni návštěvníci mohou číst články, které jsou publikované
1. Všichni návštěvníci mohou číst komentáře u článků, které jsou publikované
1. Přihlášení uživatelé mohou k publikovaným článkům přidávat komentáře
1. Přihlášení uživatelé mohou mazat a upravovat komentáře, které sami vytvořili
1. Přihlášení uživatelé, kteří mají roli administrátor, mohou číst, přidávat, upravovat a mazat všechny články a komentáře

Pro náš nákupní seznam budou podmínky celkem jednoduché, nám zatím stačí povolit, že každý uživatel může přidávat a číst své vlastní položky v nákupním seznamu. K tomu se nám bude hodit relace mezi položkami nákupního seznamu a tabulkou uživatelů, které již máme vytvořeny.

Začneme tím, že u naší tabulky zapneme **Row level security** a následně klikneme na tlačítko **New Policy**
::fig[Zapnutí RLS]{src=assets/rls_zapnuti.jpg}

Následně vybereme možnost **For full customization**

Nyní nastavíme pravidlo, že každý uživatel může číst všechny položky, které on sám přidal
::fig[RLS pravidlo pro čtení]{src=assets/rls_select.jpg}

Důležitý je zde výraz `auth.uid() = user_id`, který říká, že pro čtení řádku musí být splněna podmínka, že ID přihlášeného uživatele se rovná hodnotě ve sloupci `user_id` na danném řádku.

Obdobným způsobem nastavíme i pravidlo pro přidávání položek:
::fig[RLS pravidlo pro zápis]{src=assets/rls_insert.jpg}

Pozor, pokud budeme chtít v budoucnu naši aplikaci rozšířit tak, aby uživatel mohl své položky upravovat nebo mazat, musíme zde přidat další pravidla.
