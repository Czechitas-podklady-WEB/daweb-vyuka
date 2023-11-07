## Fáze vývoje webové aplikace

V mnoha cvičeních a projektech v tomto kurzu už jste jistě zažili, že i tu úplně nejobyčejnější webovou aplikaci nikdo nezvládne napsat najednou, takříkajíc "z voleje". Vždy je potřeba si práci nějak dopředu rozvrhnout a naplánovat si jednotlivé fáze.

Při vývoji webových aplikaci většinou postupujeme podle následujícího schématu:

1. **Specifikace** – připravíme specifikaci aplikace, což je výčet požadavků, co má aplikace umět plus například wireframy uživatelského rozhraní, základ grafického návrhu apod. Specifikace vzniká na základě anlýzy požadavků zadavatele, což může být náš klient, nebo třeba jenom my sami.
1. **UI/UX design** – připravíme vzhled a uživatelské fungování aplikace. V této fázi se rozhodneme o barvách, typografii, velikosti elementů, UX atd. Výsledkem je návrh, který může být vytvořen v nějakém grafickém editoru, nebo třeba jenom v HTML a CSS.
1. **Návrh architektury** – rozhodneme se, jakou bude naše aplikace mít strukturu, jaké komponenty budeme potřebovat, jaká data budeme ukládat a jakým způsobem je budeme zpracovávat. Výsledkem je návrh architektury aplikace, který může být vytvořen v nějakém nástroji k tomu určeném, nebo může být pro menší projekty jen v naší hlavě.
1. **Implementace** – naprogramujeme aplikaci podle návrhu. Výsledkem je funkční aplikace, která ještě nemusí být plně odladěná.
1. **Testování** – otestujeme aplikaci a odstraníme všechny chyby. Výsledkem je funkční aplikace, která je plně odladěná.
1. **Nasazení** – nahrání aplikace na server, kde bude dostupná pro uživatele.
1. **Údržba** – oprava chyb a přidávání nových funkcí. 

V praxi se tyto fáze často prolínají a některé z nich se mohou opakovat. Například při tvorbě architektury můžeme zjistit, že náš původní návrh není úplně ideální a musíme se vrátit zpět. Nebo při implementaci můžeme zjistit, že náš původní návrh architektury s něčím nepočítal a je potřeba ji upravit nebo úplně předělat. 

Když je aplikace nasazená, každá nová funkce, kterou je potřeba přidat, může procházet všemi výše zmíněnými kroky, podle toho, o jak velkou změnu se jedná.

## Architektura aplikace

V našem případě si při návrhu architektury budeme soustředit na následující body:

1. **Struktura dat** – jaká data budeme potřebovat ukládat a spravovat pomocí našeho API. Výsledkem tohoto bodu mohou být například ukázkové JSON soubory s daty pro `jsonhost`.
1. **Struktura komponent** – jaké komponenty budeme potřebovat a jak budou do sebe zapadat. Zde budeme kreslit diagramy komponent a jejich vztahů.
1. **Datové toky** – jak budou jednotlivé komponenty spolu komunikovat a odkud budou získávat svá data.
