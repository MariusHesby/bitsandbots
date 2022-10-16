import Image from "next/image";
import Link from "next/link";
// import { XCircleIcon } from "@heroicons/react/24/solid";

function ThumbnailCart({ game, removeFromCartHandler }) {
  return (
    <div className="flex space-x-2 mb-5 odd:bg-white even:bg-gray-100 shadow-lg items-center hover:bg-yellow-100">
      <Link href="/game/$[id]" as={`/game/${game.id}`}>
        <div className=" w-40 cursor-pointer relative">
          <Image
            layout="responsive"
            src={game.background_image}
            alt={game.name}
            height={1440}
            width={2560}
          />
        </div>
      </Link>
      <div>
        <Link href="/game/$[id]" as={`/game/${game.id}`}>
          <h3 className="text-gray-500 cursor-pointer">{game.name}</h3>
        </Link>
        <button
          className="flex w-8 text-red-600"
          onClick={() => removeFromCartHandler(game)}
        >
          {/* <XCircleIcon /> */}
          Remove
        </button>
      </div>
    </div>
  );
}

export default ThumbnailCart;
