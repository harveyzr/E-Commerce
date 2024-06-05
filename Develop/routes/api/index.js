// Import the express router
const router = require('express').Router();

// Import the routes for categories, products, and tags
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Use the imported routes for categories, products, and tags
// When a request starts with '/categories', it will use the categoryRoutes
router.use('/categories', categoryRoutes);

// When a request starts with '/products', it will use the productRoutes
router.use('/products', productRoutes);

// When a request starts with '/tags', it will use the tagRoutes
router.use('/tags', tagRoutes);

// Export the router to be used in other parts of the application
module.exports = router;
