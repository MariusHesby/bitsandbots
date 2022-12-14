import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../../components/layout/Header";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Footer from "../../../components/layout/Footer";

const API_KEY = process.env.API_KEY;
const defaultUrl = "https://api.rawg.io/api/games";

export default function Game({ data }) {
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);

  const { name, description_raw, background_image } = data;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (!storedCart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      setCart([]);
      return;
    }
    setCart(storedCart);
    setInCart(storedCart.some((game) => game.id === data.id));
    console.log(inCart);
    console.log(cart);
  }, [inCart]);

  const toggleAddToCartHandler = () => {
    const cartInStorage = JSON.parse(localStorage.getItem("cart"));

    console.log(cartInStorage);

    if (!cartInStorage) {
      setCart([data]);
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }

    const alreadyInCart = cartInStorage.find((game) => game.id === data.id);

    if (alreadyInCart) {
      const filteredCart = cartInStorage.filter((game) => game.id !== data.id);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      setInCart(!inCart);
      return;
    }

    cartInStorage.push(data);

    localStorage.setItem("cart", JSON.stringify(cartInStorage));
    setInCart(!inCart);
  };

  const defaultDivStyles =
    "absolute top-0 right-0 bg-white p-3 m-3 rounded-full flex justify-items-center";

  const inCartDivStyles =
    "absolute top-0 right-0 bg-[#229D30] p-3 m-3 rounded-full flex justify-items-center";

  const defaultIconStyles = "w-10 mx-auto hover:scale-125";
  const inCartIconStyles = "w-10 mx-auto text-white hover:scale-125";

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto my-5">
        <h2 className="py-2 sm:py-5 font-bold my-10">{name}</h2>

        <div className="relative">
          <div className="mb-10">
            <Image
              layout="intrinsic"
              src={background_image}
              alt="1"
              height={1440}
              width={2560}
            />
          </div>
          <div
            className={inCart ? inCartDivStyles : defaultDivStyles}
            onClick={toggleAddToCartHandler}
          >
            <ShoppingCartIcon
              className={inCart ? inCartIconStyles : defaultIconStyles}
            />
          </div>
        </div>
        <div className="game-info py-10 px-5 xl:px-0">
          <article>{description_raw}</article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultUrl}/${id}?key=${API_KEY}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
