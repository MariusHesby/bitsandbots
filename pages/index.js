import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import AuthContext from "../context/AuthContext";

import Header from "../components/layout/Header";
import Results from "../components/layout/Results";
import Footer from "../components/layout/Footer";
import requests from "../utils/requests";
import Cat from "../components/layout/Cat";
import Spinner from "../components/common/Spinner";

const defaultUrl = "https://api.rawg.io/api";

export default function Home({ results }) {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      history.push("/login");
    }

    setAuth({
      isAuthenticated: true,
      user,
    });
  }, []);

  return (
    <div>
      <Header />
      <Cat />
      {!results && <Spinner />}
      {results && <Results results={results} />}
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
