import LeftSideRecomm from './LeftSideRecomm';
import RightSideRecomm from './RightSideRecomm';

const RecommandProducesection = () => {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
        <LeftSideRecomm />
        <RightSideRecomm />
      </div>
    </section>
  );
};

export default RecommandProducesection;
