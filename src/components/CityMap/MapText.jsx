import React from 'react'
import { useSelector } from 'react-redux'

const MapText = () => {
  const { title, subTitle } = useSelector((state) => state.textState);

  return (
    <div className="absolute bottom-0 w-full text-center p-2 bg-gradient-to-b from-gray-100/30 via-gray-200/40 to-gray-300/80 ">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-gray-700">{subTitle}</p>
    </div>
  )
}

export default MapText