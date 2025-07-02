import { Link } from '@remix-run/react';
import React, { useEffect, useState } from 'react';

type ContentProps = {
  hero: any;
  limitedTime: any;
  promotions: any;
  evenMoreForLess: any;
  productCarousel: any;
};

const ProductCard: React.FC<{ product: any }> = ({ product }) => (
  <div className="text-left">
    <div className="bg-gray-200 aspect-square w-full flex items-center justify-center overflow-hidden relative group">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover"
      />
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-white text-black text-xs font-semibold px-2 py-1">
          NEW
        </span>
      )}
      <div className="absolute bottom-2 w-full px-2">
        <button className="bg-white text-black font-semibold w-full py-2 text-sm">
          Quick-Add
        </button>
      </div>
    </div>
    <h3 className="font-semibold mt-2 text-sm">{product.name}</h3>
    <div className="flex items-center gap-2 mt-1">
      <p className="font-bold text-red-600 text-sm">{product.price}</p>
      {product.originalPrice && (
        <p className="text-gray-500 line-through text-xs">
          {product.originalPrice}
        </p>
      )}
    </div>
  </div>
);

const IndexMobile: React.FC<ContentProps> = ({
  hero,
  limitedTime,
  promotions,
  evenMoreForLess,
  productCarousel,
}) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 16);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expiryDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCountdown('00:00:00');
      } else {
        const hours = String(
          Math.floor((distance / (1000 * 60 * 60)) % 24)
        ).padStart(2, '0');
        const minutes = String(
          Math.floor((distance / (1000 * 60)) % 60)
        ).padStart(2, '0');
        const seconds = String(Math.floor((distance / 1000) % 60)).padStart(
          2,
          '0'
        );
        setCountdown(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black font-neue-plak">
      <section className="relative w-full aspect-square">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          key={hero.mobile.video}
        >
          <source src={hero.mobile.video} type="video/mp4" />
        </video>
      </section>

      <section className="bg-white text-start py-3 px-2">
        <h2 className="font-black text-3xl leading-tight">
          SHOP OUR
          <br />
          END OF SEASON SALE
        </h2>
        <p className="text-sm mt-1 tracking-wider">{hero.secondarySubtitle}</p>
        <Link to={hero.buttonLink} className="block mx-auto mt-3 mb-4">
          <button className="bg-black text-white font-semibold py-3 px-4 text-md">
            {hero.buttonText}
          </button>
        </Link>
      </section>

      <section className="relative">
        <img
          src={limitedTime.mobile.productImage}
          alt="Limited time offer"
          className="w-full h-auto"
        />
        <div className="absolute bottom-0 left-0 text-white p-4 text-left w-full">
          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-extrabold font-neue-plak tracking-wide">
              EXPIRES IN
            </p>
            <p className="font-bold font-neue-plak text-3xl">{countdown}</p>
          </div>
          <p className="text-sm mt-1 font-neue-plak-regular">
            Check it NOW. New deals dropping every 48 hours.
          </p>
          <Link to={limitedTime.buttonLink} className="mt-3 inline-block">
            <button className="bg-white text-black font-regular py-2 px-8 hover:bg-gray-200 transition">
              {limitedTime.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-4 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-start whitespace-pre-line px-3">
          {promotions.title}
        </h2>
        <div className="flex overflow-x-auto gap-4 px-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {promotions.items.map((promo: any, index: number) => (
            <Link
              to={promo.link}
              key={index}
              className="relative block group flex-shrink-0 w-5/6 sm:w-2/3"
            >
              <img
                src={promo.img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto object-cover  shadow-md"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="">
        <img
          src={evenMoreForLess.mobileImage}
          alt="Even more for less"
          className="w-full h-auto"
        />
        <div className="text-start mt-2 pl-4">
          <Link to={evenMoreForLess.buttonLink} className="block">
            <button className="bg-black text-white font-semibold py-4 px-9 text-sm ">
              {evenMoreForLess.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-1 bg-white px-2">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {productCarousel.title}
        </h2>
        <div className="flex overflow-x-auto gap-4 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {productCarousel.items.map((product: any, index: number) => (
            <div key={index} className="flex-shrink-0 w-10/12">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexMobile;
