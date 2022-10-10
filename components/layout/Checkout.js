import ContactForm from "../content/ContactForm";

function Checkout() {
  return (
    <>
      <div className="flex justify-center my-20 mx-5">
        <div className="max-w-6xl bg-white w-full rounded-lg py-10 px-5 drop-shadow-lg">
          <h2 className="mb-10">Checkout</h2>
          <div className="mb-10">
            <p className="text-2xl">
              You have
              <span className="border-2 border-blue-600 rounded-full px-3 pt-2 pb-1 mx-3 font-bold">
                7
              </span>
              items
            </p>

            <p className="text-2xl">in your shopping-cart</p>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Checkout;
