// Importing required modules and models
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET route to find all tags
router.get('/', (req, res) => {
  // Using the findAll method from the Tag model to find all tags
  // Including associated Product data in the response
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product, 
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  // Sending the response as JSON
  .then(dbTagData => res.json(dbTagData))
  // Catching any errors and sending them as a response with a status of 500
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET route to find a single tag by its `id`
router.get('/:id', (req, res) => {
  // Using the findOne method from the Tag model to find a single tag by its `id`
  // Including associated Product data in the response
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  // Sending the response as JSON
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id'});
      return;
    }
    res.json(dbTagData);
  })
  // Catching any errors and sending them as a response with a status of 500
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST route to create a new tag
router.post('/', (req, res) => {
  // Using the create method from the Tag model to create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  // Sending the response as JSON
  .then(dbTagData => res.json(dbTagData))
  // Catching any errors and sending them as a response with a status of 500
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// PUT route to update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  // Using the update method from the Tag model to update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  // Sending the response as JSON
  .then(dbTagData => {
    if (!dbTagData[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
  // Catching any errors and sending them as a response with a status of 500
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE route to delete a tag by its `id` value
router.delete('/:id', (req, res) => {
  // Using the destroy method from the Tag model to delete a tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  // Sending the response as JSON
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData);
  })
  // Catching any errors and sending them as a response with a status of 500
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Exporting the router
module.exports = router;
