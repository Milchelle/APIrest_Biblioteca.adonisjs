'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clientes
 */

const Cliente = use('App/Models/Cliente')

class ClienteController {
  /**
  * @swagger
  * /clientes:
  *   get:
  *     tags:
  *       - Clientes
  *     summary: Listagem completa de clientes
  *     responses:
  *       200:
  *         description: Lista paginada de clientes
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return Cliente.query().paginate(page, perPage)
  }
  
/**
  * @swagger
  * /clientes:
  *   post:
  *     tags:
  *       - Clientes
  *     summary: Cadastro de um novo cliente
  *     parameters:
  *       - name: cliente
  *         description: Objeto de cliente
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Cliente'
  *     responses:
  *       200:
  *         description: Cliente Cadastrado
  *         
  */
  async store ({ request, response }) {
    const campos = Cliente.getCamposCadastro()
    const dados = request.only(campos)
    return await Cliente.create(dados)
  }


  /**
  * @swagger
  * /clientes/{id}:
  *   get:
  *     tags:
  *       - Clientes
  *     summary: Mostrar um cliente
  *     parameters:
  *       - name: id
  *         description: id de cliente
  *         in: parameter
  *         type: integer
  *     responses:
  *       200:
  *         description: Cliente 
  *         
  */
  async show ({ params, request, response, view }) {
    return await Cliente.query()
                          .where('id', params.id)
                          .first()
  }

 /**
  * @swagger
  * /clientes/{id}:
  *   put:
  *     tags:
  *       - Clientes
  *     summary: Alteração de um cliente
  *     parameters:
  *       - name: id
  *         description: id de cliente
  *         in: parameter
  *       - name: cliente
  *         description: Objeto de cliente
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Cliente'
  *     responses:
  *       200:
  *         description: Cliente Alterado
  *         
  */
  async update ({ params, request, response }) {
    const campos = Cliente.getCamposCadastro()
    const dados = request.only(campos)
    const cliente = await Cliente.findOrFail(params.id)
    cliente.merge(dados)
    await cliente.save()
    return cliente
  }

   /**
  * @swagger
  * /clientes/{id}:
  *   delete:
  *     tags:
  *       - Clientes
  *     summary: Deletar um cliente
  *     parameters:
  *       - name: id
  *         description: id de cliente
  *         in: parameter
  *     responses:
  *       200:
  *         description: Cliente Deletado
  *         
  */
  async destroy ({ params, request, response }) {
    const cliente = await Cliente.findOrFail(params.id)
    return await cliente.delete()
  }
}

module.exports = ClienteController
