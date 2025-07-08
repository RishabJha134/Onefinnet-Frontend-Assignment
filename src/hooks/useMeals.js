import { useState, useEffect } from 'react';
import { mealAPI } from '../services/mealAPI';

export const useMeals = () => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Seafood');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await mealAPI.getCategories();
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to fetch categories');
        console.error(err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch meals when category changes
  useEffect(() => {
    const fetchMeals = async () => {
      if (!selectedCategory) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const mealsData = await mealAPI.getMealsByCategory(selectedCategory);
        setMeals(mealsData);
      } catch (err) {
        setError('Failed to fetch meals');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return {
    meals,
    categories,
    selectedCategory,
    loading,
    error,
    handleCategoryChange
  };
};

export default useMeals;
