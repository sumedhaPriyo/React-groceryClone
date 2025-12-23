const RightSideRecomm = () => {
    return (
        <div className='w-full lg:w-1/2 px-4 sm:px-6 lg:px-0'>
            <p className='text-[#96ae00] font-Schoolbell text-sm sm:text-base mb-2 sm:mb-3'>
                ~ The Best For Your ~
            </p>

            <h2 className='text-[#2d2a6e] text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-quicksand font-bold leading-tight mb-4 sm:mb-6'>
                Organic Drinks <br />
                <span className='text-[#96ae00]'>Easy Healthy</span> – Happy
                Life
            </h2>

            <p className='text-[#4d5574] font-jost text-sm sm:text-base mb-6 sm:mb-8 max-w-xl'>
                The liber tempor cum soluta nobis eleifend option congue doming
                quod mazim placerat facer possim assum.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6'>
                <div>
                    <h5 className='font-semibold text-[#2d2a6e] text-sm sm:text-base mb-1 sm:mb-2'>
                        Fresh Fruits:
                    </h5>
                    <div className='border-b border-dashed border-gray-300 my-2'></div>
                    <p className='text-[#4d5574] text-xs sm:text-sm'>Apples, Berries & Cherries</p>
                </div>

                <div>
                    <h5 className='font-semibold text-[#2d2a6e] text-sm sm:text-base mb-1 sm:mb-2'>
                        Ingredient:
                    </h5>
                    <div className='border-b border-dashed border-gray-300 my-2'></div>
                    <p className='text-[#4d5574] text-xs sm:text-sm'>Energy, Protein, Sugars</p>
                </div>

                <div>
                    <h5 className='font-semibold text-[#2d2a6e] text-sm sm:text-base mb-1 sm:mb-2'>
                        Expiry Date:
                    </h5>
                    <div className='border-b border-dashed border-gray-300 my-2'></div>
                    <p className='text-[#4d5574] text-xs sm:text-sm'>See on the Bottle Cap</p>
                </div>

                <div>
                    <h5 className='font-semibold text-[#2d2a6e] text-sm sm:text-base mb-1 sm:mb-2'>
                        Bottle Size:
                    </h5>
                    <div className='border-b border-dashed border-gray-300 my-2'></div>
                    <p className='text-[#4d5574] text-xs sm:text-sm'>500ml – 1000ml</p>
                </div>

                <div className='pt-2 sm:pt-4'>
                    <button className='w-full sm:w-auto min-w-[160px] bg-[#2d2a6e] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-[#1f1c50] transition-colors'>
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSideRecomm;
