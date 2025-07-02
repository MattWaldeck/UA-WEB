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
      <div className="absolute bottom-4 w-full px-4 md:px-2 md:bottom-2">
        <button className="bg-white text-black font-semibold w-full py-2 text-sm opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity">
          Quick-Add
        </button>
      </div>
    </div>
    <h3 className="font-semibold mt-2 md:mt-4 text-sm">{product.name}</h3>
    <div className="flex items-center gap-2 mt-1">
      <p className="font-bold text-red-600 text-sm">{product.price}</p>
      {product.originalPrice && (
        <p className="text-gray-500 line-through text-xs md:text-sm">
          {product.originalPrice}
        </p>
      )}
    </div>
  </div>
);

const Index: React.FC<ContentProps> = ({
  hero,
  limitedTime,
  promotions,
  evenMoreForLess,
  productCarousel,
}) => {
  const [countdown, setCountdown] = useState('');
  const [videoSrc, setVideoSrc] = useState(hero.mobile.video);

  useEffect(() => {
    const handleResize = () => {
      const newSrc =
        window.innerWidth < 768 ? hero.mobile.video : hero.desktop.video;
      setVideoSrc(newSrc);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hero.desktop.video, hero.mobile.video]);

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
      {/* Hero Video Section */}
      <section className="relative w-full h-[92vh] md:h-auto md:aspect-[2/1] md:max-h-[650px] text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 top-0 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 md:static md:translate-x-0 md:object-cover md:w-full md:h-full"
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-10 z-10 hidden md:block"></div>
        <div className="absolute z-20 bottom-8 w-full px-5 md:bottom-10 md:left-2 md:text-left text-start">
          <h2 className="font-black text-3xl md:text-6xl leading-tight md:leading-none text-black md:black">
            SHOP OUR
            <br />
            END OF SEASON SALE
          </h2>
          <p className="text-sm md:text-md mt-2 text-black md:text-black">
            {hero.secondarySubtitle}
          </p>
          <Link to={hero.buttonLink}>
            <button className="mt-4 md:mt-6 bg-black text-white py-3 px-6 text-sm hover:bg-gray-800 transition">
              {hero.buttonText}
            </button>
          </Link>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="relative text-white mt-6 md:mt-8">
        <div
          className="hidden md:block bg-cover bg-center py-10 px-24 items-center min-h-[580px] max-w-[1400px] mx-auto"
          style={{ backgroundImage: `url(${limitedTime.desktop.background})` }}
        >
          <div>
            <div className="mt-64">
              <div>
                <span className="text-4xl uppercase font-bold">
                  {limitedTime.expiryText}
                </span>
                <span className="font-bold text-4xl ml-3 tracking-wide">
                  {countdown}
                </span>
              </div>
              <p className="text-xs mt-3">
                Check in NOW. New deals dropping every 48 hours.
              </p>
              <Link to={limitedTime.buttonLink}>
                <button className="mt-20 bg-white text-black py-3 px-8 text-md hover:bg-gray-200 transition">
                  {limitedTime.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden relative">
          <img
            src={limitedTime.mobile.productImage}
            alt="Limited offer"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 text-white p-4 text-left w-full bg-gradient-to-t from-black via-black/70 to-transparent">
            <div className="flex items-baseline gap-3">
              <p className="text-4xl font-extrabold tracking-wide">
                {limitedTime.expiryText}
              </p>
              <p className="font-bold text-3xl">{countdown}</p>
            </div>
            <p className="text-sm mt-1">
              Check it NOW. New deals dropping every 48 hours.
            </p>
            <Link to={limitedTime.buttonLink} className="mt-3 inline-block">
              <button className="bg-white text-black py-2 px-8 hover:bg-gray-200 transition">
                {limitedTime.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-8 bg-white px-3 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-start whitespace-pre-line">
          {promotions.title}
        </h2>
        <div className="md:grid md:grid-cols-4 md:gap-6 flex overflow-x-auto gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {promotions.items.map((promo: any, index: number) => (
            <Link
              to={promo.link}
              key={index}
              className="relative block group flex-shrink-0 w-5/6 sm:w-2/3 md:w-full"
            >
              <img
                src={promo.img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto object-cover shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Even More For Less Section */}
      <section className="relative text-white mt-6">
        <img
          src={evenMoreForLess.desktopImage}
          alt="Even more for less"
          className="w-full h-auto hidden md:block"
        />
        <img
          src={evenMoreForLess.mobileImage}
          alt="Even more for less"
          className="w-full h-auto md:hidden"
        />
        <div className="absolute inset-0 flex items-end justify-center md:mb-40">
          <div className="text-center">
            <h2
              className="text-5xl md:text-9xl font-black leading-none"
              dangerouslySetInnerHTML={{ __html: evenMoreForLess.title }}
            />
            {/* <Link to={evenMoreForLess.buttonLink} className="block mt-4">
              <button className="bg-white text-black py-3 px-8 text-sm">
                {evenMoreForLess.buttonText}
              </button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-6 bg-white px-3 md:px-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {productCarousel.title}
        </h2>
        <div className="md:grid md:grid-cols-4 md:gap-4 flex overflow-x-auto gap-4 mb-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {productCarousel.items.map((product: any, index: number) => (
            <div key={index} className="flex-shrink-0 w-10/12 md:w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
