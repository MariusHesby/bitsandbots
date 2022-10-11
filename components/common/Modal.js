import { useEffect } from "react";
import { useRouter } from "next/router";

const Modal = ({ setShowModal, purchaseConfirmed, setPurchaseConfirmed }) => {
  const history = useRouter();

  const onConfirmHandler = () => {
    setPurchaseConfirmed(true);
  };

  const onCancelHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let timer;

    if (purchaseConfirmed) {
      timer = setTimeout(() => {
        localStorage.removeItem("cart");
        history.push("/");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [purchaseConfirmed]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-700 bg-opacity-70 z-40 flex items-center justify-center">
      {!purchaseConfirmed && (
        <div className="w-auto h-1/2 lg:w-1/3 lg:h-1/3 bg-white p-5 flex flex-col justify-center rounded-sm shadow-2xl">
          <h2 className="text-center mb-10">Please confirm purchase</h2>
          <div className="flex flex-row justify-center space-x-5">
            <button
              className=" bg-green-600 hover:bg-green-700 py-3 px-5 rounded-lg text-white"
              onClick={onConfirmHandler}
            >
              Confirm
            </button>
            <button
              className="py-3 px-5 rounded-lg border border-black hover:bg-red-600 hover:text-white"
              onClick={onCancelHandler}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {purchaseConfirmed && (
        <div className="w-auto h-1/2 lg:w-1/3 lg:h-1/3 p-5 flex bg-green-600 flex-col justify-center rounded-lg shadow-2xl">
          <h2 className="text-center text-white mb-3">
            Purchase confirmed. Redirecting to home page
          </h2>
        </div>
      )}
    </div>
  );
};

export default Modal;
