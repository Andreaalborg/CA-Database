const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Animal extends Model {}
  Animal.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.STRING,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adopted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Animal',
    timestamps: true,
  });

  return Animal;
};
