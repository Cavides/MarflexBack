const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
  getUserByEmail,

} = require("./user_services");

async function getAllUsersHandler(req, res) {
  const users = await getAllUsers();
  return res.status(200).json(users);
}

async function getUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error. User not found" });
  }
}

async function getUserByEmailHandler(req, res) {
  const { email } = req.params;
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      console.log('Email not found');
      return res.status(404).json({ message: 'Email not found' });
    }
    console.log('Showing user', user);
    return res.json(user);
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({message:"No está funcionando" });
  }
}

async function createUserHandler(req, res) {
  const { name, lastName, email, password } = req.body;
  try {
    const userEmail = await getUserByEmail(email);
    if(userEmail){
      console.log(userEmail);
      return res.status(400).json({message:"Email already in use"});
    }
    const user = await createUser({ name, lastName, email, password });
    return res.status(200).json({message:"User created successfully, check yout email."});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.user;

  try {
    await deleteUser(id);
    console.log(`User ${id} eliminated`);
    return res.status(200).json({ message: "User eliminated" });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ error });
  }
}

async function updateUserHandler(req, res) {
  const userUpdate = req.body;
  const { id, email } = req.user;

  try {
    await updateUser(id, userUpdate);
    const user = await findUserByEmail(email);
    console.log("User id:", id, "Data updated:", userUpdate);
    return res
      .status(200)
      .json({ message: "User updated", profile: user.profile });
  } catch (error) {
    console.error(`[ERROR]: ${error}`);
    return res.status(500).json({ message: "Error updating user", error });
  }
}

module.exports = {
  getAllUsersHandler,
  getUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
  getUserByEmailHandler
};


