import Section from "../../components/section/Section";
import storeItems from "../../data/items/items.json";
import Cart from "../../components/cart/Cart";
import { useState } from "react";

export function Home() {
  const handleCartClick = () => {}

  return(
    <>
      <Cart cartContent={ 0 }/>

      <Section 
      sectionName="POKÉBALLS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "pokeball" || storeItems.subcategory ===  "pokeball") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="EVOLUTIONARY  ITEMS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "evolutionary" || storeItems.subcategory === "evolutionary") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="MISCELLANEOUS ITEMS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "miscellaneous" || storeItems.subcategory === "miscellaneous") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="RECOVERY ITEMS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "recovery" || storeItems.subcategory === "recovery") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="BATTLE EFFECT ITEMS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "battlefx" || storeItems.subcategory === "battlefx") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="HOLD ITEMS"
      shopItems={ storeItems.filter(storeItems => storeItems.category === "hold" || storeItems.subcategory === "hold") }
      clickHandler={ handleCartClick }/> 
    </>
  );
}
