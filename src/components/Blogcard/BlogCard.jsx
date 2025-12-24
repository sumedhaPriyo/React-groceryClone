import React from 'react';
import Slider from 'react-slick';

import img1 from '../../assets/images/blog-bg-1.webp';

const BlogCard = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1536,
                settings: { slidesToShow: 4, slidesToScroll: 2 },
            },
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3, slidesToScroll: 2 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1, slidesToScroll: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    const blogs = [
        {
            img: img1,
            title: 'Avocado Grilled Salmon, Rich In Nutrients For The Body',
            category: 'Lifestyle',
            date: 'Sep 15, 2022',
        },
        {
            img: img1,
            title: "The Best Great Benefits Of Fresh Beef For Women's Health",
            category: 'Organics',
            date: 'Aug 15, 2023',
        },
        {
            img: img1,
            title: 'Ways To Choose Fruits & Seafoods Good For Pregnancy',
            category: 'Organics',
            date: 'Feb 15, 2023',
        },
        {
            img: img1,
            title: 'Summer Breakfast For The Healthy Morning With Tomatoes',
            category: 'Shopping',
            date: 'Feb 22, 2023',
        },
    ];

    return (
        <div className='max-w-8xl mx-auto sm-mx-4'>
            <Slider {...settings}>
                {blogs.map((item, index) => (
                    <div key={index}  className="px-0 lg:px-3 xl:px-4">
                        <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group'>
                            <img
                                src={item.img}
                                alt={item.title}
                                className='w-full h-56 sm:h-60 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110'
                            />

                            <div className='p-5'>
                                <p className='text-xs text-[#96ae00] font-semibold uppercase mb-2'>
                                    {item.category} · {item.date}
                                </p>

                                <h3 className='text-[#2d2a6e] font-quicksand text-lg font-semibold mb-3 line-clamp-2'>
                                    {item.title}
                                </h3>

                                <p className='text-sm text-gray-500 mb-4 line-clamp-2'>
                                    These are the people who make your life
                                    easier. Egestas is tristique vestibulum.
                                </p>

                                <button className='text-[#96ae00] text-sm font-semibold hover:underline'>
                                    Continue Reading →
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BlogCard;
