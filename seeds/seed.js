const sequelize = require('../config/connection');
const { User, Profile, Waitlist, ReservationWaitlist} = require('../models');

const userData = require('./userData.json');
const profileData = require('./profileData.json');
const waitlistData = require('./waitlistData.json');
// const reservationWaitlistData= require('./reservationWaitlist.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const profile of profileData) {
    await Profile.create({
      ...profile,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  const waitlist = await Waitlist.bulkCreate(waitlistData);
  // const reservationWaitlist = await ReservationWaitlist.bulkCreate(reservationWaitlistData);
  process.exit(0);
};

seedDatabase();