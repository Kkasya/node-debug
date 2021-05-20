const Sequelize = require('sequelize');
//database username   password
const sequelize = new Sequelize('gamedb', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

sequelize.authenticate().then(
  function success() {
    console.log("Connected to DB");
  },

  function fail(err) {
    console.log(`Error: ${err}`);
  }
);

module.exports = sequelize;