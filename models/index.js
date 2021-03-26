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