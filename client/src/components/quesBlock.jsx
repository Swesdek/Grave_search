import React, {useRef} from 'react'
import image1 from '../TEMP/Desktop/quesBlockCem.png'
import {useForm} from 'react-hook-form'
import ky from 'ky'

export default function QuesBlock() {
    const quesRef = useRef(null)
    const successSentRef = useRef(null)

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()
    
    const onSubmit = async (data) => {
        quesRef.current.classList.toggle("blur-sm")
        successSentRef.current.classList.toggle("invisible")
        await ky.post("http://gravesearch.ru/api/ques", {json : data}).json()
    }

    return (
        <div id='ques' className='w-11/12 lg:w-4/5 mx-auto mt-16 pt-16 mb-32 flex justify-between scroll-pb-40'>
            <img src={image1} className='xl:w-3/12 2xl:w-1/4 h-auto hidden invisible xl:flex xl:visible'/>
            <div className='borders h-auto w-full xl:w-2/3'>
                <div className='w-full lg:w-10/12 mx-auto my-10 relative text-center'>
                    <h2 className='text-4xl md:text-5xl text-left garamond mt-10'>Оставьте заявку и мы свяжемся с Вами в ближайшее время</h2>
                    <div ref={successSentRef} className='absolute top-1/2 bottom-0 mx-auto left-0 right-0 font-bold invisible'>Заявка успешно отправлена! В ближайшее время с Вами свяжутся</div>
                    <form ref={quesRef} className='montserrat text-center text-base transition-all relative ' onSubmit={handleSubmit(onSubmit)}>
                       
                        <div className='my-10'>
                            <select 
                            defaultValue={''}
                            name='qServiceType' 
                            className='w-full py-4 px-8 bg-transparent input-border cursor-pointer'

                            {...register('qServiceType', {
                                required : "Поле обязательно к заполнению"
                            })

                            }
                            >
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Поиск могилы"}>Поиск могилы</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Уход за могилой"}>Уход за могилой</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Возложение цветов и венков"}>Возложение цветов и венков</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Реставрация памятников"}>Реставрация памятников</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Установка памятника"}>Установка памятника</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Благоустройство могилы"}>Благоустройство могилы</option>
                                <option className='bg-main-light-pink text-main-dark-brown leading-8' value={"Виртуальное посещение могилы"}>Виртуальное посещение могилы</option>
                                <option disabled selected value="">Тип услуги</option>
                            </select>
                            <div className='absolute'>
                                {errors?.qServiceType && <p className='font-normal text-red-500 text-base'>{errors?.qServiceType?.message}</p>}
                            </div>
                        </div>
                        
                        <div className='lg:flex justify-between mb-10'>
                            <div className='w-full lg:w-29/60'>
                                <input 
                                placeholder='Ваше имя' 
                                className='ques-input py-4 w-full px-8 bg-transparent input-border cursor-pointer'
                                
                                {...register("qName", {
                                    required : "Поле обязательно к заполнению",
                                    pattern : {
                                        value : /[a-zA-Zа-яА-Я]/g,
                                        message : "Только буквы"
                                    }
                                })}
                                />
                                <div className='absolute'>
                                    {errors?.qName && <p className='font-normal text-red-500 text-base'>{errors?.qName?.message}</p>}
                                </div>
                            </div>
                            <div className='w-full mt-10 lg:mt-0 lg:w-29/60'>
                                <input 
                                placeholder='Телефон или skype' 
                                className='ques-input py-4 w-full px-8 bg-transparent input-border cursor-pointer'
                                
                                {...register("qNumber", {
                                    required : "Поле обязательно к заполнению"
                                })}
                                />
                                <div className='absolute'>
                                    {errors?.qNumber && <p className='font-normal text-red-500 text-base'>{errors?.qNumber?.message}</p>}
                                </div>
                            </div>
                            
                        </div>
                        <p className='my-2'>Расскажите подробнее, что Вам необходимо и уточните удобный для Вас способ связи</p>
                        <textarea 
                        placeholder='Комментарий к услуге' 
                        rows="5" cols="100" 
                        className='ques-input w-full h-40 py-4 px-8 bg-transparent input-border cursor-pointer'
                        
                        {...register("qDesc", {
                        })}
                        />
                        <input type='submit' value='Отправить' className='cursor-pointer mt-10 relative w-auto px-20 md:px-40 py-3 text-xl rounded-full bg-main-light-yellow text-black font-bold'/>
                    </form>
                </div>
                
            </div>
        </div>
    )
}
