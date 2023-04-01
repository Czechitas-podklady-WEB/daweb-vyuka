---
title: Dovednosti
demand: 2
---

Vytvořte si repozitář ze šablony [cviceni-dovednosti](https://github.com/Czechitas-podklady-WEB/cviceni-dovednosti).
V repozitáři najdete zdrojové soubory stránky se třemi posuvníky.
Ty ukazují úroveň dovedností v různých oblastech.

1. Doplňte do stránky JavaScriptový program, který pomocí funkce `prompt` požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.
1. Na samém začátku vašeho programu vytvořte funkci `updateSkill`, která bere dva vstupy: textový řetězec představující `id` elementu a číslo mezi 0–100. Tato funkce při zavolání nastaví posuvník se zadaným `id` na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.

---solution

```js
const updateSkill = (id, uroven) => {
  const postup = document.querySelector(`#${id} .skill__progress`);
  const hodnota = document.querySelector(`#${id} .skill__value`);
  hodnota.textContent = `${uroven} / 100`;
  postup.style.width = `${uroven}%`;
};

const html = Number(prompt('Jaká je vaše úroveň HTML? (0 až 100)'));
const css = Number(prompt('Jaká je vaše úroveň CSS? (0 až 100)'));
const js = Number(prompt('Jaká je vaše úroveň JavaScriptu? (0 až 100)'));

updateSkill('skill1', html);
updateSkill('skill2', css);
updateSkill('skill3', js);
```

Alternativa funkce updateSkill, která najde `div` podle `id` a pak hledá elementy s třídou `skill__progress` a `skill__value` v nalezeném elementu:

```js
const updateSkill = (id, uroven) => {
  const skillElement = document.getElementById(id)
  const progressElement = skillElement.querySelector('.skill__progress');
  const valueElement = skillElement.querySelector('.skill__value');
  valueElement.textContent = `${uroven} / 100`;
  progressElement.style.width = `${uroven}%`;
};
```