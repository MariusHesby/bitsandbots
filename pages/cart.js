import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartItems from "../components/layout/CartItems";
import requests from "../utils/requests";

export default function Cart() {
  return (
    <div>
      <Header />
      <CartItems />
      <Footer />
    </div>
  );
}
