// Importing Model and DataTypes from 'sequelize' package
const { Model, DataTypes } = require('sequelize');

// Importing the configured sequelize instance from the connection.js file in the config directory
const sequelize = require('../config/connection');

// Defining a new Model class called ProductTag
class ProductTag extends Model {}

// Initializing the ProductTag model with its fields and configuration
ProductTag.init(
  {
    // Defining the 'id' field
    id: {
      type: DataTypes.INTEGER, // The data type of 'id' is integer
      allowNull: true, // 'id' can be null
      primaryKey: true, // 'id' is the primary key
      autoIncrement: true // 'id' will auto increment
    },
    
    // Defining the 'product_id' field
    product_id: {
      type: DataTypes.INTEGER, // The data type of 'product_id' is integer
      refrences: { // Setting up a foreign key reference to another model
        model: "prodcut", // The model to which 'product_id' refers
        key: "id" // The field in the referenced model
      }
    },
    // Defining the 'tag_id' field
    tag_id: {
      type: DataTypes.INTEGER, // The data type of 'tag_id' is integer
      references: { // Setting up a foreign key reference to another model
        model: "tag", // The model to which 'tag_id' refers
        key: "id" // The field in the referenced model
      }
    }
  },
  {
    sequelize, // Passing the imported sequelize instance
    timestamps: false, // Disabling timestamps
    freezeTableName: true, // Preventing sequelize from pluralizing the model name
    underscored: true, // Enabling the use of underscores in field names
    modelName: 'product_tag', // Defining the name of the model
  }
);

// Exporting the ProductTag model
module.exports = ProductTag;
