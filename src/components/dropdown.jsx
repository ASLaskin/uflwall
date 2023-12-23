import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Uses headless UI to create a dropdown menu

export default function Dropdown() {
  return (
    <div className="w-full text-right lg:w-20 ">
      <Menu as="div" className="relative inline-block text-center">
        <div>
          <Menu.Button className="block rounded-lg bg-customBlue px-5 py-3 text-sm font-medium text-white transition hover:bg-customOrange focus:outline-none focus:ring">
            More
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item>
                <Link to="/about">
                  <button className="w-full py-2 px-4 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
                    About
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/contact">
                  <button className="w-full py-2 px-4 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">
                    Contact
                  </button>
                </Link>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
