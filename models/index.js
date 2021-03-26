const User = require('./User');
const Profile = require('./Profile');
const Reserve = require('./Reserve');
const Reservations = require('./Reservations');
const Waitlist = require('./Waitlist');
const ReservationWaitlist = require('./ReservationWaitlist');

User.hasMany(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id'
});
// https://sequelize.org/master/manual/advanced-many-to-many.html
//create connecton between 2 tables to connect users with many to many relationship using sequelize
//user belongs to many users through reservation
//connects through 
//reservation 2 foreign keys to each user 
// connect user to profile

Reserve.belongsToMany(User, {
  through: {
    model: Reservations,
    unique: false
  }
})

Waitlist.belongsToMany(User, {
  through: {
    model: ReservationWaitlist,
    unique: false
  }
})



module.exports = { User, Profile, Reserve, Reservations, Waitlist, ReservationWaitlist };