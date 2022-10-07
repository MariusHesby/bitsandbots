import { useRouter } from "next/router";
import NavItem from "./NavItem";
import {
  HomeIcon,
  ArrowLeftOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function Nav() {
  const router = useRouter();

  const [auth, setAuth] = useContext(AuthContext);

  const history = useRouter();

  function logout() {
    setAuth(null);
    history.push("/login");
  }

  return (
    <>
      <div className="flex mr-10">
        <Link href="/" passHref>
          <a className={router.pathname == "/" ? "active" : ""}>
            <NavItem title="HOME" Icon={HomeIcon} />
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a className={router.pathname == "/cart" ? "active" : ""}>
            <NavItem title="CART" Icon={ShoppingCartIcon} />
          </a>
        </Link>
      </div>

      {auth ? (
        <div onClick={logout}>
          <NavItem title="LOGOUT" Icon={ArrowLeftOnRectangleIcon} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Nav;
