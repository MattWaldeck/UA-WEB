import { Link } from '@remix-run/react';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

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

const IndexDesktop: React.FC = () => {
  return (
    <div className="bg-gray-100 text-black font-neue-plak">
      {/* Section 1 */}
      <section className="relative w-full mb-14">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[50vh] object-cover shadow-lg"
        >
          <source src="/assets/videos/UA_Theme_1_DT.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute top-1 right-5 w-[40%] h-full flex flex-col justify-center items-start space-y-2 px-6"
          style={{ marginLeft: '-50px', paddingLeft: '1px' }}
        >
          <h1 className="font-neue-plak font-black text-[50px] leading-[1]  mb-2">
            <span>CHECK</span>
            <br />
            <span>OUT OUR</span>
            <br />
            <span>LATEST</span>
            <br />
            <span>GEAR</span>
          </h1>

          <p className="font-neue-plak text-[12px] leading-tight max-w-sm mb-3">
            Advanced tech, superior comfort, and all <br />
            performance is what our latest UA gear is all <br />
            about. Built to go further, push hard, and break <br />
            your boundaries.
          </p>

          <button
            className=" font-neue-plak-regular text-[14px] bg-black text-white py-2 px-8
           w-half text-center font-semibold sharp hover:bg-gray-800 transition"
          >
            Shop UA New Arrivals
          </button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-1 bg-gray-100 px-8 mb-10">
        <h2 className="text-[24px] font-neue-plak font-bold mb-2 text-left">
          Our Best Gear
        </h2>
        <p className="text-[14px] font-neue-plak font-normal mb-3 text-left text-gray-600">
          Unlock your potential with the best UA Gear
        </p>
        <div className="grid grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-auto shadow-lg object-cover"
              />
              <Link
                to={`/${category.name.toLowerCase()}`}
                className="block mt-2 text-left text-black font-neue-plak font-semibold text-[14px] hover:underline"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="relative py-1 text-white flex items-center px-8 mb-10">
        <div className="w-full h-[500px]">
          <img
            src="/assets/images/UA_Theme_2_DT.jpg"
            alt="Project Rock"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute top-0 right-[20px] w-[30%] h-full flex flex-col justify-center items-start space-y-3 px-6">
          <h3 className="font-neue-plak font-bold text-[16px] mb-4">
            Project Rock
          </h3>

          <h1 className="font-neue-plak font-black text-[48px] leading-[0.95] mb-4">
            <span>EVERY SIDE</span>
            <br />
            <span>OF STRONG</span>
          </h1>

          <p className="font-neue-plak text-[14px] leading-relaxed max-w-sm mb-6">
            The Underground collection is inspired by the idea of a Project Rock
            fight club. A place where we push each other harder to make each
            other stronger. A drop dedicated to you and your crew. The neon
            colourways are a reflection of the energy we bring to every rep,
            every set, and every challenge.
          </p>

          <button className="bg-transparent border border-white text-white font-neue-plak text-[16px] py-2 px-12 text-center font-semibold hover:bg-white hover:text-black transition">
            Shop Project Rock
          </button>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-1 bg-gray-100 px-8 mb-10">
        <h2 className="text-[24px] font-neue-plak font-bold mb-2 text-left">
          Discover Our Latest Promotions
        </h2>
        <p className="text-[14px] font-neue-plak font-normal mb-6 text-left text-gray-600">
          Get the best deals on the best gear.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {promotions.map((promo, index) => (
            <div key={index} className="relative">
              <img
                src={promo.img}
                alt={`Promo ${index + 1}`}
                className="w-full h-auto shadow-lg object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section className="py-1 bg-gray-100 px-8 mb-10">
        <h2 className="text-[24px] font-neue-plak font-bold mb-2 text-left">
          What's happening on Instagram
        </h2>
        <p className="text-[14px] font-neue-plak font-normal mb-6 text-left text-gray-600">
          Don't miss out on the latest news and updates from Under Armour.
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="relative w-full lg:w-1/2 aspect-[16/9]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover shadow-lg"
            >
              <source src="/assets/videos/ig_video.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-0 right-0 bg-white p-2 shadow-lg">
              <FaInstagram className="text-black w-14 h-14" />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            {instagramImages.map((img, index) => (
              <div key={index} className="relative overflow-hidden">
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-contain shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexDesktop;
