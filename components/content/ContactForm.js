import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CalendarDaysIcon,
  LockClosedIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
// import valid from "card-validator"; //import statement

import Modal from "../common/Modal";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .min(6, "Full name must be at least 6 characters")
    .required("Please enter your full name"),
  address: yup
    .string()
    .min(6, "Address must be at least 6 characters")
    .required("Please enter your address"),

  // creditCard: yup
  //   .string()
  //   .test(
  //     "test-number", // this is used internally by yup
  //     "Credit Card number is invalid", //validation message
  //     (value) => valid.number(value).isValid
  //   ) // return true false based on validation
  //   .required(),

  // creditCard: yup
  //   .number()
  //   .min(15, "CC must be 16 digits")
  //   .max(17, "CC must be 16 digits")
  //   .required("Please enter your credit-card details"),

  // creditCard: yup
  //   .number()
  //   .min(16, "CC must be valid")
  //   .required("Please enter your credit-card details"),
});

function ContactForm({ setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setShowModal(true);
  }

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-20">
          {/* --- NAME --- */}
          <div className="mb-3 relative max-w-xl flex flex-col">
            <label htmlFor="fullName" className="mb-1">
              <span className="font-bold mb-3">Full name</span>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              id="fullName"
              name="fullName"
              placeholder="Your name"
            />
            {errors.fullName && (
              <span className="block text-red-600">
                {errors.fullName.message}
              </span>
            )}
          </div>
          {/* --- ADDRESS --- */}
          <div className="mb-3 relative max-w-xl flex flex-col">
            <label htmlFor="address" className="mb-1">
              <span className="font-bold mb-3">Address</span>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              id="address"
              name="address"
              placeholder="You address"
            />
            {errors.address && (
              <span className="block text-red-600">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>
        {/* --- CARD DETAILS --- */}

        {/* <div className="mb-3 relative max-w-xl flex flex-col">
        <label htmlFor="creditCard" className="mb-1">
          <span className="font-bold mb-3">Card number</span>
        </label>

        <input
          type="text"
          {...register("creditCard", { required: true })}
          className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
          id="creditCard"
          name="creditCard"
          placeholder="0000 0000 0000 0000"
        />
        <CreditCardIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
      </div>
      {errors.creditCard && (
        <span className="block text-red-600">{errors.creditCard.message}</span>
      )}

      <div className="mb-3 relative max-w-xl flex flex-col">
        <label htmlFor="expireDate" className="mb-1">
          <span className="font-bold mb-3">Expire date</span>
        </label>

        <input
          type="number"
          {...register("expireDate", { required: true })}
          className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
          id="expireDate"
          name="expireDate"
          placeholder="MM/YY"
        />
        <CalendarDaysIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
      </div>
      {errors.expireDate && (
        <span className="block text-red-600">{errors.expireDate.message}</span>
      )}

      <div className="mb-10 relative max-w-xl flex flex-col">
        <label htmlFor="ccv" className="mb-1">
          <span className="font-bold mb-3">CVC / CVV</span>
        </label>

        <input
          type="number"
          className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
          id="ccv"
          name="ccv"
          placeholder="&bull;&bull;&bull;"
        />
        <LockClosedIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
      </div>
      {errors.ccv && (
        <span className="block text-red-600">{errors.ccv.message}</span>
      )} */}
        {/* </form> */}

        {/* <div className="mb-10">
        <label htmlFor="creditCard" className="block">
          Credit Card
        </label>
        <input
          type="text"
          {...register("creditCard", { required: true })}
          className="border border-black p-1 rounded max-w-full"
          id="creditCard"
        />
        {errors.creditCard && (
          <span className="block text-red-600">
            {errors.creditCard.message}
          </span>
        )}
      </div> */}

        <button className="bg-blue-500 text-white py-3 px-5" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
