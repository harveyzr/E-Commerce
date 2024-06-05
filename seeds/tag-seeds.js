// Importing the Tag model from the models directory
const { Tag } = require('../models');

// Creating an array of objects, each representing a tag with a specific name
const tagData = [
  {
    tag_name: 'rock music', // Tag for rock music
  },
  {
    tag_name: 'pop music', // Tag for pop music
  },
  {
    tag_name: 'blue', // Tag for blue
  },
  {
    tag_name: 'red', // Tag for red
  },
  {
    tag_name: 'green', // Tag for green
  },
  {
    tag_name: 'white', // Tag for white
  },
  {
    tag_name: 'gold', // Tag for gold
  },
  {
    tag_name: 'pop culture', // Tag for pop culture
  },
];

// Function to seed the database with the tag data
const seedTags = () => Tag.bulkCreate(tagData);

// Exporting the seedTags function for use in other files
module.exports = seedTags;
