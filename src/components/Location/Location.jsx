import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import LocationFav from './LocationFav'
import NextStep from '../NextStep/NextStep'
import { useDispatch, useSelector } from 'react-redux'
import { setGeocoderInput  } from '../../store/slices/searchSlice'
import { changeTitle } from '../../store/slices/Text'

const Location = () => {
  const dispatch = useDispatch()
  const geocoderInputValue = useSelector((state) => state);
  const value = useRef()

  const handleSearch = (event) => {
    event.preventDefault();
    const geocoderInput = value.current.value
    console.log(typeof(geocoderInput) , 'value')
    dispatch(setGeocoderInput(geocoderInput));
    dispatch(changeTitle({
      title: geocoderInput
    }))
    // console.log(geocoderInputValue)

  };
  
  return (
    <div className='flex flex-col w-full sm:w-auto mx-auto px-5' >
      <div className='text-[30px] text-white text-center mx-auto w-10/12 leading-10 my-2' >
        Find your favorite place
      </div>
      <form className='flex flex-col justify-center' >
        <div className='flex justify-center'>
          <input type="text" ref={value} placeholder='Enter place' className='w-11/12 pl-3 text-sm ring-0 outline-none' />
          <button onClick={handleSearch} type='submit' className='bg-black p-3'>
            <MagnifyingGlassIcon className='h-5 text-white' ></MagnifyingGlassIcon>
          </button>
        </div>
        <div className='my-3 flex'>
          <input type="checkbox" name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
          <label htmlFor='city' className='pl-3 text-sm text-white cursor-pointer text-gray-600' >
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