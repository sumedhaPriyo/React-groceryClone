import React from 'react';
import banner1 from '../../../../assets/images/banner-1.jpg';
import banner2 from '../../../../assets/images/banner-2.jpg';
import banner3 from '../../../../assets/images/banner-3.jpg';

const OfferSection = () => {
    const banners = [
        { img: banner1, highlight: '#ffd600' },
        { img: banner2, highlight: 'white' },
        { img: banner3, highlight: '#ffd600' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className="relative rounded-lg overflow-hidden h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 flex flex-col justify-start p-4 sm:p-5 md:p-6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner.img})` }}
                >
                    <h5 className={`font-jost text-base sm:text-lg md:text-xl mt-1 sm:mt-2`} style={{ color: banner.highlight }}>
                        Top offers
                    </h5>
                    <h4 className="font-quicksand text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3 leading-tight">
                        Eat Green
                        <br />
                        Best For Family
                    </h4>
                    <h5 className="font-jost text-white text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6">
                        Free Shipping 05km
                    </h5>
                </div>
            ))}
        </div>
    );
};

export default OfferSection;
