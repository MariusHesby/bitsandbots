import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CalendarDaysIcon,
  LockClosedIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .typeError("Please enter a valid name")
    .min(6, "Must be at least 6 characters")
    .required("Please enter your full name"),
  address: yup
    .string()
    .typeError("Please enter a valid address")
    .min(6, "Must be at least 6 characters")
    .required("Please enter your address"),
  cc: yup
    .string()
    .typeError("Please enter a valid card number")
    .min(16, "Must be 16 digits")
    .required("Please enter your credit-card number"),
  expireDate: yup
    .string()
    .typeError("Please choose a valid date")
    .required("Please choose a valid date"),
  cvc: yup
    .string()
    .typeError("Please enter a valid number")
    .min(3, "Must be at least 3 digits")
    .max(4, "Can't be more than 4 digits")
    .required("Please enter a valid number"),
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
              <h3 className="mt-8">Full name</h3>
            </label>
            <input
              type="text"
              {...register("fullName", { required: true })}
              className="rounded-md peer pl-6 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
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
              <h3 className="mt-8">Address</h3>
            </label>
            <input
              type="text"
              {...register("address", { required: true })}
              className="rounded-md peer pl-6 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
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
        <div>
          {/* --- CARD DETAILS --- */}
          <div className="mb-3 relative max-w-xl flex flex-col">
            <label htmlFor="cc" className="mb-1">
              <h3 className="mt-8">Card Number</h3>
            </label>
            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 16))}
              {...register("cc", { required: true })}
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              id="cc"
              name="cc"
              placeholder="0000 0000 0000 0000"
            />
            <CreditCardIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
          </div>
          {errors.cc && (
            <span className="block text-red-600">{errors.cc.message}</span>
          )}
          {/* EXPIRE DATE */}
          <div className="mb-3 relative max-w-xs flex flex-col">
            <label htmlFor="expireDate" className="mb-1">
              <h3 className="mt-8">Expiration Date</h3>
            </label>

            <input
              type="date"
              {...register("expireDate", { required: true })}
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              id="expireDate"
              name="expireDate"
              placeholder="MM/YY"
            />
            <CalendarDaysIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
          </div>
          {errors.expireDate && (
            <span className="block text-red-600">
              {errors.expireDate.message}
            </span>
          )}
          {/* CCV */}
          <div className="mb-3 relative max-w-xs flex flex-col">
            <label htmlFor="ccv" className="mb-1">
              <h3 className="mt-8">CVC / CVV</h3>
            </label>

            <input
              type="number"
              onInput={(e) => (e.target.value = e.target.value.slice(0, 4))}
              {...register("cvc", { required: true })}
              className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
              id="cvc"
              name="cvc"
              placeholder="&bull;&bull;&bull;"
            />
            <LockClosedIcon className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6" />
          </div>
          {errors.cvc && (
            <span className="block text-red-600">{errors.cvc.message}</span>
          )}
        </div>
        <button className="btn btn-green mt-10" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
