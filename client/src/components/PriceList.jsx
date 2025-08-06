import React from 'react';

const PriceList = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-12" id="price-list">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Price</h2>
      <p className="text-center text-gray-600 mb-10 text-lg">Dream home a door away.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {/* Studio Apartment */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">LUXURY Studio Apartments</h3>
          <p className="text-lg font-bold text-green-700">₹ 54.50 Lakhs</p>
          <p className="text-gray-600 mb-2">Onwards</p>
          <p>Super Area: <strong>571 sq.ft.</strong></p>
          <p>Type: <strong>Studio Apartment</strong></p>
        </div>

        {/* 2 BHK */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">LUXURY RESIDENCES</h3>
          <p className="text-lg font-bold text-green-700">₹ 77.70 Lakhs</p>
          <p className="text-gray-600 mb-2">Onwards</p>
          <p>Super Area: <strong>1036 sq.ft.</strong></p>
          <p>Type: <strong>2 BHK</strong></p>
        </div>

        {/* Retail Shop */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold mb-2">RETAIL SHOPS</h3>
          <p className="text-lg font-bold text-green-700">₹ 88.50 Lakhs</p>
          <p className="text-gray-600 mb-2">Onwards</p>
          <p>Super Area: <strong>295 sq.ft.</strong></p>
          <p>Type: <strong>Retail Shop</strong></p>
        </div>
      </div>

      {/* Request a Call Button */}
      <div className="text-center">
        <a
          href="tel:+919999999999"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Request a Call
        </a>
      </div>
    </section>
  );
};

export default PriceList;
