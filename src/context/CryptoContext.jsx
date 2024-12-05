// import { useState, createContext, useLayoutEffect } from "react";

// // Create context object 
// export const CryptoContext = createContext({});

// // Create context provider 
// export const CryptoProvider = ({children}) => {
//     const [cryptoData, setCryptoData] = useState([]);
//     const [searchData, setSearchData] = useState([]);
//     const [coinData, setCoinData] = useState();
//     const [coinsearchData, setCoinSearchData] = useState([]); // Initialize as an array

//     const [currency, setCurrency] = useState("usd");
//     const [sortBy, setSortBy] = useState("market_cap_desc");
//     const [page, setPage] = useState(1);
//     const [totalPage, setTotalPage] = useState(250);

//     const getCryptoData = async () => {
//         setCryptoData([]);

//         try {
//             const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
//                 .then((res) => res.json())
//                 .then((json) => json);
//             setTotalPage(data.length);
//             // console.log(data);
            
//         } catch (error) {
//             console.log(error);
//         }

//         try {
//             const data = await fetch(
//                 `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinsearchData}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
//             )
//                 .then((res) => res.json())
//                 .then((json) => json);
//             setCryptoData(data);
            
//         } catch (error) {
//             console.log(error);
//         }
        
//     };

//     const getCoinData = async (coinId) => {
//         setCoinData();
//         try {
//             const data = await fetch(
//                 `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
//             )
//                 .then((res) => res.json())
//                 .then((json) => json);
//             setCoinData(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const getSearchResult = async (query) => {
//         try {
//             const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
//                 .then((res) => res.json())
//                 .then((json) => json);
//             setSearchData(data.coins);
//             setCoinSearchData(data.coins); // Update search results
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const resetButton = () => {
//         setPage(1);
//         setCoinSearchData([]); // Reset search data
//         setSearchData([]); // Reset search data
//     };

//     useLayoutEffect(() => {
//         getCryptoData();
//     }, [coinsearchData, currency, sortBy, page]);

//     return (
//         <CryptoContext.Provider
//             value={{
//                 cryptoData,
//                 searchData,
//                 getSearchResult,
//                 coinsearchData,
//                 setCoinSearchData,
//                 setSearchData,
//                 currency,
//                 setCurrency,
//                 sortBy,
//                 setSortBy,
//                 page,
//                 setPage,
//                 totalPage,
//                 resetButton,
//                 getCoinData,
//                 coinData,
//             }}
//         >
//             {children}
//         </CryptoContext.Provider>
//     );
// };


import { useState, createContext, useLayoutEffect } from "react";

// Create context object
export const CryptoContext = createContext({});

// Create context provider
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]); 
  const [currency, setCurrency] = useState("usd");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(250);
  const [coinData, setCoinData] = useState(null); 

  const getCryptoData = async () => {
    setCryptoData([]);
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      ).then((res) => res.json());
      // console.log(data);
      
      setCryptoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (query) => {
    if (!query) {
      getCryptoData(); // Reset data if query is empty
    } else {
      setCryptoData((prevData) =>
        prevData.filter(
          (coin) =>
            coin.name.toLowerCase().includes(query.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const getCoinData = async (coinId) => {
    setCoinData(null);
    try {
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      ).then((res) => res.json());
      setCoinData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetButton  = ()=>{
    setPage(1)
    setSortBy("market_cap_desc")
    setCurrency('usd')
  }

  useLayoutEffect(() => {
    getCryptoData();
  }, [currency, sortBy, page]);

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        filterData,
        getCryptoData,
        getCoinData,
        coinData,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        page,
        setPage,
        totalPage,
        resetButton
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};




// .............................................................................................




// import { useState, createContext, useLayoutEffect } from "react";

// // Create context object
// export const CryptoContext = createContext({});

// // Create context provider
// export const CryptoProvider = ({ children }) => {
//   const [cryptoData, setCryptoData] = useState([]); // Main data displayed in the table
//   const [coinData, setCoinData] = useState(null); // Stores detailed data of a selected coin
//   const [searchResults, setSearchResults] = useState([]); // Holds the search results
//   const [currency, setCurrency] = useState("usd"); // Currency for data conversion
//   const [sortBy, setSortBy] = useState("market_cap_desc"); // Sorting criteria
//   const [page, setPage] = useState(1); // Pagination state
//   const [totalPage, setTotalPage] = useState(250); // Total pages for pagination

//   // Function to fetch cryptocurrency data (either regular data for the table or search results)
//   const getCryptoData = async (query = "") => {
//     setCryptoData([]); // Clear existing data before fetching new data

//     try {
//       const url = query
//         ? `https://api.coingecko.com/api/v3/search?query=${query}`
//         : `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;

//       const data = await fetch(url).then((res) => res.json());

//       if (query) {
//         // If there is a search query, set search results directly
//         setSearchResults(data.coins); // 'data.coins' contains the search results
//       } else {
//         // If no query, set regular table data
//         setCryptoData(data);
//       }
//     } catch (error) {
//       console.log("Error fetching crypto data:", error);
//     }
//   };

//   // Function to get detailed data of a selected coin when clicking on a search result or table row
//   const getCoinData = async (coinId) => {
//     try {
//       const data = await fetch(
//         `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
//       ).then((res) => res.json());
//       setCoinData(data); // Store detailed data of the selected coin
//     } catch (error) {
//       console.log("Error fetching coin data:", error);
//     }
//   };

//   // Function to handle search queries and update data
//   const filterData = (query) => {
//     if (!query) {
//       getCryptoData(); // Reset data if query is empty
//     } else {
//       getCryptoData(query); // Fetch data based on the query
//     }
//   };

//   // Re-fetch table data whenever `currency`, `sortBy`, or `page` changes
//   useLayoutEffect(() => {
//     getCryptoData();
//   }, [currency, sortBy, page]);

//   return (
//     <CryptoContext.Provider
//       value={{
//         cryptoData, // Main data for the table
//         searchResults, // Search results
//         filterData, // Function to handle search
//         getCryptoData, // Function to fetch data
//         getCoinData, // Function to fetch detailed data of a selected coin
//         coinData, // Detailed data of the selected coin
//         currency,
//         setCurrency,
//         sortBy,
//         setSortBy,
//         page,
//         setPage,
//         totalPage,
//       }}
//     >
//       {children}
//     </CryptoContext.Provider>
//   );
// };
