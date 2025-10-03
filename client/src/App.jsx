import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceList from './components/PriceList';
import OverviewSection from './components/OverviewSection';
import Amenities from './components/Amenities';
import Location from "./components/Location";
import Footer from './components/Footer';
import FloatingContact from "./components/FloatingContact";
import AboutBuilder from './components/AboutBuilder';

function App() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Overview Section */}
      <div id="overview">
        <OverviewSection />
      </div>

      {/* Price List */}
      <div id="price">
        <PriceList />
      </div>

      {/* Amenities */}
      <div id="amenities">
        <Amenities />
      </div>

      {/* Location */}
      <div id="location">
        <Location />
      </div>

      {/* About Builder */}
      <div id="builder">
        <AboutBuilder />
      </div>

      {/* Floating Contact (can be anywhere) */}
      <FloatingContact />

      {/* Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
