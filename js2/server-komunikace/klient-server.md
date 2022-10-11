Před tím, než se pustíme do hlubin komunikace se serverem, ukážeme si základní principy, na kterých je postavená technologie World Wide Web (www).

## Klient/Server

Pojmem World Wide Web rozumíme tu část internetu, která se stará o provoz a fungování webových stránek. Na ty přistupujeme pomocí webového prohlížeče jako Chrome, Firefox, Edge a další. Náš počítač vybaven prohlížečem se pak nazývá :term{cs=klient en=client}.

Když do prohlížeče napíšeme URL nějaké stránky, například `https://kodim.cz`, prohlížeč v internetové síti najde adresu počítače, který stránku poskytuje. Takovému počítači říkáme _server_. Pojem server je však malinko přetížený a používá se pro označení dvou různých věcí. 

1. **Fyzický server** je skutečný počítač stojící ve velké serverové místnosti někde v datovém centru. Například fyzický server těchto stránek leží ve Frankfurtu nad Mohanem. 
1. **Softwarový server** je program, který běží na fyzickém serveru, poskytující nějakou webovou stránku nebo službu. Na fyzickém serveru většinou běží mnoho software serverů. 

Příkladem softwarového serveru je například program `serve`, který spouštíte pomocí `npx serve`. Ten rozeběhne softwarový server, který servíruje vámi vyvíjenou stránku pouze pro vás na vašem vlastním počítači. 

## Požadavky

Prohlížeč obsah stránky získá tak, že na server posílá takzvané :term{cs=požadavky en=requests}. Prohlížečem odeslané požadavky můžeme sledovat v developer tools v záložce :i[Network], Pokud například otevřete stránku [kodim.cz](https://kodim.cz) uvidíte v této záložce seznam požadavků jako na obrázku.

::fig{src=assets/pozadavky.png}

Vidíme, že k plnému načtení stránky bylo potřeba celkem 23 požadavků. Na základě každého požadavku obdrží klient od serveru :term{cs=odpověď en=response} obsahující nějaký typ dat. Získáme tak postupně 

- HTML stránky (typ document),
- CSS styly (typ stylesheet),
- JavaScript (typ script),
- obrázky a icony (typy svg+xml, png),
- fonty (typ font).

U všech odpovědí vidíme status s číslem 200, což v řeči HTTP znamená "všechno v pořádku". Další běžné kódy jsou

- 304: obsah na serveru se nezměnil, prohlížeč použije cache
- 404: tady žádný obsah není
