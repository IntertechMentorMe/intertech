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
  .then(users => users[0][0]);
}

function upsertUser(user) {
  var statement = squel.insert()
  .into('users')
  .setFields(user)
  .onDupUpdate('first_name', 'last_name', 'summary', 'email', 'photo')
  .toString()
  return db.query(statement);
}

function createUsers() {
  command = [
    "CREATE TABLE users (",
      "id VARCHAR(10) PRIMARY KEY,",
      "first_name VARCHAR(255),",
      "last_name VARCHAR(255),",
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
    upsert: upsertUser
  }
};

// upsertUser({
//   id: 'gpZRnpMOpz',
//   first_name: 'Chris',
//   last_name: 'Kurzeja',
//   summary: 'I am a full-stack developer specialising in Java, Scala and JavaScript with 7 years commercial experience within Finance. I am an agile person who can apply fundamentals of programming and software methodologies to adopt new languages and adapt to different working practices.\n\nMy current role places a focus on innovation, working to produce greenfield applications and to evaluate potential new technologies for adoption across the company. Additionally I spend time working with all of the teams to promote best practices in development and UX.\n\nOutside of work I’m volunteering with InterTech to build an LGBT mentoring platform, I’m learning about web frameworks and writing an OS X application to configure bluetooth headphones.',
//   email: 'mail@chriskurzeja.co.uk',
//   photo: 'https://media.licdn.com/mpr/mprx/0_C-W9UsTxoGKM0SJ2h9f5U4PmokL4xHd2h1gWU4GxzTAd8uOuaqMVzZnlXo56pfHh_AwHNxr55VEc',
//   isMentor: true
// }).then(console.log)