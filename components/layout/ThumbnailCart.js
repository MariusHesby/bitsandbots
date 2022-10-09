import Image from "next/image";
import Link from "next/link";
// import { XCircleIcon } from "@heroicons/react/24/solid";

function ThumbnailCart({ result }) {
  return (
    <div className="flex space-x-2 mb-5 odd:bg-blue-50 items-center">
      <Link href="/game/$[id]" as={`/game/${result.id}`}>
        <div className="w-40 cursor-pointer relative">
          <Image
            layout="responsive"
            src={result.background_image}
            alt={result.name}
            height={1440}
            width={2560}
          />
        </div>
      </Link>
      <div>
        <Link href="/game/$[id]" as={`/game/${result.id}`}>
          <h3 className="text-xl text-gray-500 cursor-pointer">
            {result.name}
          </h3>
        </Link>
        <button className="flex w-8 text-red-600">
          {/* <XCircleIcon /> */}
          Remove
        </button>
      </div>
    </div>
  );
}

export default ThumbnailCart;
