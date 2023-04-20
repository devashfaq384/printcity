import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeSize } from '../../store/slices/Size' 

const Size = () => {
    const dispatch = useDispatch()
    const  direction  = useSelector((state)=>state.sizeState)
    console.log(direction)
    const dimension = [
        {
            size : "Small 11 x 17",
            price : "$35",
            height : "360px",
            width : '250px'
        },
        {
            size : "Medium 18 x 24",
            price : "$45",
            height : '400px',
            width : '250px'
        },
        {
            size : "Large 24 x 36",
            price : "$59",
            height : '440px',
            width : '250px'
        },
    ]

    const [unit, setUnit] = useState('inch')


  return (
    <div className=' flex flex-col mx-auto w-10/12 ' > 
        <div className='text-[30px] text-white text-center' >
            Choose your size
        </div>
        {/* Metric units */}

        <div className='text-white text-[20px] my-3 pl-2 ' >Metric Units</div>
        <div className='grid grid-cols-2 w-full ' >
            <button onClick={()=>{ setUnit('inch') }} className=' text-green-700 hover:text-white bg-white hover:bg-red-600 rounded-full h-9 w-full hover:underline ' >{`Imperial[Inch]`}</button>
            <button onClick={()=>{setUnit('cm')}}  className='text-green-700 hover:text-white bg-white hover:bg-red-600 rounded-full h-9 w-full hover:underline ' >{`
            Metric [cm]`}</button>
        </div>
        
        <div className='text-white text-[20px] my-3 pl-2 ' >Metric Units</div>
        <div className='flex flex-col grid-cols-12 w-full ' >
            {
                dimension.map((item)=>{
                    return(
                        <button onClick={()=>{
                             dispatch(changeSize(
                                direction.direction === true ? 
                                {
                                    height :  item.height ,
                                    width :  item.width ,
                                    direction : direction.direction
                                } : 
                                {
                                    height :  item.width,
                                    width :  item.height,
                                    direction : direction.direction
                                }
                            
                            ))
                        }} className=' flex justify-between items-center px-4 text-green-700 my-2 hover:text-white bg-white hover:bg-red-600 rounded-full h-9 w-full ' >
                            <span className='hover:underline' >
                                {item.size} {unit}
                            </span> 
                            <span>
                                {item.price}
                            </span>
                        </button>
                    )
                })
            }

            <button className='flex justify-center text-sm h-10 mt-[10%] items-center bg-[rgb(59,99,110)] text-white rounded-full w-full'>
                <CheckIcon className='h-5 font-bold pl-3'></CheckIcon>
                Order my map
            </button>
        </div>
    </div>
  )
}

export default Size