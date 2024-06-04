// Import Model and DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');

// Import sequelize connection from connection.js
const sequelize = require('../config/connection.js');

// Define Category class which extends Model from sequelize
class Category extends Model {}

// Initialize Category model
Category.init(
    {
        // Define an id column
        id: {
            type: DataTypes.INTEGER, // Set type as integer
            allowNull: false, // This column cannot be null
            primaryKey: true, // Set this column as primary key
            autoIncrement: true // Auto increment the id
        },
        // Define category_name column
        category_name: {
            type: DataTypes.STRING, // Set type as string
            allowNull: false // This column cannot be null
        }
    },
    {
        sequelize, // Define the sequelize instance to use
        timestamps: false, // Do not automatically add timestamp fields (createdAt, updatedAt)
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // Enable attribute and table names to be snake_case rather than camelCase
        modelName: 'category', // Define the name of this model
    }
);

// Export the Category model
module.exports = Category;