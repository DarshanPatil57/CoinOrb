import React, { useContext, useRef } from 'react'
import Search from './Search'
import submitIcon from "../assets/submit-icon.svg"
import selectIcon from "../assets/select-icon.svg"
import { CryptoContext } from '../context/CryptoContext'

const Filter = () => {
  let {setCurrency,setSortBy, resetButton} = useContext(CryptoContext)
   const currencyRef = useRef(null)

  const handleCurrencySubmit = (e) => {
    e.preventDefault()
    let val = currencyRef.current.value;
    setCurrency(val)
    currencyRef.current.value =""
  }

  const handleSort = (e) =>{
    e.preventDefault()
    let val = e.target.value
    setSortBy(val)
  }
  return (
    <div className='w-full h-12 border-2 border-gray-100 rounded-lg flex items-center justify-between relative'>
        <Search/>
        <div className='flex mr-7'>
          <form type="text" className='relative flex items-center font-nunito mr-12' onSubmit={handleCurrencySubmit}>
            <label
             htmlFor="currency"
             className='relative flex justify-center items-center mr-2 font-bold '
             >Currency :</label>
            <input type="text"
            ref={currencyRef}
             name='currency'
             placeholder='USD'
             className='w-16 rounded bg-gray-200 placeholder:text-gray-100 p-1 required: outline-0 border border-transparent focus:border-cyan leading-4'
              />
            <button 
            type='submit' className='ml-2 cursor-pointer'>
              <img src={submitIcon} alt="submiticon" className='w-full h-auto'
               />
            </button>
          </form>
          <label className='relative fex justify-center items-center'>
        <span className='font-bold mr-2'>Sort By :</span>
        <select name="sortby"
        className='rounded bg-gray-200 text-base pl-2 pr-10 py1.5 leading-4 capitalize focus:outline-0 p-1.5 '
        onClick={handleSort}
        >
          <option value="market_cap_desc">market cap desc</option>
          <option value="market_cap_asc">market cap asc</option>
          <option value="volume_desc">volume desc</option>
          <option value="volume_asc">volume asc</option>
          <option value="id_desc">id desc</option>
          <option value="id_asc">id asc</option>
          <option value="gecko_desc">geco desc</option>
          <option value="gecko_asc">gecko_asc</option>
        </select>
        <img src={selectIcon} alt="selecticon" className=' absolute right-0.5 top-2 w-[1rem] h-auto pointer-events-none'
               />
       </label>
       <button className='w-[2rem] ml-4' onClick={resetButton}>
        reset
       </button>
        </div>
    </div>
  )
}

export default Filter