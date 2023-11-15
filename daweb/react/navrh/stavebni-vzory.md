## Stavební vzory

Pokud při brouzdání po internetu začnete věnovat pozornost tomu, jak jsou jednotlivé webové stránky postavené z hlediska uživatelského rozhraní, po čase si všimnete, že se na většině z nich opakují určité způsoby, jak s uživatelem komunikovat. Na tisíc a jeden způsob uvidíte prvky jako navigaci, zobrazování seznamů položek, vyplňování formulářů, vyskakovací okna a tak dále. Brzy zjistíte, že se tyto prvky v mnoha obměnách stále opakují, jen mají vždy trochu jiný vizuální styl.

Mezi úplně nejzákladnešjí stavební bloky webových stránek patří jednoduché komponenty, na které jsou všichyni uživatelé zvyklí a najdete je ve všemožných UI knihovnách. Jsou to například

- tlačítka,
- formulářové prvky jako textová pole, checkboxy, radio buttony, slider, rozbalovací nabídky atd.,
- karty,
- menu,
- záložky,
- tagy,
- progress bary,
- dialogová okna,
- tooltipy,
- notifikace,
- tabulky,
- ikony, obrázky, animace, atd.

Všechny tyto komponenty uživatelé dobře znají a umí je používat. Používáme je proto, aby se nově příchozí uživatel na stránce rychle zorientoval, rovnou s ní mohl začít pracovat a cítil se na stránce jako doma.

Z těchto elementárních prvků pak skládáme složitější celky, které bychom mohli nazvat _stavební vzory_, protože to jsou určité opakující se postupy jak stavět větší kusy nějaké aplikace. Stavební vzor je v podstatě nějaká kombinace komponent a jejich vzájemná komunikace, která slouží k tomu, aby uživatel mohl na stránce provést nějako ucelenější akci. Může to být například

- navigace mezi stránkami,
- zobrazení seznamu položek,
- označování položek,
- zobrazení detailu položky,
- vyplňování formuláře,
- vytváření nové položky,
- editace a mazání položek,
- zobrazení chybových hlášek,
- krokování a průvodci,
- stránkování,
- multimediální přehrávače,
- mapy,
- a mnoho dalších.

:::warn
Pojem _stavební vzor_ je podobně jako diagramy komponent vymyšlen pouze pro potřeby tohoto kurzu. Programátoři v praxi mají tyto vzory naučané podvědomě za mnoho let zkušeností a nemají pro ně žádné speciální názvy.
:::

Jak postupně webový vývojář získává zkušenosti, tyto vzory se mu dostanou do podvědomí, takzvaně pod kůži, a je schopen je implementovat a používat takřka automaticky. Většinou se také naučí, že již existujé vyzkoušené a osvědčené postupy, jak se tyto vzory implementují například v Reactu, a nemusí tak znova vymýšlet kolo.

V Reactu pro implementaci všech těchto zvorů používáme techniky, které jsme se již naučili, tedy props, stav, efekty, komunikace mezi komponentami a tak dále. V této lekci si ukážeme, jak se tyto techniky použijí pro implementací konkrétních stavebních vzorů. Ukážeme si jen ty nejzákladnější a nejpoužívanější. Pokoušet se popsat všechny vzory by bylo pošetilé a strašlivě nazážívné. Ostatní vzory se nejlépe naučíte postupně sami, jak budete v praxi řešit různé problémy a získávat vlastní zkušenosti.

Ukázky všechny následujícícj probíraných vzorů najdete v repozitáři [ukazka-vzory](https://github.com/Czechitas-podklady-WEB/ukazka-vzory).
