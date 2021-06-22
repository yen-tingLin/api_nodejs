import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const newUser = req.body;

  const userWithId = { ...newUser, id: uuidv4() };
  users.push(userWithId);

  res.send(`${newUser.firstName} ${newUser.lastName} is posted`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUserById = (req, res) => {
  const { id } = req.params;

  const userFound = users.find((user) => user.id === id);

  if (userFound != null) {
    res.send(userFound);
  }
  res.send("id not exist");
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;

  const userFound = users.find((user) => user.id === id);
  if (userFound != null) {
    users = users.filter((user) => user.id !== id);
    res.send(`user with ${id} is deleted`);
  }

  res.send(`user with id ${id} not exist`);
};

export const patchUserById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToUpdate = users.find((user) => user.id === id);
  if (userToUpdate != null) {
    if (firstName) {
      userToUpdate.firstName = firstName;
    }
    if (lastName) {
      userToUpdate.lastName = lastName;
    }
    if (age) {
      userToUpdate.age = age;
    }
    res.send(`user ${userToUpdate.id} is updated`);
  }

  res.send(`user ${id} not exist`);
};
