// Import the express module
const express = require('express');

// Import the routes from the routes directory
const routes = require('./routes');

// Import the sequelize connection from the config directory
const sequelize = require('./config/connection');

// Initialize the express application
const app = express();

// Set the port for the server to listen on. If the environment variable PORT is set, use that. Otherwise, default to 3001.
const PORT = process.env.PORT || 3001;

// Use express's built-in JSON middleware to automatically parse JSON
app.use(express.json());

// Use express's built-in urlencoded middleware to automatically parse urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// Use the imported routes for the express application
app.use(routes);

// Sync all defined models to the DB, and then start the server
// If force is true, each Model will drop its respective table and recreate it
sequelize.sync({ force: false }).then(() => {
    // Start the server and listen on the specified port
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
