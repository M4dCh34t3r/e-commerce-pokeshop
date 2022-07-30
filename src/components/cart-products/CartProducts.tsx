import { AddButton, RemoveButton, ProductCard, ProductImage, ProductsWrapper, TotalPrice, ProductPrice } from "./style";
import { ShopItem } from "../../data/@types/shopItem";

interface CartProductsProps {
  cartPrice: number;
  shopItems: ShopItem[];
  removeItemHander: Function;
  addItemHandler: Function;
}

export default function CartProducts(props: CartProductsProps) {
  return(
    <ProductsWrapper>
      { props.shopItems.map(shopItem => (
        <ProductCard>
      
        <ProductPrice> { shopItem.price }₽ </ProductPrice>

        <RemoveButton 
          onClick={ () => props.removeItemHander(shopItem.id) }> - </RemoveButton>

        <ProductImage 
          src={ shopItem.image }
          alt={ shopItem.name } />
        
        <AddButton 
          onClick={ () => props.addItemHandler(shopItem.id) }> + </AddButton>
        
        </ProductCard>
      ))}
    <TotalPrice> { props.cartPrice }₽ </TotalPrice>
    </ProductsWrapper>
  );
}
