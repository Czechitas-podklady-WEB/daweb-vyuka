## Autentizace

Téměř každá webová aplikace implementuje nějakou formu správy uživatelů, aby měl každý uživatel svůje vlastní data oddělená od ostatních uživatelů. Pokud chce uživatel přistoupit ke svým datům, musí prokázat, že je to skutečně on. Tomuto prokazování se odborně říká :term{cs="autentizace" en="authentication"}. 

Autentizace ve většině případá probíhá tak, že uživatel pošele na speciální API endpoint v aplikaci svoj uživatelské jméno a heslo. Backend pak ověří, zda jde o správné heslo pro daného uživatele. Pokud ano, tento endpoint vrátí takzvaný *autentizační token*, což je náhodně vypadající řetězec čísel a písmenek. 
