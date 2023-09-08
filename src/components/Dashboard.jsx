import { Options } from "./Options";
import styles from "./dashboard.module.css";
import { useFetchData } from "../hooks/useFetchData";
import { useState } from "react";
import Character from "./Character";
import Movie from "./Movie";
import Books from "./Books";
import Loader from "./Loader";
const Dashboard = () => {
    const [selection, setSelection] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState(null);
    const { data, error, isLoading, setData } = useFetchData(selection);


    const renderData = {
        "character": <Character characters={searchInput ? filteredData : data} />,
        "movie": <Movie movies={searchInput ? filteredData : data} />,
        "book": <Books books={searchInput ? filteredData : data} />
    }
    const searchThroughData = () => {
        const resultData = data.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredData(resultData);
    }
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
        searchThroughData();
    }

    const searchData = (e) => {
        e.preventDefault();
        if (!searchInput) return;
        searchThroughData();
    }


    return (
        <div className={styles.dashboard}>
            <div className={styles.layout}>
                <Options selection={selection} setSelection={setSelection} />
                {isLoading && <Loader />}
                {
                    error && <p>Something went wrong! {error}</p>
                }
                {
                    (data && !isLoading) && <>
                        <form onSubmit={searchData} className={styles.form}>
                            <input type="text" value={searchInput} onChange={handleSearchChange} placeholder="search..." className={styles.searchInput} />
                            <button type="submit" className={styles.searchBtn} >
                                Search
                            </button>
                        </form>
                        {renderData[selection]}
                    </>
                }

            </div>
        </div>
    )
}

export default Dashboard