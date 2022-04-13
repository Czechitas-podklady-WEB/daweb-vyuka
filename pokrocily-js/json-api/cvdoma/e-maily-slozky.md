---
title: E-maily, složky
demand: 3
---

Do naší e-mailové aplikace si e-maily stáhneme pomocí API a zobrazíme dvě oddělné sekce: přečtené zprávy a nepřečtené zprávy. 

1. Prohlédněte si dokumentaci k [e-mailovému API](https://apps.kodim.cz/daweb/trening-api/docs/e-mailove-api). V prohlížeči si vyzkoušejte jak API funguje.
1. Upravte vaši aplikaci tak, aby zatím zobrazovala pouze nepřečtené e-maily získané z API. 
1. Nyní v projektu vytvořte novou komponentu `EmailsFolder`. Ta bude sloužit k zobrazení sekce přečtené nebo nepřečtené zprávy. Její `props` budou mít tento tvar:
   ```js
   {
     folderTitle: 'Nepřečtené',
     emails: [
       // pole emailů získané z API
     ]
   }
   ```
   Komponenta vytvoří HTML nezbytné pro zobrazení jedné sekce.
1. Použijte komponentu `EmailsFolder` k zobrazení sekce s nepřečtenými zprávami. 
1. Ve vašem programu si kromě nepřečtených zpráv stáhněte také přečtené zprávy. Ty na stránce zobrazte pomocí komponenty `EmailsFolder` jako druhou sekci. 
