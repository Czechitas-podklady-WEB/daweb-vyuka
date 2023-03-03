## Struktura adresářů

Adresáře, neboli složky můžeme procházet, podobně jako to znáte z Windows aplikace _Průzkumník_/_Explorer_ nebo z _Finder_ na Macu, i pomocí příkazové řádky.

### Užitečné termíny

- :term{cs="Stromová struktura" en="tree structure"} popisuje rozložení, zanořování složek do sebe. Složku si můžeme představit jako větev a složky a soubory uvnitř ní jako její menší větvičky.

- :term{cs="Kořen" en="root"} označuje nejhlavnější složku na vašem disku, ve které jsou zanořené všechny ostatní. Kořenová složka se často říká také té, ve které jsou všechny soubory a složky jednoho projektu, jednoho webu typicky se souborem `index.html` na nejvyšší úrovni, v kořeni.

- :term{cs="Cesta" en="path"} je řetězec popisující umístění souboru nebo složky uvnitř stromové struktury. Jednotlivé složky a soubory se oddělují symbolem lomítka `/`. (Windows v některých případech používá i obrácené lomítko `\`, ale nám bude stačit vždy psát to obyčejné.) Například cesta `Plocha/Projekty/JS1/lekce-02/index.html` nám říká, že v aktuální složce máme očekávat podsložku `Plocha`, v ní `Projekty`, dále `JS1`, `lekce-02` a uvnitř `index.html`.

### Příkazová řádka

#### Výpis souborů a složek v aktuální složce

- ##### Mac, Linux

  ```sh
  ls
  ```

- ##### Windows

  ```sh
  dir
  ```

#### Přesun do zanořené složky

- ##### Mac, Linux i Windows

  ```sh
  cd nazev-slozky
  ```

#### Přesun do rodičovské složky

- ##### Mac, Linux i Windows

  (`cd`, mezera a dvě tečky)

  ```sh
  cd ..
  ```

  Příkaz `cd` je možné pouštět vícekrát za sebou nebo skládat delší cesty pomocí lomítek. Například `cd ../../..` vás přesune o tři úrovně výše nebo `cd ../tajne` do složky `tajne`, která je o jednu úroveň výše.

#### Vytvoření další složky

- ##### Mac, Linux i Windows

  ```sh
  mkdir nazev-nove-slozky
  ```

#### Zjištění aktuální složky

- ##### Mac, Linux i Windows

  aneb _print working directory_

  ```sh
  pwd
  ```

#### Otevření textového souboru

- ##### Mac a Linux

  `touch` vytvoří nový soubor, pokud neexistuje.

  ```sh
  touch nazev-souboru.txt
  ```

  `open -e` otevře existující soubor v aplikaci _TextEdit_.

  ```sh
  open -e nazev-souboru.txt
  ```

- ##### Windows

  ```sh
  notepad nazev-souboru.txt
  ```

Pokud soubor `nazev-souboru.txt` neexistuje, příkazem výšeho ho můžete zároveň vytvořit.

### Jazyk Markdown

Abychom aspoň trochu vylepšili uživatelský zážitek z naší textové hry, použijeme jazyk Markdown. Ten umožňuje obyčejné textové soubory obohatit jednoduchým formátováním a přidat odkazy.

Markdown soubor (obvykle má příponu `.md`) tedy může vypadat třeba takhle:

```markdown
# Hlavní nadpis

## První podnadpis

Tady bude první odstavec textu.

Tady je druhý odstavec textu. Může být klidně dlouhý
a zalomený na několik řádek. Ve výsledku z toho pořád
bude jeden odstavec.

Nový odstavec začne prázdným řádkem.

## Druhý podnadpis

V Markdownu můžeme snadno vytvářet odkazy:

[Text odkazu](https://www.czechitas.cz)

Odkaz může být i [uvnitř textu](https://www.czechitas.cz).
```
