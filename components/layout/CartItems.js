import { useState, useEffect } from "react";
import ThumbnailCart from "./ThumbnailCart";
import Link from "next/link";

function CartItems() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  const removeFromCartHandler = (gameInCart) => {
    const cartInStorage = JSON.parse(localStorage.getItem("cart"));

    const filteredCart = cartInStorage.filter(
      (game) => game.id !== gameInCart.id
    );

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCart(filteredCart);
  };

  return (
    <div className="px-5 my-10 flex flex-col max-w-6xl mx-auto w-full">
      <h2 className="my-10">Shopping cart</h2>
      {cart.length > 0 ? (
        cart.map((game) => (
          <ThumbnailCart
            key={game.id}
            game={game}
            removeFromCartHandler={removeFromCartHandler}
          />
        ))
      ) : (
        <h3 className="">No items in cart</h3>
      )}
      <Link href="/checkout">
        <div className="flex space-x-2 my-10">
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="btn btn-green"
            disabled={cart.length < 1}
          >
            Checkout
          </button>
        </div>
      </Link>
    </div>
  );
}

export default CartItems;
