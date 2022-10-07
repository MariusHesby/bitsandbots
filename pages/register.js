import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import ImageSlider from "../components/ImageSlider";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div>
      <Head>
        <title>Bits & Bots</title>
        <meta name="description" content="All the latest games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="relative h-screen flex justify-center place-items-center">
          <ImageSlider />
          <Logo />
          <RegisterForm />
        </div>
      </header>
    </div>
  );
}
