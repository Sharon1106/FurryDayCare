const sequelize = require('../config/connection');
const { User, Profile, Reserve } = require('../models');

const userData = require('./userData.json');
const profileData = require('./profileData.json');
const reserveData = require('./reserveData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // for (const profile of profileData) {
  //   await Profile.create({
  //     ...profile,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  const reserve = await Reserve.bulkCreate(reserveData);
  

  process.exit(0);
};

seedDatabase();