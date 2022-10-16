import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function Thumbnail({ result, cart, toggleAddToCartHandler }) {
  const [inCart, setInCart] = useState(false);

  const defaultDivClasses =
    "absolute top-5 right-5 bg-white p-2 m-2 rounded-full flex justify-items-center z-50";

  const inCartDivClasses =
    "absolute top-5 right-5 bg-[#229D30] p-2 m-2 rounded-full flex justify-items-center z-50";

  const inCartIconClasses = "w-7 mx-auto hover:scale-125 text-white";

  const defaultIconClasses = "w-7 mx-auto hover:scale-125 text-black";

  useEffect(() => {
    setInCart(cart.some((game) => game.id === result.id));
  }, [cart]);

  const addToCartHandler = (result) => {
    toggleAddToCartHandler(result);
    setInCart(!inCart);
  };

  return (
    <article className="relative">
      <div
        className={inCart ? inCartDivClasses : defaultDivClasses}
        onClick={() => addToCartHandler(result)}
      >
        <ShoppingCartIcon
          className={inCart ? inCartIconClasses : defaultIconClasses}
        />
      </div>

      <Link href="/game/$[id]" as={`/game/${result.id}`}>
        <div className="p-2 sm:p-5 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
          <div className="relative">
            <Image
              layout="responsive"
              src={result.background_image}
              alt={result.name}
              height={1440}
              width={2560}
            />
          </div>

          <div>
            <h2 className="mt-1 text-xl sm:text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
              {result.name}
            </h2>
            <p className="opacity-0 group-hover:opacity-100 text-gray-500">
              Release date: {result.released}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default Thumbnail;
