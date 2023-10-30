import { useState } from "react";

function Modal({ handleClose }) {
  const handleCloseModal = () => {
    handleClose();
  };

  return (
    <div className="absolute z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <button
            className="absolute top-0 right-0 m-4 text-gray-500"
            onClick={handleCloseModal}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h1 className="text-3xl leading-6 font-bold text-gray-900">
              Create Your Wall Entry
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Make a note that will last on the UFL wall
            </p>
            <form className="mt-8">
              <textarea
                className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none"
                placeholder="Enter your note here.."
                maxLength="280"
              />
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
