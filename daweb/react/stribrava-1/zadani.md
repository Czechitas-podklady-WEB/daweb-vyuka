## Zadání od zákazníka

Vážení vývojáři, jsme moc rádi, že se chcete ujmout našeho projektu. Jsme rodinná firma, která provozuje malý hotel na břehu řeky Stříbravy. Hotel jsme z velmi zanedbaného stavu po původním majiteli vlastními silami zrekonstruovali a potřebovali bychom pro něj webové stránky.

Jelikož jsme většinu financí věnovali do rekonstrukce, můžeme si dovolit pouze jednoduchý web. Na hlavní stránce bychom rádi zveřejnili jednotlivé typy pokojů, které nabízíme. Chceme, aby si návštěvník stránek mohl rozkliknout detail každého pokoje a zobrazit si jeho fotografii, popis a cenu za noc. Poté může vyplnit formulář, ve kterém si vybere počet nocí a počet osob, zda si přeje snídani, polopenzi nebo plnou penzi a zda má nějaké speciální požadavky:

- obytování s domácím mazlíčkem,
- přistýlku pro dítě,
- bezbariérový přístup.

Chtělii bychom, aby návštěvník stránek během vyplňování formuláře viděl, jak se mění celková cena jeho poptávky. Výsledná cena se skládá z:

- cena za pokoj za noc × počet nocí × počet osob,
- cena za snídani/polopenzi/plnou penzi × počet osob × počet dní,
- za přistýlku pro dítě se počítá polovina celkové ceny za pokoj,
- za domácího mazlíčka se počítá čtvrtina celkové ceny za pokoj.

## Administrace

Jelikož nemáme dostatek financí na plnohodnotný rezervační systém, chceme zatím pouze, aby se po odeslání formuláře zobrazilo potvrzení o úspěšném odeslání a naše recepční Andulka se poté s klientem spojí telefonicky nebo e-mailem a domluví se s ním, zda máme zrovna volnou kapacitu.

Z tohoto důvodu bychom chtěli jednoduché administrační rozhraní, které si může naše recepční otevřít a vidět v něm seznam všech poptávek, které nám přišly. Měla by mít možnost v poptávce vidět všechny důležité informace o klientovi a také možnost poptávku označit jako pozitivně či negativně vyřízenou. Stačí nám, když na stránce bude vidět jednoduchý seznam poptávek seřazený od nejstarších po nejnovější.

Jelikož zatím máme pouze jednu recepční, není potřeba, aby admninistrace měla příhlášení. Stránky by však měly jít dobře používat i na mobilních telefonech, aby si naše Andulka mohla poptávky prohlížet i na cestách nebo ve vaně.

## Design a grafika

Přítel naší recepční Roman je talentovaný grafik a navrhl pro nás design hlavní stránky. Návrh vzhledu administrace nám zatím neposlal, ale ten pro nás není tolik důležitý. Hlavní je, aby administrace byla přehledná a funkční. Zároveň nám doporučil zakoupit jednoduchou šablonu, podle které design dělal. Doufáme, že vám takto usnadníme práci na vzhledu stránek.

Design od Romana najdete v repozitáři [stribrava-design](https://github.com/Czechitas-podklady-WEB/stribrava-zadani). My úplně nevíme, co to je repozitář, ale Roman říkal, že vy budete vědět. Zároveň také posílá odkaz na výše zmíněnou [šablonu](https://github.com/Czechitas-podklady-WEB/stribrava-sablona).
