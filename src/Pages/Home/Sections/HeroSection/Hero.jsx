import LeftSideContent from './LeftSideContent';
import RightSideContent from './RightSideContent';

const Hero = () => {
    return (
        <section
            className='
        max-w-full   flex flex-col-reverse sm:flex-row items-center gap-10 md:gap-6 min-h-[calc(80vh-80px)] sm:px:0  sm:pt-0 pt-10'>
            <LeftSideContent />
            <RightSideContent />
        </section>
    );
};

export default Hero;
