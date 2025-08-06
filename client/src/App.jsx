import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PriceList from './components/PriceList';
import OverviewSection from './components/OverviewSection';
import Amenities from './components/Amenities';
import Location from "./components/Location";
import Footer from './components/Footer';
import FloatingContact from "./components/FloatingContact";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
     <OverviewSection /> 
      <PriceList />
      <Amenities/>
      <Location />
      <Footer/>
      <FloatingContact />
    </div>
  );
}

export default App;
