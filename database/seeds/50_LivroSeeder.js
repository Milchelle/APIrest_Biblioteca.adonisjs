'use strict'

/*
|--------------------------------------------------------------------------
| LivroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Livro = use('App/Models/Livro')

class LivroSeeder {
  async run () {
    await Livro.createMany([
      {titulo: 'A seleção', data_publicacao: '2012-04-12', autore_id: 1, editora_id: 1, paginas: 279, sinopse: 'Trinta e cinco garotas e uma coroa' },
    {titulo: 'A elite', data_publicacao: '2013-04-23', autore_id: 1, editora_id: 1, paginas: 336, sinopse: 'Seis garotas e uma coroa' },
    {titulo: 'A escolha', data_publicacao: '2014-04-06', autore_id: 1, editora_id: 1, paginas: 287, sinopse: 'Apenas uma garota leva a coroa' },
    {titulo: 'A herdeira', data_publicacao: '2014', autore_id: 1, editora_id: 1, paginas: 349, sinopse: 'Trinta e cinco pretendentes e uma princesa. Uma nova seleção começou' },
    {titulo: 'A coroa', data_publicacao: '2016-04-26', autore_id: 1, editora_id: 1, paginas: 264, sinopse: 'Quem vai ganhar o coração dela' },
    {titulo: 'Fallen', data_publicacao: '2009-12-08', autore_id: 2, editora_id: 2, paginas: 357, sinopse: 'Sexy, Sublime e Assustador' },
    {titulo: 'Paixão', data_publicacao: '2011-06-14', autore_id: 2, editora_id: 2, paginas: 367, sinopse: 'Um romance da série Fallen' },
    {titulo: 'Apaixonados', data_publicacao: '2012-01-24', autore_id: 2, editora_id: 2, paginas: 256, sinopse: 'Histórias de amor de Fallen' },
    {titulo: 'Tormenta', data_publicacao: '2010-09-28', autore_id: 2, editora_id: 2, paginas: 452, sinopse: 'Um romance da série Fallen' },
    {titulo: 'Êxtase', data_publicacao: '2012-06-12', autore_id: 2, editora_id: 2, paginas: 443, sinopse: 'Um romance da série Fallen' },
    {titulo: 'Livro de Cam: Unforgiven', data_publicacao: '2015-11-10', autore_id: 2, editora_id: 2, paginas: 365, sinopse: 'Um romance da série Fallen' },
    {titulo: 'Corte de Espinhos e Rosas', data_publicacao: '2015-05-05', autore_id: 3, editora_id: 2, paginas: 434, sinopse: 'Ela roubou uma vida. Agora deve pagar com o coração' },
    {titulo: 'Corte de Névoa e Fúria', data_publicacao: '2016-05-03', autore_id: 3, editora_id: 2, paginas: 658, sinopse: 'Por amor, ela enganou a morte. Por liberdade, ela se tornará uma arma' },
    {titulo: 'Corte de Asas e Ruína', data_publicacao: '2017-05-17', autore_id: 3, editora_id: 2, paginas: 682, sinopse: 'Em meio a guerra, é seu coração que enfrentará a mais árdua das batalhas' },
    {titulo: 'Corte de Gelo e Estrelas', data_publicacao: '2018-05-01', autore_id: 3, editora_id: 2, paginas: 238, sinopse: 'Uma novela do universo de Corte de Espinhos e Rosas' },
    {titulo: 'A garota do penhasco', data_publicacao: '2011-10-27', autore_id: 4, editora_id: 3, paginas: 722, sinopse: 'Por mais de um século, passado e presente tem separado duas famílias. Hoje,no entanto, Aurora poderá, enfim, uni-los. Ainda que a um preço muito alto' },
    ])
  }
}

module.exports = LivroSeeder
