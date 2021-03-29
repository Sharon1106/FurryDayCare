const User = require('./User');
const Profile = require('./Profile');
const Reserve = require('./Reserve');
// const Reservations = require('./Reservations');
const Waitlist = require('./Waitlist');
// const ReservationWaitlist = require('./ReservationWaitlist');

User.hasOne(Waitlist, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Waitlist.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasOne(Reserve, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Reserve.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Profile, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Profile.belongsTo(User, {
  foreignKey: 'user_id'
});



// User.belongsToMany(Waitlist, {
//   through: {
//     model: ReservationWaitlist,
//     unique: false, 
//   },
//   as: "waitlist_users",

// })

// Waitlist.belongsToMany(User, {
//   through: {
//     model: ReservationWaitlist,
//     unique: false, 
//   },
//   as: "waitlist_users",
// })

module.exports = { User, Profile, Reserve, Reservations, Waitlist, ReservationWaitlist };