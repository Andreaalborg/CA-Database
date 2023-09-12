const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Temperament extends Model {}
  Temperament.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Temperament',
    timestamps: false,
  });

  return Temperament;
};
