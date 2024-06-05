# E-Commerce Back End

## Table of Contents

 - [Description](#description)
 - [User Story](#user-story)
 - [Acceptance Criteria](#acceptance-criteria)
 - [Instructions](#instructions)
 - [Images](#images)
 - [Link To Recorded Video](#link-to-recorded-video)
 - [Link to GitHub Pages ](#link-to-gethub-website)
 - [Skills Used](#skills-used)

 ## Description
 The main goal of this project was to understand the fundamental architecture of e-commerce sites.

 The back end build for an e-commerce site is the thirteenth challenge for the Ohio State coding boot camp.
-	My motivation for this project was to become proficient at coding backend Express.js Api configured to use Sequelize to interact with a MySQL database.
-	Building this project allowed me to implement coding techniques that I have been studying for the past 13 weeks. 
-	This page was a perfect example of real-world practices working with back end E-commerce platforms like SHopify and WooCommerce
-	I learned how to code and deploy a backend databases using Express.js, MySwl, Sequelize, NODE  

 ## User Story
- AS A manager at an internet retail company
- I WANT a back end for my e-commerce website that uses the latest technologies
- SO THAT my company can compete with other e-commerce companies


 
 ## Acceptance Criteria
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

## Instructions 
- **Add a .env file to the root of the app with the following details.**
```text
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='xxx'
```
- **Make sure to install Node Express.**
```text
In an open terminal in the root file path type "npm install".
```

- **Log into MySql and create the E-commerce database.** 
```text
In terminal type "mysql -u root-p" and press enter. After you have entered your password you will be in the MySql terminal. Install the e-commerce database by typing "SOURCE db/schema.sql". This will create the database and table. Type "exit" to return to the main terminal. 
```

- **Seed the database with tables.** 
```text
Type "npm run seed" to execute the index.js script to create a development database that is seeded with test data. 
```
- **Start the server.** 
```text
Type "npm start", or "NODE server.js" in the terminal which will start the server and Sequelize models will be synced to MySQL database.
```


 ## Images
![Website Preview](images/e-commerce%20install.gif)
 
 ## Link to recorded video
https://drive.google.com/file/d/1wfW0fXbSRULouOC83Gg4O623_lb0WEfP/view
 
## Link to GetHub Website
https://github.com/harveyzr/SVG-LOGO-MAKER


 ## Skills Used
- MySQL and Sequelize packages to connect to a MySQL database. 
- Sync Sequelize models to a MySQL database on the server.
- 

