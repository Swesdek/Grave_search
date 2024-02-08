import React, {useEffect, useState, useRef} from 'react'
import {slide as Menu} from 'react-burger-menu'
import burgerPic from '../TEMP/Mobile/mBurgerPic.svg'

export default function Navigation() {
    let [burgerState, setBurgerState] = useState(false)
    let navRef = useRef(null)
    let [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {

        function onScroll() {
            navRef.current.classList.toggle("bg-main-dark-brown", window.scrollY > (window.innerHeight / 100 * 80))

            if (lastScroll < window.scrollY) {
                navRef.current.style.top = "-160px"
                setLastScroll(window.scrollY)
            } else {
                navRef.current.style.top = "0"
                setLastScroll(window.scrollY)
            }
        }

        document.addEventListener("scroll", onScroll)
    }, [window.scrollY])


    return (
        <div ref={navRef} id='navbar' className='w-full transition-all min-h-24 fixed max-h-1/2 z-50 flex flex-col'>
            <div className='mx-auto w-11/12 lg:w-4/5 h-4/5 py-5 items-center -top-40 flex justify-between montserrat text-white'>
                <div className='montserrat'>
                    <p className='afterline relative font-black text-3xl lg:text-4xl'>GRAVE SEARCH</p>
                    <p className='font-normal mt-2 text-xs lg:text-base'>Сервис по поиску места захоронения</p>
                </div>
                <div className='md:visible hidden invisible md:w-1/2 xl:w-2/5 md:flex justify-between items-center font-bold text-base lg:text-base 2xl:text-xl'>
                    <a href='#addService'>Услуги</a>
                    <a href='#contact'>Контакты</a>
                    <a href='#ques' className='px-10 py-3 rounded-full bg-main-light-yellow text-black'>Оставить заявку</a>
                </div>
                <button onClick={() => setBurgerState(!burgerState)} className='md:hidden'><img src={burgerPic}/></button>
            </div>
            <div className={'md:hidden  w-11/12 mx-auto flex flex-col items-center text-white font-bold text-xl burger-menu ' + (burgerState ? "burger-menu-open" : "burger-menu-closed")}>
                    <a className='my-2' href='#addService'>Услуги</a>
                    <a className='my-2' href='#contact'>Контакты</a>
                    <a href='#ques' className='px-10 py-3 my-2 rounded-full bg-main-light-yellow text-black'>Оставить заявку</a>
            </div>
        </div>

    )
}