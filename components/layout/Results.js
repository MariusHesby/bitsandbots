import { useEffect, useState } from "react";
import Thumbnail from "./Thumbnail";

function Results({ results }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (!storedCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    setCart(storedCart);
  }, []);

  const toggleAddToCartHandler = (result) => {
    const cartInStorage = JSON.parse(localStorage.getItem("cart"));

    if (!cartInStorage) {
      setCart([result]);
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }

    const alreadyInCart = cartInStorage.find((game) => game.id === result.id);

    if (alreadyInCart) {
      const filteredCart = cartInStorage.filter(
        (game) => game.id !== result.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return;
    }

    cartInStorage.push(result);

    localStorage.setItem("cart", JSON.stringify(cartInStorage));
  };

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail
          key={result.id}
          result={result}
          toggleAddToCartHandler={toggleAddToCartHandler}
          cart={cart}
        />
      ))}
    </div>
  );
}

export default Results;
