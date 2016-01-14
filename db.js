var db = require("mysql-promise")();
var squel = require("squel").useFlavour('mysql');

db.configure({
  host: "173.194.242.252",
  user: "root",
  password: "bwhfgebd98654hdbfjc",
  database: "staging"
});

// Usage: getUsers().then(function done(rows) { ... }, function fail(err) { ... });

//Returns a user or undefined if no such user exists
function getUserById(id) {
  return db.query("SELECT * FROM users WHERE id = ? LIMIT 1", id)
  .then(function(users) {users[0][0]});
}

function updateUser(user) {
  var id = user.id;

  var _user = JSON.parse(JSON.stringify(user));
  delete _user.id;
  var statement = squel.update({replaceSingleQuotes: true})
  .table('users')
  .setFields(_user)
  .where('id=?', id)
  .toString()

  return db.query(statement);
}

function insertUser(user) {
  try {
    var statement = squel.insert()
    .into('users')
    .setFields(user)
    .toString()
  } catch(e) {
    updateUser(user);
  }
  
  return db.query(statement);
}

function listMentors() {
  var statement = squel.select()
  .from('users')
  .where('isMentor', true)
  .toString()

  return db.query(statement)
  .then(function(mentors) {mentors[0]});
}

function createUsers() {
  command = [
    "CREATE TABLE users (",
      "id VARCHAR(10) PRIMARY KEY,",
      "first_name VARCHAR(255),",
      "last_name VARCHAR(255),",
      "headline VARCHAR(255),",
      "summary TEXT,",
      "email VARCHAR(255),",
      "photo VARCHAR(255),",
      "skills VARCHAR(255) DEFAULT '',",
      "experience VARCHAR(255) DEFAULT '',",
      "isMentor TINYINT(1)",
    ");"
  ].join("\n");
  return db.query(command).then(console.log, console.warn);
}

function createSessions() {
}

module.exports = {
  Users: {
    getById: getUserById,
    insert: insertUser,
    update: updateUser,
    listMentors: listMentors
  }
};
