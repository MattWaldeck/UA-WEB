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
      <div className="absolute bottom-4 w-full px-4">
        <button className="bg-white text-black font-semibold w-full py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Quick-Add
        </button>
      </div>
    </div>
    <h3 className="font-semibold mt-4 text-sm">{product.name}</h3>
    <div className="flex items-center gap-2 mt-1">
      <p className="font-bold text-red-600">{product.price}</p>
      {product.originalPrice && (
        <p className="text-gray-500 line-through text-sm">
          {product.originalPrice}
        </p>
      )}
    </div>
  </div>
);

const IndexDesktop: React.FC<ContentProps> = ({
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
      <section className="relative w-full h-[91vh] 2xl:h-[83vh] flex items-end text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          key={hero.desktop.video}
        >
          <source src={hero.desktop.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
        <div className="relative z-20 w-full px-5 pb-8">
          <h2 className="font-black text-6xl leading-none text-black">
            END OF SEASON
            <br />
            SALE NOW LIVE
          </h2>
          <p className="text-md mt-2 text-black">{hero.secondarySubtitle}</p>
          <Link to={hero.buttonLink}>
            <button className="mt-6 bg-black text-white font-regular py-3 px-10 text-sm hover:bg-gray-800 transition">
              {hero.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${limitedTime.desktop.background})` }}
        className="relative bg-cover bg-center text-white py-10 px-24 flex items-center min-h-[580px] max-w-[1400px] 2xl:max-w-[1680px] mx-auto mt-8"
      >
        <div>
          <div className="mt-52">
            <div>
              <span className="font-neue-plak font-bold text-4xl uppercase">
                {limitedTime.expiryText}
              </span>
              <span className="font-bold text-4xl ml-3 tracking-wide">
                {countdown}
              </span>
            </div>
            <p className="text-xs font-regular mt-3">
              Check in NOW. New deals dropping every 48 hours.
            </p>
            <Link to={limitedTime.buttonLink}>
              <button className="mt-20 bg-white text-black font-regular py-3 px-8 text-md hover:bg-gray-200 transition">
                {limitedTime.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white px-6">
        <h2 className="text-3xl font-bold mb-8 text-start whitespace-pre-line">
          {promotions.title}
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {promotions.items.map((promo: any, index: number) => (
            <Link to={promo.link} key={index} className="relative block group">
              <img
                src={promo.img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto shadow-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="relative text-white">
        <img
          src={evenMoreForLess.desktopImage}
          alt="Even more for less"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-end justify-center mb-40">
          <h2
            className="font-black text-9xl leading-none"
            dangerouslySetInnerHTML={{ __html: evenMoreForLess.title }}
          />
          <Link to={evenMoreForLess.buttonLink} className="block mt-4">
            <button className="bg-white text-black font-regular py-2 px-4 text-sm">
              {evenMoreForLess.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-1 bg-white px-8">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {productCarousel.title}
        </h2>
        <div className="grid grid-cols-4 gap-3 mb-20">
          {productCarousel.items.map((product: any, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexDesktop;
