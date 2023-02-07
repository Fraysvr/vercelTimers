exports.up = function (knex) {
  return knex.schema.createTable("sessions", (table) => {
    table.increments("id");
    table.integer("userId").notNullable();
    table.foreign("userId").references("users.id");
    table.string("sessionId").unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("sessions");
};
