const ConeThumbnails = ({ cones, selectedCone, onConeSelect }) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
      <div className="flex flex-wrap items-center justify-center gap-4 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-4 shadow-xl border border-white/20 max-w-md mx-auto">
        {cones.map((cone) => (
          <button
            key={cone.id}
            onClick={() => onConeSelect(cone)}
            className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 ${
              selectedCone.id === cone.id
                ? 'scale-110 shadow-lg ring-4 ring-white'
                : 'hover:scale-105 hover:shadow-md'
            }`}
          >
            <img
              src={cone.thumbnailImage}
              alt={cone.name}
              className="w-full h-full object-contain p-1 bg-white rounded-full"
            />
            {selectedCone.id === cone.id && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      {/* Flavor Name Display */}
      <div className="text-center mt-3">
        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-800 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md border border-white/30 inline-block">
          {selectedCone.name}
        </p>
      </div>
    </div>
  );
};

export default ConeThumbnails;
