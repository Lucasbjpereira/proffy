import Knex from 'knex';


//executa uma ação
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        table.timestamp('created_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}


// deu ruim, essa função irá desfazer a alteração
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections');
}