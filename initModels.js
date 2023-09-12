const Sequelize = require('sequelize');
const AnimalModel = require('./models/Animal');
const UserModel = require('./models/User');
const RoleModel = require('./models/Role');
const SpeciesModel = require('./models/Species'); 
const TemperamentModel = require('./models/Temperament'); 
const sequelize = new Sequelize('adoptiondb', 'root', 'Beverveien27', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

const Animal = AnimalModel(sequelize);
const User = UserModel(sequelize);
const Role = RoleModel(sequelize);
const Species = SpeciesModel(sequelize);  
const Temperament = TemperamentModel(sequelize);  

module.exports = {
  Animal,
  User,
  Role,
  Species, 
  Temperament,  
  sequelize
};
