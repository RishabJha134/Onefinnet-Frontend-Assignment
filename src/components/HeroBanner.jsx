import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[600px]">
      {/* Split background - left light gray, right green */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gray-50"></div>
        <div className="w-1/2 bg-primary"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-20 min-h-[600px]">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            {/* Discount Badge */}
            <div className="inline-flex items-center">
              <span className="text-gray-700 text-sm font-medium">
                Discount up to 20%
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Buy Fresh And Organic
              <br />
              Grocery Food
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-md leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Suspendisse varius 
              enim in eros elementum tristique duis cursus mi lorem 
              blandit purus nec nibh tortor ipsum. Placerat consequat lorem.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2">
                <span>SHOP NOW</span>
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-12 pt-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">35k +</div>
                <div className="text-gray-600 text-sm">Users</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900">18k +</div>
                <div className="text-gray-600 text-sm">Products</div>
              </div>
            </div>
          </div>

          {/* Right Content - Food Bowl */}
          <div className="relative flex justify-start items-center pl-8 lg:pl-16">
            <div className="relative z-10 transform -translate-x-20 lg:-translate-x-28">
              {/* Main Bowl Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Bowl Shadow */}
                <div className="absolute inset-0 bg-black/20 rounded-full blur-xl transform translate-y-8"></div>
                
                {/* Main Bowl with Background Image */}
                <div className="relative w-full h-full rounded-full shadow-2xl overflow-hidden">
                  {/* Food Bowl Background Image */}
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Fresh vegetable bowl"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to another image if the first one fails
                      e.target.src = "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  
                  {/* Overlay to adjust image if needed */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-full"></div>
                  
                  {/* Bowl rim highlight */}
                  <div className="absolute inset-0 rounded-full border-4 border-white/40"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements - enhanced to match original */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-90 animate-bounce"></div>
            <div className="absolute -bottom-8 -left-8 w-8 h-8 bg-green-400 rounded-full opacity-80 animate-bounce delay-100"></div>
            <div className="absolute top-1/3 -right-10 w-6 h-6 bg-orange-400 rounded-full opacity-80 animate-bounce delay-200"></div>
            
            {/* Yellow arrow decoration - enhanced */}
            <div className="absolute -bottom-6 left-1/4 transform rotate-12 text-yellow-400">
              <svg width="80" height="50" viewBox="0 0 80 50" className="opacity-90">
                <path d="M10 25 Q40 10 70 25" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M63 20 L70 25 L63 30" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <circle cx="20" cy="22" r="2" fill="currentColor"/>
                <circle cx="50" cy="15" r="1.5" fill="currentColor"/>
                <circle cx="35" cy="18" r="1" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Green leaf decorative elements - enhanced */}
            <div className="absolute -top-4 right-1/4 text-green-400 opacity-80 animate-pulse">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M20 5 Q30 15 20 25 Q10 15 20 5" fill="currentColor"/>
                <path d="M20 25 Q25 30 20 35 Q15 30 20 25" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Additional decorative elements */}
            <div className="absolute top-1/4 -left-4 text-green-300 opacity-60 animate-pulse delay-300">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
