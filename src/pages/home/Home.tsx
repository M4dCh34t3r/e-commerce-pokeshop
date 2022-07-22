import { ItemCategory, itemList } from "../../data/items/items";
import Section from "../../components/section/Section";

export function Home() {
  return(
    <>
      <Section 
      sectionName="POKÉBALLS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Pokeball || itemList.subcategory === ItemCategory.Pokeball) }/>

      <Section 
      sectionName="EVOLUTIONARY  ITEMS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Evolutionary || itemList.subcategory === ItemCategory.Evolutionary) }/>

      <Section 
      sectionName="MISCELLANEOUS ITEMS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Miscellaneous || itemList.subcategory === ItemCategory.Miscellaneous) }/>

      <Section 
      sectionName="RECOVERY ITEMS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Recovery || itemList.subcategory === ItemCategory.Recovery) }/>

      <Section 
      sectionName="BATTLE EFFECT ITEMS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Battlefx || itemList.subcategory === ItemCategory.Battlefx) }/>

      <Section 
      sectionName="HOLD ITEMS"
      shopItems={
        itemList.filter(itemList => itemList.category === ItemCategory.Hold || itemList.subcategory === ItemCategory.Hold) }/> 
    </>
  );
}
