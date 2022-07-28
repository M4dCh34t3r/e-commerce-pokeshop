import { ShopItem } from "../../data/@types/shopItem";
import shopItems from "../../data/json/items.json";
import { shopItemsId } from "../../App";
import { useState } from "react";

let uniqueItems: ShopItem[] = [];

function addOneById(itemId: number) {
  shopItemsId.push(itemId);
}

function calculateCartValue(): number {
  let currentValue: number = 0;
  for (let i = 0; i < shopItemsId.length; i++) {
    let matchingItems: ShopItem[] = shopItems.filter(element => element.id === shopItemsId[i] );
    currentValue += matchingItems[0].price;
  }
  return currentValue;
}

function removeOneById(itemId: number) {
  let firstItemFound: number = shopItemsId.findIndex(p => p === itemId);
  shopItemsId.splice(firstItemFound, 1);
}

export function CartContent() {
  const [cartValue, setCartValue] = useState(calculateCartValue());

  const uniqueIds: number[] = [];
  uniqueItems = shopItems.filter(element => {
    const isItemInCart: boolean = shopItemsId.includes(element.id);

    if (isItemInCart) {
      uniqueIds.push(element.id);
      return true;
    }
    return false;
  });

  return(
    <>
      { uniqueItems.map(uniqueItem => (
        <>
          <button onClick={ () => {
            removeOneById(uniqueItem.id)
            setCartValue(calculateCartValue()) }}>remove item</button>
          <button onClick={ () => {
            addOneById(uniqueItem.id)
            setCartValue(calculateCartValue()) }}>add item</button>
          <h1>
            { uniqueItem.name }
          </h1>
        </>
      )) }
      <h1>
        { "The value is " + cartValue }
      </h1>
    </>
  );
}
