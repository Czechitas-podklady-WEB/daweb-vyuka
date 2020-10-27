import React from 'react';
import { render } from 'react-dom';
import './index.html';

render(
  <>
    <header>
      <h1>React Starter</h1>
    </header>
    <main>
      <p>Moje první React stránka</p>
    </main>
    <footer>Martin Podloucký</footer>
  </>,
  document.querySelector('#app')
);
