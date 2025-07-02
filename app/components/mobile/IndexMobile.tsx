import { Link } from '@remix-run/react';
import React from 'react';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ContentProps = {
  hero: any;
  limitedTime: any;
  promotions: any;
  evenMoreForLess: any;
  productCarousel: any;
};

const promoSliderSettings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
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
    <button className="bg-white text-black font-semibold w-full py-2 mt-2 border border-gray-300 text-xs">
      Quick-Add
    </button>
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
    <div className="bg-white text-black font-neue-plak overflow-x-hidden">
      <section className="relative w-full h-[46vh] flex items-end text-white overflow-hidden p-6 text-left">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
          key={hero.mobile.video}
        >
          <source src={hero.mobile.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

        <div className="relative z-20">
          <h2 className="font-black text-4xl leading-tight">
            {hero.mainSubtitle}
          </h2>
          <p className="text-lg mt-1">{hero.secondarySubtitle}</p>
          <Link to={hero.buttonLink}>
            <button className="mt-4 bg-black text-white font-semibold py-3 px-10 text-md hover:bg-gray-800 transition">
              {hero.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section
        style={{ backgroundImage: `url(${limitedTime.mobile.productImage})` }}
        className="relative bg-cover bg-center text-white px-6 py-10"
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>

        <div className="relative z-10 text-left">
          <div className="bg-[#D22730] p-3 inline-block">
            <h2 className="font-black text-3xl leading-none">LIMITED TIME</h2>
            <p className="font-semibold text-xs mt-1 uppercase">
              Get these deals, 24 hours only
            </p>
          </div>

          <div className="mt-8">
            <p className="font-extrabold text-4xl tracking-tight uppercase">
              {limitedTime.expiryText} {countdown}
            </p>
            <p className="text-xs mt-2 font-light">
              Check it NOW. New deals dropping every 48 hours.
            </p>
            <Link to={limitedTime.buttonLink} className="block mt-6">
              <button className="bg-white text-black font-semibold py-3 px-10 text-sm">
                {limitedTime.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <h2 className="text-xl font-bold mb-4 px-4">{promotions.title}</h2>
        <Slider {...promoSliderSettings}>
          {promotions.items.map((promo: any, index: number) => (
            <div key={index} className="px-2">
              <Link to={promo.link} className="relative block">
                <img
                  src={promo.img}
                  alt={`Promotion ${index + 1}`}
                  className="w-full h-auto shadow-lg object-cover"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </section>

      <section className="relative text-white">
        <img
          src={evenMoreForLess.mobileImage}
          alt="Even more for less"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <h2
            className="font-black text-5xl leading-none text-center"
            dangerouslySetInnerHTML={{ __html: evenMoreForLess.title }}
          />
          <Link to={evenMoreForLess.buttonLink} className="block mt-4">
            <button className="bg-white text-black font-semibold py-2 px-8 text-sm">
              {evenMoreForLess.buttonText}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-8 bg-white px-4">
        <h2 className="text-xl font-bold mb-4 text-center">
          {productCarousel.title}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {productCarousel.items.map((product: any, index: number) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndexMobile;
