// Import the express router
const router = require('express').Router();

// Import the API routes
const apiRoutes = require('./api');

// Use the API routes when the path starts with '/api'
router.use('/api', apiRoutes);

// Default route when no other routes match, sends a message "Wrong Route!"
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router to be used in other parts of the application
module.exports = router;
