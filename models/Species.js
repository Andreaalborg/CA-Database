const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Species extends Model {}
  Species.init({
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
    modelName: 'Species',
    timestamps: false,
  });

  return Species;
};
