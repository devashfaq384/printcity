import React from 'react'
import NextStep from '../NextStep/NextStep'

const Material = () => {
  return (
    <div className='mx-auto' >
        <div className=' text-[25px] md:text-[30px] text-white mb-5' >Choose the Material</div>
        <select name="acoustic" id="acoustic" className='ring-0 w-[250px] outline-none rounded-xl py-1 bg-red-300 text-gray-600'  >
            <option selected>Choose an option</option>
            <option>BASIC {`(AW 0.65)`}</option>
            <option>PRO {`(AW 0.90)`}</option>
        </select>
        <NextStep></NextStep>
    </div>
  )
}

export default Material