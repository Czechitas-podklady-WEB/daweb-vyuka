## Vlastní API server

Téměř každá webová aplikace potřebuje pracovat s nějakými daty na serveru. Abychom takovou aplikaci mohli napsat celou sami, potřebavali bychom umět vyrobit nejen klientskou část, tedy _frontend_, ale i serverovou část, tedy vlastní _backend_. Tvorba vlastního backendu v JavaScriptu je pro zkušené vývojáře běžná záležitost. Do tohoto kurzu se nám ovšem tato látka bohužel nevejde. Backendové programování je samostatná disciplína, která vyžaduje znalost jiných technologií a nástrojů než programování frontendu.

Určitou záchranu nám však poskytne balíček `apidroid`, který používáme pro spuštění lokálního API serveru na vlastním počítači. Zatím jsme data pro `apidroid` vždy měli připravené dopředu. Nyní přišel čas si ukázat, jak si nějakou datovou sadu vytvořit sami.

### Kolekce

Téměř vždy, když vytváříme nějaké API, strukturujeme data do takzvaných :term{cs="kolekcí" en="collections"}. Každá kolekce je v podstatě seznam objektů stejného datového typu. Například:

- kolekce produktů v e-shopu,
- kolekce uživatelů,
- kolekce článků na blogu,
- kolekce zpráv v chatu.

Vzpomeňte si na naše [ukázkové API](https://github.com/Czechitas-podklady-WEB/ukazka-simpsons-api) s postavami ze seriálu Simpsonovi. Toto API obsahuje jednu kolekci postav dostupnou na endpointu `/api/characters`. Všechny objekty v této kolekci mají stejné vlastnosti.

```json
[
  {
    "id": 0,
    "name": "Homer Simpson",
    "gender": "Male",
    "age": 39,
    "occupation": "Safety Inspector at the Springfield Nuclear Power Plant",
    "catchphrase": "D'oh!"
  },
  {
    "id": 2,
    "name": "Marge Simpson",
    "gender": "Female",
    "age": 38,
    "occupation": "Homemaker",
    "catchphrase": "Hmm..."
  }
]
```

Každý prvek kolekce má své jedinečné `id`, které slouží k jeho identifikaci. Pokud se podiváte do samotného repozitáře, uvidíte takovouto strukturu složek a souborů:

```
ukazka-simpsons-api/
├── api/
│   └── characters.json
├── .gitignore
└── README.md
```

Balíček `apidroid` předpokládá, že data pro každou kolekci budou uložena v samostatném JSON souboru ve složce `api`. Pro každou takovou kolekci nám pak automaticky vytvoří endpoint, který bude vracet data na adrese `/api/nazev-kolekce`. Kolekcí můžeme mít ve složce `api` libovolně mnoho.

### Vlastní kolekce

Podle vzoru výše můžeme snadno vytvořit API s vlastní kolekcí. Zkusme například vytvořit kolekci studentů v nějaké škole. Budeme postupovat takto:

1.  Vytvoříme si někde na disku složku `skola`.
1.  V této složce založíme ve složce `api` soubor `studenti.json`.
1.  Do souboru `studenti.json` vložíme několik objektů studentů.
    ```json
    [
      {
        "id": 0,
        "name": "Alice",
        "age": 18,
        "grade": 1
      },
      {
        "id": 1,
        "name": "Barbora",
        "age": 17,
        "grade": 2
      },
      {
        "id": 2,
        "name": "Cyril",
        "age": 18,
        "grade": 3
      },
      {
        "id": 3,
        "name": "David",
        "age": 17,
        "grade": 1
      }
    ]
    ```
1.  Spustíme `apidroid` ve složce `skola`:
    ```bash
    npx apidroid@latest
    ```

Tímto máme k dispozici endpoint `/api/studenti`, který vrací výše uvedená data. Můžeme si je zobrazit v prohlížeči na adrese [http://localhost:4000/api/studenti](http://localhost:4000/api/studenti).

