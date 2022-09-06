## Základní pojmy

Představte si, že jste právě dokončili nějakou ucelenou věc na vašem projektu. Například jste opravili nějakou chybu nebo přidali nějakou funkčnost. V tuto chvíli si chcete udělat jakýsi snímek toho, v jakém stavu se projekt právě teď nachází, abyste se případně do tohoto stavu mohli kdykoliv vrátit. Je to podobné, jako když hrajete počítačovou hru a chcete si ji v nějakém místě uložit, abyste se pak na toto místo mohli vrátit, kdyby vaši postavu později ve hře potkal neblahý osud.

Náš snímek si tedy pamatuje stav celého projektu v určitém čase. V teorii verzování kódu se takovému snímku říká :term{cs="revize" en="revision"}. Git však místo termínu revize používá slovo _commit_, které nemá žádný časký překlad. Toto slovo ale používají naprosto všichni, kdo s Gitem pracují. Budeme jej tedy používat i my.

Ke každému commitu se navíc přidává zpráva o tom, co se v něm dokončilo za práci. Po čase si pak můžeme prohlédnout historii commitů v projektu a přehledně vidět, co se přesně dělo.

::fig[Commity]{src=assets/commits.svg size=80}

Všimněte si, že každý commit obsahuje zprávu a takzvaný :term{cs="digitální otisk" en="hash"}. Tento otisk jednoznačně identifikuje každý commit, abychom se kdykoliv mohli k libovolnému commitu vrátit.
