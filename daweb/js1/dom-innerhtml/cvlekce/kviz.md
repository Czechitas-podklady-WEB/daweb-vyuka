---
title: Kvíz
demand: 2
lead: Oživte kvíz.
solutionAccess: lock
---

Vytvořte si repozitář ze šablony [cviceni-kviz](https://github.com/Czechitas-podklady-WEB/cviceni-kviz). V repozitáři je kostra stránky pro kvízové otázky. Napište JavaScriptový program, který vybere element s třídou `question` a nastaví jeho obsah na nějakou kvízovou otázku, například

> Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.

Použijte funkci `prompt` a zeptejte se uživatele na správnou odpověď. Vyberte element s třídou `answer__text` a nastavte obsah elementu na odpověď od uživatele. Vyberte element s třidou `answer`. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu `answer--correct`. V opačném případě přidejte třídu `answer--wrong`.

:::solution

```js
const questionElm = document.querySelector('.question');
const question =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

questionElm.textContent = question;

const userAnswer = prompt(question);

const answerTextElm = document.querySelector('.answer__text');
answerTextElm.textContent = userAnswer;

const answerElm = document.querySelector('.answer');

if (userAnswer === 'Bell') {
  answerElm.classList.add('answer--correct');
} else {
  answerElm.classList.add('answer--wrong');
}
```

:::
