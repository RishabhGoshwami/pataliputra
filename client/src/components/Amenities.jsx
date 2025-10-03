import React from "react";
import {
  FaBasketballBall,
  FaSwimmingPool,
  FaRunning,
  FaDumbbell,
  FaTableTennis,
} from "react-icons/fa";
import { GiTennisCourt } from "react-icons/gi";

const Amenities = () => {
  const items = [
    { icon: <FaBasketballBall />, title: "Basketball Court" },
    { icon: <FaSwimmingPool />, title: "Swimming Pools" },
    { icon: <FaRunning />, title: "Jogging Track" },
    { icon: <FaDumbbell />, title: "Gymnasium" },
    { icon: <FaTableTennis />, title: "Billiards Table" },
    { icon: <GiTennisCourt />, title: "Tennis Court" },
  ];

  return (
    <section
      id="amenities"
      className="relative bg-cover bg-center py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          World-Class Amenities
        </h2>
        <p className="text-center text-lg md:text-xl mb-14 opacity-90">
          Designed for luxury, comfort, and an active lifestyle.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg 
              hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
