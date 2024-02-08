import React from 'react'
import image1 from '../TEMP/Desktop/secondBlock1pic.png'
import image2 from '../TEMP/Desktop/secondBlock2pic.png'

export default function AboutBlock() {


    return (
        <div className='borders mx-auto w-11/12 lg:w-4/5 pt-20 pb-36 mt-20'>
            <div className='flex justify-between items-center'>
                <img src={image1} className='w-3/4 sm:w-1/2 md:w-29/60 absolute sm:-left-1/4 md:left-auto -left-1/2 md:relative '/>
                <p className='w-2/3 mr-0 ml-auto md:w-1/2 text-xl md:text-4xl xl:text-5xl garamond'>
                    <span className='text-main-logo-brown font-black montserrat text-2xl lg:text-5xl'>GRAVE SEARCH</span>
                    - это современный сервис по поиску мест захоронения близких Вам людей.</p>
            </div>
            <div className='relative mt-12 md:mt-32'>
                <p className='md:w-3/5 w-4/5 garamond text-xl md:text-3xl xl:text-4xl z-10 relative'>При обращении к нам, Вы получите квалифицированную помощь настоящих профессионалов своего дела, которые предоставят полный отчет о проделанной работе с архивными документами, план схемой захоронения, и фото могилы с точными координатами</p>
                <img src={image2} className='w-4/5 -right-1/2 z-0 md:w-2/5 top-16 sm:-top-16 md:-top-16 lg:-top-16 xl:-top-32 2xl:-top-64 absolute md:ml-auto md:left-auto md:mr-0 md:right-0'/>
            </div>
        </div>
    )
}