V této části si ukážeme, jakým způsobem budeme jako programátoři s počítačem komunikovat. Během vývoje budeme velmi často potřebovat poslat operačnímu systému nebo jinému programu nějaký příkaz. Zatím jste nejspíše zvyklí ovládat svůj počítač pomocí okýnek, ikonek, grafických nabídek apod. Kdybychom však měli hledat příkazy v nekonečných nabídkách a panelech, tak bychom se brzo zbláznili. Mnohem jednodušší je napsat příkaz přimo jako text do takzvaného _terminálu_.

## Terminál ve VS Code

Visual Studio Code má terminál zabudovaný přímo v sobě. Spustíte jej tak, že ve VS Code v horním menu zvolíte _Terminal_ → _New Terminal_.

::fig[VS Code Terminál]{src=assets/vscode-term.png}

V okně terminálu vidíte velký bílý kurzor a před ním jakýsi kus textu, který ve vašem terminálu nejspíše vypadá jinak než v tom na obrázku.

::fig[Terminál]{src=assets/terminal.png}

Můj terminál říká, že moje uživatelské jméno je `podlomar` a terminál jsem otevřel ve složce `daweb`. Po otevření terminálu v něm můžete začít psát příkazy. V předchozí lekci jsme nainstalovali program Node.js. Zkusíme zjistit jeho verzi. Do termínálu napište 

```
node --version
```

a stiskněte :kbd[Enter]. Tento příkaz vypíše do terminálu číslo verze programu Node.js. Výstup bude vypadat nějak takto.

::fig[Terminál]{src=assets/node-version.png}

Pokud vidíte vyšší verzi, všechno je v pořádku. Pokud naopak terminál vypsal nějakou jinou hlášku nebo chybu, pravděpodobně se vám nepodařilo programy Node.js a NPM naistalovat správně. Restartuje počítač a zkuste příkaz znovu. Pokud se stále nedaří, pomohou vám kouči nebo lektor naživo přímo v akademii. 

### Dolary

V životě programátora se příkazy dají psát i jinam než přímo do termínálu. Aby bylo jasné, že daný přikaz se má napsat do terminálu, ustálil se mezi programátory zvyk uvozovat takové příkazy znakem dolaru.

```sh
$ node --version
```

Znak dolaru do terminálu **nepíšeme**. Slouží pouze jako informace, že tento příkaz je určen pro terminál. Zkusme ještě zjistit verzi Gitu, který jste také instalovali v předchozí lekci. 

```sh
$ git --version
```

Pokud vidíte číslo verze, můžete jásat.


Po otevření terminálu se v něm ihned spustí takzvaný _shell_, což je program, který vykonává vaše textové příkazy a vypisuje jejich výsledky. Zde se opět dostáváme trochu do potíží, protože každý operační systém má svůj vlastní shell. To je důvod proč před kurzorem nejspíše vidíte něco jiného než na obrázku. Ve Windows se používá shell jménem _cmd_, na Linuxu máme _bash_, MacOS používal také bash, nedávno ale přesedlal na shell jménem _zsh_. V horní liště mého terminálu vidíte, že můj shell je bash. Mám jej nastavený tak, aby před kurzorem zobrazoval název složky, ve které se zrovna nacházím. Vy tam pravděpodobně máte celou cestu ke složce, ve které se vám terminál otevřel.


## Práce s terminálem

Počítačový terminál je zařízení histo, které má počátky ve 40. a 50. letech. Tehdy vypadal jako elektrický psací stroj a používal se k posílání textových příkazů do počítače, který byl v těchto dobách velký jako kuchyňská linka. Později terminály získaly obrazovky, podobně jako ten na obrázku z roku 1978, takže už se výsledky počítače nemusely tisknout přímo na papír.

::fig[VT100 Terminál]{src=assets/vt100.jpg}

Možná vám to přijde neuvěřitelné, ale i v době, kdy se nám počítače vejdou do kapsy a máme úžasné grafické dotykové obrazovky, pro programátory je často nejrychlejší a nejpřehlednější zadávat příkazy textově jako na starých terminálech. Jediný rozdíl je dnes v tom, že terminál už není fyzické zařízení. Je to prostě program, který si spustíte na svém počítači, a hned vypadáte jako hackeři z nějakého béčkového filmu.

Můžete se podívat na krátké video, které ukazuje základní práci s termínálem. V následujicím textu pak půjdeme malinko víc do hloubky.