import Button from '../../../../components/Button/Button'

const LeftSideContent = () => {
    return (
        <div className="w-full sm:w-1/2 flex flex-col justify-center text-left">

            <p className="text-[#96ae00] text-sm font-jost uppercase mb-4 text-center mt-5 sm:mt-0 sm:text-left">
                Top Seller in the week
            </p>

            <h2 className="text-[#2d2a6e] text-4xl sm:text-5xl lg:text-6xl font-quicksand mb-6 leading-tight text-center  sm:mt-0 sm:text-left">
                Choose Your <br /> Healthy Lifestyle
            </h2>

            <p className="text-[#4d5574] text-base max-w-md mb-8 font-jost text-center sm:mt-0 sm:text-left">
                Presentation matters. Our fresh Vietnamese vegetable rolls look good and taste even better.
            </p>

            <div className="flex items-center justify-center  sm:justify-start  sm:items-start">  
                <Button Btntext="Shop Now" />
            </div>
        </div>
    );
};

export default LeftSideContent;
