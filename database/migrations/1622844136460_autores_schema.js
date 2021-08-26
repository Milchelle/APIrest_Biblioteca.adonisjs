'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutoresSchema extends Schema {
  up () {
    this.create('autores', (table) => {
      table.increments()
      table.string('nome', 70).notNullable()
      table.string('nacionalidade', 25)
      table.string('data_nascimento')
      table.timestamps()
    })
  }

  down () {
    this.drop('autores')
  }
}

module.exports = AutoresSchema
