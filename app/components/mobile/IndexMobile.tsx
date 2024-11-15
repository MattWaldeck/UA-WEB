import { Link } from '@remix-run/react';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Category = {
  name: string;
  img: string;
};

type Promo = {
  img: string;
  text: string;
};

type InstagramItem = string;

const categories: Category[] = [
  { name: 'Train', img: '/assets/images/Train.jpg' },
  { name: 'Run', img: '/assets/images/Run.jpg' },
  { name: 'Golf', img: '/assets/images/Golf.jpg' },
  { name: 'Accessories', img: '/assets/images/Accessories.jpg' },
];

const promotions: Promo[] = [
  { img: '/assets/images/Promo 1.jpg', text: '' },
  { img: '/assets/images/Promo 2.jpg', text: '' },
  { img: '/assets/images/Promo 3.jpg', text: '' },
  { img: '/assets/images/Promo 4.jpg', text: '' },
];

const instagramImages: InstagramItem[] = [
  '/assets/images/IG Image 2_DT.jpg',
  '/assets/images/IG Image 3_DT.jpg',
  '/assets/images/IG Image 4_DT.jpg',
  '/assets/images/IG Image 5_DT.jpg',
];

// Slider settings
const sliderSettings: Slider.Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

const IndexMobile: React.FC = () => {
  return (
    <div className="bg-gray-100 text-black font-neue-plak">
      {/* Section 1 */}
      <section className="relative w-full mb-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover shadow-lg"
        >
          <source src="/assets/videos/UA_Theme_1_MB.mp4" type="video/mp4" />
        </video>

        <div className="bg-white py-5 px-10 text-left max-w-3xl mx-auto">
          <h1 className="font-neue-plak font-black text-[48px] leading-[1] mb-2">
            CHECK OUT OUR <br /> LATEST GEAR
          </h1>
          <p className="font-neue-plak font-normal text-[14px] leading-[1.6] mb-4">
            Advanced tech, superior comfort, and all performance is <br />
            what our latest UA gear is all about. Built to go further, <br />
            push hard, and break your boundaries.
          </p>
          <Link to="/new-arrivals">
            <button className="bg-black text-white font-neue-plak font-normal text-[14px] py-3 w-full hover:bg-gray-800 transition">
              Shop UA New Arrivals
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-1 bg-gray-100 px-4">
        <h2 className="font-neue-plak font-black text-[22px] mb-2">
          Our Best Gear
        </h2>
        <p className="font-neue-plak font-normal text-[14px] text-gray-600 mb-6">
          Unlock your potential with the best UA Gear
        </p>
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <div key={category.name} className="p-2">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-auto shadow-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-100 text-black py-5 px-0 w-full">
        <div className="relative w-full">
          <img
            src="/assets/images/UA_Theme_2_MB.jpg"
            alt="Project Rock"
            className="w-full h-auto object-cover shadow-xl"
          />
        </div>
        <div className="w-full max-w-4xl mx-auto px-4 mt-8">
          <p className="font-neue-plak font-bold text-[16px] mb-2">
            Project Rock
          </p>
          <h2 className="font-neue-plak font-black text-[48px] leading-tight mb-2">
            EVERY SIDE <br /> OF STRONG
          </h2>
          <p className="font-neue-plak font-normal text-[14px] text-gray-600 leading-[1.6] mb-8">
            The Underground collection is inspired by the idea of a <br />
            Project Rock fight club. A place where we push each
            <br />
            other harder to make each other stronger. A drop
            <br />
            dedicated to you and your crew.The neon colourways are <br />
            a reflection of the energy we bring to every rep,every set
            <br />
            and every challenge.
          </p>
          <Link to="/project-rock">
            <button className="bg-black text-white font-neue-plak text-[14px] py-3 w-full hover:bg-gray-800 transition">
              Shop Project Rock
            </button>
          </Link>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-3 bg-gray-100 px-4">
        <h2 className="font-neue-plak font-bold text-[22px] mb-1">
          Discover Our Latest Promotions
        </h2>
        <p className="font-neue-plak font-normal text-[14px] text-gray-600 mb-4">
          Get the best deals on the best gear.
        </p>
        <Slider {...sliderSettings}>
          {promotions.map((promo, index) => (
            <div key={index} className="p-2">
              <img
                src={promo.img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto shadow-lg object-cover"
              />
            </div>
          ))}
        </Slider>
      </section>

      {/* Section 5 */}
      <section className="py-1 bg-gray-100 px-4">
        <h2 className="font-neue-plak font-bold text-[22px] mb-1">
          What's happening on Instagram
        </h2>
        <p className="font-neue-plak font-normal text-[14px] text-gray-600 mb-4">
          Don't miss out on the latest news and updates from Under Armour.
        </p>
        <div className="relative w-full mb-6">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover shadow-lg"
          >
            <source src="/assets/videos/ig_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 right-0 bg-white p-2 shadow-lg">
            <FaInstagram className="text-black w-4 h-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {instagramImages.map((img, index) => (
            <div key={index} className="relative">
              <img
                src={img}
                alt={`Instagram ${index + 1}`}
                className="w-full object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexMobile;
