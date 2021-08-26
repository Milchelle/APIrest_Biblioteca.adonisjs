'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with autores
 */

const Autore = use('App/Models/Autore')

class AutoreController {
  /**
  * @swagger
  * /autores:
  *   get:
  *     tags:
  *       - Autores
  *     summary: Listagem completa de autores
  *     responses:
  *       200:
  *         description: Lista paginada de autores
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Autore.query().paginate(page, perPage)
  }
  
/**
  * @swagger
  * /autores:
  *   post:
  *     tags:
  *       - Autores
  *     summary: Cadastro de um novo ator
  *     parameters:
  *       - name: autor
  *         description: Objeto de autor
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Autore'
  *     responses:
  *       200:
  *         description: Autor Cadastrado
  *         
  */
  async store ({ request, response }) {
    const campos = Autore.getCamposCadastro()
    const dados = request.only(campos)
    return await Autore.create(dados)
  }


  /**
  * @swagger
  * /autores/{id}:
  *   get:
  *     tags:
  *       - Autores
  *     summary: Mostrar um autor
  *     parameters:
  *       - name: id
  *         description: id de autor
  *         in: parameter
  *     responses:
  *       200:
  *         description: Autor
  *         
  */
  async show ({ params, request, response, view }) {
    return await Autore.query()
                          .with('livros')
                          .where('id', params.id)
                          .first()
  }

 /**
  * @swagger
  * /autores/{id}:
  *   put:
  *     tags:
  *       - Autores
  *     summary: Alteração de um autor
  *     parameters:
  *       - name: id
  *         description: id de autor
  *         in: parameter
  *       - name: autore
  *         description: Objeto de Autor
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Autore'
  *     responses:
  *       200:
  *         description: Autor Alterado
  *         
  */
  async update ({ params, request, response }) {
    const campos = Autore.getCamposCadastro()
    const dados = request.only(campos)
    const autore = await Autore.findOrFail(params.id)
    autore.merge(dados)
    await autore.save()
    return autore
  }

   /**
  * @swagger
  * /autores/{id}:
  *   delete:
  *     tags:
  *       - Autores
  *     summary: Deletar um autor
  *     parameters:
  *       - name: id
  *         description: id de autor
  *         in: parameter
  *     responses:
  *       200:
  *         description: Autor Deletado
  *         
  */
  async destroy ({ params, request, response }) {
    const autore = await Autore.findOrFail(params.id)
    return await autore.delete()
  }
}

module.exports = AutoreController
