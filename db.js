var db = require("mysql-promise")();

db.configure({
  host: "173.194.242.252",
  user: "root",
  password: "bwhfgebd98654hdbfjc",
  database: "staging"
});

// Usage: getUsers().then(function done(rows) { ... }, function fail(err) { ... });
function getUsers() {
  return db.query("SELECT * FROM users");
}

function addUser() {
  return db.query("UPSERT user FROM ?", app);
}

function createUsers() {
  command = [
    "CREATE TABLE users (",
      "user_id int(12),",
      "linkedin_id VARCHAR(255),",
      "first_name VARCHAR(255),",
      "last_name VARCHAR(255),",
      "email_address VARCHAR(255),",
      "photo VARCHAR(255),",
      "headline VARCHAR(255),",
      "profile LONGTEXT,",
      "type INT(12),",
      "admin INT(12),",
      "status INT(12),",
      "primary KEY (user_id)",
    ");"
  ].join("\n");
  db.query(command).then(console.log, console.warn);
}

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  createUsers: createUsers
};
