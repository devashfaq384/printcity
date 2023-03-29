import React from 'react'
import Red from '../../images/red.png'
import { CheckIcon } from '@heroicons/react/24/solid'
import NextStep from '../NextStep/NextStep'

const Styles = () => {
  return (
    <div className=' w-full sm:w-auto px-5 sm:p-auto ' >
        <div className='text-[28px] my-3 text-white text-center ' >
            Chose your favorite style!
        </div>
    <div className='flex flex-row justify-between sm:grid-cols-4 gap-3' >
        <div className="relative  w-16 h-16 rounded-2xl overflow-hidden">
                <img src={Red} alt="Red" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                <div className="text-white">
                    <CheckIcon className="h-10 w-10 font-bold" />
                </div>
            </div>
        </div>
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <img src={Red} alt="Red" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                <div className="text-white">
                    <CheckIcon className="h-10 w-10 font-bold" />
                </div>
            </div>
        </div>
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <img src={Red} alt="Red" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                <div className="text-white">
                    <CheckIcon className="h-10 w-10 font-bold" />
                </div>
            </div>
        </div>
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                <img src={Red} alt="Red" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                <div className="text-white">
                    <CheckIcon className="h-10 w-10 font-bold" />
                </div>
            </div>
        </div>
    </div>

        <div className='my-3 flex'>
              <input type="checkbox" name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
              <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-gray-600' >
                    Horizontal
             </lable> 
        </div>

        <NextStep></NextStep>
    </div>

  )
}

export default Styles