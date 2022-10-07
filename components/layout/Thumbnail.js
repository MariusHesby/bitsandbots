import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Thumbnail({ result }) {
  return (
    <Link href="/game/$[id]" as={`/game/${result.id}`}>
      <a>
        <div className="p-2 sm:p-5 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
          <div className="relative">
            <Image
              layout="responsive"
              src={result.background_image}
              alt={result.name}
              height={1440}
              width={2560}
            />
            <div className="absolute top-0 right-0 bg-white p-2 m-2 rounded-full flex justify-items-center">
              <ShoppingCartIcon className="w-7 mx-auto text-black hover:scale-125" />
            </div>
          </div>

          <div className="p-2">
            <h2 className="mt-1 text-2xl text-gray-500 transition-all duration-100 ease-in-out group-hover:font-bold">
              {result.name}
            </h2>
            <p className="opacity-0 group-hover:opacity-100">
              Release date: {result.released}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Thumbnail;
