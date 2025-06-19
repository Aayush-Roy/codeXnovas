import { useState } from 'react';
import { cones } from '../data/cones';
import ConeThumbnails from './ConeThumbnails';

const Hero = () => {
  const [selectedCone, setSelectedCone] = useState(cones[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleConeSelect = (cone) => {
    if (cone.id === selectedCone.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedCone(cone);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className={`min-h-screen bg-gradient-to-br ${selectedCone.bgColor} transition-all duration-700 relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-40 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 pt-32 pb-8 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-gray-800 mb-6 leading-none">
              Taste the
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${selectedCone.gradientText} transition-all duration-500`}>
                {selectedCone.name}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              {selectedCone.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-orange-500 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1">
                Order Now
              </button>
              <button className="border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-full font-bold text-xl hover:border-gray-400 hover:bg-white/50 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Main Cone Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Main Cone Container */}
            <div className={`main-cone-container ${isAnimating ? 'opacity-0 transform translate-y-8 scale-95' : 'opacity-100 transform translate-y-0 scale-100'} transition-all duration-500 ease-out`}>
              <div className="relative">
                {/* Main Cone Image */}
                <div className="relative z-10">
                  <img 
                    src={selectedCone.mainImage}
                    alt={selectedCone.name}
                    className="w-80 h-[500px] md:w-96 md:h-[600px] object-cover rounded-3xl "
                  />
                </div>
                
                {/* Glow Effect Behind Cone */}
                <div className={`absolute inset-0 bg-gradient-to-r ${selectedCone.glowColor} rounded-3xl blur-3xl opacity-30 scale-110 -z-10`}></div>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-bounce opacity-80 shadow-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 -left-12 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/3 -right-8 w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Cone Thumbnails */}
      <ConeThumbnails 
        cones={cones}
        selectedCone={selectedCone}
        onConeSelect={handleConeSelect}
      />
    </section>
  );
};

export default Hero;