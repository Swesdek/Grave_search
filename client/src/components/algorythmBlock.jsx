import React from 'react'
import algorythmPic from '../TEMP/Desktop/algorythmStepsPic.png'
import algorythmPicMob from '../TEMP/Mobile/algBlockMobPic.svg'
import archPic from '../TEMP/Desktop/thirdBlockArch.png'
import archPicMob from "../TEMP/Mobile/mThirdBlockArch.png"

export default function AlgorythmBlock() {

    return (
        <div className=''>
            <h2 className='my-16 md:my-32 mx-auto w-11/12 lg:w-4/5 text-4xl md:text-5xl garamond'>
                Как мы работаем
            </h2>
            <div className=' mx-auto w-11/12 lg:w-4/5 flex justify-between'>
                <div className='grid-cols-abp gap-1 md:gap-1/20 lg:grid-cols-abt xl:grid-cols-abf w-full xl:w-2/3 grid grid-rows-1 h-full'>
                    <img src={algorythmPic} className='md:visible md:flex invisible hidden   w-full md:w-full lg:w-11/12 pb-10'/>
                    <img src={algorythmPicMob} className='visible flex md:invisible md:hidden w-full md:w-full lg:w-11/12 pb-10'/>
                    <div className='mx-auto algSteps w-full lg:w-4/5 grid grid-cols-1 items-stretch h-full leading-4 text-sm xl:text-sm lg:text-base 2xl:text-base'>
                        <div className='w-full border-bottom items-center'>
                            <p className='montserrat font-bold mb-5'>Вы подготавливаете имеющуюся у Вас информацию</p>
                            <p className='montserrat font-normal'>ФИО, годы жизни, населенный пункт, наименование кладбища, другую информацию которая может быть полезной при поиске места захоронения.</p>
                        </div>
                        <div className='w-full border-bottom items-center'>
                            <p className='montserrat font-bold mb-5'>Вы заполняете форму заявки</p>
                            <p className='montserrat font-normal'>Указываете способ связи с Вами и кратко описываете ситуацию в комментарие.</p>
                        </div>
                        <div className='w-full border-bottom items-center'>
                            <p className='montserrat font-bold mb-5'>После отправки формы мы с Вами связываемся</p>
                            <p className='montserrat font-normal'>Уточняем с Вами некоторую информацию, составляем смету и обозначаем обьем работ.</p>
                        </div>
                        <div className='w-full border-bottom items-center'>
                            <p className='montserrat font-bold mb-5'>Мы занимаемся поиском</p>
                            <p className='montserrat font-normal'>На основе предоставленной информации мы используем различные методы поиска - от поиска по архивным данным до физического поиска на кладбище.</p>
                        </div>
                        <div className='w-fullitems-center'>
                            <p className='montserrat font-bold mb-5'>Вы получаете результат</p>
                            <p className='montserrat font-normal'>Вы получаете полный отчет о проделанной работе с архивными документами, план-схемой захоронения, фото и видео с могилы, а также точные координаты места захоронения.</p>
                        </div>
                    </div>
                </div>
                <div className='width-3-px invisible xl:visible bg-main-dark-brown'/>
                <img src={archPic} className='w-1/4 invisible hidden xl:visible xl:flex'/>
            </div>
            <img src={archPicMob} className='w-full mt-10 visible flex md:hidden md:invisible' />
        </div>
    )
}
