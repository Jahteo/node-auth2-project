const db = require('../database/db-config.js');

module.exports = {
  find,
  add,
  findBy,
  findById,
  //findSteps,
  // remove,
};

function find() {
  return db('users');
};

function findBy(filter) {
  return db("users")
    .where(filter)
}

function findById(id) {
  return db("users")
    .where({id}).first()
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}