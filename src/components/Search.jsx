import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "debounce";

const SearchInput = () => {
    const [searchText, setSearchText] = useState("");
    const { filterData } = useContext(CryptoContext); 

    const handleInput = (e) => {
        const query = e.target.value;
        setSearchText(query);
        filterData(query);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        filterData(searchText);
    };

    return (
        <form className="relative w-full flex items-center font-nunito" onSubmit={handleSubmit}>
            <input
                onChange={handleInput}
                value={searchText}
                type="text"
                name="search"
                placeholder="Search Here ..."
                className="w-full sm:w-96 rounded p-2 bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan text-sm sm:text-base"
            />
        </form>
    );
};

export default SearchInput;


