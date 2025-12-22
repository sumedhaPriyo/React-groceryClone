import banner from '../.././../../assets/images/banner.png'


const RightSideContent = () => {
    return (
        <div className="w-full sm:w-1/2 flex justify-end">
            <img
                src={banner}
                alt="Organic Fruits"
                className="w-full max-w-3xl object-cover"
            />
        </div>
    );
};

export default RightSideContent;
