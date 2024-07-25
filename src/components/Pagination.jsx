import React, { useContext, useState } from 'react'
import PaginationArrow from "../assets/pagination-arrow.svg";
import { CryptoContext } from '../context/CryptoContext';

const Pagination = () => {
    let {page,setPage,totalPage} = useContext(CryptoContext)
    const totalNumber = Math.ceil(totalPage/10)

    const next =() =>{
        if(page === totalNumber){
            return null
        } else {
            setPage(page+1)
        }
    }
    const previous =() =>{
        if(page === 1){
            return null
        } else {
            setPage(page-1)
        }
    }

    const multiStepNext = () =>{
        if(page + 2 >=totalNumber){
            setPage(totalNumber - 1)
        } else{
            setPage(page + 2)
        }
    }

    const multiStepPrev = () =>{
        if(page - 2 <=1){
            setPage(totalNumber + 1)
        } else{
            setPage(page - 1)
        }
    }

    // TODO : RELATED TO SEARCH FILTER AND PAGINATION .

  return (
    <div className='flex items-center'>
        <ul className='flex items-center justify-end text-sm'>
            <li className='flex items-center'>
                <button className=' outline-0 rotate-180 hover:text-cyan' onClick={previous}>
                <img className='w-full h-auto' src={PaginationArrow} alt="paginationArrow" />
                </button>
            </li>

           {
            (page +1 === totalNumber || page === totalNumber) ?  <li><button onClick={multiStepPrev} className=' outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button></li> : null
           }

            {
                (page !==0) ? <li><button onClick={previous} className=' outline-0  rounded-full w-8 h-8 flex items-center justify-center text-gray-200 bg-cyan mx-1'>{page}</button></li> :null
            }

            {
                (page + 1 !==totalNumber &&page !==totalNumber )  ? <li><button onClick={next} className=' outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1'>{page + 1}</button></li> : null
            }

            {/* <li><button className=' outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center bg-gray-200 mx-1'>3</button></li> */}
            {
               (page + 1 !==totalNumber &&page !==totalNumber) ? <li>
                <button onClick={multiStepNext} className=' outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg'>...</button>
            </li> :null
            }
            {
            page !==totalNumber ? (
                    <li><button onClick={() => setPage(totalNumber)} className=' outline-0 hover:text-cyan rounded-full w-8 h-8 flex items-center justify-center'>{totalNumber}</button></li>
                ) : null
            }
            <li>
            <button className=' outline-0  hover:text-cyan' onClick={next}>
                <img className='w-full h-auto' src={PaginationArrow} alt="paginationArrow" />
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Pagination