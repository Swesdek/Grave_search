import React from 'react'
import image1 from "../TEMP/Desktop/contactBlockPhone.png"
import WAIcon from "../TEMP/Desktop/contactBlockWA.svg"
import TGIcon from "../TEMP/Desktop/contactBlockTG.svg"
import SKIcon from "../TEMP/Desktop/contactBlockSK.svg"

export default function ContactBlock() {

    return (
        <div id='contact' className=' xl:w-4/5 w-11/12 mx-auto pt-40 mb-64 lg:mb-10 h-screen'>
            <h2 className='text-4xl md:text-5xl garamond'>Связь с нами</h2>
            <div className='mt-10 flex md:flex-row flex-col'>
                <img src={image1} className='w-full md:w-3/5'/>
                <div className='w-full md:w-2/5 bg-main-dark-brown h-auto flex flex-col text-main-light-pink montserrat text-2xl'>
                    <div className='h-1/4 w-4/5 m-auto my-5'>
                        <p className='garamond text-3xl'>По телефону</p>
                        <p className='mt-10 light-border-bottom'><a href='tel:+79030989860'>89030989860</a> </p>
                    </div>
                    <div className='h-1/4  w-4/5 m-auto my-5'>
                        <p className='garamond text-3xl'>По почте</p>
                        <p className='mt-10 light-border-bottom'><a href='mailto:gravesearch@mail.ru'>gravesearch@mail.ru</a></p>
                    </div>
                    <div className='h-1/4 w-4/5 m-auto my-5'>
                        <p className='garamond text-3xl'>Через мессенджеры</p>
                        <div className='flex w-4/5 lg:w-6/12 justify-between mt-8'>
                            <a target='_blank' href='https://wa.me/89650387278'><img src={WAIcon} className='cb-icon'/></a>
                            <a target='_blank' href='https://t.me/gravesearch'><img src={TGIcon} className='cb-icon'/></a>
                            <a target='_blank' href='skype:gravesearch?chat'><img src={SKIcon} className='cb-icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
