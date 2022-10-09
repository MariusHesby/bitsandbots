import ContactForm from "../content/ContactForm";

function Checkout() {
  return (
    <div className="max-w-6xl mx-auto my-10">
      You have
      <span className="border-2 border-blue-600 rounded-lg px-3 py-2 mx-3 font-bold">
        7
      </span>
      items in shopping-cart
      <ContactForm />
    </div>
  );
}

export default Checkout;
