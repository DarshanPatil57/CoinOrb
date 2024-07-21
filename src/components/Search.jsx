import React, { useState } from 'react'
import searchIcon from "../assets/search-icon.svg"

const Search = () => {
    const [searchText,setSearchText] = useState()

    const handleInput = (e)=>{
        e.preventDefault()
        let query = e.target.value
        setSearchText(query)
        // console.log(query);

    }
  return (
  <>
    <form className='w-96 relative flex items-center ml-7 font-nunito'>
        <input onChange={handleInput} value={searchText} type="text" name='search' placeholder='Search Here ...'   className='w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan' />
        <button type='submit' className='absolute right-1 cursor-pointer'>
            <img src={searchIcon} className='w-full h-auto' alt="search" />
        </button>
    </form>
    {/* {
        searchText.length > 0 ? 
        <ul>
            <li>Bitcon</li>
        </ul> : null
    } */}
  </>
  )
}

export default Search