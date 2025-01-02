import React from 'react'
import Cards from './Cards'

const StickyCards = ({
    alignment,
    title,
    description,
    data,
}) => {
    return (
        <section>
            <div class="grid grid-cols-1 md:grid-cols-2 items-start lg:flex-row lg:gap-x-10">
                {alignment === 'left' &&
                    <div class="flex flex-col w-full sticky lg:top-36 mt-2 lg:mt-12">
                        <h1 className='text-4xl lg:text-5xl font-bold text-primary'>{title}</h1>
                        <p className='py-12 text-lg'>{description}</p>
                    </div>
                }
                <div class="lg:w-full sticky">
                    <Cards data={data} />
                </div>

                {alignment == 'right' &&
                    <div class="flex flex-col w-full sticky lg:top-36 mt-2 lg:mt-12">
                        <h1 className='text-4xl lg:text-5xl font-bold text-primary'>{title}</h1>
                        <p className='py-12 text-lg'>{description}</p>
                    </div>
                }
            </div>
        </section>
    )
}

export default StickyCards