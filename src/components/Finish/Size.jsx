import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Size = () => {
  return (
    <div className='w-full mx-3 ' > 
        <div className='text-[30px] text-white text-center' >
            Choose your size
        </div>
        {/* Metric units */}

        <div className='text-white text-[20px] my-3 pl-2 ' >Metric Units</div>
        <div className='grid grid-cols-2 w-full ' >
            <button className=' text-green-700 hover:text-white bg-white hover:bg-green-900 rounded-full h-9 w-full ' >{`Imperial[Inch]`}</button>
            <button className='text-green-700 hover:text-white bg-white hover:bg-green-900 rounded-full h-9 w-full ' >{`Imperial[Inch]`}</button>
        </div>
        
        <div className='text-white text-[20px] my-3 pl-2 ' >Metric Units</div>
        <div className='flex flex-col grid-cols-12 w-full ' >
            <button className=' flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-green-900 rounded-full h-9 w-full ' >
                <span>
                    Small 11 x 17 inch
                </span> 
                <span>
                    Price
                </span>
            </button>
            <button className='flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-green-900 rounded-full h-9 w-full ' >
                <span>
                    Medium 18 x 24 inch
                </span>
                <span>Price</span>
            </button>
            <button className='flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-green-900 rounded-full h-9 w-full' > 
                <span>
                    Large 24 x 36 inch
                </span>
                <span>
                    Price
                </span>
            </button>

            <button className='flex justify-center text-sm h-10 mt-[10%] items-center bg-yellow-300 rounded-full w-full'>
                <CheckIcon className='h-5 font-bold pl-3'></CheckIcon>
                Order my map
            </button>
        </div>
    </div>
  )
}

export default Size