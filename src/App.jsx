import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryFilter from './components/CategoryFilter';
import MealList from './components/MealList';
import { useMeals } from './hooks/useMeals';
import './App.css';

function App() {
  const { 
    meals, 
    categories, 
    selectedCategory, 
    loading, 
    error, 
    handleCategoryChange 
  } = useMeals();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroBanner />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <MealList 
          meals={meals}
          loading={loading}
          error={error}
        />
      </main>
    </div>
  );
}

export default App;
