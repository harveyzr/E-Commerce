// Import the Sequelize library.
const Sequelize = require('sequelize');

// Create a connection to the database.
// If the JAWSDB_URL environment variable is available, it means we're on the production environment, so use that.
// Otherwise, we're in the development environment, so use the local database credentials.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      // The host of the local database is usually 'localhost'.
      host: 'localhost',
      // The dialect is the type of SQL database. In this case, it's mysql.
      dialect: 'mysql',
      dialectOptions: {
        // This option forces Sequelize to use decimal numbers instead of strings for decimal columns.
        decimalNumbers: true,
      },
    });

// Export the sequelize object. This will be used in other parts of the application.
module.exports = sequelize;