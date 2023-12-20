import Header from "../components/header";
import Entries from "../components/entries";
import { useState } from "react";

const MainPage = () => {
    const [searchClicked, setSearchClicked] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleSearch = () => {
        setSearchClicked(true);
        setSelectedMonth(document.getElementById("month").value);
        setSelectedYear(document.getElementById("year").value);
        console.log("selectedMonth: ", selectedMonth);
        console.log("selectedYear: ", selectedYear);
    }

    return (
        <>
            <Header
                onSearch={handleSearch}
                selectedMonth={selectedMonth}
                selectedYear={selectedYear}
             />
            <Entries 
                month={selectedMonth}
                year={selectedYear}
                searchClicked={searchClicked}
            />
        </>
    );
}

export default MainPage;