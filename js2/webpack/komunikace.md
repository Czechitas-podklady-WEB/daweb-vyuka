## Komunikace mezi komponentami

Vráťme se k našemu projektu s nákupním seznamem, na kterém si převedeme základy komunikace mezi komponentami.

Naším úkolem bude umožnit smazat položku ze seznamu. Zde nás čeká určitá výzva. Když totiž chceme smazat položku, musíme na stránce aktualizovat celý seznam. Aktualizace seznamu je práce komponenty `ShoppingList`. Tlačítko pro smazání je však v komponentě `ShoppingItem`. Komponenta `ShoppingItem` tedy musí být schopná informovat komponentu `ShoppingList` o tom, že uživatel chce smazat danou položku.

Řešení najdete ve větvi [delete-item](https://github.com/Czechitas-podklady-WEB/prvni-komponenta/tree/delete-item) našeho repozitáře s nákupním seznamem.
