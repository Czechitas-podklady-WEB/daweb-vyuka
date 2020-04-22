Josef Nováček z Rožnova pod Radhoštěm ještě neabsolvoval žádný kurz Czechitas, ale i přesto se pokusil sestavit jednoduchou interaktivní webovou stránku. Hádáte správně, že se mu moc dobře nevedlo. Chtěl vyrobit malinký skript, který pozdraví uživatele, ale ať to zkoušel jak to zkoušel, vždy měl v kódu nějakou chybu.

Níže vidíte celou řadu pokusů, které neúspěšný Nováček sestavil. V každém je chyba. Zkuste si každý úryvek kódu nejprve prohlédnout a odhadnout, co je špatně; pokud si nebudete vědět rady, můžete jej zkopírovat do souboru a odhalit s výpomocí devtools v prohlížeči.

```html
<button>Klikni sem</button>

<script>
  const pozdrav = () => {
    alert('Ahoj!');
  };

  let tlacitko = document.querySelector('mutton');
  tlacitko.addEventListener('click', pozdrav);
</script>
```

```html
<button>Klikni sem</button>

<script>
  const pozdrav = () => {
    alert('Ahoj!');
  };

  const tlacitko = document.querySelector('button');
  tlacitko.addEventListener('click', pozdrav());
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  alert("Ahoj!");
}

let tlacitko = document.querySelector("button");
tlacitko.removeEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  alert(Ahoj);
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  alert(“Ahoj!”);
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  let mince = Math.floor(Math.random() * 2);
  if (mince = 1) {
    alert("Ahoj!");
  } else {
    alert("Dobry den");
  }
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  let mesic = new Date().getMonth(); // cislovano od nuly
  alert("Ahoj, dnes je " + mesic + 1 + ". mesic roku 2020");
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>
<p class="hidden">Ahoj!</p>
<style> .hidden { display: none } </style>

<script>
function pozdrav() {
  document.querySelector("p").class = "";
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<script>
function pozdrav() {
  alert("Ahoj!");
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>

<button>Klikni sem</button>
```

```
<button id="pozdrav">Klikni sem</button>

<script>
function pozdrav() {
  alert("Ahoj!");
}

let tlacitko = document.getElementById("#pozdrav");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>
<p id="pozdrav"></p>

<script>
function pozdrav() {
  document.querySelector("p").textContent = "Ahoj!";
}

let tlacitko = document.querySelector("#pozdrav");
tlacitko.addEventListener("click", pozdrav);
</script>
```

```
<button>Klikni sem</button>

<script>
function pozdrav() {
  let kolik = Number(prompt("Na kolik procent se dnes citis?"));
  alert("Dnes je to na " + kolik %);
}

let tlacitko = document.querySelector("button");
tlacitko.addEventListener("click", pozdrav);
</script>
```
