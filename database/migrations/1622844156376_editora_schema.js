'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EditoraSchema extends Schema {
  up () {
    this.create('editoras', (table) => {
      table.increments()
      table.string('nome', 50).notNullable
      table.timestamps()
    })
  }

  down () {
    this.drop('editoras')
  }
}

module.exports = EditoraSchema
