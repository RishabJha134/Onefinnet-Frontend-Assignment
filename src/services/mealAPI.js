import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const mealAPI = {
  // Get all meal categories
  getCategories: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories.php`);
      return response.data.categories || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  },

  // Get meals by category
  getMealsByCategory: async (category) => {
    try {
      const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error fetching meals by category:', error);
      return [];
    }
  },

  // Get meal details by ID
  getMealById: async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
      return response.data.meals?.[0] || null;
    } catch (error) {
      console.error('Error fetching meal details:', error);
      return null;
    }
  },

  // Search meals by name
  searchMeals: async (query) => {
    try {
      const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
      return response.data.meals || [];
    } catch (error) {
      console.error('Error searching meals:', error);
      return [];
    }
  },

  // Get random meals
  getRandomMeals: async (count = 6) => {
    try {
      const meals = [];
      for (let i = 0; i < count; i++) {
        const response = await axios.get(`${BASE_URL}/random.php`);
        if (response.data.meals?.[0]) {
          meals.push(response.data.meals[0]);
        }
      }
      return meals;
    } catch (error) {
      console.error('Error fetching random meals:', error);
      return [];
    }
  }
};

export default mealAPI;
