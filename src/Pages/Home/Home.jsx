import Navbar from '../../components/Navbar/Navbar';
import BlogSection from './Sections/BlogSection';
import CategorySection from './Sections/CategorySection/CategorySection';
import CountDownSection from './Sections/CountDownSection/CountDownSection';
import Hero from './Sections/HeroSection/Hero';
import OfferSection from './Sections/OfferSection/OfferSection';
import ProductSection from './Sections/ProductSection/ProductSection';
import RecommandProducesection from './Sections/RecommandProducesection';
import SpecialProjectSection from './Sections/SpecialProjectSection/SpecialProjectSection';

const Home = () => {
    return (
        <main className='w-full overflow-x-hidden overflow-y-auto h-screen flex justify-center '>
            <div className='max-w-full  mx-auto lg:mx-0 '>
                <div className='sm:px-5 md:px-30'>
                    <Navbar />
                    <Hero />
                    <CategorySection />
                    <ProductSection />
                    <RecommandProducesection />
                    <OfferSection />
                    <SpecialProjectSection />
                </div>

                <CountDownSection />
                <div className='sm:px-5 md:px-30'>
                    <BlogSection />
                </div>
            </div>
        </main>
    );
};

export default Home;
