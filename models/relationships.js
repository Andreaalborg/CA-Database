const Sequelize = require('sequelize');

module.exports = (sequelize, Animal, User, Role, Species, Temperament) => {

  Role.hasMany(User, {
    foreignKey: {
      name: 'roleId',
      allowNull: false,
    },
  });
  User.belongsTo(Role, {
    foreignKey: {
      name: 'roleId',
      allowNull: false,
    },
  });

 
  Species.hasMany(Animal, {
    foreignKey: {
      name: 'speciesId',
      allowNull: false,
    },
  });
  Animal.belongsTo(Species, {
    foreignKey: {
      name: 'speciesId',
      allowNull: false,
    },
  });

  //  (Many-to-Many)
  Animal.belongsToMany(Temperament, { through: 'AnimalTemperaments' });
  Temperament.belongsToMany(Animal, { through: 'AnimalTemperaments' });


  User.belongsToMany(Animal, { through: 'UserAnimals' });
  Animal.belongsToMany(User, { through: 'UserAnimals' });

};
