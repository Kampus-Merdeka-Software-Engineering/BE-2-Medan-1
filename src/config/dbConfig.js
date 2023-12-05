const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USER, 
    process.env.DATABASE_PASS,
    {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    port: process.env.DATABASE_PORT,
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (err) {
      console.error("Failed to connect to the MySQL database.", err);
    }
  })();

module.exports = sequelize;
