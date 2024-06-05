// Importing required modules and models
const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Route to get all products
router.get('/', (req, res) => {
    // Using the findAll method to get all products
    // Including associated Category and Tag data
    Product.findAll({
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    })
        .then(dbProductData => res.json(dbProductData)) // Sending the data as a response
        .catch(err => {
            console.log(err);
            res.status(500).json(err); // Sending error as a response if any
        });
});

// Route to get one product by its id
router.get('/:id', (req, res) => {
    // Using the findOne method to get a single product by its `id`
    // Including associated Category and Tag data
    Product.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: Tag,
                attributes: ['id', 'tag_name']
            }
        ]
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' }); // Sending a message if no product found
                return;
            }
            res.json(dbProductData); // Sending the product data as a response
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err); // Sending error as a response if any
        });
});

// Route to create a new product
router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
      }
    */
    // Using the create method to create a new product
    Product.create(req.body)
        .then((product) => {
            // If there's product tags, creating pairings to bulk create in the ProductTag model
            if (req.body.tagIds.length) {
                const productTagIdArr = req.body.tagIds.map((tag_id) => {
                    return {
                        product_id: product.id,
                        tag_id,
                    };
                });
                return ProductTag.bulkCreate(productTagIdArr);
            }
            // If no product tags, just respond
            res.status(200).json(product);
        })
        .then((productTagIds) => res.status(200).json(productTagIds)) // Sending the productTagIds as a response
        .catch((err) => {
            console.log(err);
            res.status(400).json(err); // Sending error as a response if any
        });
});

// Route to update a product
router.put('/:id', (req, res) => {
    // Using the update method to update product data
    Product.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
        .then((product) => {
            // Finding all associated tags from ProductTag
            return ProductTag.findAll({ where: { product_id: req.params.id } });
        })
        .then((productTags) => {
            // Getting list of current tag_ids
            const productTagIds = productTags.map(({ tag_id }) => tag_id);
            // Creating filtered list of new tag_ids
            const newProductTags = req.body.tagIds
                .filter((tag_id) => !productTagIds.includes(tag_id))
                .map((tag_id) => {
                    return {
                        product_id: req.params.id,
                        tag_id,
                    };
                });
            // Figuring out which ones to remove
            const productTagsToRemove = productTags
                .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                .map(({ id }) => id);

            // Running both actions
            return Promise.all([
                ProductTag.destroy({ where: { id: productTagsToRemove } }),
                ProductTag.bulkCreate(newProductTags),
            ]);
        })
        .then((updatedProductTags) => res.json(updatedProductTags)) // Sending the updatedProductTags as a response
        .catch((err) => {
            // console.log(err);
            res.status(400).json(err); // Sending error as a response if any
        });
});

// Route to delete a product
router.delete('/:id', (req, res) => {
    // Using the destroy method to delete one product by its `id` value
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbProductData => {
            if (!dbProductData) {
                res.status(404).json({ message: 'No product found with this id' }); // Sending a message if no product found
                return;
            }
            res.json(dbProductData); // Sending the deleted product data as a response
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err); // Sending error as a response if any
        });
});

// Exporting the router
module.exports = router;
