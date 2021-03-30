const { Sequelize } = require("sequelize");

var sequelize = new Sequelize({
    database: "furryDayCare_db",
    username: "root",
    password: "Jeanvee7",
    dialect:  "mysql"
}
   )

sequelize.authenticate().then(function (err) {
    console.log("success")
}).catch( err => {
    console.log(err + "I AM RIGHT HERE")
})