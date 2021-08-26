'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livroalugados
 */

const LivroAlugado = use('App/Models/LivroAlugado')

class LivroAlugadoController {
  /**
  * @swagger
  * /livro-alugados:
  *   get:
  *     tags:
  *       - Livros Alugados
  *     summary: Listagem completa de livros alugados
  *     responses:
  *       200:
  *         description: Lista paginada de livros alugados
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return LivroAlugado.query().paginate(page, perPage)
  }
  
/**
  * @swagger
  * /livro-alugados:
  *   post:
  *     tags:
  *       - Livros Alugados
  *     summary: Cadastro de um novo livro alugado
  *     parameters:
  *       - name: livroalugado
  *         description: Objeto de livroalugado
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/LivroAlugado'
  *     responses:
  *       200:
  *         description: Livro Alugado cadastrado
  *         
  */
  async store ({ request, response }) {
    const campos = LivroAlugado.getCamposCadastro()
    const dados = request.only(campos)
    return await LivroAlugado.create(dados)
  }

   /**
  * @swagger
  * /livro-alugados/{id}:
  *   get:
  *     tags:
  *       - Livros Alugados
  *     summary: Mostrar um livro alugado
  *     parameters:
  *       - name: id
  *         description: id de livroalugado
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro Alugado
  *         
  */
  async show ({ params, request, response, view }) {
    return await LivroAlugado.query()
                          .with('livro')
                          .with('alugante')
                          .where('id', params.id)
                          .first()
  }

 /**
  * @swagger
  * /livro-alugados/{id}:
  *   put:
  *     tags:
  *       - Livros Alugados
  *     summary: Alteração de um livro alugado
  *     parameters:
  *       - name: id
  *         description: id de livroalugado
  *         in: parameter
  *       - name: livroalugado
  *         description: Objeto de livroalugado
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/LivroAlugado'
  *     responses:
  *       200:
  *         description: Livro alugado alterado
  *         
  */
  async update ({ params, request, response }) {
    const campos = LivroAlugado.getCamposCadastro()
    const dados = request.only(campos)
    const livroalugado = await LivroAlugado.findOrFail(params.id)
    livroalugado.merge(dados)
    await livroalugado.save()
    return livroalugado
  }

 /**
  * @swagger
  * /livro-alugados/{id}:
  *   delete:
  *     tags:
  *       - Livros Alugados
  *     summary: Deletar um livro alugado
  *     parameters:
  *       - name: id
  *         description: id de livroalugado
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro Alugado Deletado
  *         
  */
  async destroy ({ params, request, response }) {
    const livroalugado = await LivroAlugado.findOrFail(params.id)
    return await livroalugado.delete()
  }
}

module.exports = LivroAlugadoController
