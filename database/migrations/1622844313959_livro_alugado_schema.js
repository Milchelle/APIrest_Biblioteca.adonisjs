'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroAlugadoSchema extends Schema {
  up () {
    this.create('livro_alugados', (table) => {
      table.increments()
      table.integer('livro_id').references('id').inTable('livros').unsigned().notNullable()
      table.integer('cliente_id').references('id').inTable('clientes').unsigned().notNullable()
      table.string('data_aluguel').notNullable()
      table.string('data_entrega').notNullable()
      table.string('valor_aluguel').notNullable()
      table.string('juros_atraso')
      table.timestamps()
    })
  }

  down () {
    this.drop('livro_alugados')
  }
}

module.exports = LivroAlugadoSchema
