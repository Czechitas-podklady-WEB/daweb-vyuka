## Rady od vašeho mentora

Pročtěte si rady, které vám poslal váš mentor a následujte je při tvorbě projektu.

1. Dobře si přečtěte zadání od zákazníka, prohlédněte si požadovaný design stránek a zakoupenou CSS šablonu.
1. Na GitHubu si vytvořte nový repozitář pro váš projekt. Zvolte si, jakým způsobem budete spolupracovat, jestli na jedné větvi nebo párovým programováním. V repozitáři si vytvořte klasickou strukturu react projektu pomocí `init kodim-app`.

Projekt si rozdělíme do několika částí:

1. Hlavní stránka, kterou uvidí návštěvník a API pro hotelové pokoje.
1. Počítání celkové ceny poptávky.
1. API poskytující data pro administraci.
1. Stránka pro administraci, kterou uvidí recepční.
1. Zprovoznění formuáře pro odesílání poptávek.

## Hlavní stránka

1. Pomocí `jsonhost` si vytvořte API s kolekcí pro jednotlivé pokoje. Naplňte tuto kolekci daty a v prohlížeči si ověřte, že API endpoint funguje. Později budeme ještě potřebovat kolekci pro jednotlivé poptávky. Tu si nechte až na později.
1. Pomocí diagramu komponent si rozvhněte, jaké komponenty budete potřebovat pro hlavní stránku, jaké tyto komponenty budou mít stavy, props a datové toky. V diagramu běžte do takových detailů, jak je vám samotným pohodlené.
1. Než se pustíte do vlastního programování, zkonzultujte váš návrh komponent s některým z koučů. Pokuste se mu/jí co nejsrozumitelněji vysvětlit, jak bude vaše stránka fungovat, jak budou komponenty mezi sebou komunikovat. Nechte si poradit, co by se na vašem návrhu dalo zlepšit.
1. Naprogramoujte hlavní stránku tak, aby uživatel viděl seznam pokojů, mohl si rozkliknout detail pokoje vyplnit formulář s poptávkou. Formulář zatím nebude odosílat žádná data, pouze se po stisknutí tlačítka zobrazí potvrzení o úspěšném odeslání. Počítání celkové ceny poptávky vyřešíme v dalším kroku.
1. Dokončete celou hlavní stránku. Až na odesílání formuláře by měla být hotová.

## Celková cena poptávky

Jelikož je potřeba celkovou cenu poptávky spočítat po každé změně stavu, můžete si založit proměnnou přímo v těle komponenty a spočítat do ní výslednou cenu podle toho, co je uloženo ve stavech. Pokud chcete mít výpočet oddělený od komponenty, můžete si vytvořit pomocnou funkci, která bude mít jako parametry stavy a vrátí výslednou cenu.

Pro zjištění ceny je důležité nejprve spočítat počet strávených nocí. K tomu použijte knihovnu [Day.js](https://day.js.org/). Tuto knihovnu už jste mohli vidět na začátku výuky JavaScriptu. Bude potřeba ji do vašeho projektu nainstalovat. V dokumentaci pak najdete [příklady](https://day.js.org/docs/en/display/difference) pro výpočet rozdílu mezi dvěma daty.

## API pro administraci

Než se pustíte do tvorby stránky pro administraci, navhrněte nejdříve API pro kolekci poptávek.

1.  U každé poptávky budeme chtít evidovat v jaké je fázi:

    - `new` - nová poptávka, kterou ještě nikdo nezkontroloval,
    - `confirmed` - poptávka byla přijata,
    - `rejected` - poptávka byla zamítnuta.

    Navhrněte tedy datovou strukturu pro objednávky, kde u každé objednávky budou informace, které zadal návštěvník na hlavní stránce a také informace o tom, v jaké fázi se poptávka nachází.

1.  Server `jsonhost` umí filtrování dat pomocí parametrů v URL. Pokud chceme pouze poptávky ve fázi `new`, napíšeme do URL `filter=phase:eq:new`. Celá adresa tak může vypadat například takto: `http://localhost:4000/api/poptavky?filter=phase:eq:new`. Vytvořte si několik fiktivních poptávek přímo v souboru JSON a vyzkoušejte si, jak funguje filtrování.

## Stránka pro administraci

Nyní si rozmyslete, jak bude fungovat administrace.

1. Nejdříve navhrněte, jak bude vypadat stránka s administrací. Použijte Figmu, tužku a papír, nebo nějaký nástroj pro wireframing, cokoliv co je vám pohodlné. U každé poptávky budeme chtít vidět, jaké informace nám zákazník zadal. Chceme také mít možnost poptávku označit jako vyřízenou nebo zamítnutou.
1. Můžete si nakreslit diagram komponent, ale vhledem k tomu, že jde o jednoduchý vzor zobrazení seznamu, možná jej ani nepotřebujete.
1. Naprogramujte zobrazní poptávek a vyzkoušejte si na vašich testovacích datech, že umíte zobrazit pouze poptávky ve fázi `new`.

Nyní přichází zajímavá část, kdy budeme chtít označovat poptávky jako vyřízené nebo zamítnuté. Při kliknutí na tlačíko pro označení poptávky jako vyřízené nebo zamítnuté je potřeba odeslat na API dotaz PATCH, abychom změnili fázi poptávky, a hned po jeho dokončení znovu načíst filtrovaný seznam poptávek, aby se komponenta zobrazující seznam poptávek překreslila.

Server `jsonhost` používá pro aktualizaci záznamu v kolekci metodu PATCH. Do těla požadavku se vkládá objekt, který popisuje, jak se má záznam změnit. V našem případě chceme změnit pouze fázi poptávky. V těle požadavku tedy pošleme objekt, který bude vypadat například takto:

```json
[
  {
    "op": "replace",
    "path": "/phase",
    "value": "confirmed"
  }
]
```

Naprogramujte označování poptávek a ověřte, že administrace funguje.

## Formulář pro odesílání poptávek

Nyní už vám zbývá poslední krok a to je rozběhat formulář pro odesílání poptávek. Zde stačí přidat do kolekce s optávkami objekt ve správném tvaru – pomocí dotazu POST na API endpoint s poptávkami . POST automaticky přidává nový záznam na konec kolekce, takže se poptávky v administraci zobrazí rovnou v požadovaném pořadí od nejstarších po nejnovější.

V této fázi byste měli mít projekt hotový. Uživatel by měl mít možnost provést poptávku a recepční by měla mít možnost poptávky zobrazit a označit jako vyřízené nebo zamítnuté.
