import requests from "../../utils/requests";
import { useRouter } from "next/router";

function Cat() {
  const router = useRouter();

  return (
    <nav className="mx-auto px-5">
      <div className="flex space-x-10 overflow-scroll scrollbar-hide">
        <div className="mt-12 justify-end flex px-5 xl:px-0 text-xl whitespace-nowrap space-x-5">
          {Object.entries(requests).map(([key, { title, url }]) => (
            <h3
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className={`cat ${
                router.asPath === `/?genre=${key}`
                  ? "text-yellow-400 border-yellow-400"
                  : ""
              }`}
            >
              {title}
            </h3>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Cat;
