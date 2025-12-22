import Navbar from '../../components/Navbar/Navbar';
import CategorySection from './Sections/CategorySection/CategorySection';
import Hero from './Sections/HeroSection/Hero';
import ProductSection from './Sections/ProductSection/ProductSection';

const Home = () => {
    return (
        <main className='w-full overflow-x-hidden overflow-y-auto h-screen'>
        <div className="max-w-full mx-auto px-4 sm:px-10 md:mx-5 lg:mx-0">


              <Navbar />
                <Hero />
                <CategorySection />
                <ProductSection />
            </div>
        </main>
    );
};

export default Home;
