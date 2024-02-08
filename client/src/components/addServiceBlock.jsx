import React from 'react'
import broomIcon from "../TEMP/Desktop/addServiceBroom.svg"
import carnIcon from "../TEMP/Desktop/addServiceCarn.svg"
import tassIcon from "../TEMP/Desktop/addServiceTass.svg"
import gsIcon from "../TEMP/Desktop/addServiceGS.svg"
import trowIcon from "../TEMP/Desktop/addServiceTrow.svg"
import monIcon from "../TEMP/Desktop/addServiceMon.svg"
 
export default function AddServiceBlock() {

    return (
        <div id='addService' className='w-11/12 lg:w-4/5 mx-auto h-fit 2xl:h-screen pt-16 md:pt-32 flex lg:flex-row flex-col'>
            <div className=' w-full mx-auto my-10 lg:my-0 lg:w-2/5 relative h-auto 2xl:h-2/3'>
                <div className=''>
                    <h2 className='text-4xl md:text-5xl garamond'>Дополнительные услуги</h2>
                    <p className='text-base mt-20 montserrat w-full lg:w-4/5'>Также мы предоставляем сопутствующие услуги, которые могут быть актуальны как по отдельности, так и совместно с выбранным Вами поиском. Поддержание места захоронения в достойном состоянии не прихоть или излишество, а всего лишь дань памяти и заботливого отношения к близким нам людям.</p>
                </div>
                <a href='#ques' className='px-20 xl:px-32 invisible hidden lg:visible lg:flex py-3 text-xl rounded-full bg-main-light-yellow text-black font-bold top-auto mt-auto mb-0 bottom-0 absolute'>Заказать услугу</a>
            </div>
            <div className='grid grid-cols-2 add-service-blocks grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 h-auto lg:h-2/3 mx-auto w-full lg:w-3/5 text-base text-center'>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={broomIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Уборка могилы на кладбище / годовой уход за местом захоронения</p>
                </div>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={carnIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Возложение цветов и венков на могилу</p>
                </div>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={tassIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Реставрация памятников (портрет, надписи, незначительные разрушения)</p>
                </div>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={gsIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Производство и установка памятников</p>
                </div>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={trowIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Благоустройство могил</p>
                </div>
                <div className='dark-border-around flex items-center flex-col h-full'>
                    <div className='mt-5 mx-24 h-16 w-16'>
                        <img src={monIcon} className='h-full w-full'/>
                    </div>
                    <p className='dark-border-top h-3/5 w-11/12 pt-5 my-5'>Виртуальное посещение могилы близкого Вам человека</p>
                </div>
            </div>
            <a href='#ques' className='px-12 mt-10 lg:invisible lg:hidden visible text-center block py-3 text-xl rounded-full bg-main-light-yellow text-black font-bold top-auto mb-0 bottom-0'>Заказать услугу</a>
        </div>
    )
}
