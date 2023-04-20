import React, { useState } from 'react'
import Red from '../../images/red.png'
import { CheckIcon } from '@heroicons/react/24/solid'
import NextStep from '../NextStep/NextStep'
import { StylesList } from './StylesList'
import { useDispatch, useSelector } from 'react-redux'
import { changeStyle } from '../../store/slices/styleSlice'
import { changeSize } from '../../store/slices/Size'

const Styles = () => {
    const dispatch = useDispatch()
    const dir = useSelector((state)=>state.sizeState)
    const [selectedStyle, setSelectedStyle] = useState(null);

    const horizontal =()=>{
        dispatch(changeSize(
                    
                    
            dir === true ? 
             {
                 direction : true ,
                 height : '450px',
                 width : '250px'
             }:
             {
                 direction : false ,
                 width : '450px',
                 height : '250px'
             }
         
     ))
    }
 return (
    <div className=' mx-auto sm:w-auto px-5 sm:p-auto ' >
        <div className='text-[28px] my-3 text-white text-center ' >
            Chose your favorite style!
        </div>
    <div className='flex flex-wrap cursor-pointer justify-between sm:grid-cols-4 gap-3' >
        { StylesList.map((item , index )=>{
            return(
                <div key={index} onClick={()=>{
                    setSelectedStyle(item);
                    dispatch( changeStyle(item) )
                }} className="relative w-16 h-16 rounded-2xl overflow-hidden">
                        <img src={item.image} alt="Red" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-0 hover:opacity-50 transition-opacity duration-500">
                            <div className="text-white">
                            <CheckIcon className="h-10 w-10 font-bold" />
                            </div>
                        </div>
                    {selectedStyle === item && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 opacity-50 hover:opacity-50 transition-opacity duration-500">
                            <div className="text-white">
                            <CheckIcon className="h-10 w-10 font-bold" />
                            </div>
                        </div>
                    )}
                </div>
            )
        }) }
    </div>

        <div className='my-3 flex'>
              <input type="checkbox" onChange={(e)=>horizontal(e)}  name="city" className=' cursor-pointer outline-none border-none ring-0' /> 
              <lable htmlFor='city' className='pl-3 text-sm cursor-pointer text-white ' >
                    Horizontal
             </lable> 
        </div>

        <NextStep></NextStep>
    </div>

  )
}

export default Styles