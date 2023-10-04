## `querySelectorAll` a `forEach`

### document.querySelectorAll

Díky tomu, že už rozumíme polím a metodě `forEach`, si můžeme představit funkci `document.querySelectorAll`. Ta funguje podobně jako už známá funkce `document.querySelector`. Vrátí však **všechny** elementy, které najde pomocí zadaného selektoru. Výsledek obdržíme jako pole DOM elementů. To pak můžeme zpracovat pomocí metody `forEach`.

V lekci o událostech jsme si slíbili, že dokážeme zjednodušít kód naší aplikace se smajlíky. Připomeňme si HTML kód našich tlačítek.

```html
<button id="btn-smiley1" class="btn-smiley">😀</button>
<button id="btn-smiley2" class="btn-smiley">😍</button>
<button id="btn-smiley3" class="btn-smiley">😜</button>
<button id="btn-smiley4" class="btn-smiley">😢</button>
<button id="btn-smiley5" class="btn-smiley">😱</button>
```

Náš výsledný učesaný JavaScriptový kód vypadal takto.

```js
const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

document.querySelector('#btn1').addEventListener('click', selectSmiley);
document.querySelector('#btn2').addEventListener('click', selectSmiley);
document.querySelector('#btn3').addEventListener('click', selectSmiley);
document.querySelector('#btn4').addEventListener('click', selectSmiley);
document.querySelector('#btn5').addEventListener('click', selectSmiley);
```

Všimněte si, že kód pro nasazení posluchače na událost `click` jsme museli opakovat pětkrát. Díky `document.querySelectorAll` můžeme nyní posluchače nasadit na všechna tlačítka jedním cyklem.

```js
const selectSmiley = (event) => {
  event.target.classList.add('btn-smiley--selected');
};

const buttons = document.querySelectorAll('.btn-smiley');
buttons.forEach((button) => {
  button.addEventListener('click', selectSmiley);
});
```
