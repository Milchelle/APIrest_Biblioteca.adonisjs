'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroCategoriaSchema extends Schema {
  up () {
    this.create('livro_categorias', (table) => {
      table.increments()
      table.integer('livro_id').references('id').inTable('livros').unsigned().notNullable()
      table.integer('categoria_id').references('id').inTable('categorias').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('livro_categorias')
  }
}

module.exports = LivroCategoriaSchema
