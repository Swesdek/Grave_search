import React, {useState, useEffect, useRef} from 'react'
import image1 from "../TEMP/Desktop/reviewsBlockPic.png"
import prev from "../TEMP/Desktop/reviewsBlockPrev.svg"
import next from "../TEMP/Desktop/reviewsBlockNext.svg"
import ky from 'ky'
import {useForm} from 'react-hook-form'

export default function ReviewsBlock() {
    const reviewSentRef = useRef(null)
    const successSentRef = useRef(null)
    const [quesState, setQuesState] = useState(false)
    const [reviews, setReviews] = useState()
    const [currReviewIndex, setCurrReviewIndex] = useState(0)
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()
    
    const onSubmit = async (data) => {
        reviewSentRef.current.classList.toggle("blur-sm")
        successSentRef.current.classList.toggle("invisible")
        data.id = `${Date.now()}`
        await ky.post("http://gravesearch.ru/api/review", {json : data}).json()
    }

    useEffect(() => {
        ky.get('http://gravesearch.ru/api/getReviews').json().then((res) => {setReviews(res)})
    }, [])

    useEffect(() => {
        console.log(currReviewIndex)
    }, [currReviewIndex])

    function ReviewsSlider() {
        return (

        <div className='inner items-center flex'
            style={{width: `${reviews.length * 100}%`,transform: `translate(-${currReviewIndex * (100 / reviews.length) }%)` }}
        >
            {reviews ? reviews.map((review, index) => {
                return  <div className={'review dark-border-around p-10 h-full mx-2 w-screen relative'} key={index}>
                            <p className='garamond text-2xl'>{review.rUserName}</p>
                            <p className='review-desc overflow-y-scroll md:overflow-auto montserrat h-4/5 text-base mt-5 font-normal'>{review.rDesc}</p>
                        </div>
            }) : <div/>}
        </div>

        )
    }

    return (
        <div>
            <div className='flex lg:h-fit bg-main-light-pink z-20 relative md:flex-row flex-col w-11/12 lg:w-4/5 mx-auto h-fit justify-between'>
                <div className='h-fit w-full md:w-29/60 '>
                    <h2 className='garamond text-4xl md:text-5xl'>Отзывы</h2>
                    <div className='mt-20 w-full h-full relative'>
                        <div className='dark-border-x slider-container w-full mt-20 md:w-4/5 relative h-96 flex overflow-hidden z-10'>
                            {reviews ? <ReviewsSlider/> : <div/>}
                        </div>
                        
                        
                        <div className='w-full md:w-4/5 flex justify-between h-32 pt-5'>
                            <button onClick={() => currReviewIndex == 0 ? setCurrReviewIndex(reviews.length - 1) : setCurrReviewIndex(currReviewIndex - 1)}><img src={prev}/></button>
                            <button onClick={() => currReviewIndex == (reviews.length - 1) ? setCurrReviewIndex(0) : setCurrReviewIndex(currReviewIndex + 1)}><img src={next}/></button> </div>
                        <img src={image1} className='w-full absolute -top-32 z-0 -right-1/2 flex visible md:hidden md:invisible'/>
                    </div>
                </div>
                <div className='h-auto w-full md:w-29/60 relative flex flex-col text-center'>
                    <img src={image1} className='w-full hidden invisible md:visible md:flex'/>
                    <button onClick={() => setQuesState(!quesState)} className='md:absolute relative mt-10 mx-auto md:right-0 md:top-4/5 md:left-auto px-20 md:px-32 
                                py-3 text-xl md:text-2xl rounded-full bg-main-light-yellow 
                                text-black font-bold'>
                                    Оставить отзыв
                    </button>
                </div>
            </div>
            <div className={'review-ques borders h-auto mx-auto my-12 w-11/12 md:w-4/5 z-0 relative 2xl:w-2/3 ' + (quesState ? "open" : "")}>
                <div className='w-full lg:w-5/6 mx-auto my-10 text-center transition-all'>
                    <h2 className='text-5xl garamond mt-10 text-left'>Оставьте отзыв, и через некоторое время он появится на сайте</h2>
                    <div ref={successSentRef} className='absolute z-40 top-2/3 bottom-0 mx-auto left-0 right-0 font-bold invisible'>Отзыв отправлен! Через некоторое время он появится на сайте</div>
                    <form ref={reviewSentRef} className='montserrat text-center text-base transition-all' onSubmit={handleSubmit(onSubmit)}>
                            <div className='lg:flex justify-between mb-10 mt-20'>
                                <div className='w-full lg:w-29/60 lg:mb-0 mb-10'>
                                    <input 
                                    name='rUserName'
                                    placeholder='Ваше имя' 
                                    className='ques-input py-4 w-full px-8 bg-transparent input-border cursor-pointer'
                                    
                                    {...register("rUserName", {
                                        required : "Поле обязательно к заполнению",
                                        pattern : {
                                            value : /[a-zA-Zа-яА-Я]/g,
                                            message : "Только буквы"
                                        }
                                    })}
                                    />
                                    <div className='absolute'>
                                        {errors?.rUserName && <p className='font-normal text-red-500 text-base'>{errors?.rUserName?.message}</p>}
                                    </div>
                                </div>
                                <div className='w-full lg:w-29/60'>
                                    <input 
                                    name='rEmail'
                                    placeholder='Ваша почта' 
                                    className='ques-input py-4 w-full px-8 bg-transparent input-border cursor-pointer'
                                    
                                    {...register("rEmail", {
                                        required : "Поле обязательно к заполнению",
                                        pattern : {
                                            value : /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message : "Только буквы"
                                        }
                                    })}
                                    />
                                    <div className='absolute'>
                                        {errors?.rEmail && <p className='font-normal text-red-500 text-base'>{errors?.rEmail?.message}</p>}
                                    </div>
                                </div>
                            </div>
                        
                        <textarea 
                        placeholder='Ваш отзыв' 
                        rows="5" cols="100" 
                        className='ques-input w-full h-40 py-4 px-8 bg-transparent input-border cursor-pointer'
                        
                        {...register("rDesc", {
                            required : "Поле обязательно к заполнению"
                        })}
                        />
                        <div className='absolute'>
                            {errors?.rDesc && <p className='font-normal text-red-500 text-base'>{errors?.rDesc?.message}</p>}
                        </div>
                        <input type='submit' value='Отправить' className='cursor-pointer mt-10 relative w-auto px-20 md:px-40 py-3 text-xl rounded-full bg-main-light-yellow text-black font-bold'/>
                    </form>
                </div>
                
            </div>
        </div>
        
    )
}
