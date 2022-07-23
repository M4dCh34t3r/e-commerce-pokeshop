import { CartCount,CartIcon, CartLink } from "./style";

interface CartProps {
  cartContent: number;
}

export default function Cart(props: CartProps) {
  return (
    <CartLink to="/cart-content">
      <CartIcon src="/images/carticon.svg" alt="shopping cart"/>
      <CartCount>{ props.cartContent }</CartCount>
    </CartLink>
  );
}