import React from 'react'
import img1 from "../Assets/Amazon.png"
import img2 from "../Assets/Fedex.png"
import img3 from "../Assets/google-1-removebg-preview 1.png"
import img4 from "../Assets/walmart.png"
import img5 from "../Assets/ola.png"
import img6 from "../Assets/fedex (2).png"
import img7 from "../Assets/new-Microsoft-logo-removebg-preview 1.png"

const ImageList = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img4,
        img5,
        img6,
        img7
    ]

 return   images.map((image) => {
        return (
        <div className='w-[16rem] h-20 shadow flex items-center justify-center'>
            <img src={image} alt="" className='object-contain'/>
        </div>
        )
    })
}   

export default ImageList