import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import HashLoader from "react-spinners/HashLoader";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  //They way this works is that it fetches all the entries from the database and then displays them on the page
  //The database is storing them as year -> month -> entries -> entry
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const monthsList = [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ];

        const entriesData = [];

        for (const month of monthsList) {
          const entriesCollectionRef = collection(db, "2023", month, "entries");
          const entriesSnapshot = await getDocs(entriesCollectionRef);

          entriesSnapshot.forEach((entryDoc) => {
            entriesData.push({
              id: entryDoc.id,
              date: month,
              ...entryDoc.data(),
            });
          });
        }

        setEntries(entriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, [db]);

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold text-customBlue ml-4 pb-3">
          Entries from Students:
        </h1>
        {loading ? (
          <div className="flex items-center justify-center flex-col ">
            <HashLoader color="#FA4616" size={100} />
            <h1 className="text-3xl font-bold text-customBlue">
              Fetching all entries
            </h1>
            <h2 className="text-2xl font-bold text-customBlue">
              Just a second
            </h2>
          </div>
        ) : (
          <ul className="list-disc pl-6">
            {entries.map((entry) => (
              <li
                key={entry.id}
                className="text-black flex flex-row space-x-2 mb-2"
              >
                <p className="text-lg">{entry.note}</p>
                <p className="text-gray-500">- {entry.timestamp}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
