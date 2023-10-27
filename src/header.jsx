import React from 'react';
import Dropdown from './dropdown';

// Header created from header UI and modified to fit needs
function Header() {
    return (
        <header className='bg-white'>
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
              
                   <Dropdown />

                    {/* CREATE BUTTON */}
                    <button
                    className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                    type="button"
                    >
                    Create Post
                    </button>
                    
                </div>
               
                </div>
            </div>
        </header>
    );
}


export default Header;
