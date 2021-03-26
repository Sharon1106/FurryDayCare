const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservations extends Model {}

Reservations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reserveId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'reserve',
          key: 'id',
          unique: false
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        unique: false
    }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservations',
  }
);

module.exports = Reservations;