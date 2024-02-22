import { getFirestore, collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
function Modal({ handleClose, firebaseApp }) {
  //This closes the modal
  const handleCloseModal = () => {
    handleClose();
  };
  //This is where the authorization
  const handleSendCode = (e) => {
    e.preventDefault();
    console.log("send code");
  };

  //Handle submit is where the note is submitted to the database

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const date = new Date();
    const formattedDate = `${date.getMonth() + 1}`;
    // ^ Assuming you want to store entries based on the month only
  
    const email = document.getElementById("email").value;
    const code = document.getElementById("code").value;
    const note = document.getElementById("note").value;
  
    if (email === "" || code === "" || note === "") {
      alert("Please fill out all fields");
      return;
    }
    const timestamp = new Date().toISOString();
    const monthDayAndYear = timestamp.slice(0, 10); 
  
    try {
      const firestore = getFirestore(firebaseApp);
      const monthDocRef = doc(collection(firestore, "2024"), formattedDate);
      const entriesCollectionRef = collection(monthDocRef, "entries");
  
      await addDoc(entriesCollectionRef, {
        email,
        code,
        note,
        timestamp: monthDayAndYear,
      });
  
      alert("Note added successfully!");
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      ></span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div>
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
        </div>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <h1 className="text-3xl leading-6 font-bold text-gray-900">
            Create Your Wall Entry
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Make a note that will last on the UFL wall
          </p>
          <form className="mt-8">
            <div className="mb-4 flex">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address (e.g., example@ufl.edu)
              </label>
              <input
                className="w-full px-3 py-2 text-black border-customBlue border-2 bg-white rounded-lg focus:outline-none"
                type="text"
                id="email"
                // pattern="[a-z0-9._%+-]+@ufl.edu"  commented out for testing purposes
                placeholder="Enter your @ufl.edu email"
              />
              <button
                className="ml-4 bg-customBlue hover:bg-customOrange text-white font-bold py-2 px-4 rounded"
                onClick={handleSendCode}
              >
                Send Code
              </button>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="code"
              >
                6-Digit Code
              </label>
              <input
                className="w-full px-3 py-2 text-black border-customBlue border-2 bg-white rounded-lg focus:outline-none"
                type="text"
                id="code"
                pattern="[0-9]{6}"
                maxLength="6"
                placeholder="Enter your 6-digit code"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Your Note
              </label>
              <textarea
                className="w-full px-3 py-2 text-black border-customBlue border-2 bg-white rounded-lg focus:outline-none"
                placeholder="Enter your note here.."
                maxLength="280"
                id="note"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-customBlue hover:bg-customOrange text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
