import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CartItems from "../components/layout/CartItems";
import requests from "../utils/requests";

const defaultUrl = "https://api.rawg.io/api";

export default function Cart({ results }) {
  return (
    <div>
      <Header />
      <CartItems results={results} />
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `${defaultUrl}${requests[genre]?.url || requests.fetchAction.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
