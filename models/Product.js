// Import the necessary parts of the sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection from config.js
const sequelize = require('../config/connection');

// Initialize the Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up the fields and rules for the Product model
Product.init(
    {
        // Define an id column
        id: {
            type: DataTypes.INTEGER, // Specifies the data type as integer
            allowNull: false, // Specifies that this field cannot be null
            primaryKey: true, // Specifies that this field is a primary key
            autoIncrement: true // Specifies that this field will auto increment
        },
        // Define a product_name column
        product_name: {
            type: DataTypes.STRING, // Specifies the data type as string
            allowNull: false // Specifies that this field cannot be null
        },
        // Define a price column
        price: {
            type: DataTypes.DECIMAL(10,2), // Specifies the data type as decimal with 10 digits before the decimal and 2 digits after the decimal
            allowNull: false, // Specifies that this field cannot be null
            validate: {
                isDecimal: true // Validates that the input is a decimal number
            }
        },
        // Define a stock column
        stock: {
            type: DataTypes.INTEGER, // Specifies the data type as integer
            allowNull: false, // Specifies that this field cannot be null
            defaultValue: 10, // Sets the default value to 10
            validate: {
                isNumeric: true // Validates that the input is a numeric value
            }
        },
        // Define a category_id column
        category_id: {
            type: DataTypes.INTEGER, // Specifies the data type as integer
            references: {
                model: "category", // Specifies the model that this field references
                key: "id" // Specifies the key in the referenced model
            }
        }
    },
    {
        sequelize, // Pass the imported sequelize connection
        timestamps: false, // Don't automatically create createdAt/updatedAt timestamp fields
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // Enable the use of underscores in table names and field names
        modelName: 'product', // Set the model name to 'product'
    }
);

// Export the Product model for use in other parts of the application
module.exports = Product;
       
  
  
  
  
  




