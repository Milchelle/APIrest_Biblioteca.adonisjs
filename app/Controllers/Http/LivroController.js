'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livros
 */

const Livro = use('App/Models/Livro')

class LivroController {
  
  /**
  * @swagger
  * /livros:
  *   get:
  *     tags:
  *       - Livros
  *     summary: Listagem completa de livros
  *     responses:
  *       200:
  *         description: Lista paginada de livros
  *         
  */


  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Livro.query().paginate(page, perPage)
  }
  

   /**
  * @swagger
  * /livros:
  *   post:
  *     tags:
  *       - Livros
  *     summary: Cadastro de um novo livro
  *     parameters:
  *       - name: livro
  *         description: Objeto de livro
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Livro'
  *     responses:
  *       200:
  *         description: Livro Cadastrado
  *         
  */

  async store ({ request, response }) {
    const campos = Livro.getCamposCadastro()
    const dados = request.only(campos)
    return await Livro.create(dados)
  }

   /**
  * @swagger
  * /livros/{id}:
  *   get:
  *     tags:
  *       - Livros
  *     summary: Mostrar um livro
  *     parameters:
  *       - name: id
  *         description: id de livro
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro 
  *         
  */



  async show ({ params, request, response, view }) {
    return await Livro.query()
                          .with('autor')
                          .with('editora')
                          .where('id', params.id)
                          .first()
  }


  /**
  * @swagger
  * /livros/{id}:
  *   put:
  *     tags:
  *       - Livros
  *     summary: Alteração de um livro
  *     parameters:
  *       - name: id
  *         description: id de livro
  *         in: parameter
  *       - name: livro
  *         description: Objeto de livro
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Livro'
  *     responses:
  *       200:
  *         description: Livro Alterado
  *         
  */
  async update ({ params, request, response }) {
    const campos = Livro.getCamposCadastro()
    const dados = request.only(campos)
    const livro = await Livro.findOrFail(params.id)
    livro.merge(dados)
    await livro.save()
    return livro
  }

 /**
  * @swagger
  * /livros/{id}:
  *   delete:
  *     tags:
  *       - Livros
  *     summary: Deletar um livro
  *     parameters:
  *       - name: id
  *         description: id de livro
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro Deletado
  *         
  */
  async destroy ({ params, request, response }) {
    const livro = await Livro.findOrFail(params.id)
    return await livro.delete()
  }
}

module.exports = LivroController
