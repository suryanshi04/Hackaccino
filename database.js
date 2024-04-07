const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true});

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();

  var firstName = document.querySelector('input[placeholder="First name"]').value;
  var lastName = document.querySelector('input[placeholder="Last name"]').value;
  var phoneNumber = document.querySelector('input[placeholder="Phone number"]').value;
  var email = document.querySelector('input[placeholder="email"]').value;
  var username = document.querySelector('input[placeholder="Username"]').value;
  var password = document.querySelector('input[placeholder="Password"]').value;

  var user = new User({ firstName, lastName, phoneNumber, email, username, password });

  user.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('User saved successfully');
    }
  });
});
