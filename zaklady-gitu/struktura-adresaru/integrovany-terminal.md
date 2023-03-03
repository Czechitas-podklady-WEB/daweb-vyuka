## Integrovaný terminál

Kromě toho, že terminál můžete otevírat v samostatném okně, někdy se může hodit ho mít vnořený přímo do okna VS Code. Toho docílíte tak, že v horní nabídce VS Code kliknete na položku `Terminal` a zvolíte `New Terminal`.

::fig[nabídka pro nový terminál]{src=assets/new-terminal.png}

Vnořený/integrovaný terminál by měl vyjet ve spodní části okna VS Code.

::fig[integrovaný terminál]{src=assets/integrated-terminal.png}

### Na co si dávat pozor

- Integrovaných terminálů můžete mít v VS Code více. Pokud v nějakém ze zapomenutých necháte běžet třeba `npx serve`, může vás později potrápit. Jednotlivé terminály můžete zavřít kliknutím na ikonku popelnice. Pozor, že křížek terminály pouze skryje, ale nezavře.
  ::fig[více integrovaných terminálů]{src=assets/vice-integrovanych-terminalu.png}

- Stejně jako u klasické terminálu je potřeba dávat si pozor, v jaké jste složce a případně použít příkaz `cd`.

- Ve Windows může být předvolený jiný profil než `cmd`. Pokud se vám otevírá například `PowerShell` nebo `Git Bash`, je dobré výchozí profil přenastavit.

  ::fig[profil integrovaného terminálu]{src=assets/profil-integrovaneho-terminalu.png}
