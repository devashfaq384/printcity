import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import LocationFav from './LocationFav'
import NextStep from '../NextStep/NextStep'

const Location = () => {
  return (
    <div className='flex flex-col mx-auto' >
      <div className='text-[30px] text-white text-center mx-auto w-10/12 leading-10 my-2' >
        Find your favorite place
      </div>
      <form className='flex flex-col justify-center' >
        <div className='flex justify-center'>
          <input type="text" placeholder='Enter place' className='w-11/12 pl-3 text-sm ring-0 outline-none' />
          <button type='submit' className='bg-black p-3'>
            <MagnifyingGlassIcon className='h-5 text-white' ></MagnifyingGlassIcon>
          </button>
        </div>
        <div className='my-3 flex'>
          <input type="checkbox" name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
          <label htmlFor='city' className='pl-3 text-sm cursor-pointer text-gray-600' >
            Show city names on the map
          </label> 
        </div>
      </form>

      {/* favorites  */}
      <div className='hidden lg:block' >
        <div className='text-[30px] text-white text-center my-2' >
          Or try our favorites!
        </div>
        <div className='grid grid-cols-2 gap-4' >
          <LocationFav name='Amsterdam' />
          <LocationFav name='Rotterdam' />
          <LocationFav name='Barcelona' />
          <LocationFav name='New York' />
        </div>
      </div>

      <NextStep  ></NextStep>

    </div>
  )
}

export default Location