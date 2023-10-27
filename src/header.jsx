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
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              UFLwall
            </h1>
          </div>

          {/* HERE ARE BUTTONS */}
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {/* CREATE BUTTON */}
            <button
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              Create
            </button>
            <div className="flex flex-row">
              {/* Search */}
              <div className="flex">
                <input
                  type="text"
                  className="block rounded-lg border-2 border-indigo-600 py-2 mr-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
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
