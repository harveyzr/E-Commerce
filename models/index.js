// Import the necessary models
const Product = require('./Product'); // Import the Product model
const Category = require('./Category'); // Import the Category model
const Tag = require('./Tag'); // Import the Tag model
const ProductTag = require('./ProductTag'); // Import the ProductTag model

// Define the relationship between Products and Category
Product.belongsTo(Category, { // A Product belongs to a single Category
     foreignKey: 'category_id' // The foreign key in the Product model that references the Category model
});

// Define the relationship between Category and Products
Category.hasMany(Product, { // A Category can have many Products
  foreignKey: 'category_id' // The foreign key in the Product model that references the Category model
});

// Define the relationship between Products and Tags
Product.belongsToMany(Tag, { // A Product can have many Tags
  through: ProductTag, // The relationship is defined through the ProductTag model
  foreignKey: 'product_id' // The foreign key in the ProductTag model that references the Product model
});

// Define the relationship between Tags and Products
Tag.belongsToMany(Product, { // A Tag can be associated with many Products
  through: ProductTag, // The relationship is defined through the ProductTag model
  foreignKey: 'tag_id' // The foreign key in the ProductTag model that references the Tag model
});

// Export the models for use in other parts of the application
module.exports = {
  Product, // Export the Product model
  Category, // Export the Category model
  Tag, // Export the Tag model
  ProductTag, // Export the ProductTag model
};
