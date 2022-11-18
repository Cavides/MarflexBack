const User = require("./user_model");

function createUser(user) {
  return User.create(user);
}

function deleteUser(id) {
  return User.findByIdAndDelete(id);
}

function updateUser(id, user) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

function getAllUsers() {
  return User.find({});
}

function getUser(id) {
  return User.findById(id);
}
function getUserByEmail(email) {
  return User.findOne({ email: email });
}

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getUser,
  getUserByEmail,
};
