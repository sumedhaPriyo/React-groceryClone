import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Fruits from "../../assets/images/freshFruits.png";
import FruitsHover from "../../assets/images/fruits-and-veggies.png";
import StarRating from "../../utils/StarRating";
import Button from "../Button/Button";

const ProductCard = () => {
  const cardRefs = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className={`
        absolute right-[-20px] top-1/2 -translate-y-1/2
        w-10 h-10
        bg-white shadow-lg rounded-full
        flex items-center justify-center
        cursor-pointer
        opacity-0
        transition-opacity duration-300
        hover:bg-[#2d2a6e] hover:text-white
        z-10
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}
    >
      ❯
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className={`
        absolute left-[-20px] top-1/2 -translate-y-1/2
        w-10 h-10
        bg-white shadow-lg rounded-full
        flex items-center justify-center
        cursor-pointer
        opacity-0
        transition-opacity duration-300
        hover:bg-[#2d2a6e] hover:text-white
        z-10
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `}
    >
      ❮
    </div>
  );

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-8xl mx-auto  mt-7">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="px-3 mb-5">
              <div className="bg-white shadow-md rounded-xl h-auto p-5 group">
                <div className="relative flex justify-center">
                  <img
                    src={Fruits}
                    className="w-40 h-40 transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={FruitsHover}
                    className="w-40 h-40 absolute top-0 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <div className="flex mb-1">
                  <p className="text-[#4d5574] font-jost text-xs">Fresh Bakery,</p>
                  <p className="text-[#4d5574] font-jost text-xs">Fresh Bakery</p>
                </div>
                <p className="text-[#4d5574] font-jost text-md">
                  Banana, Beautiful Skin, Good For Health 1Kg
                </p>

                <div>
                  <StarRating />
                </div>

                <div>
                  <span className="text-red-500">$ 19.00 </span>
                  $20.00
                </div>

                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-300">
                  <div className="flex items-center justify-center py-5">
                    <Button Btntext="Add to cart" />
                  </div>
                  <div>
                    <p className="text-[#4d5574] font-jost text-xs mb-1">
                      Category:<span> Organic</span>
                    </p>
                    <p className="text-[#4d5574] font-jost text-xs mb-1">
                      MFG:<span> Organic</span>
                    </p>
                    <p className="text-[#4d5574] font-jost text-xs">
                      LIFE:<span> Organic</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCard;
