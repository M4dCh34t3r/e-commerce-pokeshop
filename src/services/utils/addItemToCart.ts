export default function addItemToCart(itemId: number) {
  const url: string = 'http://localhost:5000/cart-items';

  const postBody = {
    shopItemId: itemId,
  }

  const fetchData = async () => {
    try {
      await fetch(url,
        { method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(postBody) });
    } catch(e: any) {
      console.log(e);
    }
  }
  fetchData();
}
