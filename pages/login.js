import LoginForm from "../components/loginPage/LoginForm";
import ImageSlider from "../components/loginPage/ImageSlider";
import LogoLogin from "../components/layout/LogoLogin";

export default function signIn() {
  return (
    <header className="h-screen flex justify-center place-items-center">
      <ImageSlider />
      <LogoLogin />
      <LoginForm />
    </header>
  );
}
