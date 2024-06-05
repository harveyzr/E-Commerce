// Importing seed data for categories, products, tags, and product tags
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Importing the sequelize configuration
const sequelize = require('../config/connection');

// Function to seed all data
const seedAll = async () => {
  // Syncing the database
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // Seeding categories data
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  // Seeding products data
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  // Seeding tags data
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // Seeding product tags data
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exiting the process
  process.exit(0);
};

// Calling the seedAll function to start the seeding process
seedAll();
