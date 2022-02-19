## Formát JSON

Podle většiny moderních doporučení je lepší v JavaScriptu používat v řetězcích jednoduché uvozovky. V počátcích JavaScriptu však bylo běžné používat spíše dvojité. Pokud v našich objektech schválně uzavřeme všechny klíče a řetězce do dvojitých uvozovek i tam, kde by to jinak nebylo potřeba, dostaneme reprezentaci zapsanou takto.

<!-- prettier-ignore-start -->
```js
const row = {
  "name": {
    "first": "Petr",
    "last": "Bílek"
  },
  "product": {
    "name": "Prací prášek",
    "amount": 1.5,
    "unit": "kg"
  },
  "price": 240
};
```
<!-- prettier-ignore-end -->

Toto je z hlediska JavaSriptu naprosto korektní zápis. Vznikne tak zcela stejný objekt, jak ten, který by vznikl bez použití uvozovek kolem klíčů. Tento způsob zápisu má své speciální jméno - :i[JavaScript Object Notation], nebo-li :i[JSON]. Za dobu existence JavaScriptu se tento zápis rozšířil po celém internetu a dnes jde o nejpoužívanější formát pro výměnu dat mezi aplikacemi. Pokud si budeme chtít stáhnout data z nějakého serveru, dostaneme je většinou právě ve formátu JSON.
