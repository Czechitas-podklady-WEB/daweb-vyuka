### Tok stránky

Před tím, než se ponoříme do pozicování, připomeneme si jak se prvky na naší stránce skládají. Pokud jsou prvky **blokové**, zabírají celou šířku stránky. To je například `div`, `article`, `p` nebo `h2`. Prvky **řádkové** (inline) zabírají pouze tolik, kolik je jejich obsah a skládají se vedle sebe. Inline prvky jsou třeba `span`, `a`, nebo `button`. Tomu se říká normální tok stránky (normal flow).  
Často se nám ale stává, že potřebujeme prvky poskládat na stránce jinak. Dříve se k tomu využívaly tabulky a vlastnost float, ale dnes se kromě jiného využívá vlastnost position.

### Page a viewport

Už víme, co je prvek na stránce a co je to tok stránky. Pro pochopení vlastnosti `position` si ještě ujasníme rozdíl mezi **stránkou** (page) a tzv. "průhledem", kterému budeme říkat anglckým výrazem **viewport**.
Stránka je celý náš HTML obsah, který je na dané URL adrese. Viewport je ta část stránky, kterou momentálně vidíme v našem okně.

### CSS vlastnost position

Jak název napovídá, vlastnost `position` nám umožňuje ovlivňovat pozici prvku na stránce. vlastnost position může mít hodnotu: `static`, `relative`, `absolute`, `fixed` a `sticky`.
Vlastnost position nastavujeme tomu prvku, který chceme někam pozicovat (posouvat na ose x a y). Tomu samému prvku také nastavíme, o kolik se má posunout a v jakém směru.     
shora – `top`    
zdola – `bottom`     
zleva – `left`     
zprava – `right`     
Hodnoty těchto vlastností jsou jednotky (pixely, em, rem, vh, etc.)


Ačkoli se to může zdát trochu zavádějící, tak všimněme si, že top neznamená nahoru, a left doleva, ale shora a zleva. Tyto hodnoty nám říkají, o kolik se prvek posune od okraje toho, vůči čemu se pozicuje.

### Static

Hodnota `static` je defaultní nastavení vlastnosti position. Znamená, že se prvky zobrazí v normálním toku stránky.

::codepen{user=marketaanezka id=OJOvMNg tab=html,result}

### Relative

Position relative znamená, že se prvek pozicuje (posouvá shora/zleva/zprava/zdola) od své původní pozice, kterou by měl v normálním toku stránky. Zbytek stránky se nijak neposune, aby vyplnil místo, které se uvolnilo posunutím prvku.
Prvek se tedy pozicuje **vůči své původní pozici.**    
Všimněme si, že prvek je nyní jakoby "nad" obsahem a překrývá ho. To se děje proto, že prvky, které mají jinou pozici, než static, zároveň dostanou možnost mít nastavený `z-index`, který ovlivňuje právě toto chování. Čím vyšší z-index, tím "výš na stránce" nebo "blíž k nám" obsah je.

::codepen{user=marketaanezka id=OJOvMLp tab=html,result}

### Absolute

Prvek s nastavením pozice absolute, **je vyjmutý z toku stránky**. Ostatní prvky vyplní jeho místo.  
Prvek se pozicuje **vůči k rodiči, který je napozicovaný**. Pokud takový prvek není, prvek se pozicuje vůči celé stránce (<body>).

::codepen{user=marketaanezka id=WNXzrGz tab=html,result}      

::codepen{user=marketaanezka id=rNYdxWb tab=html,result}

### Fixed

Prvek s pozicí fixed je také vyjmutý z toku stránky. Pozicuje se **vůči viewportu**.

::codepen{user=marketaanezka id=podLgPx tab=html,result}

::codepen{user=marketaanezka id=bGYvYPW tab=html,result}

### Sticky

Určitě víte, co myslím, když vám připomenu ty otravné reklamy v článku, které i když přes ně scrollujete, "přilepí" se vám k okraji okna a pořád na vás svítí. Přesně takhle se chová pozice sticky. **Pokud je prvek uvnitř viewportu, chová se jako position static** (je v normálním toku stránky). Pokud ale scrollujeme **dál, prvek se "přilepí" a chová se jako position fixed**. Podle toho, jestli nastavíme hodnotu top nebo bottom, se prvek "přilepí" při scrollování nahoru nebo naopak dolů.

::codepen{user=marketaanezka id=rNYdxzg tab=html,result}
