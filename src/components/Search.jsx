import React, { useContext, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import debounce from "debounce";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  let { searchData,setCoinSearchData ,setSearchData} = useContext(CryptoContext);

  const handleInput = (e) => {
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
    // console.log(query);
  };

  const selectCoin = (coins) => {
    setCoinSearchData(coins)
    setSearchText(" ")
    setSearchData([])
  }
  return (
    <>
      <form className="w-96 relative flex items-center ml-7 font-nunito" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleInput}
          value={searchText}
          type="text"
          name="search"
          placeholder="Search Here ..."
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2  required outline-0 border border-transparent focus:border-cyan"
        />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} className="w-full h-auto" alt="search" />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul className="absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchData ? (
            searchData.map(coins => { 
              return <li className="flex items-center ml-4 my-2 cursor-pointer"
               key={coins.id}
               onClick={()=>selectCoin(coins.id)}
               >
                 <img 
                      className="w-[1rem] h-[1rem] mx-1.5"
                      src={coins.thumb}
                      alt={coins.name}
                    />
                    <span>{coins.name}</span>
              </li>;
            })
          ) : (
            <h2>Please wait ...</h2>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  //   debounce function for search

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 500);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
