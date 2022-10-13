import Logo from "../layout/Logo";
import Nav from "../layout/Nav";

function Header() {
  return (
    <>
      <div className="relative bg-gradient-to-l from-bitsBlue to-white w-full mt-10">
        <div className="pt-6 sm:pb-2 pr-5 sm:pr-10 text-white flex flex-grow justify-end">
          <Logo />
          <Nav />
        </div>
      </div>
    </>
  );
}

export default Header;
