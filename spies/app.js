let db = require('./db');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exist

  //Save the user to the database
  db.saveUser({
    email: email,
    password: password
  })
  // Send welcome email
}