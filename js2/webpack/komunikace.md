## Komunikace mezi komponentami

Vráťme se k našemu projektu s nákupním seznamem, na kterém si předvedeme základy komunikace mezi komponentami.

Naším úkolem bude umožnit smazat položku ze seznamu. Zde nás čeká určitá výzva. Když totiž chceme smazat položku, musíme na stránce aktualizovat celý seznam. Aktualizace seznamu je práce komponenty `ShopList`. Tlačítko pro smazání je však v komponentě `ListItem`. Komponenta `ListItem` tedy musí být schopná informovat komponentu `ShopList` o tom, že uživatel chce smazat danou položku.

Řešení najdete ve větvi [delete-item](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/delete-item) našeho repozitáře s nákupním seznamem.
