import banner from '../../../../../assets/images/banner.png'


const RightSideContent = () => {
    return (
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
                src={banner}
                alt="Organic Fruits"
                className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-cover"
            />
        </div>
    );
};

export default RightSideContent;
