const usersController = {};
const User = require('../models/User');


usersController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
}

usersController.createUser =  async (req, res) => {
  const { username } = req.body;
  const newUser = new User({username});
  await newUser.save();
  res.json({ message : 'User create' });
}

usersController.deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findOneAndDelete(id);
  res.json({ message : 'Delete Routes' });
}

module.exports = usersController;
