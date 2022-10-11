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
    <>
      <div className="px-5 my-10 flex flex-col max-w-6xl mx-auto">
        <h1>Shopping cart</h1>
        {/* <div className="px-5 my-10 sm:grid md:grid-cols-5 xl:grid-cols-6 3xl:flex flex-wrap justify-center"> */}
        {cart.length > 0 ? (
          cart.map((game) => (
            <ThumbnailCart
              key={game.id}
              game={game}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        ) : (
          <h2>No items in cart</h2>
        )}
        <Link href="/checkout">
          <div className="flex space-x-2 my-10">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-red-400 disabled:cursor-not-allowed"
              disabled={cart.length < 1}
            >
              Checkout
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default CartItems;
