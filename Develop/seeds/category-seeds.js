// Import the Category model from the '../models' directory
const { Category } = require('../models');

// Define an array of objects, each representing a category with a specific name
const categoryData = [
  {
    category_name: 'Shirts', // Define a category for shirts
  },
  {
    category_name: 'Shorts', // Define a category for shorts
  },
  {
    category_name: 'Music', // Define a category for music
  },
  {
    category_name: 'Hats', // Define a category for hats
  },
  {
    category_name: 'Shoes', // Define a category for shoes
  },
];

// Define a function to seed categories into the database using the bulkCreate method
// The bulkCreate method is a fast way to insert multiple records into the database at once
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the seedCategories function so it can be used in other parts of the application
module.exports = seedCategories;
