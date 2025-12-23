import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';

const Hero = () => {
    return (
        <section
            className='max-w-full flex flex-col-reverse md:flex-row md:items-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 min-h-[calc(70vh-80px)] sm:min-h-[calc(75vh-80px)] md:min-h-[calc(80vh-80px)] py-8 sm:py-10 md:py-12'
        >
            <LeftSideContent />
            <RightSideContent />
        </section>
    );
};

export default Hero;
