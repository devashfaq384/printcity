import React, { useState } from 'react';
import Size from '../Finish/Size';
import Location from '../Location/Location';
import Menu from '../Menu/Menu';
import Styles from '../Styles/Styles';
import Text from '../Text/Text';
import { XMarkIcon } from '@heroicons/react/24/solid' 
import MapLayout from '../MapLayout/MapLayout';
import { useSelector } from 'react-redux';
import Shapes from '../Shapes/Shapes';
import Material from '../Material/Material';

function CityLayout() {
  const menu = useSelector((state)=> state.menuState)
  const [opt, setOpt] = useState('block')
  
  const cross = ()=>{
    setOpt('hidden')
  }

  return (
    <div className='flex flex-col-reverse sm:flex-row ' >
      <div className={`flex w-full sm:w-auto absolute sm:relative flex-col-reverse sm:flex-row`} style={{zIndex : 1}} >
        <div className='w-full sm:w-[100px] bg-red-400 h-auto sm:relative sm:h-[100vh]'>
            <Menu show={setOpt}  ></Menu>
        </div>
        <div className={` ${opt} w-full sm:w-[400px] bg-red-400 h-auto sm:relative sm:h-[100vh] flex pt-8`} >
            {menu === "Location" ? <Location ></Location> : null }
            {menu === "Styles" ? <Styles></Styles>: null }
            {menu === "Text" ? <Text></Text>:null}
            {menu === "Size" ? <Size></Size>:null}
            {menu === "Shapes" ? <Shapes></Shapes>:null}
            {menu === "Material" ? <Material></Material>:null}
        </div>
          <div className={`bg-gren  w-6 block cursor-pointer sm:hidden ml-auto  ${opt} `} >
            <XMarkIcon className='h-6 w-6 text-white' onClick={()=>cross()} ></XMarkIcon>
          </div>
      </div>
        <div className='w-full sm:w-full h-[100vh] sm:h-auto '>
          <MapLayout></MapLayout>
        </div>
    </div>
  );
}

export default CityLayout;