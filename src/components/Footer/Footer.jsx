import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterestP,
} from 'react-icons/fa';

import feature1 from '../../assets/images/feature-icon-1.svg';
import feature2 from '../../assets/images/feature-icon-2.svg';
import feature3 from '../../assets/images/feature-icon-3.svg';
import feature4 from '../../assets/images/feature-icon-4.svg';
import feature5 from '../../assets/images/feature-icon-5.svg';
import footerpayment from '../../assets/images/footer-payment.png';
import footerShape from '../../assets/images/footer-shape-1.svg';


const Feature = ({ icon, title, desc }) => (
    <div className='flex flex-col items-center justify-center text-center p-3 sm:p-4'>
        <div className='mb-2 sm:mb-3'>
            <img src={icon} alt='icon' className='w-10 h-10 sm:w-12 sm:h-12 mx-auto' />
        </div>
        <h5 className='font-semibold text-xs sm:text-sm md:text-base'>{title}</h5>
        <p className='text-[10px] sm:text-xs text-white/70 mt-1'>{desc}</p>
    </div>
);

const SocialIcon = ({ children }) => (
    <div className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#96ae00] transition-all duration-300'>
        {children}
    </div>
);

const Footer = () => {
    return (
  <footer className="bg-[#2d2a6e] text-white relative mt-8 sm:mt-10">

    {/* TOP FEATURES */}
    <div className="px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto py-6 sm:py-8 md:py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center">
        <Feature icon={feature1} title="FAST DELIVERY" desc="Across West & East India" />
        <Feature icon={feature2} title="SAFE PAYMENT" desc="100% Secure Payment" />
        <Feature icon={feature3} title="ONLINE DISCOUNT" desc="Add Multi-buy Discounts" />
        <Feature icon={feature4} title="HELP CENTER" desc="Dedicated 24/7 Support" />
        <Feature icon={feature5} title="CURATED ITEMS" desc="From Handpicked Sellers" />
      </div>
    </div>

    {/* MAIN FOOTER */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14 grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

      <div>
        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">LET US HELP YOU</h4>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          If you have any question, please contact us at: <br />
          <span className="text-[#96ae00] hover:underline cursor-pointer">support@example.com</span>
        </p>
        <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4">
          <SocialIcon><FaFacebookF className="text-xs sm:text-sm" /></SocialIcon>
          <SocialIcon><FaTwitter className="text-xs sm:text-sm" /></SocialIcon>
          <SocialIcon><FaInstagram className="text-xs sm:text-sm" /></SocialIcon>
          <SocialIcon><FaPinterestP className="text-xs sm:text-sm" /></SocialIcon>
        </div>
      </div>

      {/* ADDRESS */}
      <div>
        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">LOOKING FOR ORFARM?</h4>
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          68 St. Vincent Place, <br />
          Glasgow, Greater Newyork NH2012, UK.
        </p>
        <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-white/80 leading-relaxed">
          <strong>Mon – Fri:</strong> 8:10 AM – 6:10 PM <br />
          <strong>Saturday:</strong> 10:10 AM – 6:10 PM <br />
          <strong>Sunday:</strong> Closed
        </p>
      </div>

      {/* CATEGORIES */}
      <div>
        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">HOT CATEGORIES</h4>
        <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-white/80">
          <li className="hover:text-[#96ae00] transition-colors cursor-pointer hover:translate-x-1 duration-200">Fruits & Vegetables</li>
          <li className="hover:text-[#96ae00] transition-colors cursor-pointer hover:translate-x-1 duration-200">Dairy Products</li>
          <li className="hover:text-[#96ae00] transition-colors cursor-pointer hover:translate-x-1 duration-200">Package Foods</li>
          <li className="hover:text-[#96ae00] transition-colors cursor-pointer hover:translate-x-1 duration-200">Beverage</li>
          <li className="hover:text-[#96ae00] transition-colors cursor-pointer hover:translate-x-1 duration-200">Health & Wellness</li>
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">OUR NEWSLETTER</h4>
        <p className="text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 leading-relaxed">
          Subscribe to the Orfarm mailing list to receive updates on new arrivals & other information.
        </p>
        <div className="flex flex-col sm:flex-row w-full items-stretch sm:items-center gap-2 sm:gap-0 bg-white rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Your email address..."
            className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#96ae00]"
          />
          <button className="bg-[#96ae00] hover:bg-[#7a8a00] px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white transition-colors whitespace-nowrap">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto py-4 sm:py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-white/70">
        <p className="text-center md:text-left">
          Copyright © <span className="text-[#96ae00] font-semibold">ORFARM</span>. All rights reserved.
        </p>
        <div className="flex gap-2 sm:gap-3">
          <img src={footerpayment} alt="payment methods" className="h-5 sm:h-6" />
        </div>
      </div>
    </div>

</footer>

    );
};

export default Footer