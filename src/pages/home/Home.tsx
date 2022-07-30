import Section from "../../components/item-section/ItemSection";
import addItemById from "../../services/utils/addItemToCart";
import shopItems from "../../data/json/shopItems.json";
import Cart from "../../components/cart/Cart";
import { useState, useEffect } from "react";

export function Home() {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() =>  {
    const url: string = 'http://localhost:5000/cart-items';
    const fetchData = async () => {
      try {
        let response = await fetch(url);

        if (response.status === 200) {
          console.log("Data successfully fetched from ", url);
          let data = await response.json();
          setCartItemCount(data.length);
          return;
        }
      } catch(e: any) {
        console.log(e);
      }
    }
    fetchData();
  });

  const handleCartClick = (itemId: number) => {
    addItemById(itemId);
    setCartItemCount(cartItemCount + 1);
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
