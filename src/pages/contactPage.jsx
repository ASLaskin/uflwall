const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold text-customBlue mb-4">
          Contact UFL Wall
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Have questions, suggestions, or just want to get in touch with the UFL
          Wall team? We'd love to hear from you! Reach out through the
          following contact options:
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <h2 className="text-2xl font-semibold text-customBlue mb-4">
            Contact Form
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-customBlue rounded-md hover:bg-customOrange focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>


        <a
          href="https://uflwall.web.app/"
          className="mt-8 px-4 py-2 text-sm font-medium text-white bg-customBlue rounded-md hover:bg-customOrange focus:outline-none focus:ring focus:border-blue-300"
          rel="noopener noreferrer"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Contact;
