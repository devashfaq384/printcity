// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import  location  from '../../images/marker.png'
// import  picture  from '../../images/picture.png'
// import  Cart  from '../../images/shopping-cart.png'
// import  Text  from '../../images/text.png'
// import { moveTo } from '../../store/slices/menuSlice'

// const Menu = ({show}) => {
//     const [selectedStyle, setSelectedStyle] = useState(null);

//     const dispatch = useDispatch()
//     const move = (name)=>{
//         dispatch(moveTo(name))
//         show('block')
//     }

//     let data =[
//         {
//             name : "Location",
//             imgSrc : location
//         },
//         {
//             name : "Styles",
//             imgSrc : picture
//         },
//         {
//             name : "Text",
//             imgSrc : Text
//         },
//         {
//             name : "Size",
//             imgSrc : Cart
//         },
//     ]
//     return (
//     <div className='flex justify-around sm:flex-col' >
//         {data.map((option)=>{
//             return (
//                 <div onClick={()=>{
//                     setSelectedStyle(option)
//                     move(option.name)
//                     }} className={`  text-center flex ${selectedStyle === option ? 'bg-red-100' : ""} p-3 items-center flex-col cursor-pointer transition duration-300 justify-center  hover:bg-light-hover`} >
//                     <img src={option.imgSrc} alt="Marker" className='w-[50px]'/>
//                     <div>{option.name}</div>
//                 </div>
//             )
//         })}
//     </div>
//   )
// }

// export default Menu


import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import  location  from '../../images/marker.png'
import  picture  from '../../images/picture.png'
import  Cart  from '../../images/shopping-cart.png'
import  Text  from '../../images/text.png'
import { moveTo } from '../../store/slices/menuSlice'

const Menu = ({show}) => {
    const [selectedStyle, setSelectedStyle] = useState(null);

    const dispatch = useDispatch()
    const move = (name)=>{
        dispatch(moveTo(name))
        show('block')
    }

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
        {data.map((option)=>{
            return (
                <div onClick={()=>{
                    setSelectedStyle(option.name)
                    move(option.name)
                    }} className={`text-center flex p-3 items-center flex-col cursor-pointer transition duration-300 justify-center ${selectedStyle === option.name ? 'bg-light-hover' : 'hover:bg-light-hover'}`} >
                    <img src={option.imgSrc} alt="Marker" className='w-[50px]'/>
                    <div>{option.name}</div>
                </div>
            )
        })}
    </div>
  )
}

export default Menu
