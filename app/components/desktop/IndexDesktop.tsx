import { Link } from '@remix-run/react';
import React from 'react';

// Define types for our content props
type ContentProps = {
  hero: any;
  limitedTime: any;
  promotions: any;
  evenMoreForLess: any;
  productCarousel: any;
};

// Reusable Product Card Component
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
  // TODO: Implement dynamic countdown logic.
  const countdown = '16:54:29';

  return (
    <div className="bg-white text-black font-neue-plak">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-end text-white overflow-hidden">
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
        {/* Overlay to help text stand out */}
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

        <div className="relative z-20 w-full px-16 pb-16">
          <h2 className="font-black text-6xl leading-tight">
            {hero.mainSubtitle}
          </h2>
          <p className="text-xl mt-2">{hero.secondarySubtitle}</p>
          <Link to={hero.buttonLink}>
            <button className="mt-6 bg-black text-white font-semibold py-3 px-10 text-md hover:bg-gray-800 transition">
              {hero.buttonText}
            </button>
          </Link>
        </div>
      </section>

      {/* Limited Time Section */}
      <section
        style={{ backgroundImage: `url(${limitedTime.desktop.background})` }}
        className="relative bg-cover bg-center text-white py-10 px-16 flex items-center"
      >
        <div className="w-1/2">
          <h2 className="font-black text-6xl leading-tight">
            {limitedTime.title}
          </h2>
          <p className="text-xl mt-2">{limitedTime.subtitle}</p>
          <div className="mt-6">
            <span className="font-semibold text-lg">
              {limitedTime.expiryText}
            </span>
            <span className="font-bold text-4xl ml-3 tracking-widest">
              {countdown}
            </span>
            <Link to={limitedTime.buttonLink}>
              <button className="mt-8 bg-white text-black font-semibold py-3 px-12 text-md hover:bg-gray-200 transition">
                {limitedTime.buttonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src={limitedTime.desktop.productImage}
            alt="Limited Time Offer"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-white px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
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

      {/* Even More For Less Section */}
      <section className="relative text-white">
        <img
          src={evenMoreForLess.desktopImage}
          alt="Even more for less"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-start px-24">
          <h2
            className="font-black text-9xl leading-none"
            dangerouslySetInnerHTML={{ __html: evenMoreForLess.title }}
          />
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-16 bg-white px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {productCarousel.title}
        </h2>
        <div className="grid grid-cols-4 gap-8">
          {productCarousel.items.map((product: any, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexDesktop;
