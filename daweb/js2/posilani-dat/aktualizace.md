## Aktualizace stránky

Od dob, co jsme začali k tvorbě stránek používat JSX, jsme se nepotkali s žádnou obsluhou událostí. Všechny naše komponenty byly pouze statické. Nyní se k událostem vrátíme a přidáme do našich stránek interaktivitu.

Pro ukázku si vezměme velmi jednoduchou aplikaci, která zobrazuje čas odjezdu vlaku včetně zpozdění.

```jsx
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const odjezd = {
  smer: 'Praha',
  cas: '12:30',
  zpozdeni: 0,
};

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Webová aplikace</h1>
    <div className="departure">
      <div className="departure__direction">{odjezd.smer}</div>
      <div className="departure__time">{odjezd.cas}</div>
      <div className="departure__delay">{odjezd.zpozdeni}</div>
    </div>
    <button id="update-btn">Aktualizovat</button>
  </div>
);

const updateBtn = document.querySelector('#update-btn');
updateBtn.addEventListener('click', () => {
  odjezd.zpozdeni += 5;
  document.querySelector('.departure__delay').textContent = odjezd.zpozdeni;
});
```

Hned po volání funkce `render` na tlačítko přidáváme obsluhu události `click`, kde aktualizujeme obsah elementu `.departure__delay`.

Toto sice působí jako zcela validní přístup, my jej však používat nechceme. Z důvodů, které budou jasnější až v lekcích o Reactu, chceme za všech okolností obsah stránky tvořit pomocí JSX. Všechny změny na stránce tedy budeme provádět tak, že nejprve změníme data a poté znovu vykreslíme celou stránku.

```jsx
const updateBtn = document.querySelector('#update-btn');
updateBtn.addEventListener('click', () => {
  odjezd.zpozdeni += 5;
  window.location.reload();
});
```

Pomocí volání metody `window.location.reload` jsme vynutili obnovení celé stránky, tedy v podstatě totéž, jako bychom udělali refresh stránky v prohlížeči. Tento postup má však zatím zásadní problém. Stránka se znovu načte i s JavaScriptem, tedy i s původními daty. Výsledkem je, že se zpoždění nijak nezmění. Aby tento postup fungoval, museli bychom mít data uložená na serveru a změnit je tam. Tím pádem si při obnovení stránky stáhneme nová data a zobrazíme je již s novým zpožděním. Jak toto udělat si ukážeme v zápětí.
