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
        <div className="w-1/2 h-1/2 bg-white">
          Please confirm purchase
          <button
            className="block bg-green-400 py-3 px-5"
            onClick={onConfirmHandler}
          >
            Confirm
          </button>
          <button
            className="block bg-red-400 py-3 px-5"
            onClick={onCancelHandler}
          >
            Cancel
          </button>
        </div>
      )}
      {purchaseConfirmed && (
        <div className="w-1/2 h-1/2 bg-white">
          <h2>Purchase confirmed. Redirecting to home page</h2>
        </div>
      )}
    </div>
  );
};

export default Modal;
