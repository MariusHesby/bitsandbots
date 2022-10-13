import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" passHref className="z-50">
      <a>
        <div className="logo w-36 sm:w-full">
          <Image
            className="object-contain"
            src="/assets/header/bb_logo.svg"
            width="190px"
            height="153px"
            alt="Back to homepage"
          />
        </div>
      </a>
    </Link>
  );
}

export default Logo;
