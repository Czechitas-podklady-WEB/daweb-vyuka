## API a komponenty

V předešlé lekci jsme se naučili používat jednoduché komponenty. Pokud naše aplikace volá nějaké API, je práce s komponentami podobná jako dříve. Jen si musíme dát pozor na to, kde přesně v kódu naše komponenty použijeme.

Pojďme vytvořit komponentu ze cvičení na východ a západ slunce. Bez komponent by náš kód mohl vypadat takto:

```js
const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', () => {
  fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const { sunrise, sunset } = data.results;
      document.querySelector('#sunrise-sunset').innerHTML = `
        <p>Východ slunce: ${sunrise}</p>
        <p>Západ slunce: ${sunset}</p>
      `;
    });
});
```

Všimněte si, jak se zobrazení získaných dat děje až ve chvíli, kdy jsme je teprve obdrželi, tedy ve druhém volání `then`. Informace o východu a západu bychom mohli chtít zobrazovat pomocí komponenty. V separátní složce si tedy vytvoříme komponentu `SunriseSunset`, která by mohla vypadat takto:

```js
export const SunriseSunset = (props) => {
  const { sunrise, sunset } = props;
  return `
    <p>Východ slunce: ${sunrise}</p>
    <p>Západ slunce: ${sunset}</p>
  `;
};
```

Komponentu bychom pak použili takto

```js
import { SunriseSunset } from './SunriseSunset/index.js';

const showBtn = document.querySelector('#show');
showBtn.addEventListener('click', () => {
  fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector('#sunrise-sunset').innerHTML = SunriseSunset({
        sunrise: data.results.sunrise,
        sunset: data.results.sunset,
      });
    });
});
```

Takto se může zdát, že nám komponenta kód spíše zkomplikovala. To je dáno hlavně tím, že jde především o ilustrační příklad. V praxi by komponenta byla složitejší, zobrazovala by data v určtém formátu, její HTML i stylování by bylo bohatší apod.
