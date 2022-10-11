import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { WP_BASE_URL, TOKEN_PATH } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Link from "next/link";

const url = WP_BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter a valid email"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setLoginError("You haven't registered yet, please register first");
      setSubmitting(false);
      return;
    }

    if (user.password !== data.password) {
      setLoginError("Invalid credentials, please try again");
      setSubmitting(false);
      return;
    }

    setAuth({
      isAuthenticated: true,
      user,
    });

    setSubmitting(false);
    history.push("/");
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg absolute w-full bg-white border-2 py-8 px-4 sm:rounded-xl bg-opacity-50 backdrop-blur-lg drop-shadow-lg"
      >
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          {/* Email */}
          <div className="row mb-4 flex flex-col ">
            <label htmlFor="email" className=" col-form-label mb-3 ">
              Email
            </label>
            <input
              name="email"
              placeholder="Email"
              {...register("email")}
              id="email"
              className="border border-black p-2"
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
          {/* Password */}
          <div className="row mb-4 flex flex-col">
            <label htmlFor="password" className="col-form-label mb-3">
              Password
            </label>
            <input
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
              id="password"
              className="border border-black p-2"
            />
            {errors.password && (
              <FormError>{errors.password.message}</FormError>
            )}
          </div>
          {/* Login button */}
          <button className="bg-bitsBlue text-white px-3 py-2 rounded-md mr-5 hover:bg-bitsBlueLight">
            {submitting ? "Logging in..." : "Login"}
          </button>

          <Link href="/register" passHref>
            <a>
              <button
                type="submit"
                className="border border-transparent px-3 py-2 rounded-md mr-5 hover:border-black"
              >
                Register
              </button>
            </a>
          </Link>
        </fieldset>
      </form>
    </>
  );
}
