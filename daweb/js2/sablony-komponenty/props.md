## Props

Zatím jsme viděli komponenty pouze bez parametrů. Často ovšem budeme potřebovat, aby komponenty zobrazovaly nějaká data. Můžeme si představit například hlavičku stránky z předchozí části, kde bychom rádi zobrazili jméno právě přihlášeného uživatele. V JSX to provedeme tak, že komponentě předáme atributy stejně, jako kdybychom je psali do HTML.

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <>
    <Header user="Martin" />
    <main>
      <h1>Ahoj ze světa JSX</h1>
    </main>
    <Footer />
  </>
);
```

Ve funkci `Header` pak tyto atributy obdržíme jako objekt v parametru, který se tradičně pojmenovává `props`. V našem případě tedy jméno uživatele najdeme v `props.user`.

```jsx
const Header = (props) => {
  return (
    <header>
      <a href="/">Domů</a>
      <a href="/nakupy">Nákupy</a>
      <a href="/kalendar">Kalendář</a>
      <p>Přihlášený uživatel: {props.user}</p>
    </header>
  );
};
```

Komponentě samozřejmě můžeme předat kolik atributů chceme. Všechny atributy budou pak uvnitř objektu `props`.

```jsx
const rootElement = document.querySelector('#root');
rootElement.innerHTML += render(
  <>
    <Header user="Martin" title="Hlavní stránka" />
    <main>
      <h1>Ahoj ze světa JSX</h1>
    </main>
    <Footer year={2021} />
  </>
);
```
