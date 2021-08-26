'use strict'

/*
|--------------------------------------------------------------------------
| AutorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Autor = use('App/Models/Autore')

class AutorSeeder {
  async run () {
    await Autor.createMany([
      { nome: 'Kiera Cass', nacionalidade: 'norte-americana', data_nascimento: '1981-05-19'},
      { nome: 'Lauren Kate', nacionalidade: 'americana', data_nascimento: '1981-03-21'},
      { nome: 'Sarah J. Maas', nacionalidade: 'americana', data_nascimento: '1986-03-05'},
      { nome: 'Lucinda Riley', nacionalidade: 'irlandesa', data_nascimento: '1966-02-16'},
    ])
  }
}

module.exports = AutorSeeder
