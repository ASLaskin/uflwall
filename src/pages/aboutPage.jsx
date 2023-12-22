import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-customBlue mb-4">
          Welcome to UFL Wall!
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          UFL Wall is a vibrant web application designed exclusively for
          University of Florida students. It provides a space for students to
          share notes, experiences, and announcements with their peers and
          anyone interested in the UFL community.
        </p>

        <p className="text-lg text-gray-700 mb-8">
          To contribute to the UFL Wall, users are encouraged to verify their
          UFL email, ensuring a secure and trustworthy environment for everyone.
          Explore the board and stay updated on the latest campus happenings!
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-customBlue mb-4">
            Creators
          </h2>
          <p className="text-lg text-gray-700">
            UFL Wall was created by University Of Florida students{" "} and the source code is available <a href="https://github.com/ASLaskin/uflwall" className="underline text-customBlue hover:text-customOrange">Here</a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-customBlue mb-4">
            Technologies Used
          </h2>
          <ul className="list-disc pl-6">
            <li className="text-lg text-gray-700 mb-2">
              <strong>React + Vite:</strong> Front-end framework for building a
              dynamic and responsive user interface.
            </li>
            <li className="text-lg text-gray-700 mb-2">
              <strong>Firebase:</strong> Backend service for real-time data
              storage and retrieval.
            </li>
            <li className="text-lg text-gray-700">
              <strong>Tailwind CSS:</strong> Utility-first CSS framework for
              efficient and responsive styling.
            </li>
          </ul>
        </div>
        <a href="https://uflwall.web.app/"  rel="noopener noreferrer">
          <button className="mt-8 px-4 py-2 text-sm font-medium text-white bg-customBlue rounded-md hover:bg-customOrange focus:outline-none focus:ring focus:border-blue-300">
            Back to Home
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
