import RegisterForm from "../components/loginPage/RegisterForm";
import ImageSlider from "../components/loginPage/ImageSlider";
import LogoLogin from "../components/layout/LogoLogin";

export default function Register() {
  return (
    <header className="h-screen flex justify-center place-items-center">
      <ImageSlider />
      <LogoLogin />
      <RegisterForm />
    </header>
  );
}
