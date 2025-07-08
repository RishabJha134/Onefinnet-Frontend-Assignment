import React from 'react';

const MealCard = ({ meal }) => {
  // Truncate description to fit design
  const truncateText = (text, maxLength = 100) => {
    if (!text) return 'Lorem ipsum dolor sit amet quam in hocus risus.';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
      <div className="flex items-start space-x-4">
        {/* Meal Image */}
        <div className="flex-shrink-0">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-20 h-20 rounded-lg object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/80x80?text=Food';
            }}
          />
        </div>

        {/* Meal Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {meal.strMeal}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {truncateText(meal.strInstructions)}
              </p>
            </div>
            <div className="flex-shrink-0 ml-4">
              <div className="text-lg font-bold text-gray-900">$8.45</div>
            </div>
          </div>
          
          {/* Shop Now Button */}
          <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1 transition-colors">
            <span>SHOP NOW</span>
            <span className="text-xs">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
