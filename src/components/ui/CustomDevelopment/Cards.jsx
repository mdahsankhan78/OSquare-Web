import { ArrowRight, BoxSelectIcon, LucideBoxes } from 'lucide-react'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from "aos";

const Cards = ({ data }) => {

  return (
    // <!-- component -->
    <section class=" bg-blue-500ray-50">
      <div class="block relative bg-opacity-50" >
        <div class="relative h-full pb-20 md:pb-10 sm:max-w-full lg:max-w-screen-xl">
          <div class=" max-w-7xl relative">
            <div class="grid grid-cols-1 gap-4 mt-12 lg:mt-16">
              {data.map((solution, i) => (
                <div class="transition-all duration-500 hover:shadow-lg bg-secondary p-4 relative group" data-aos='fade-up'>
                  <div key={i}
                    class=" absolute  bg-primary top-0 left-0 w-24 h-1  transition-all duration-200 group-hover:w-1/2  ">
                  </div>
                  <div class="py-2 px-9 relative space-y-2">

                    {/* <FontAwesomeIcon className="text-black group-hover:text-primary h-16 transition-all duration-200" icon={faPaintBrush} /> */}
                    <h3 class="text-lg font-semibold text-primary">{solution.title}
                    </h3>
                    <p class="text-base text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards
