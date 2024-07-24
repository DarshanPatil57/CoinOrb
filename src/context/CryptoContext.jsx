import { useState } from "react";
import { createContext } from "react";
import { useLayoutEffect } from "react";

// create context object 
export const CryptoContext = createContext({

})

// create context provider 

export const CryptoProvider = ({children}) =>{
    const [cryptoData,setCryptoData] = useState([])
    const [searchData,setSearchData] = useState([])
    const [coinsearchData,setCoinSearchData] = useState("")

    const [currency,setCurrency] = useState("usd")
    const [sortBy,setSortBy] = useState("market_cap_desc")
    const [page,setPage] = useState(1)
    const [totalPage,setTotalPage] = useState(250)

    const getCryptoData = async () => {

        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
            .then(res => res.json())
            .then(json => json)
            // console.log(data);
            setTotalPage(data.length)
        } catch (error) {
            console.log(error);
        }

        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
            .then(res => res.json())
            .then(json => json)
            // console.log(data);
            setCryptoData(data)
        } catch (error) {
            console.log(error);
        }
    }

    const getSearchResult = async (query) => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/search?query=${query}`)
            .then(res => res.json())
            .then(json => json)
            // console.log(data);
            setSearchData(data.coins)

        } catch (error) {
            console.log(error);
        }
    }
        const resetButton = () => {
            setPage(1)
            setCoinSearchData("")
        }

    useLayoutEffect(() => {
        getCryptoData()
    }, [coinsearchData,currency,sortBy,page])
    
    return (
        <CryptoContext.Provider value={{cryptoData,searchData,getSearchResult,coinsearchData,setCoinSearchData,setSearchData,currency,setCurrency,sortBy,setSortBy,page,setPage,totalPage,resetButton}}>
            {children}
        </CryptoContext.Provider>
    )
}