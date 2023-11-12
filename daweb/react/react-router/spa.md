Přestože je možné na internetu potkat weby, které mají pouze jednu stránku, je to spíš výjimka. Takové weby rozhodně mají svůj smysl například jako osobní prezentace nebo stránky pro malé podniky. My se však rozhodně na takové weby omezovat nechceme. Naučíme se se proto způsob, jak naši aplikaci rozšířit o další stránky a posunout ji na vyšší úroveň.

## Single-page application (SPA)

Mechanizmus, kterým se rozhodujeme, kterou stránku chceme zobrazit pro jakou URL adresu, se nazývá _routing_. Když jsme vyvíjeli naše první weby v čistém JavaScriptu s pomocí JSX, vždy jsme měli stránky na serveru připravné jako HTML soubory. To znamená, že odeslat tu správnou stránku bylo úkolem serveru. Dělalí jsme tedy takzvaný _server-side routing_.

V Reactu máme však pouze jeden HTML soubor a každá stránka je samostatná komponenta. Rozhodování, kterou komponentu zobrazit, se děje až na klientovi, což nazýváme _client-side routing_. Jelikož z hlediska serveru máme stránku pouze jednu, často se v tomto kontextu mluví o _single page application_ (SPA).

### Výhody a nevýhody

Přístup SPA má velkou výhodu v tom, že vykreslování stránek se děje na počítači klienta a server tak má méně práce. Výsledkem je rychlejší a hladší navigace mezi stránkami - uživatel nemusí čekat na načítaní každé jednotlivé podstránky ze serveru.

SPA mají ovšem i své nevýhody - například horší možnosti SEO optimalizace, protože celý obsah stránky se vytvoří na klientovi. Server poskytuje pouze "prázdný" `index.html` a některé vyhledávače si pak myslí, že stránka je prázdná. Zároveň první zobrazení stránky může trvat déle, protože se musí počkat, než se načte celý JavaScript.

U moderních stránek se tak často používá nějaká kombinace SPA a server-side renderingu (SSR). Takový přístup například volí velmi populární React framework [Next.js](https://nextjs.org/). V tomto kurzu se však SSR zabývat nebudeme a budeme se věnovat pouze SPA.
