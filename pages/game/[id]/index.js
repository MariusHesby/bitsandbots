import Head from "next/head";
import Image from "next/image";

import Header from "../../../components/layout/Header";
// import requests from '../../../utils/requests';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
// import { useState } from 'react'

// const corsFix = "https://noroffcors.herokuapp.com/";
const url = "https://api.rawg.io/api/games";
const defaultUrl = url;

export default function Game({ data }) {
  console.log(data);
  const { name, description, background_image } = data;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="max-w-6xl bg-red-200 mx-auto my-5">
        <h1 className="bg-yellow-100 py-2 sm:py-5 text-4xl font-bold">
          {name}
        </h1>

        <div className="bg-green-200 relative">
          <div className="mb-10">
            <Image
              layout="intrinsic"
              src={background_image}
              alt="1"
              height={1440}
              width={2560}
            />
          </div>
          <div className="absolute top-0 right-0 bg-white p-3 m-3 rounded-full flex justify-items-center">
            <ShoppingCartIcon className="w-10 mx-auto text-[#229D30] hover:scale-125" />
          </div>
        </div>
        <div
          className="game-info"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(
    `${defaultUrl}/${id}?key=506621b238824dd1982262dee58189ca`
  );
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

// const request = await fetch(`${defaultUrl}${requests[genre]?.url || requests.fetchAction.url}`)
// .then((res) => res.json());
