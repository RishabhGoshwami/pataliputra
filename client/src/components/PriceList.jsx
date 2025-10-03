import React from 'react';
import { IndianRupee, Home, ShoppingBag, Send } from 'lucide-react'; // Icons for visual appeal

const PriceList = () => {
  const priceUnits = [
    { 
      title: 'LUXURY Studio Apartments', 
      price: '54.50 Lakhs', 
      area: '571 sq.ft.', 
      type: 'Studio Apartment', 
      icon: Home,
      highlight: false
    },
    { 
      title: 'LUXURY RESIDENCES', 
      price: '77.70 Lakhs', 
      area: '1036 sq.ft.', 
      type: '2 BHK', 
      icon: Home,
      highlight: true // Highlight this unit type
    },
    { 
      title: 'RETAIL SHOPS', 
      price: '88.50 Lakhs', 
      area: '295 sq.ft.', 
      type: 'Retail Shop', 
      icon: ShoppingBag,
      highlight: false
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8" id="price-list">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-red-600 mb-4">
          Investment & Price Snapshot
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Secure your dream home or commercial space. **Prices are starting at** and subject to change.
        </p>

        {/* Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priceUnits.map((unit, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl text-center shadow-xl transition-all duration-300 transform hover:scale-[1.03] 
                ${unit.highlight ? 'bg-blue-600 text-white shadow-blue-400/50' : 'bg-gray-50 border border-gray-200 text-gray-800'}`
              }
            >
              {/* Icon */}
              <div className="mb-3 flex justify-center">
                <unit.icon 
                  className={`w-10 h-10 ${unit.highlight ? 'text-yellow-400' : 'text-blue-600'} p-1`} 
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {unit.title}
              </h3>
              
              {/* Price Highlight */}
              <div className="flex items-center justify-center mb-1">
                <IndianRupee className={`w-6 h-6 ${unit.highlight ? 'text-yellow-400' : 'text-green-700'} font-extrabold`} />
                <p className="text-3xl font-extrabold">
                  {unit.price}*
                </p>
              </div>
              <p className={`mb-4 text-sm font-medium ${unit.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                Starting Price Onwards
              </p>

              {/* Details */}
              <div className={`pt-4 border-t ${unit.highlight ? 'border-blue-400' : 'border-gray-200'} space-y-2`}>
                <p className="flex justify-between text-base">
                  <span className={`font-semibold ${unit.highlight ? 'text-white' : 'text-gray-700'}`}>Unit Type:</span> 
                  <span className={`font-bold ${unit.highlight ? 'text-yellow-400' : 'text-gray-900'}`}>{unit.type}</span>
                </p>
                <p className="flex justify-between text-base">
                  <span className={`font-semibold ${unit.highlight ? 'text-white' : 'text-gray-700'}`}>Super Area:</span> 
                  <span className={`font-bold ${unit.highlight ? 'text-yellow-400' : 'text-gray-900'}`}>{unit.area}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Call to Action - Stronger and more defined */}
        <div className="text-center mt-12 sm:mt-16 bg-red-50 p-6 rounded-lg shadow-inner border border-red-200">
            <p className="text-xl font-semibold text-gray-800 mb-4">
                Want to know the detailed Payment Plan & Current Offers?
            </p>
            <a
                href="tel:+919999999999" // Use actual number
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-red-700 transition duration-300 font-bold text-lg transform hover:scale-[1.02]"
            >
                <Send className="w-5 h-5"/>
                Request Detailed Price List
            </a>
            <p className="text-xs text-gray-500 mt-3">
                *T&C Apply. Prices are subject to availability and change without prior notice.
            </p>
        </div>
        
      </div>
    </section>
  );
};

export default PriceList;