'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */

const Categoria = use('App/Models/Categoria')

class CategoriaController {
  /**
  * @swagger
  * /categorias:
  *   get:
  *     tags:
  *       - Categorias
  *     summary: Listagem completa de categorias
  *     responses:
  *       200:
  *         description: Lista paginada de categorias
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Categoria.query().paginate(page, perPage)
  }
  
/**
  * @swagger
  * /categorias:
  *   post:
  *     tags:
  *       - Categorias
  *     summary: Cadastro de uma nova categoria
  *     parameters:
  *       - name: categoria
  *         description: Objeto de categoria
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Categoria'
  *     responses:
  *       200:
  *         description: Categoria Cadastrada
  *         
  */
  async store ({ request, response }) {
    const campos = Categoria.getCamposCadastro()
    const dados = request.only(campos)
    return await Categoria.create(dados)
  }


  /**
  * @swagger
  * /categorias/{id}:
  *   get:
  *     tags:
  *       - Categorias
  *     summary: Mostrar uma categoria
  *     parameters:
  *       - name: id
  *         description: id de categoria
  *         in: parameter
  *         type: integer
  *     responses:
  *       200:
  *         description: Categoria 
  *         
  */
  async show ({ params, request, response, view }) {
    return await Categoria.query()
                          .where('id', params.id)
                          .first()
  }

 /**
  * @swagger
  * /categorias/{id}:
  *   put:
  *     tags:
  *       - Categorias
  *     summary: Alteração de uma categoria
  *     parameters:
  *       - name: id
  *         description: id de categoria
  *         in: parameter
  *       - name: categoria
  *         description: Objeto de categoria
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Categoria'
  *     responses:
  *       200:
  *         description: Categoria Alterada
  *         
  */
  async update ({ params, request, response }) {
    const campos = Categoria.getCamposCadastro()
    const dados = request.only(campos)
    const categoria = await Categoria.findOrFail(params.id)
    categoria.merge(dados)
    await categoria.save()
    return categoria
  }

   /**
  * @swagger
  * /categorias/{id}:
  *   delete:
  *     tags:
  *       - Categorias
  *     summary: Deletar uma categoria
  *     parameters:
  *       - name: id
  *         description: id de categoria
  *         in: parameter
  *     responses:
  *       200:
  *         description: Categoria Deletada
  *         
  */
  async destroy ({ params, request, response }) {
    const categoria = await Categoria.findOrFail(params.id)
    return await categoria.delete()
  }
}

module.exports = CategoriaController
