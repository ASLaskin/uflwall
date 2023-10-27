import React from "react";
import Dropdown from "./dropdown";

// Header created from header UI and modified to fit needs
function Header() {
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
            >
              Create
            </button>
            <div className="flex flex-row">
              {/* Search */}
              <div className="flex">
                <input
                  type="text"
                  className="block rounded-lg border-2 bg-white border-customBlue py-2 mr-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="block rounded-lg bg-customBlue px-5 py-3 text-sm font-medium text-white transition hover:bg-customOrange focus:outline-none focus:ring"
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
