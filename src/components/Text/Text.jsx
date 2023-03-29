import React from 'react'
import NextStep from '../NextStep/NextStep'

const Text = () => {
  return (
    <div className='w-10/12 mx-auto' >
      <div className='text-white text-[35px] text-center '>
        Edit the text
      </div>
      <form className='flex  flex-col' >
        <div className='flex flex-col'>
          <label className=' my-2 font-bold text-sm text-gray-700/70' >Title</label>
          <input type="text" Value="Amsterdam" className=' h-8 pl-3' />
        </div>
        <div className='flex flex-col'>
          <label className=' my-2 text-sm font-bold text-gray-700/70' >Subtitle</label>
          <input type="text" Value="Coordinates" className='h-8 pl-3 ' />
        </div>
        <div className='mb-1 mt-2 flex'>
          <input type="checkbox" name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
          <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-gray-600' >
            Show city names on the map
          </lable> 
        </div>
        <div className='my-1 flex'>
          <input type="checkbox" name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
          <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-gray-600' >
            Hide the text
          </lable> 
        </div>
      </form>
      <NextStep></NextStep>
    </div>
  )
}

export default Text