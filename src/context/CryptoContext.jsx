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

    const getCryptoData = async () => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${sortBy}&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
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

    useLayoutEffect(() => {
        getCryptoData()
    }, [coinsearchData,currency,sortBy])
    
    return (
        <CryptoContext.Provider value={{cryptoData,searchData,getSearchResult,coinsearchData,setCoinSearchData,setSearchData,currency,setCurrency,sortBy,setSortBy}}>
            {children}
        </CryptoContext.Provider>
    )
}