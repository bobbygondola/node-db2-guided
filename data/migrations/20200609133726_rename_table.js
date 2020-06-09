
exports.up = function(knex) {
  return knex.schema.renameTable('veggies', 'vegetables');
};

exports.down = function(knex) {
    return knex.schema.renameTable('vegetables', 'veggies');
};
