// Importing the necessary modules
const router = require('express').Router();
const { Category, Product } = require('../../models');


// GET route to fetch all categories
router.get('/', (req, res) => {
  // Using the findAll method from the Category model to fetch all categories
  Category.findAll({
    // Selecting only the 'id' and 'category_name' attributes for each category
    attributes: ['id', 'category_name'],
    // Including associated products for each category
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  // Sending the fetched data as a JSON response
  .then(dbCategoryData => res.json(dbCategoryData))
  // Catching and handling any errors
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET route to fetch a single category by its 'id'
router.get('/:id', (req, res) => {
  // Using the findOne method from the Category model to fetch a single category
  Category.findOne({
    where: {
      id:req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product, 
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  // Sending the fetched data as a JSON response
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }
    res.json(dbCategoryData);  
  })
  // Catching and handling any errors
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST route to create a new category
router.post('/', (req, res) => {
  // Using the create method from the Category model to create a new category
  Category.create({
    category_name: req.body.category_name
  })
  // Sending the created data as a JSON response
  .then(dbCategoryData => res.json(dbCategoryData))
  // Catching and handling any errors
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT route to update a category by its 'id'
router.put('/:id', (req, res) => {
  // Using the update method from the Category model to update a category
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  // Sending the updated data as a JSON response
  .then(dbCategoryData => {
    if (!dbCategoryData[0]) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  // Catching and handling any errors
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE route to delete a category by its 'id'
router.delete('/:id', (req, res) => {
  // Using the destroy method from the Category model to delete a category
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  // Sending the deleted data as a JSON response
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  // Catching and handling any errors
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Exporting the router for use in other parts of the application
module.exports = router;
