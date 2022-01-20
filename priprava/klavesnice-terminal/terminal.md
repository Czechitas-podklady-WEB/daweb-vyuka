V této části si ukážeme, jakým způsobem budeme jako programátoři s počítačem komunikovat. Zatím jste nejspíše zvyklí ovládat svůj počítač pomocí různých okýnek, ikonek, grafických čudlíků apod. Takový způsob je ovšem pro programátory mnohdy zbytečně omezující a zdlouhavý. Často je mnohem jednodušší s počítačem komunikovat textově pomocí takzvaného _terminálu_.

## Práce s terminálem

Počítačový terminál je zařízení, které má počátky ve 40. a 50. letech. Tehdy vypadal jako elektrický psací stroj a používal se k posílání textových příkazů do počítače, který byl v těchto dobách velký jako kuchyňská linka. Později terminály získaly obrazovky, podobně jako ten na obrázku z roku 1978, takže už se výsledky počítače nemusely tisknout přímo na papír.

::fig[VT100 Terminál]{src=assets/vt100.jpg}

Možná vám to přijde neuvěřitelné, ale i v době, kdy se nám počítače vejdou do kapsy a máme úžasné grafické dotykové obrazovky, pro programátory je často nejrychlejší a nejpřehlednější zadávat příkazy textově jako na starých terminálech. Jediný rozdíl je dnes v tom, že terminál už není fyzické zařízení. Je to prostě program, který si spustíte na svém počítači, a hned vypadáte jako hackeři z nějakého béčkového filmu.

Můžete se podívat na krátké video, které ukazuje základní práci s termínálem. V následujicím textu pak půjdeme malinko víc do hloubky.

::youtube{uid=uneXj86hOTk}

### Terminál ve VS Code

Visual Studio Code má terminál zabudovaný přímo v sobě. Spustíte jej tak, že ve VS Code v horním menu zvolíte :i[Terminal → New Terminal].

::fig[VS Code Terminál]{src=assets/vscode-term.png}

Okno terminálu po otevření vypadá podobně, jako kdybyste používali skutečný fyzický terminál ze sedmdesátých let. Vidíte v něm velký bílý kurzor a před ním jakýsi kus textu, který ve vašem terminálu nejspíše vypadá jinak než v tom na obrázku.

::fig[Terminál]{src=assets/terminal.png}

Po otevření terminálu se v něm ihned spustí takzvaný _shell_, což je program, který vykonává vaše textové příkazy a vypisuje jejich výsledky. Zde se opět dostáváme trochu do potíží, protože každý operační systém má svůj vlastní shell. To je důvod proč před kurzorem nejspíše vidíte něco jiného než na obrázku. Ve Windows se používá shell jménem _cmd_, na Linuxu máme _bash_, MacOS používal také bash, nedávno ale přesedlal na shell jménem _zsh_. V horní liště mého terminálu vidíte, že můj shell je bash. Mám jej nastavený tak, aby před kurzorem zobrazoval název složky, ve které se zrovna nacházím. Vy tam pravděpodobně máte celou cestu ke složce, ve které se vám terminál otevřel.