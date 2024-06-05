// Importing the ProductTag model from the models directory
const { ProductTag } = require('../models');

// Array of product-tag relationship data
const productTagData = [
  {
    // Product with ID 1 has tag with ID 6
    product_id: 1,
    tag_id: 6,
  },
  {
    // Product with ID 1 has tag with ID 7
    product_id: 1,
    tag_id: 7,
  },
  {
    // Product with ID 1 has tag with ID 8
    product_id: 1,
    tag_id: 8,
  },
  {
    // Product with ID 2 has tag with ID 6
    product_id: 2,
    tag_id: 6,
  },
  {
    // Product with ID 3 has tag with ID 1
    product_id: 3,
    tag_id: 1,
  },
  {
    // Product with ID 3 has tag with ID 3
    product_id: 3,
    tag_id: 3,
  },
  {
    // Product with ID 3 has tag with ID 4
    product_id: 3,
    tag_id: 4,
  },
  {
    // Product with ID 3 has tag with ID 5
    product_id: 3,
    tag_id: 5,
  },
  {
    // Product with ID 4 has tag with ID 1
    product_id: 4,
    tag_id: 1,
  },
  {
    // Product with ID 4 has tag with ID 2
    product_id: 4,
    tag_id: 2,
  },
  {
    // Product with ID 4 has tag with ID 8
    product_id: 4,
    tag_id: 8,
  },
  {
    // Product with ID 5 has tag with ID 3
    product_id: 5,
    tag_id: 3,
  },
];

// Function to seed the ProductTag table with the productTagData array
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

// Exporting the seedProductTags function for use in other files
module.exports = seedProductTags;
