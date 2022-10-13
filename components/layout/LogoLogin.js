import Link from "next/link";
import Image from "next/image";

function LogoLogin() {
  return (
    <Link href="/loggedIn" passHref>
      <div className="logo-landingpage w-28 sm:w-full">
        <Image
          className="object-contain"
          src="/assets/header/bb_logo.svg"
          width="190px"
          height="153px"
          alt="Back to homepage"
        />
      </div>
    </Link>
  );
}

export default LogoLogin;
