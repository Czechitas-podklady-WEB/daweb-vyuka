---
title: Poznámka
demand: 3
context: lekce
solutionAccess: protected
---

Umožněte uživateli vyplněním formuláře přidat k filmu vlastní poznámku.

1. V souboru `film.js` pomocí `document.querySelector` najděte prvek s id `note-form`.

1. Při pokusu o odeslání tohoto formuláře zamezte výchozí chování prohlížeče.

1. Ověřte, že uživatel do textového pole, prvku s id `message-input` něco napsal. Pokud ne, přidejte prvku třídu `is-invalid`, která ho zvýrazní červeně.

1. Pokud uživatel něco napsal, ověřte, že souhlasil s podmínkami, že zaškrtl políčko s id `terms-checkbox`. Pokud nezaškrtl, přidejte políčku třídu `is-invalid`

1. Pokud uživatel splnil obě podmínky z kroků výše, nahraďte HTML obsah formuláře za odstavec `<p class="card-text">…</p>` s textem z textového pole.

#### Bonus

Pokud vyživatel něco ve formuláři vynechal, pomozte mu zaměřením příslušného formulářového prvku.

1. V místech, kde přidáváte třídu `is-invalid`, volejte také na formulářovém prvku metodu `.focus()`. Ta například u textového pole přenese kurzor pro psaní rovnou na správné místo, aby uživatel mohl začít psát z klávesnice.

::fig[řešení]{src=assets/reseni.gif}

:::solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/projekt-FilmBox/tree/reseni).

:::
