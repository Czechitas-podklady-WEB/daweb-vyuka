## Shell příkazy

Pokud pracujete na Windows, možná v horní liště terminálu vidíte název PowerShell. To je nový modernější shell od Microsoftu, my jej však používat nebudeme. Zkuste proto z nabídky vybrat shell jménem cmd.

Nyní můžeme zkusit našemu shellu poslat nějaký příkaz. Nejdříve budeme chtít vidět obsah složky, ve které se právě nacházíme. Pokud jste v shellu cmd, napište do termínálu `dir` a stiskněte :kbd[Enter]. Pokud máte bash nebo zsh, příkaz se jmenuje `ls`. V mém případě vypadá výsledek takto.

::fig[Terminál]{src=assets/terminal-ls.png}

Později v kurzu budeme psát příkazy i jinam než do shellu. Pokud tedy bude potřeba zadat nějaký příkaz přímo v shellu, naznačíme to symbolem dolaru, například takto:

```shell
$ dir
```

Dolar se do shellu nepíše. Z toho důvodu je také barevně odlišen od samotného příkazu. Často také budeme příkazy zobrazovat i s jejich výsledky, které už dolarem nezačínají. To znamená, že je do terminálu nepíšeme, jsou zde vypsány jen pro naši informaci. Výsledek příkazu `ls` pak může vypadat třeba takto.

```shell
$ ls
assets courses courses.json exercises
```

Pozor na to, že `ls` funguje jen v bashi, tedy pouze na Linuxu a MacOS, ve Windows je třeba psát `dir`.