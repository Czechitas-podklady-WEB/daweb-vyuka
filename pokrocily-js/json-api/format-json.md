## Formát JSON

Podle většiny moderních doporučení je lepší v JavaScriptu používat v řetězcích jednoduché uvozovky. V počátcích JavaScriptu však bylo běžné používat spíše dvojité. Pokud v našich objektech schválně uzavřeme všechny klíče a řetězce do dvojitých uvozovek i tam, kde by to jinak nebylo potřeba, dostaneme reprezentaci zapsanou takto.

```json
const course = {
  "nazev": "Úvod do programování",
  "lektor": "Martin Podloucký",
  "konani": [
    {
      "misto": "T-Mobile",
      "koucove": ["Dan Vrátil", "Filip Kopecký", "Martina Nemčoková"],
      "ucastnic": 30,
    },
    {
      "misto": "MSD IT",
      "koucove": ["Dan Vrátil", "Zuzana Tučková", "Martina Nemčoková"],
      "ucastnic": 25,
    },
    {
      "misto": "Škoda DigiLab",
      "koucove": ["Dan Vrátil", "Filip Kopecký", "Kateřina Kalášková"],
      "ucastnic": 41,
    },
  ],
};
```

Toto je z hlediska JavaScriptu naprosto korektní zápis. Vznikne tak zcela stejný objekt, jak ten, který by vznikl bez použití uvozovek kolem klíčů. Tento způsob zápisu má své speciální jméno - _JavaScript Object Notation_, nebo-li _JSON_. Za dobu existence JavaScriptu se tento zápis rozšířil po celém internetu natolik, že dnes jde o nejpoužívanější formát pro výměnu dat mezi aplikacemi. Pokud si budeme chtít stáhnout data z nějakého serveru, dostaneme je většinou právě ve formátu JSON.
