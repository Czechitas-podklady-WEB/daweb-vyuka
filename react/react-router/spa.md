Přestože je možné na internetu potkat weby, které mají pouze jednu stránku, je to spíš výjimka. Takové weby rozhodně mají svůj smysl například jako osobní prezentace nebo stránky pro malé podniky. My s však rozhodně na takové weby omezovat nechceme. Naučímse se proto způsob, jak naši aplikaci rozšířit o další stránky a posunout ji na vyšší úroveň. Přepínání mezi více stránkami se ve webovém žargonu nazývá _routing_.

## Single-page application (SPA)

V souvislosti s Reactem často narazíte na pojem _single page application_ nebo-li _SPA_. To může být dost matoucí pojem, protože SPA rozhodně mohou mít více stránek. Vysvětlení spočívá v tom, že v Reactu děláme přepínání stránek **na frontendu\***. Z hlediska serveru, tedy backendu, máme stránku pouze jednu, a to náš soubor `index.html`. Pro server jde tedy o jednostránkovou aplikaci, nebo-li SPA. My si však v Reactu můžeme stránek vytvořit kolik chceme.

### Výhody a nevýhody

Přístup SPA má velkou výhodu: v tom, že vykreslování stránek se děje na počítači klienta a server tak má méně práce. Výsledkem je rychlejší a hladší navigace mezi stránkami - uživatel nemusí čekat na načítaní každé jednotlivé podstránky ze serveru.

SPA mají ovšem i své nevýhody - například horší možnosti SEO optimalizace, protože celý obsah stránky se vytvoří na klientovi. Server poskytuje pouze "prázdný" `index.html` a některé vyhledávače si pak myslí, že stránka je prázdná. Zároveň první zobrazení stránky může trvat déle, protože se musí počkat, než se načte celý JavaScript.
