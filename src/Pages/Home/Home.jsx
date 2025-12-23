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
        <main className='w-full overflow-x-hidden overflow-y-auto h-screen flex justify-center'>
            <div className='w-full max-w-[1920px] mx-auto'>
                {/* Main content sections with responsive padding */}
                <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24'>
                    <Navbar />
                    <Hero />
                    <CategorySection />
                    <ProductSection />
                    <RecommandProducesection />
                    <OfferSection />
                    <SpecialProjectSection />
                </div>

                <CountDownSection />
                
                {/* Blog section with responsive padding */}
                <div className='px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32'>
                    <BlogSection />
                </div>
            </div>
        </main>
    );
};

export default Home;
