import { Link } from '@remix-run/react';
import React from 'react';

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
  const countdown = '16:54:29';

  return (
    <div className="bg-white text-black font-neue-plak">
      {/* --- THIS SECTION IS UPDATED --- */}

      {/* Section 1: Now only contains the video */}
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

      {/* Section 2: A new section for the text content, placed below the video */}
      <section className="bg-white text-start py-3 px-4">
        <h2 className="font-black text-3xl leading-tight">
          SHOP OUR
          <br />
          END OF SEASON SALE
        </h2>
        <p className="text-lg mt-4 tracking-wider">{hero.secondarySubtitle}</p>
        <Link to={hero.buttonLink} className="block mx-auto mt-6">
          <button className="bg-black text-white font-semibold py-3 px-8 text-md">
            {hero.buttonText}
          </button>
        </Link>
      </section>

      {/* --- END OF UPDATE --- */}

      <section
        style={{ backgroundImage: `url(${limitedTime.mobile.productImage})` }}
        className="relative bg-cover bg-center min-h-[0vh] flex flex-col justify-end"
      >
        <div className="bg-gray-200 text-black p-6">
          <div className="border-2 border-red-600 p-2 text-center inline-block">
            <span className="font-bold text-red-600 text-sm tracking-widest">
              {limitedTime.expiryText}
            </span>
          </div>
          <p className="font-bold text-4xl mt-3 tracking-widest">{countdown}</p>
          <p className="text-xs mt-2">
            Check in NOW. New deals dropping every 48 hours.
          </p>
          <Link to={limitedTime.buttonLink}>
            <button className="mt-6 bg-white text-black font-semibold py-3 w-full max-w-sm hover:bg-gray-300 transition">
              {limitedTime.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-12 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-start whitespace-pre-line px-4">
          {promotions.title}
        </h2>
        <div className="flex overflow-x-auto gap-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {promotions.items.map((promo: any, index: number) => (
            <Link
              to={promo.link}
              key={index}
              className="relative block group flex-shrink-0 w-5/6 sm:w-2/3"
            >
              <img
                src={promo.img}
                alt={`Promotion ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <img
          src={evenMoreForLess.mobileImage}
          alt="Even more for less"
          className="w-full h-auto"
        />
        <div className="text-center mt-6">
          <Link to={evenMoreForLess.buttonLink} className="block">
            <button className="bg-black text-white font-semibold py-3 px-12 text-sm">
              {evenMoreForLess.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-1 bg-white px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {productCarousel.title}
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-12">
          {productCarousel.items.map((product: any, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexMobile;
