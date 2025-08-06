import React from 'react';
import { FaBasketballBall, FaSwimmingPool, FaRunning, FaDumbbell, FaTableTennis } from 'react-icons/fa';
import { GiTennisCourt } from 'react-icons/gi';

const Amenities = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-4 md:px-12 text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=1470&q=80')`,
      }}
      id="amenities"
    >
      <div className="bg-black bg-opacity-60 rounded-xl p-8 md:p-12">
        <h2 className="text-4xl font-bold text-center mb-4">Our Amenities</h2>
        <p className="text-center text-lg mb-10">Best of Paliputra - Reserved for You.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <FaBasketballBall className="text-4xl mb-2" />
            <p>Basketball Court</p>
          </div>

          <div className="flex flex-col items-center">
            <FaSwimmingPool className="text-4xl mb-2" />
            <p>Swimming Pools</p>
          </div>

          <div className="flex flex-col items-center">
            <FaRunning className="text-4xl mb-2" />
            <p>Jogging Track</p>
          </div>

          <div className="flex flex-col items-center">
            <FaDumbbell className="text-4xl mb-2" />
            <p>Gymnasium</p>
          </div>

          <div className="flex flex-col items-center">
            <FaTableTennis className="text-4xl mb-2" />
            <p>Billiards Table</p>
          </div>

          <div className="flex flex-col items-center">
            <GiTennisCourt className="text-4xl mb-2" />
            <p>Tennis Court</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
