import React, { useState } from 'react';

const Pagination = ({
    hasNext,
    hasPrev,
    onPrev,
    onNext,
    totalPages,
    currentPage,
}) => {


    return (
        <div className='w-full h-30 mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-4'>
            <button
                onClick={onPrev}
                disabled={!hasPrev}
                className={`h-10 w-20 flex justify-center items-center rounded-md text-lg font-quicksand ${
                    hasPrev
                        ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >   
                Prev
            </button>

            <h3>Page No {`${currentPage} / ${totalPages}`}</h3>
            <button
                onClick={onNext}
                disabled={!hasNext}
                className={`h-10 w-20 flex justify-center items-center rounded-md text-lg font-quicksand ${
                    hasNext
                        ? 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
