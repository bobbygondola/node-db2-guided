
exports.up = function(knex) {
  return knex.schema.createTable('veggies', tbl => {
      // a primary key, called id, increments, interger
      tbl.increments()
      //a name, text, 255max, required,unique
      tbl.string('name', 255).notNullable().unique();
      //color, text
      tbl.string('color', 255);
      //new column
      tbl.string('comments', 300)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('veggies');
};
