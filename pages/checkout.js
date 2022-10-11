import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Checkout from "../components/layout/Checkout";
import requests from "../utils/requests";

import Modal from "../components/common/Modal";

const defaultUrl = "https://api.rawg.io/api";

export default function Cart() {
  const [showModal, setShowModal] = useState(false);
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          purchaseConfirmed={purchaseConfirmed}
          setPurchaseConfirmed={setPurchaseConfirmed}
        />
      )}
      <Header />
      <Checkout setShowModal={setShowModal} />
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
