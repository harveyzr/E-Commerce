// Importing Model and DataTypes from sequelize
const { Model, DataTypes } = require('sequelize');

// Importing the connection configuration from connection.js
const sequelize = require('../config/connection.js');

// Defining a new Model class called Tag
class Tag extends Model {}

// Initializing the Tag model with its properties
Tag.init(
  {
    // Defining the id property
    id: {
      type: DataTypes.INTEGER, // The type of the id is an integer
      allowNull: false, // The id cannot be null
      primaryKey: true,  // The id is the primary key
      autoIncrement: true // The id value auto increments
    },

    // Defining the tag_name property
    tag_name: {
      type: DataTypes.STRING // The type of tag_name is a string
    }
  },
  {
    sequelize, // Passing the imported sequelize connection instance
    timestamps: false, // Not using timestamps in this model
    freezeTableName: true, // Prevent sequelize from renaming the table
    underscored: true, // Enable the use of underscores instead of camel-casing
    modelName: 'tag', // The name of the model
  }
);

// Exporting the Tag model
module.exports = Tag;
