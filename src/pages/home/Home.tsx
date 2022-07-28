import Section from "../../components/section/Section";
// import { ShopItem } from "../../data/@types/shopItem";
import items from "../../data/json/items.json";
import Cart from "../../components/cart/Cart";
import { shopItemsId } from "../../App"
import { useState } from "react";

export function Home() {
  const [cartItemCount, setCartItemCount] = useState(shopItemsId.length);

  const handleCartClick = (itemId: number) => {
    if (shopItemsId.length === 9) {
      alert("Your cart is full of items");
      return
    }

    shopItemsId.push(itemId);
    setCartItemCount(shopItemsId.length);
  }

  return(
    <>
      <Cart cartContent={ cartItemCount }/>

      <Section 
      sectionName="POKÉBALLS"
      shopItems={ items.filter(items => items.category === "pokeball" || items.subcategory ===  "pokeball") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="EVOLUTIONARY  ITEMS"
      shopItems={ items.filter(items => items.category === "evolutionary" || items.subcategory === "evolutionary") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="MISCELLANEOUS ITEMS"
      shopItems={ items.filter(items => items.category === "miscellaneous" || items.subcategory === "miscellaneous") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="RECOVERY ITEMS"
      shopItems={ items.filter(items => items.category === "recovery" || items.subcategory === "recovery") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="BATTLE EFFECT ITEMS"
      shopItems={ items.filter(items => items.category === "battlefx" || items.subcategory === "battlefx") }
      clickHandler={ handleCartClick }/>

      <Section 
      sectionName="HOLD ITEMS"
      shopItems={ items.filter(items => items.category === "hold" || items.subcategory === "hold") }
      clickHandler={ handleCartClick }/> 
    </>
  );
}
