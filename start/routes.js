'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.resource('/users', 'UserController').apiOnly()
Route.post('/token', 'UserController.token')

Route.group( () => {
  Route.resource('/livros', 'LivroController').apiOnly().validator(new Map([[['store', 'update'], 'Livro']]))
Route.resource('/autores', 'AutoreController').apiOnly().validator(new Map([[['store', 'update'], 'Autor']]))
Route.resource('/editoras', 'EditoraController').apiOnly().validator(new Map([[['store', 'update'], 'Editora']]))
Route.resource('/categorias', 'CategoriaController').apiOnly().validator(new Map([[['store', 'update'], 'Categoria']]))
Route.resource('/livro-alugados', 'LivroAlugadoController').apiOnly().validator(new Map([[['store', 'update'], 'LivroAlugado']]))
Route.resource('/livro-categorias', 'LivroCategoriaController').apiOnly().validator(new Map([[['store', 'update'], 'LivroCategoria']]))
Route.resource('/clientes', 'ClienteController').apiOnly().validator(new Map([[['store', 'update'], 'Cliente']]))
}).middleware('auth')
