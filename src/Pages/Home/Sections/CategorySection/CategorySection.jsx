import { useState } from 'react';
import categories from '../../../../data/categories'

const CategorySection = () => {
    const [isHover, setIshover] = useState(false);

    return (
        <section className='px-0 py-10 '>
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2'>
                {categories.map((item) => (
                    <div
                        key={item.id}
                        className='flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer min-h-[120 px] w-full'
                    >
                        <div className='relative w-20 h-20 mb-5'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-full object-contain rounded-full'
                            />
                  
                            <div className='absolute inset-0 bg-[rgba(0,0,0,0.5)]  rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition'>
                                <span className='text-white text-xl font-bold'>
                                    +
                                </span>
                            </div>
                        </div>

                        <p className='text-[13px] font-medium text-gray-800 text-center'>
                            {item.title}
                        </p>
                        <p className='text-xs text-gray-500 text-center'>
                            {item.quantity}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategorySection;
