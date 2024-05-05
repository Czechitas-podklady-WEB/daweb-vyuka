## Komponenty

Abychom dokázali stavět větší aplikace a vyznali se v jejich kódu, bude se nám hodit rozdělit si vytváření obsahu stránky do menších funkcí. Představme si například hlavičku stránky s odkazy. Můžeme ji do stránky samozřejmě vložit takto:

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <header>
    <a href="/">Domů</a>
    <a href="/nakupy">Nákupy</a>
    <a href="/kalendar">Kalendář</a>
  </header>
);
```

Do budoucna se nám však vyplatí vytvořit si pro tuto hlavičku samostatnou funkci. Nazveme ji `Header` a napíšeme ji tak, aby vracela JSX.

```jsx
const Header = () => {
  return (
    <header>
      <a href="/">Domů</a>
      <a href="/nakupy">Nákupy</a>
      <a href="/kalendar">Kalendář</a>
    </header>
  );
};
```

Tuto funkci pak můžeme použít při vytváření obsahu stránky. K tomu si však potřebujeme ukázat skládání komponent v JSX.

## Skládání komponent

Pojďme si pro cvik vytvořit ještě komponentu `Footer`, která bude představovat patičku stránky.

```jsx
const Footer = () => {
  return (
    <footer>
      <p>© 2024 Czechitas, z. ú.</p>
    </footer>
  );
};
```

Kdybychom chtěli vytvořit kompletní stránku, mohli bychom ji napsat takto:

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(Header());
rootElement.innerHTML += render(
  <main>
    <h1>Ahoj ze světa JSX</h1>
  </main>
);
rootElement.innerHTML += render(Footer());
```

Zde ale objevíme superschopnost JSX, která umožňuje používat námi vytvořené komponenty přímo na místě HTML značek. Naši aplikaci tak můžeme přepsat následovně:

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <div>
    <Header />
    <main>
      <h1>Ahoj ze světa JSX</h1>
    </main>
    <Footer />
  </div>
);
```

## Fragmenty

Na JSX je nešikovná jedna věc: JSX hodnota musí byt vždy jedna ucelená značka. Nemůžeme tak napsat něco jako:

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <Header />
  <main>
    <h1>Ahoj ze světa JSX</h1>
  </main>
  <Footer />
);
```

Z tohoto důvodu jsme měli v předchozím úryvku kódu obsah zabalený do – v podstatě zbytečného – `div`. Toto je v praxi tak častá situace, že JSX nabízí speciální typ značky zvaný _fragment_. Je to značka, která se ve výsledném HTML neobjeví, ale slouží pouze k tomu, aby obalila více značek a vytvořila tak jednu ucelenou hodnotu.

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <>
    <Header />
    <main>
      <h1>Ahoj ze světa JSX</h1>
    </main>
    <Footer />
  </>
);
```
