import recommandproduct from '../../../../assets/images/feature.webp';

const LeftSideRecomm = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        src={recommandproduct}
        alt="recommandproduct"
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full object-contain"
      />
    </div>
  );
};

export default LeftSideRecomm;
