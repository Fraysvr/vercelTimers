exports.up = function (knex) {
  return knex.schema.createTable("usersTimers", (table) => {
    table.increments("id");
    table.integer("userId").notNullable();
    table.foreign("userId").references("users.id");
    table.string("description").notNullable();
    table.bigint("start").notNullable().defaultTo(0);
    table.bigint("end").notNullable().defaultTo(0);
    table.bigint("duration").notNullable().defaultTo(0);
    table.boolean("isActive").notNullable().defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("usersTimers");
};
