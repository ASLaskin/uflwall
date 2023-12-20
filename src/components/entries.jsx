import React, { useState, useEffect } from "react";
import Header from "./header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";
import { initializeApp } from "firebase/app";
import HashLoader from "react-spinners/HashLoader";

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const Entries = ({ month, year, searchClicked }) => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [entriesExist, setEntriesExist] = useState(true);

  //They way this works is that it fetches all the entries from the database and then displays them on the page
  //The database is storing them as year -> month -> entries -> entry
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entriesData = [];
  
        // Use month and year only if searchClicked is true
        if (searchClicked) {
          const entriesCollectionRef = collection(db, year, month, "entries");
          const entriesSnapshot = await getDocs(entriesCollectionRef);
  
          entriesSnapshot.forEach((entryDoc) => {
            entriesData.push({
              id: entryDoc.id,
              date: month,
              ...entryDoc.data(),
            });
          });
        } else {
          // Fetch all entries if search button is not clicked
          const monthsList = [
            "01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12",
          ];
  
          for (const currentMonth of monthsList) {
            const entriesCollectionRef = collection(db, "2023", currentMonth, "entries");
            const entriesSnapshot = await getDocs(entriesCollectionRef);
  
            entriesSnapshot.forEach((entryDoc) => {
              entriesData.push({
                id: entryDoc.id,
                date: currentMonth,
                ...entryDoc.data(),
              });
            });
          }
        }
  
        setEntries(entriesData);
        setLoading(false);
  
        // Check if entriesData has any entries
        setEntriesExist(entriesData.length > 0);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
  
    fetchEntries();
  }, [db, month, year, searchClicked]);

  return (
    <div>
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
          <>
            {entriesExist ? (
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
            ) : (
              <div className="flex items-center justify-center flex-col ">
                <h1 className="text-3xl font-bold text-customBlue">
                  No entries found
                </h1>
                <h2 className="text-2xl font-bold text-customBlue">
                  Try searching for a different month
                </h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Entries;
