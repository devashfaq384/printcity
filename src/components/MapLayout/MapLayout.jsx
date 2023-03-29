import React from 'react'
import Shattered from '../../images/shattered.png'
import Logo from '../../images/mapLogo.png'
import CityMap from '../CityMap/CityMap'
import Rotate from '../../images/rotate.png'

const MapLayout = () => {
  return (
    <div className=" h-[100vh] bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${Shattered})` }} > 
        <div className='w-full h-[10%] ' >
            <div className='w-32 mx-auto' >
                <img src={Logo} alt="logo" />
            </div>
            <div className='flex gap-4 absolute top-0 right-0 mt-5' >
                <div className='bg-white rounded-md py-2 px-2 ' >Shooping Cart</div>
                <div className='bg-white rounded-md py-2 px-2 ' >Help?</div>
            </div>
        </div>
        <div className=' h-[90%] flex flex-col justify-center items-center '>
                <div className='pb-10' >Do you know that you drag and drop the map</div>
            <CityMap></CityMap>
            <div className='bg-white rounded-full p-3 absolute right-0 bottom-0 m-5 ' >
                <img src={Rotate} alt='rotate' className='w-16' />
            </div>
        </div>
    </div>
  )
}

export default MapLayout