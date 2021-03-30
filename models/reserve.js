const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reserve extends Model {}

Reserve.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    petName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reserve',
  }
);

module.exports = Reserve;
