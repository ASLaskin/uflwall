import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Home = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const notesCollection = collection(db, "notes");
        const snapshot = await getDocs(notesCollection);
        const entriesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setEntries(entriesData);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-customBlue mb-4">
          Entries from Students:
        </h1>
        <ul className="list-disc pl-6">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="text-black flex flex-row space-x-2 mb-2"
            >
              <p className="text-lg">{entry.note}</p>
              <p className="text-gray-500">- {entry.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
