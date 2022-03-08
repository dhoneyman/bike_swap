// const mysql = require('mysql2');
// require('dotenv').config();
const sequelize = require('../config/connection');
const { Listing, User } = require('../models');

const userData = require('./userData.json');
const listingData = require('./listingData.json');

// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL Username
//     user: 'root',
//     // TODO: Add MySQL Password
//     password: '',
//     database: 'bikes_db'
//   },
//   console.log(`Connected to the bikes_db database.`)
// );

const seedData = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

      const list = await Listing.bulkCreate(listingData);

      process.exit(0);
};

seedData();
 