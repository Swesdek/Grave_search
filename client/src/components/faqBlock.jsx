import React, {useState} from 'react'
import openIcon from '../TEMP/Desktop/faqBlockOpenIcon.svg'

export default function FaqBlock() {
    const [faqs, setFaqs] = useState([
        {
            question : "Какая информация нужна для того чтобы начать поиск?",
            answer : "Мы рекомендуем прислать максимально имеющуюся у Вас информацию (ФИО, годы жизни, место смерти, причина смерти, место захоронения, имеющиеся документы, воспоминания родных и близких и т.п.). Также мы осуществляем поиск по минимальной информации, и к каждому случаю подходим индивидуально",
            open : false
        },
        {
            question : "Как быстро вы осуществляете поиск?",
            answer : "В среднем поиск места захоронения занимает от 4 дней до 2-х недель. При сложных поисках мы уведомляем клиента и согласовываем дальнейшие действия совместно с ним",
            open : false
        },
        {
            question : "Можно ли заказать услугу, проживая в другом городе (стране)?",
            answer : "Да, конечно. Место Вашего нахождения никак не влияет на итоговый результат поиска. Мы поддерживаем с Вами связь в различных мессенджерах и удобным Вам способом передаем актуальную информацию",
            open : false
        },
        {
            question : "Вы осуществляете поиск на любом кладбище Санкт-Петербурга и Ленинградской обл?",
            answer : "Да, мы имеем доступ к архивным данным Санкт-Петербурга и Ленинградской обл и соответственно ко всем погостам, которые располагаются на данной территории",
            open : false
        },
        {
            question : "Осуществляете ли вы поиск в других регионах РФ?",
            answer : "Мы осуществляем поиски и в других регионах РФ. Каждый случай обсуждается индивидуально и зависит от предоставленной Вами информации",
            open : false
        }
    ])

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq,i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false
            }

            return faq
        }))
    }

    return (
        <div className='mx-auto w-full lg:w-4/5 bg-main-light-pink z-20 relative'>
            <h2 className='text-4xl md:text-5xl garamond mb-20 mx-auto w-11/12 lg:w-full'>Часто задаваемые вопросы</h2>
            {faqs.map((faq, index) => {
                return <div className={"faq dark-border-top py-4 " + (faq.open ? "open" : "")}   key={index} onClick={() => toggleFAQ(index)}>
                        <div className='flex justify-between items-center w-11/12 mx-auto cursor-pointer' >
                            <img src={openIcon} className='mx-auto plus w-2/12 lg:w-auto pr-2'/>
                            <p className='w-11/12 text-2xl lg:text-3xl garamond'>{faq.question}</p>
                        </div>
                        <div className='mt-10 montserrat text-md lg:text-xl px-10 answer'>
                            {faq.answer}
                        </div>
                    </div>
            })}
        </div>
    ) 
}