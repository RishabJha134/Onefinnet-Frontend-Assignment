import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  // Filter categories to show only the ones we want to display
  const displayCategories = [
    { name: 'FRUITS AND VEGETABLES', apiName: 'Vegan' },
    { name: 'BAKERY', apiName: 'Breakfast' },
    { name: 'MEAT AND SEAFOOD', apiName: 'Seafood' },
    { name: 'BEVERAGE', apiName: 'Miscellaneous' },
    { name: 'BISCUIT AND SNACKS', apiName: 'Dessert' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <p className="text-gray-600 text-lg">Shop by Category</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Top Category Of Organic Food
          </h2>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {displayCategories.map((category) => (
            <button
              key={category.apiName}
              onClick={() => onCategoryChange(category.apiName)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.apiName
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFilter;
