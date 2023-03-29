import React from 'react';
import Size from '../Finish/Size';
import Location from '../Location/Location';
import Menu from '../Menu/Menu';
import Styles from '../Styles/Styles';
import CityMap from '../CityMap/CityMap'
import Text from '../Text/Text';
import { XMarkIcon } from '@heroicons/react/24/solid' 
import MapLayout from '../MapLayout/MapLayout';
import { useSelector } from 'react-redux';

function CityLayout() {
  const menu = useSelector((state)=> state.menuState)
  // console.log(typeof(menu))



  return (


    <div className='flex flex-col-reverse sm:flex-row ' >
      <div className='flex w-full sm:w-auto absolute sm:relative flex-col-reverse sm:flex-row ' >
        <div className='w-full sm:w-[100px] bg-gren h-auto sm:relative sm:h-[100vh]'>
            <Menu  ></Menu>
        </div>
        <div className='w-full sm:w-[400px] bg-gren h-auto sm:relative sm:h-[100vh] flex pt-8'>
            { menu === "Location" ? <Location ></Location> : null }
            {menu === "Styles" ? <Styles></Styles>: null }
            {menu === "Text" ? <Text></Text>:null}
            {menu === "Size" ? <Size></Size>:null}
        </div>
          <div className='bg-gren w-6 block cursor-pointer sm:hidden ml-auto' >
            <XMarkIcon className='h-6 w-6 text-white ' ></XMarkIcon>
          </div>
      </div>
        <div className='w-full sm:w-full h-[100vh] sm:h-auto '>
          <MapLayout></MapLayout>
        </div>
    </div>
  );
}

export default CityLayout;