import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cards = ({ data }) => {
    const [expandedBlogId, setExpandedBlogId] = useState(null);

    const toggleReadMore = (id) => {
        setExpandedBlogId(expandedBlogId === id ? null : id);
    };

    const content = (
        <>
            {data.map((blog, i) => (
                <SwiperSlide key={i} className="swiper-slide-transparent group cursor-pointer">
                    <a onClick={() => toggleReadMore(blog.id)}>
                        <article class="flex max-w-xl flex-col items-start justify-between">
                            <img
                                src={blog.image}
                                className="transition-all duration-300 filter grayscale group-hover:filter-none w-full rounded-md"
                                alt="Blog Image"
                            />
                            <div class="flex items-center gap-x-4 text-xs">
                                <time datetime="2020-03-16" class="text-gray-500">{blog.date}</time>
                                <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Mental Health | Technology</p>
                            </div>
                            <div class="group relative">
                                <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                    <p>
                                        <span class="absolute inset-0"></span>
                                        {expandedBlogId === blog.id ? blog.fullContent : blog.excerpt}
                                    </p><br />
                                    <a

                                        className="text-blue-900 font-semibold hover:underline text-sm cursor-pointer"
                                    >
                                        {expandedBlogId === blog.id ? "Read Less ↑" : "Read More →"}
                                    </a>
                                </h3>
                            </div>
                            <div class="relative mt-4 flex items-center gap-x-4">
                                <img src={blog.dp} alt="" class="size-10 rounded-full bg-gray-50 object-contain" />
                                <div class="text-sm/6">
                                    <p class="font-semibold text-gray-900">
                                        <p>
                                            <span class="absolute inset-0"></span>
                                            {blog.author}
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </a>
                </SwiperSlide>
            ))}
        </>
    );


    return (
        <section className="mb-12 xl:mb-32 my-8">
            <div className="mx-auto">
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        500: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1100: { slidesPerView: 3 },
                        1600: { slidesPerView: 4 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    id="blogsswiper"
                    className="swiperblog"
                >
                    {content}
                </Swiper>
            </div>
            <style>
                {`
                    .swiper-slide-transparent {
                        background-color: transparent !important;
                        border: none !important;
                        padding: 0 !important;  
                        min-height:450px;
                    }
                    .swiperblog .swiper-pagination-bullet{
                    border-radius:20px;
                    background-color:gray;
                    width:8px;
                    }
                    .swiperblog .swiper-pagination{
                    bottom:0px;
                    }
                    .swiperblog .swiper-pagination-bullet-active{
                    background-color:#273066;
                    }
                    #blogsswiper{
                    height:100%;
                    }
                    }
                `}
            </style>
        </section>
    );
};

export default Cards;
