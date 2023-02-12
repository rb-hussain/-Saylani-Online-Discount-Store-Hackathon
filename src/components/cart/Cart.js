import React from "react";

function Cart({ cartItems, onCheckoutClicked }) {
  const hasItems = cartItems.length > 0;

  const nodes = !hasItems ? (
    <em>Please add some products to cart.</em>
  ) : (
    cartItems.map((item) => (
      <div key={item.id}>
        {item.product.name} x {item.quantity}
      </div>
    ))
  );

  const total = cartItems.reduce((acc, item) => {
    return acc + item.product.price * item.quantity;
  }, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked} disabled={hasItems ? "" : "disabled"}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;