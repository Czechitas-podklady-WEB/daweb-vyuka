Přestože už dokážeme díky komponentám vytvářet vcelku hezké webové stránky, pořád to ještě nejsou opravdové aplikace. Naše komponenty totiž zatím vytvářejí pouze statické HTML a chybí jim interaktivita. V této lekci tuto situaci napravíme tím, že se naučímte vytvářet vlastní DOM elementy.

## Vlastní DOM elementy

Do této chvíle naše programy vždy fungovaly tak, že všechny DOM elementy, se kterými jsme pracovali, byly vybrány ze stránky pomocí `document.querySelector`. Nyní si ukážeme, jak vytvořit DOM element tak říkajíc na zelené louce **mimo** naši stránku. Takto vytvořený element pak můžeme různě opracovávat a zapojit jej do stránky až ve chvíli, kdy je hotový.

Nový DOM element vytvoříme pomocí funkce `document.createElement`. Takto například v konzoli vytvoříme prázdný `h1` element a uložíme si jej do proměnné.

```jscon
> const h1Elm = document.createElement('h1');
```

V tuto chvíli máme vytvořený zcela plnoprávný DOM element, se kterým můžeme dělat všechno, co jsme s DOM elementy byli zvyklí dělat doposud: nastavovat `textContent`, měnit styly, měnit CSS třídy apod.

```jscon
> h1Elm.textContent = 'Nadpis'
> h1Elm.classList.add('title')
```

Důležité je, že tento element není zapojen do naší stránky. Je zatím uložen pouze v proměnné `h1Elm` a na stránce jej tedy není vidět. Pokud jej chceme do stránky vložit, můžeme jej například zapojit na konec nějakého elementu, který už na stránce je.

Mějme například následujicí HTML.

```html
<body>
  <div id="app"></div>
</body>
```

Nyní v konzoli vybereme element `#app` a poté použijeme metodu `appendChild`, která zapojí zadaný element na konec elementu `#app`.

```jscon
> const appElm = document.querySelector('#app');
> appElm.appendChild(h1Elm)
```

Po spuštění těchto příkazů bychom měli na stránce uvidět náš nadpis.

### Obsah vlastních elementů

DOM elementy, které si vytvoříme pomocí `document.createElement` jsou zcela plnohodnotné DOM elementy. Kromě stylů a textového obsahu můžeme taky měnit jejich vnitřní obsah pomocí vlastnosti `innerHTML`. Takto například přidáme složitější obsah do našeho nadpisu.

```jscon
> h1Elm.innerHTML = '<span class="bold">Nadpis</span><span>mojí stránky</span>'
```

Vidíte tedy, že si tak říkajíc na vlasním písečku můžeme vytvářet i velmi složité a obsáhldé DOM elementy a zapojit je do stránky až ve chvíli, kdy je máme správně zkonstruované. Toto se nám bude velmi hodit při vytváření komponent. O tom však až v druhé části.
