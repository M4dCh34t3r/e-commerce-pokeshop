import Section from "../../components/section/Section";
import shopItems from "../../data/json/shopItems.json";
import Cart from "../../components/cart/Cart";
import { shopItemsId } from "../../App";
import { useState } from "react";

export function Home() {
  const [cartItemCount, setCartItemCount] = useState(shopItemsId.length);

  const handleCartClick = (itemId: number) => {
    if (shopItemsId.length === 9) {
      alert("Your cart is already full of items");
      return;
    }

    shopItemsId.push(itemId);
    setCartItemCount(shopItemsId.length);
  }

  return(
    <>
      <Cart cartContent={ cartItemCount }/>

      <Section 
      sectionName="POKÉBALLS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "pokeball" || shopItem.subcategory ===  "pokeball") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="EVOLUTIONARY  ITEMS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "evolutionary" || shopItem.subcategory === "evolutionary") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="MISCELLANEOUS ITEMS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "miscellaneous" || shopItem.subcategory === "miscellaneous") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="RECOVERY ITEMS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "recovery" || shopItem.subcategory === "recovery") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="BATTLE EFFECT ITEMS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "battlefx" || shopItem.subcategory === "battlefx") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="HOLD ITEMS"
      shopItems={ shopItems.filter(shopItem => shopItem.category === "hold" || shopItem.subcategory === "hold") }
      clickHandler={ handleCartClick }/> 
    </>
  );
}
