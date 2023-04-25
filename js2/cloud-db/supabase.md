Jen málo webových aplikací je čistě frontendových. Většina aplikací potřebuje minimálně nějaké úložiště dat. Rozjíždět vlastní databázový server však není pro začátečníka jednoduchá věc. Naštěstí existují volně dostupná cloudová řešení, která vám kromě úložiště dat umožní také komunikaci přes API. Taková kombinace už nám stačí k vytvoření zcela profesionální aplikace.

## Supabase

My se v rámci dnešní lekce podíváme na službu [Supabase](https://supabase.com), která může vašemu projektu poskytnou velké množství funkcí. My se dnes podíváme na autentizaci a práci s databází. Velkou výhodou supabase je, že má velice přehlednou dokumentaci a pro JavaScript poskytuje NPM knihovnu, která nám zjednoduší většinu práce.

Pro začátek je potřeba se ve službě [zaregistrovat](https://app.supabase.com/sign-up), pro urychlení registrace můžete využít i svůj účet na GitHubu. Po dokončení registrace si založíme svůj první projekt kliknutím na tlačítko **New Project**, nyní stačí zadat název projektu, nastavit heslo do databáze a vybrat region, který by měl být co nejblíže uživatelům naší aplikace.

::fig[Nový projekt]{src=assets/new_project.jpg}

Po založení projektu se dostaneme na stránku, na které nás bude později zajímat **URL** našeho projektu a veřejný **API klíč**.

::fig[Údaje projektu]{src=assets/url_api_key.jpg}

K zapojení supabase do našeho projektu nám pomůže [dokumentace pro JavaScript](https://supabase.com/docs/reference/javascript/installing), ve které se dozvíme vše potřebné. Začneme instalací balíčku pomocí:

```sh
$ npm install @supabase/supabase-js
```

Dále si ve složce src našeho projektu založíme složku **functions** a v ní vytvoříme soubor **supabase.js** s následujícím obsahem:

```js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = '';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, localStorage.getItem('key'));
};
```

V kódu pouze doplníme hodnotu SUPABASE_URL. Klíč si po spuštění projektu uložíme do localStorage našeho prohlížeče. V pozdější části lekce si ukážeme, že to lze i jinak.

Nyní máme připravenou funkci, která nám vrací supabase klient. Jelikož tuto funkci exportujeme, tak ji můžeme importovat kdekoliv v rámci našeho projektu a dále s tímto klientem pracovat. Jak s klientem pracovat si ukážeme hned v další části, kde se podíváme na možnost, jak využít supabase pro práci s databází.
