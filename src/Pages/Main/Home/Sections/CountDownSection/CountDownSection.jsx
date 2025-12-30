import React from 'react';
import coundpwn from '../../../../../assets/images/coundpwn-bg-1.png';
const CountDownSection = () => {
    return (
        <div
            className='w-full h-auto md:h-80 lg:h-170 xl:h-170 2xl:h-178 bg-no-repeat bg-cover bg-center md:bg-contain'
            style={{ backgroundImage: `url(${coundpwn})` }}
        >
            <div className='w-full md:w-3/4 lg:w-1/2 h-full py-10 px-5 md:pt-20 md:pl-20 lg:pt-30 lg:pl-40 xl:pl-100'>
                <h5 className='text-white font-Schoolbell text-base md:text-lg '>
                    ~ Deals Of The Day ~
                </h5>
                <h2 className='text-white font-quicksand text-2xl md:text-3xl lg:text-4xl mb-5'>
                    Premium Drinks <br />
                    Fresh Farm Product
                </h2>
                <p className='text-white font-jost text-sm md:text-base mb-5'>
                    The liber tempor cum soluta nobis eleifend option congue
                    doming quod mazim placerat facere possum assam going through
                </p>
                <h4 className='text-white uppercase text-base md:text-lg'>
                    hurry up! Offer End In:
                </h4>
                <div className='flex gap-3 items-center justify-start md:justify-between w-full md:w-120 mt-5 flex-wrap sm:flex-nowrap'>
                    <p className='text-white font-quicksand text-3xl md:text-5xl'>
                        0 <span className='text-sm md:text-xl'>Days</span>
                    </p>
                    <p className='text-white font-quicksand text-3xl md:text-5xl'>
                        0 <span className='text-sm md:text-xl'>Days</span>
                    </p>

                    <p className='text-white font-quicksand text-3xl md:text-5xl'>
                        0 <span className='text-sm md:text-xl'>Days</span>
                    </p>

                    <p className='text-white font-quicksand text-3xl md:text-5xl'>
                        0 <span className='text-sm md:text-xl'>Days</span>
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row gap-5 mt-10'>
                    <button className='bg-white text-[#96ae00] font-quicksand font-bold w-40 sm:w-50 h-12 flex items-center justify-center   hover:bg-[#298058] transition duration-300 rounded-full'>
                        Shop Now
                    </button>
                    <button className='bg-white text-[#96ae00] font-quicksand font-bold w-40 sm:w-50 h-12 flex items-center justify-center   hover:bg-[#298058] transition duration-300 rounded-full'>
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountDownSection;
