import { Icon } from 'lucide-react'
import React from 'react'

const Cards = ({ IntroData }) => {
    console.log(IntroData);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-6 xl:px-24 2xl:px-48 py-20">
                {IntroData.map((card, i) => (
                    <div key={i} className="rounded-lg shadow-md border p-4 flex flex-col gap-y-2" data-aos="fade-up">
                        <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors bg-[#172554] text-white`}
                        >
                            <card.icon className="w-5 h-5" />
                        </div>
                        <p className='font-semibold text-[#172554] text-2xl'>{card.title}</p>   
                        <p className='text-sm text-gray-700'>{card.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Cards