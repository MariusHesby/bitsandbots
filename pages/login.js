import Head from "next/head";
// import ImageSlider from "../components/loginPage/ImageSlider";
import LoginForm from "../components/loginPage/LoginForm";
import Link from "next/link";
import Image from "next/image";
// import Carousel from "../../js-css-carousel-main/Carusel";
import ImageSlider from "../components/loginPage/ImageSlider";

export default function signIn() {
  return (
    <div>
      <Head>
        <title>Bits & Bots</title>
        <meta name="description" content="All the latest games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-screen flex justify-center place-items-center">
        <ImageSlider />

        <Link href="/loggedIn" passHref>
          <a>
            <div className="logo-landingpage">
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

        <LoginForm />
      </header>
    </div>
  );
}
