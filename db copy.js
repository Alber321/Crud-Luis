const Sequelize = require("sequelize");
const UserModel = require("./models/users");

const sequelize = new Sequelize({
  dialect: "mssql",
  dialectModule: require("tedious"),
  host: "host.database.windows.net",
  port: 1433,
  database: "crud-db",
  username: "username",
  password: "password",
  options: {
    encrypt: true,
  },
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log("Tablas Sincronizadas");
}); 

module.exports = {
  User,
};
