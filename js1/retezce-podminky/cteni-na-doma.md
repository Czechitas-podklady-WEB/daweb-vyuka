## Povinné čtení na doma: Logické operátory

V matematice jsme zvyklí na takzvané aritmetické operátory, tedy plus, mínus apod. Takové operátory obecně vyrábějí z čísel jiná čísla, například

```jscon
> 2 + 3
5
```

Logika má však také své operátory, kterým se (logicky) říká <em>logické operátory</em>. Tyto operátory místo čísel pracují s pravdivostními hodnotami. Můžeme tak použít například operátor `&&`.

```jscon
> true && true
true
> true && false
false
> false && true
false
> false && false
false
```

Tento operátor v podstatě znamená **a zároveň**. Tedy pokud jsou obě hodnoty `true`, výsledek je také `true`. Jinak je výsledek `false`.

Můžeme také použít operátor **nebo** který se píše jako dvě roury `||`.

```jscon
> true || true
true
> true || false
true
> false || true
true
> false || false
false
```

Operátor `||` vrací `true` v případě, že alespoň jedna z hodnot je `true`. Jako poslední máme operátor negace, který se píše jako vykřičník `!`. Ten jen vrací opak zadané pravdivostní hodnoty.

```jscon
> !true
false
> !false
true
```

Tyto logické operátory můžeme s výhodou využít v našich podmínkách. Například bychom mohli chtít zkontrolovat, že věk uživatele je mezi 15 a 18. Chceme tedy logicky říct že věk je :i[větší nebo roven 15] **a zároveň** :i[menší nebo roven 18]. Kombinujeme tak vlastně dva logické výrazy do jednoho.

```js
if (age >= 15 && age <= 18) {
  document.body.innerHTML = '<p>Jsi mladistvým intelektuálem</p>';
}
```

V jiném případě můžeme chtít zkontrolovat, že věk uživatele je menší než 18 nebo větší či roven 65.

```js
if (age < 18 || age >= 65) {
  document.body.innerHTML = '<p>Nemusíš pracovat</p>');
}
```

Tutéž podmínku bychom mohli napsat pomocí negace.

```js
if (!(age >= 18 && age < 65)) {
  document.body.innerHTML = '<p>Nemusíš pracovat</p>');
}
```

Takovýto výraz už je však trochu hůře k přečtení. Logické operátory jsou užiteční pomocníci, v praxi je však dobré s nimi šetřit. Pokud výraz ve vaší podmínce obsahuje více než jeden logický operátor, váš kód se stává těžko čitelným a pochopitelným. Držte se proto při používání logickách operátor pri zemi. Vaši budoucí kolegová vás za to budou mít rádi.

Obzvlášť záludné k porozumění jsou výrazy, které jsou jednou velkou negací složitějšího vnitřního výrazu (proto je také poslední ukázka podstatně méně čitelná než ta předešlá). Ty bychom se vždy měli snažit přepsat na ekvivalentní výrazy bez „obalující“ negace. Za tímto účelem se hodí připomenout si [De Morganovy zákony](https://cs.wikipedia.org/wiki/De_Morganovy_z%C3%A1kony), které sice mohou na první pohled působit složitě, ale ve skutečnosti je jejich použití velmi jednoduché a přirozené.
