import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid' 
import { moveTo } from '../../store/slices/menuSlice'
import { useDispatch, useSelector } from 'react-redux'


const NextStep = () => {
  const initialVal = useSelector((state)=> state.menuState )
  const dispatch = useDispatch()
  const next = (name)=>{
    dispatch(moveTo(name))
  }

  let data =['Location' ,'Styles' ,'Text','Shapes','Material','Size']
  return (
    <div className='text-white' >
        <button onClick={()=>{
          for (let i = 0; i < data.length; i++) {
            if(data[i] === initialVal ){
              next(data[i+1])
            }
          }
        }}  className='flex justify-center text-sm h-10 mt-[10%] items-center bg-[rgb(59,99,110)]  rounded-full w-full'>
            Next Step
            <ArrowRightIcon className='h-4 pl-3'></ArrowRightIcon>
        </button>
        <div className='flex justify-center text-sm ml-[-20px] mt-2' >Order now</div>
    </div>
  )
}

export default NextStep