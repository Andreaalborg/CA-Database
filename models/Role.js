const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Role extends Model {}
  Role.init({
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
    modelName: 'Role',
    timestamps: false,
  });

  return Role;
};
