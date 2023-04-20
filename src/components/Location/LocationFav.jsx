import React from 'react'
import { useDispatch } from 'react-redux'
import { setGeocoderInput  } from '../../store/slices/searchSlice'
import { changeTitle } from '../../store/slices/Text'


const LocationFav = ({name}) => {
  const dispatch= useDispatch()

  const btnLocation = ()=>{
    dispatch(setGeocoderInput(name))
    dispatch(changeTitle({
      title: name 
    }))
  }
  return (
        <button onClick={btnLocation} className='text-white bg-[rgb(59,99,110)] rounded-full h-10 shadow-xl ' >{name}</button>
  )
}

export default LocationFav