
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'billy', password: "pass", department: "crazy"},
        {id: 2, username: 'bob', password: "pass", department: "questionable"},
        {id: 3, username: 'bojangles', password: "pass", department: "unknown"}
      ]);
    });
};
