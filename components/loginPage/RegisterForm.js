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
      <div className="row mb-4">
        <label htmlFor="email" className="row-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm">
          <input
            type="text"
            className="form-control border"
            id="email"
            name="email"
            {...register("email")}
          />
        </div>
      </div>
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <div className="row mb-4">
        <label htmlFor="register-password" className="row-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm">
          <input
            type="password"
            className="form-control"
            id="register-password"
            {...register("password")}
          />
        </div>
      </div>

      {errors.password && <FormError>{errors.password.message}</FormError>}

      <div className="row mb-4">
        <label
          htmlFor="register-confirm-password"
          className="row-sm-2 col-form-label"
        >
          Password
        </label>
        <div className="col-sm">
          <input
            type="password"
            className="form-control"
            id="register-confirm-password"
            {...register("password2")}
          />
        </div>
      </div>

      {errors.password2 && <FormError>{errors.password2.message}</FormError>}

      <Link href="/login" passHref>
        <a>
          <button type="submit" className="btn btn-light mr-5">
            Login
          </button>
        </a>
      </Link>

      <button
        type="submit"
        className="border border-transparent px-3 py-2 rounded-md mr-5 hover:border-black"
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
