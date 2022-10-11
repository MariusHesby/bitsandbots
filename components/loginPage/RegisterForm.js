import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import FormError from "../common/FormError";

function RegisterForm() {
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const history = useRouter();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter a valid email"),
    password: yup.string().required("Please enter your password").min(6),
    password2: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: data.email, password: data.password })
    );
    setRegisterSuccess(true);
  };

  useEffect(() => {
    let timer;

    if (registerSuccess) {
      timer = setTimeout(() => {
        history.push("/");
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [registerSuccess]);

  return (
    <form
      className="max-w-lg absolute w-full bg-white border-2 py-8 px-4 sm:rounded-xl bg-opacity-50 backdrop-blur-lg drop-shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      {registerSuccess && (
        <p className="text-green-700 font-bold">
          Register success, redirecting...
        </p>
      )}
      {/* Email */}
      <div className="row mb-4 flex flex-col ">
        <label htmlFor="email" className="col-form-label mb-3 ">
          Email
        </label>
        <input
          name="email"
          placeholder="Email"
          {...register("email")}
          id="email"
          type="text"
          className="border border-black p-2"
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </div>
      {/* Password */}
      <div className="row mb-4 flex flex-col ">
        <label htmlFor="register-password" className="col-form-label mb-3 ">
          Password
        </label>

        <input
          name="password"
          placeholder="Password"
          {...register("password")}
          id="register-password"
          type="password"
          className="border border-black p-2"
        />
        {errors.password && <FormError>{errors.password.message}</FormError>}
      </div>

      {/* Confirm 1Password */}
      <div className="row mb-4 flex flex-col ">
        <label
          htmlFor="register-confirm-password"
          className="col-form-label mb-3"
        >
          Confirm password
        </label>

        <input
          name="register-confirm-password"
          placeholder="Confirm password"
          {...register("password2")}
          id="register-confirm-password"
          type="password"
          className="border border-black p-2"
        />
        {errors.password2 && <FormError>{errors.password2.message}</FormError>}
      </div>

      <Link href="/login" passHref>
        <a>
          <button
            type="submit"
            className="border border-transparent px-3 py-2 rounded-md mr-5 hover:border-black"
          >
            Login
          </button>
        </a>
      </Link>

      <button
        type="submit"
        className="bg-bitsBlue text-white px-3 py-2 rounded-md mr-5 hover:bg-bitsBlueLight"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
