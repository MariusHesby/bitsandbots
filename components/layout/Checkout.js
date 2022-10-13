import { useState, useEffect } from "react";
import ContactForm from "../content/ContactForm";

function Checkout({ setShowModal }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  return (
    <>
      <div className="flex justify-center my-20 mx-5">
        <div className="max-w-6xl bg-white w-full rounded-lg py-10 px-5 drop-shadow-lg">
          <h2 className="mb-10">Checkout</h2>
          <div className="mb-10">
            <p className="text-base sm:text-2xl">
              You have
              <span className="border-2 border-blue-600 rounded-lg px-2 py-1/2 mx-3 font-bold">
                {cart.length}
              </span>
              {cart.length === 1 ? "item" : "items"}
            </p>

            <p className="text-base sm:text-2xl">in your shopping-cart</p>
          </div>
          <ContactForm setShowModal={setShowModal} />
        </div>
      </div>
    </>
  );
}

export default Checkout;
