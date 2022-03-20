## Povinné čtení na doma

Díky tomu, že už rozumíme polím, si můžeme představit funkci `document.querySelectorAll`. Tato funguje podobně jako už známá funkce `document.querySelector`. Vrátí nám však **všechny** elementy, které najde pomocí zadaného selektoru. Výsledek obdržíme jako pole DOM elementů. To pak můžeme zpracovat pomocí nějakého cyklu.

V lekci o událostech jsme si slíbili, že díky cyklům dokážeme zjednodušít kód naší aplikace se smajlíky. Připomeňme si HTML kód našich tlačítek.

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
	event.target.classList.add('btn-smiley--selected')
}

document.querySelector('#btn1').addEventListener('click', selectSmiley)
document.querySelector('#btn2').addEventListener('click', selectSmiley)
document.querySelector('#btn3').addEventListener('click', selectSmiley)
document.querySelector('#btn4').addEventListener('click', selectSmiley)
document.querySelector('#btn5').addEventListener('click', selectSmiley)
```

Všimněte si, že kód pro nasazení posluchače na událost `click` jsme museli opakovat pětkrát. Díky `document.querySelectorAll` můžeme nyní posluchače nasadit na všechna tlačítka jedním cyklem.

```js
const selectSmiley = (event) => {
	event.target.classList.add('btn-smiley--selected')
}

const buttons = document.querySelectorAll('.btn-smiley')
for (let i = 0; i < buttons.length; i += 1) {
	buttons[i].addEventListener('click', selectSmiley)
}
```

<!-- ### Datové atributy

Všimněte si, že funkce `btnClick` používá `textContent` k tomu, aby získala číslo, které má tlačítko vlažit na displej. Snadno bychom se však mohli ocitnout v situaci, kdy by naše tlačítka neobsahovala ten správný `textContent`. Například bychom mohli chtít mít tlačítka jako obrázky, které žádný `textContent` nemají. I tak bychom si ale potřebovali někam uložit cifru, která k tlačítku patří. K tomu můžeme použít takzvané datové atributy.

Do jakéhokoliv HTML elementu můžeme přídat libovolný atribut, jehož jméno začíná předponou `data-`. Cifry si tak můžeme uložit například do atributu `data-digit`.

```html
<div class="numpad">
  <div class="display">0</div>
  <img id="btn7" data-digit="7" class="num-btn" src="img/digit7.png" />
  <img id="btn8" data-digit="8" class="num-btn" src="img/digit8.png" />
  <img id="btn9" data-digit="9" class="num-btn" src="img/digit9.png" />
  <img id="btn4" data-digit="4" class="num-btn" src="img/digit4.png" />
  <img id="btn5" data-digit="5" class="num-btn" src="img/digit5.png" />
  <img id="btn6" data-digit="6" class="num-btn" src="img/digit6.png" />
  <img id="btn1" data-digit="1" class="num-btn" src="img/digit1.png" />
  <img id="btn2" data-digit="2" class="num-btn" src="img/digit2.png" />
  <img id="btn3" data-digit="3" class="num-btn" src="img/digit3.png" />
  <img
    id="btn0"
    data-digit="0"
    class="num-btn num-btn--wide"
    src="img/digit0.png"
  />
</div>
```

K datovým atributům se pak v JavaScriptu snadno dostaneme pomocí vlastnosti `dataset`. Funkci `btnClick` bychom tak mohli přepsat takto.

```js
const btnClick = (event) => {
  const displayElm = document.querySelector('.display');
  displayElm.textContent += event.target.dataset.digit;
};
```

Pomocí datových atributů si můžeme k elementům uložit libovolné informace, se kterými pak můžeme v JavaScriptu snadno pracovat. -->
