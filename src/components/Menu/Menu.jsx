import React from 'react'
import  location  from '../../images/marker.png'
import  picture  from '../../images/picture.png'
import  Cart  from '../../images/shopping-cart.png'
import  Text  from '../../images/text.png'


const Menu = () => {
    let data =[
        {
            name : "Location",
            imgSrc : location
        },
        {
            name : "Styles",
            imgSrc : picture
        },
        {
            name : "Text",
            imgSrc : Text
        },
        {
            name : "Size",
            imgSrc : Cart
        },
    ]
    return (
    <div className='flex justify-around sm:flex-col' >
        <div className='text-center flex p-3 items-center flex-col cursor-pointer transition duration-300 justify-center hover:bg-light-hover' >
            <img src={location} alt="Marker" className='w-[50px]'/>
            <div>Location</div>
        </div>
        <div className='text-center flex p-3 items-center flex-col justify-center hover:bg-light-hover  transition duration-300 cursor-pointer' >
            <img src={picture} alt="Marker" className='w-[50px]'/>
            <div>Style</div>
        </div>
        <div className='text-center flex p-3 items-center flex-col justify-center hover:bg-light-hover  transition duration-300 cursor-pointer' >
            <img src={Text} alt="Marker" className='w-[50px]'/>
            <div>Text</div>
        </div>
        <div className='text-center flex p-3 items-center flex-col justify-center hover:bg-light-hover transition duration-300 cursor-pointer' >
            <img src={Cart} alt="Marker" className='w-[50px]'/>
            <div>Finish</div>
        </div>
    </div>
  )
}

export default Menu