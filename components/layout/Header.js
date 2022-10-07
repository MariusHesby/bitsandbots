import Logo from "../layout/Logo";
import Cat from "../layout/Cat";
import Nav from "../layout/Nav";

function Header() {
  return (
    <>
      <div className="relative bg-gradient-to-l from-bitsBlue to-white w-full mt-20">
        <div className="mx-auto pt-6 pb-2 pr-10 text-white flex flex-grow justify-end">
          <Logo />
          <Nav />
        </div>
      </div>
      <Cat />
    </>
  );
}

export default Header;
