import {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import background from "../TEMP/Desktop/firstBlockBg.png"

export default function EntryBlock() {

    return (
        <div
            id='first_block'
            className='bg-no-repeat m-0 bg-cover w-screen h-screen
                        overflow-hidden bg-center text-left flex relative'   
            style={{backgroundImage : "url(" + require('../TEMP/Desktop/firstBlockBg.png') }} 
        >

            <div className='mx-auto 2xl:ml-0 w-11/12 lg:w-4/5 h-fit mt-auto top-auto bottom-auto mb-10 md:mb-20  items-center flex flex-col'>
                <div className='text-white md:text-left garamond w-full 2xl:w-3/4 top-1/2 md:top-2/3 relative'>
                    <h1 className='afterline text-3xl lg:text-5xl relative'>
                        Поиск места захоронения в Санкт-Петербурге и Ленинградской области
                    </h1>
                    <h3 className='text-2xl lg:text-3xl mt-8'>
                        Найдем могилу близкого вам человека по минимальной информации
                    </h3>
                </div>
                <a href='#ques' className='px-12 top-1/2 relative w-auto mt-10 mb-10 lg:invisible lg:hidden visible text-center py-3 text-xl rounded-full bg-main-light-yellow text-black font-bold bottom-0'>Заказать услугу</a>
            </div>
        
        </div>

        
    )
}