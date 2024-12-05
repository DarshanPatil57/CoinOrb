import React, { useContext, useRef } from 'react';
import Search from './Search';
import submitIcon from "../assets/submit-icon.svg";
import selectIcon from "../assets/select-icon.svg";
import { CryptoContext } from '../context/CryptoContext';

const Filter = () => {
  const { setCurrency,sortBy, setSortBy, resetButton } = useContext(CryptoContext);
  const currencyRef = useRef(null);

  const handleCurrencySubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
    currencyRef.current.value = "";
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    setSortBy(val);
  };

  return (
<div className='w-full h-auto border-2 border-gray-100 rounded-lg flex flex-col md:flex-row items-center justify-between p-2 md:p-4 relative space-y-4 md:space-y-0'>
  <Search />
  <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 w-full'>
    <form
      type="text"
      className='flex items-center font-nunito w-full md:w-auto'
      onSubmit={handleCurrencySubmit}
    >
      <label htmlFor="currency" className='font-bold text-lg mr-2'> 🪙 </label>
      <input
        type="text"
        ref={currencyRef}
        name='currency'
        placeholder='USD'
        className='w-full md:w-28 lg:w-32 rounded bg-gray-200 placeholder:text-gray-100 p-1.5 focus:outline-none border border-transparent focus:border-cyan leading-4'
      />
      <button type='submit' className='cursor-pointer'>
        <img src={submitIcon} alt="submit icon" className='w-8 h-8 ml-1' />
      </button>
    </form>

    <div className="relative w-full md:w-auto">
     <select
  name="sortby"
  value={sortBy}
  className="w-full max-w-xs sm:max-w-xs md:max-w-md rounded bg-gray-200 p-1.5 text-sm focus:outline-none border border-gray-300 focus:border-cyan-500 max-h-32 overflow-y-auto"
  onChange={handleSort}
>
  <option value="market_cap_desc">Market Cap Desc</option>
  <option value="market_cap_asc">Market Cap Asc</option>
  <option value="volume_desc">Volume Desc</option>
  <option value="volume_asc">Volume Asc</option>
  <option value="id_desc">ID Desc</option>
  <option value="id_asc">ID Asc</option>
  <option value="gecko_desc">Gecko Desc</option>
  <option value="gecko_asc">Gecko Asc</option>
</select>

      <img
        src={selectIcon}
        alt="select icon"
        className="absolute right-1  top-1/2 transform -translate-y-1/2 w-3 h-3 pointer-events-none"
      />
    </div>

    <button className='w-20 md:w-24 lg:w-32 ml-4 md:ml-0 text-center bg-cyan text-[#020617]  py-2 px-4 rounded-md' onClick={resetButton}>
      Reset
    </button>
  </div>
</div>

  );
};

export default Filter;
