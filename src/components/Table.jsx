import React from 'react'

const Table = () => {
  return (
    <div className='flex flex-col mt-9 border border-gray-100 rounded'>
        <table className='w-full table-auto'>
            <thead className=' capitalize  text-base text-gray-100 font-medium border-b border-gray-100'>
                <tr>
                    <th className='py-2'>Asset</th>
                    <th className='py-2'>Name</th>
                    <th className='py-2'>Price</th>
                    <th className='py-2'>Total Volume</th>
                    <th className='py-2'>Market Cap Change</th>
                    <th className='py-2'>1H</th>
                    <th className='py-2'>24H</th>
                    <th className='py-2'>1D</th>
                </tr>
            </thead>
            <tbody>
            <tr className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0'>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
                <td className='py-4'>Hello</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table