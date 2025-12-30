import React, { useRef, useEffect } from 'react';
import Rightcard from './Rightcard';

const RightsideContent = () => {
    const scrollRef = useRef(null);

    const handleWheel = (e) => {
        e.preventDefault();
        scrollRef.current.scrollLeft += e.deltaY;
    };

    return (
        <div
            id='right'
            ref={scrollRef}
            onWheel={handleWheel}
            className='
         w-full md:w-2/3 h-full bg-white sm:p-5 p-10
    flex gap-10 flex-nowrap
    overflow-x-auto
    scroll-smooth'
        >
            <Rightcard />
            <Rightcard />
            <Rightcard />
            <Rightcard />
            <Rightcard />
            <Rightcard />
        </div>
    );
};

export default RightsideContent;
