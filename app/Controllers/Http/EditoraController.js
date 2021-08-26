'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with editoras
 */

const Editora = use('App/Models/Editora')

class EditoraController {
 
   /**
  * @swagger
  * /editoras:
  *   get:
  *     tags:
  *       - Editoras
  *     summary: Listagem completa de editoras
  *     responses:
  *       200:
  *         description: Lista paginada de editoras
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Editora.query().paginate(page, perPage)
  }
  
  /**
  * @swagger
  * /editoras:
  *   post:
  *     tags:
  *       - Editoras
  *     summary: Cadastro de uma nova editora
  *     parameters:
  *       - name: editora
  *         description: Objeto de editora
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Editora'
  *     responses:
  *       200:
  *         description: Editora Cadastrada
  *         
  */
  async store ({ request, response }) {
    const campos = Editora.getCamposCadastro()
    const dados = request.only(campos)
    return await Editora.create(dados)
  }

  /**
  * @swagger
  * /editoras/{id}:
  *   get:
  *     tags:
  *       - Editoras
  *     summary: Mostrar uma editora
  *     parameters:
  *       - name: id
  *         description: id de editora
  *         in: parameter
  *     responses:
  *       200:
  *         description: Editora 
  *         
  */
  async show ({ params, request, response, view }) {
    return await Editora.query()
                          .with('livros')
                          .where('id', params.id)
                          .first()
  }

 /**
  * @swagger
  * /editoras/{id}:
  *   put:
  *     tags:
  *       - Editoras
  *     summary: Alteração de uma editora
  *     parameters:
  *       - name: id
  *         description: id de editora
  *         in: parameter
  *       - name: livro
  *         description: Objeto de editora
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Editora'
  *     responses:
  *       200:
  *         description: Editora Alterada
  *         
  */
  async update ({ params, request, response }) {
    const campos = Editora.getCamposCadastro()
    const dados = request.only(campos)
    const editora = await Editora.findOrFail(params.id)
    editora.merge(dados)
    await editora.save()
    return editora
  }

  /**
  * @swagger
  * /editoras/{id}:
  *   delete:
  *     tags:
  *       - Editoras
  *     summary: Deletar uma editora
  *     parameters:
  *       - name: id
  *         description: id de editora
  *         in: parameter
  *     responses:
  *       200:
  *         description: Editora Deletada
  *         
  */
  async destroy ({ params, request, response }) {
    const editora = await Editora.findOrFail(params.id)
    return await editora.delete()
  }
}

module.exports = EditoraController
