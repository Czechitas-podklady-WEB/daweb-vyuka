---
title: Chybová stránka
demand: 2
context: cvlekce
---

V naší aplikaci _Nákupy_ budeme chtít ošetřit situaci, kdy uživatel zadá do prohlížeče adresu stránky, která neexistuje. Vytvoříme proto novou stránku zobrazující chybové hlášení.

1. Vyjděte z projektu _Nákupy_ v repozitáři [projekt-nakupy-routing](https://github.com/Czechitas-podklady-WEB/projekt-nakupy-routing).
1. Vytvořte komponentu `ErrorPage`, která zobrazí nějakou hezkou hlášku typu "tato stránka neexistuje".
1. Routovací podmínku v hlavním `index.js` aplikaci rozšiřte o `else` blok a zobrazte v něm vaši chybovou stránku.
1. Vyzkoušejte, že při zadání neexistující adresy a zobrazí vaše nová chybová stránka.
