import React, { useState } from "react";
import { CheckCircle, PhoneCall, Mail } from "lucide-react"; // Icons for added visual appeal

const AboutBuilder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call API / send email / integrate backend
    console.log("Form data:", formData);
    alert(`Thank you, ${formData.name}! Your enquiry has been submitted.`);
    // Reset or show success message
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: About Builder - Highlighting Vision and Trust */}
        <div className="space-y-8 p-6 bg-white rounded-xl shadow-xl border-l-4 border-red-600">
          <h2 className="text-4xl font-extrabold text-gray-900 border-b pb-3 border-gray-200">
            Know Your Developer
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong className="text-red-600">Patliputra / R S Resource Management</strong> is a reputed real-estate developer with a rich legacy in **Bihar & East India**. They bring their vision of excellence, innovation, and timely execution to Greater Noida with their flagship project: **Patliputra Signature Park**.
            </p>
            
            {/* Highlighted Bullet Points */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Our Commitment:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>**Quality & Craftsmanship:** Use of high-quality materials and superior construction standards.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>**Transparency & Delivery:** Strict adherence to timelines and complete transparency in all transactions.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span>**Customer-Centric:** Focus on modern architectural design and dedicated customer support.</span>
                </li>
              </ul>
            </div>

            <p className="text-base font-medium text-gray-600 border-t pt-4 mt-4">
              The group aims to deliver a landmark project in the Yamuna Expressway corridor, combining luxury, connectivity, and significant growth potential.
            </p>
          </div>
        </div>

        {/* Right Side: Contact / Enquiry Form - Stronger Focus */}
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-8 border-blue-600">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Connect Directly
          </h3>
          <p className="text-md text-gray-600 mb-6 text-center">
            Get project details, price list, and personalized assistance.
          </p>
          
          {/* Quick Contact Info Block */}
          <div className="mb-6 space-y-3 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3 text-gray-700">
                  <PhoneCall className="w-5 h-5 text-blue-600"/>
                  <span className="font-semibold">Call: +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-600"/>
                  <span className="font-semibold">Email: info@patliputra.com</span>
              </div>
          </div>


          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input fields simplified (removed explicit label for cleaner design) */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
            />

            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number *"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
            />

            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Your Message / Query"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-3 focus:ring-blue-500 transition"
            />
            
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-3 rounded-lg transition-all duration-200 shadow-md transform hover:scale-[1.01]"
            >
              <span className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5"/>
                Request Price & Details
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AboutBuilder;