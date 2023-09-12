const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

// Function to read JSON files
const readJSON = (filename) => {
  const raw = fs.readFileSync(path.join(__dirname, filename), 'utf8');
  return JSON.parse(raw);
};

// Init sequelize and connect to the database
const sequelize = new Sequelize('adoptiondb', 'root', 'Beverveien27', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

// import models
const Animal = require('./models/Animal')(sequelize);
const User = require('./models/User')(sequelize);
const Role = require('./models/Role')(sequelize);
const Species = require('./models/Species')(sequelize);
const Temperament = require('./models/Temperament')(sequelize);

async function populateDB() {
  try {
    // Drop existing tables and recreate them
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });
await sequelize.sync({ force: true });
await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });

    
    // insert roles
    await Role.bulkCreate([
      { id: 1, name: 'admin' },
      { id: 2, name: 'member' }
    ]);

    // insert users
    await User.bulkCreate([
        {
          id: 4,
          fullName: 'System admin',
          username: 'Admin',
          password: 'admin1234',
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          fullName: 'User',
          username: 'User',
          password: 'user1234',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 6,
          fullName: 'User2',
          username: 'User2',
          password: 'User1234',
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);

    const speciesData = readJSON('public\\json\\species.json');
    await Species.bulkCreate(speciesData);
    console.log('Species table populated successfully!');

    // insert Temperaments
    const temperamentData = readJSON('public\\json\\temperament.json');
    await Temperament.bulkCreate(temperamentData);
    console.log('Temperaments table populated successfully!');

    // insert Animals
    const animalData = readJSON('public\\json\\animals.json');
    await Animal.bulkCreate(animalData);
    console.log('Animals table populated successfully!');
    
    console.log('Database populated successfully!');
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// execute the code
populateDB();
