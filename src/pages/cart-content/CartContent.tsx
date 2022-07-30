import CartWarning from "../../components/cart-warning/CartWarning";
import Products from "../../components/cart-products/CartProducts";
import addItemToCart from "../../services/utils/addItemToCart";
import shopItems from "../../data/json/shopItems.json";
import { CartItem } from "../../data/@types/cartItem";
import { ShopItem } from "../../data/@types/shopItem";
import { useState, useEffect } from "react";

export function CartContent() {
  const [cartContent, setCartContent] = useState(Array<CartItem>);
  const [matchingItems, setMatchingItems] = useState(Array<ShopItem>);
  const url: string = 'http://localhost:5000/cart-items';
  
  useEffect(() =>  {
    const fetchData = async () => {
      try {
        let response = await fetch(url);

        if (response.status === 200) {
          console.log("Data successfully fetched from ", url);
          let data = await response.json();
          updateMatchingItems();
          setCartContent(data);
          return;
        }
      } catch(e: any) {
        console.log(e);
      }
    }
    fetchData();
  });
  
  function calculateCartValue(): number {
    let currentValue: number = 0;
    for (let i = 0; i < matchingItems.length; i++) {
      currentValue += matchingItems[i].price;
    }
    return currentValue;
  }

  function removeOneById(itemId: number) {
    let matchingItem: number = cartContent.findIndex(item => item.shopItemId === itemId);
    let matchingItemId: Number = cartContent[matchingItem].id;

    if (matchingItemId) {
      let postBody = {
        id: matchingItemId,
      }
  
      const fetchData = async () => {
        try {
          await fetch(url,
            { method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(postBody) });
        } catch(e: any) {
          console.log(e);
        }
      }
      fetchData();
    }
  }

  function updateMatchingItems() {
    let matchingContent: ShopItem[] = [];
    for (let i = 0; i < cartContent.length; i++) {
      matchingContent.push(shopItems.filter(shopItem => shopItem.id === cartContent[i].shopItemId)[0]);
    }
    setMatchingItems(matchingContent);
  }

  if (matchingItems.length) {
    return(
      <Products 
        cartPrice={ calculateCartValue() }
        shopItems={ matchingItems }
        addItemHandler={ addItemToCart }
        removeItemHander={ removeOneById } />
    );
  }

  return(
    <CartWarning 
      redirectPageTo="/"
      redirectMessage="Choose your items here!"
      warningMessage="Your cart is empty..." />
  );
}
