import { useState } from 'react';
import categories from '../../../../data/categories'

const CategorySection = () => {
    const [isHover, setIshover] = useState(false);

    return (
        <section className='py-8 sm:py-10 md:py-12 lg:py-14'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-4 lg:gap-5'>
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col items-center p-3 sm:p-4 md:p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow cursor-pointer min-h-[120px] sm:min-h-[140px] md:min-h-[150px] w-full'
                    >
                        <div className='relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 mb-3 sm:mb-4 md:mb-5'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-full object-contain rounded-full'
                            />
                  
                            <div className='absolute inset-0 bg-[rgba(0,0,0,0.5)] rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='text-white text-lg sm:text-xl font-bold'>
                                    +
                                </span>
                            </div>
                        </div>

                        <p className='text-xs sm:text-[13px] md:text-sm font-medium text-gray-800 text-center leading-tight'>
                            {item.title}
                        </p>
                        <p className='text-[10px] sm:text-xs text-gray-500 text-center mt-1'>
                            {item.quantity}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
