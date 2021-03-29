const User = require('./User');
const Profile = require('./Profile');
const Reserve = require('./Reserve');
const Waitlist = require('./Waitlist');

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







module.exports = { User, Profile, Reserve, Waitlist };
