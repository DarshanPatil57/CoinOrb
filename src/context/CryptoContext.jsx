import { useState } from "react";
import { createContext } from "react";
import { useLayoutEffect } from "react";

// create context object 
export const CryptoContext = createContext({

})

// create context provider 

export const CryptoProvider = ({children}) =>{
    const [cryptoData,setCryptoData] = useState()

    const getCryptoData = async () => {
        try {
            const data = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`)
            .then(res => res.json())
            .then(json => json)
            console.log(data);
            setCryptoData(data)
        } catch (error) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        getCryptoData()
    }, [])
    
    return (
        <CryptoContext.Provider value={{cryptoData}}>
            {children}
        </CryptoContext.Provider>
    )
}