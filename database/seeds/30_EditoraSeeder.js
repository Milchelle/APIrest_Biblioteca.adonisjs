'use strict'

/*
|--------------------------------------------------------------------------
| EditoraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Editora = use('App/Models/Editora')

class EditoraSeeder {
  async run () {
    await Editora.createMany([
      {nome: 'Editora Seguinte'},
      {nome: 'Editora Galera'},
      {nome: 'Editora Novo Conceito'},
    ])
  }
}

module.exports = EditoraSeeder
