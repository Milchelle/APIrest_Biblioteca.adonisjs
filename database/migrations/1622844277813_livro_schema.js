'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()
      table.string('titulo', 70).notNullable
      table.string('data_publicacao')
      table.integer('autore_id').references('id').inTable('autores').unsigned().notNullable()
      table.integer('editora_id').references('id').inTable('editoras').unsigned().notNullable()
      table.integer('paginas')
      table.string('sinopse')
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivroSchema
