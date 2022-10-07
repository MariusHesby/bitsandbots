import Head from "next/head";
import Header from "../components/layout/Header";
import Results from "../components/layout/Results";
import Footer from "../components/layout/Footer";
import requests from "../utils/requests";

const defaultUrl = "https://api.rawg.io/api";

export default function Home({ results }) {
  return (
    <div>
      <Header />
      <Results results={results} />
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
