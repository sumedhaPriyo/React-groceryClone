import Button from '../../../../../components/Button/Button';


const LeftSideContent = () => {
    return (
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">

            <p className="text-[#96ae00] text-xs sm:text-sm font-jost uppercase mb-3 sm:mb-4">
                Top Seller in the week
            </p>

            <h2 className="text-[#2d2a6e] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-quicksand mb-4 sm:mb-6 leading-tight">
                Choose Your <br /> Healthy Lifestyle
            </h2>

            <p className="text-[#4d5574] text-sm sm:text-base md:text-base lg:text-lg max-w-md mx-auto md:mx-0 mb-6 sm:mb-8 font-jost">
                Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better.
            </p>

            <div className="flex items-center justify-center md:justify-start">  
                <Button Btntext="Shop Now" />
            </div>
        </div>
    );
};

export default LeftSideContent;
