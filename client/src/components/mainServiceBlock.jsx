import React from 'react'
import booksIcon from "../TEMP/Desktop/mainServiceBooks.svg"
import synIcon from "../TEMP/Desktop/mainServiceSyn.svg"
import churchIcon from "../TEMP/Desktop/mainServiceChurch.svg"
import lostDocsIcon from "../TEMP/Desktop/mainServiceLostDocs.svg"
import systemIcon from "../TEMP/Desktop/mainServiceSystem.svg"
import cemIcon from "../TEMP/Desktop/mainServiceCem.svg"

export default function MainServiceBlock() {

    return (
        <div className='w-screen max-h-fit lg:h-screen bg-main-dark-brown flex items-center'>
            <div className='w-full 2xl:w-4/5 lg:h-4/5 mx-auto text-main-light-pink my-auto'>
                <div className='grid-cols-1 lg:grid-cols-2 grid light-border-y h-40 lg:h-1/4 items-center text-center relative'>
                    <div className='text-center flex items-center text-4xl md:text-5xl garamond h-full light-border-right'>
                        <p className='mx-auto'>Что входит в основную услугу</p> 
                    </div>
                    <div className='hidden invisible lg:visible lg:flex'>
                        
                    </div>
                </div>
                <div className='lg:grid-cols-3/4 h-3/4 montserrat grid text-sm font-normal'>
                    <div className='h-full lg:grid-cols-3 lg:grid-rows-2 grid-cols-2 grid-rows-3 grid'>
                        <div className='ms-block light-border-y h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={booksIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'>Сбор архивных данных из открытых и закрытых источников</p>
                        </div>
                        <div className='ms-block light-border-around h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={synIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'>Получение необходимых справок и выписок</p>
                        </div>
                        <div className='ms-block light-border-around h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={churchIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'>Получение данных из церковных книг (применимо к захоронениям до революции)</p>
                        </div>
                        <div className='ms-block light-border-y h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={lostDocsIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'>Восстановление утраченных документов</p>
                        </div>
                        <div className='ms-block light-border-around h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={systemIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'>Систематизация всей полученной информацией и составление плана поиска</p>
                        </div>
                        <div className='ms-block light-border-around h-64 lg:h-auto'>
                            <div className='light-border-bottom h-1/2 max-h-1/2 flex items-center w-7/12'>
                                <img className='ms-icon' src={cemIcon}/>
                            </div>
                            <p className='h-2/5 w-11/12 mt-5'> Выход специалистов на кладбище для «ручного» поиска могилы</p>
                        </div>
                        
                    </div>
                    
                    
                    <div className='main-service-conc h-full text-center light-border-y mb-20 md:mb-0'>
                        <div className='h-1/4 max-h-1/4 text-3xl md:text-4xl garamond m-auto w-7/12 light-border-bottom flex items-center'>
                            <p className='m-auto'>Заключение</p>
                        </div>
                        <p className='w-4/5 mx-auto mt-5 text-justify'>
                            Подготовка полного и развернутого заключения по поиску места захоронения, которое включает в себя: фото и видео фиксацию места захоронения, план схему участка и места на кладбище с точными координатами могилы, предоставление всей собранной информации за весь период работы включая полученные документы и справки.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}