import { useState } from "react";
import Dropdown from "./dropdown";
import Modal from "./modal";

// Header created from header UI and modified to fit needs
function Header({ firebaseApp }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* LOGO */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-6xl font-bold text-customBlue sm:text-5xl md:text-7xl">
              <a href="/">
                UFL<a className="text-customOrange">Wall</a>
              </a>
            </h1>
          </div>

          {/* HERE ARE BUTTONS */}
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {/* CREATE BUTTON */}
            <button
              className="block rounded-lg bg-customBlue px-5 py-3 text-sm font-medium text-white transition hover:bg-customOrange focus:outline-none focus:ring"
              type="button"
              onClick={handleModalOpen}
            >
              Create
            </button>
            {/* MODAL */}
            {isModalOpen && (
              <Modal show={isModalOpen} handleClose={handleModalClose} />
            )}
            <div className="flex flex-row">
              {/* SEARCH */}
              <div className="flex">
                <div className="mr-1">
                  <label htmlFor="month" className="sr-only">
                    Month
                  </label>
                  <input
                    type="text"
                    id="month"
                    className="block w-12 md:w-16 rounded-lg border-2 bg-white text-black border-customBlue py-2 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    maxLength={2}
                    placeholder="MM"
                  />
                </div>
                <div>
                  <label htmlFor="year" className="sr-only">
                    Year
                  </label>
                  <input
                    type="text"
                    id="year"
                    maxLength={4}
                    className="block w-20 md:w-24 rounded-lg border-2 bg-white text-black border-customBlue py-2 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="YYYY"
                  />
                </div>
                <button
                  type="submit"
                  className="block rounded-lg bg-customBlue px-4 py-2 text-sm font-medium text-white transition hover:bg-customOrange focus:outline-none focus:ring"
                >
                  Find
                </button>
              </div>

              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
