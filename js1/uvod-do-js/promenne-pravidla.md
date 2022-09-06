## Pravidla pro práci s proměnnými

Při práci s proměnnými je dobré dodržovat určitá pravidla.

### Preferujte const

Proměnné vytvořené pomocí `const` měnit nelze. U dobrých programátorů je zvykem vytvářet proměnné téměř výhradně pomocí `const` a používat `let` pouze v případě, že k tomu máme dobrý důvod. Čím méně proměnných lze měnit, tím menší je totiž riziko vzniku nežádoucích chyb v programu.

### Pojmenování proměnných

Už od úplných začátků s programováním je dobré učit se dobrým návykům, které budou později prospěšné nejen vám, ale hlavně lidem ve vašem okolí. Jedním z takových návyků je správné pojmenovávání proměnných.

1. Název proměnné by neměl začínat velkým písmenem, např. ~~:var[Pocet]~~. Takové názvy jsou rezervované pro speciální typy proměnných, ke kterým se v tomto kurzu dostaneme až téměř na konci.
1. Název proměnné by neměl obsahovat diakritiku, např. ~~:var[počet]~~. Programovací jazyky vznikaly v anglickém prostředí, kde se diakritika nepoužívá, takže si s ní většina jazyků neporadí.
1. Víceslovné proměnné nesmí obsahovat mezeru, např. ~~:var[pocet hodin]~~. To by si JavaScript myslel, že to jsou dvě proměnné za sebou a nevěděl by co s tím. Pokud chcete proměnnou s více slovy, použijte takzvanou :term{cs="velbloudí notaci" en="camel case"} :var[pocetHodin] nebo :term{cs="hadí notaci" en="snake case"} :var[pocet_hodin].
1. Vždy proměnnou pojmenujte tak, aby její název jasně napovídal, co se uvnitř ní nachází. Například proměnná :var[pocet_hodin] jasně říká, že v ní bude uložen asi nějaký počet hodin. Můžeme podlehnout touze název proměnné zkrátit například na :var[pcthdn], aby se nám lépe psala. Až ovšem někdo další bude takový program číst, bude mlátit hlavou do stolu, cože proboha znamená zkratka :var[pcthdn].
1. Naposledy je dobré si uvědomit, že programy i programátoři se téměř vždy pohybují v mezinárodním prostředí. Takže je vždycky lepší pojmenovávat proměnné anglicky. V tomto kurzu ještě tohle pravidlo trošku rozvolníme, ale i tak si můžete začít zvykat na proměnné s názvem :var[number_of_hours].
