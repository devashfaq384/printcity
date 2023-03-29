import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid' 

const NextStep = () => {
  return (
    <div>
        <button className='flex justify-center text-sm h-10 mt-[10%] items-center bg-yellow-300 rounded-full w-full'>
            Next Step
            <ArrowRightIcon className='h-4 pl-3'></ArrowRightIcon>
        </button>
        <div className='flex justify-center text-sm ml-[-20px] mt-2' >Order now</div>
    </div>
  )
}

export default NextStep