'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */

const User = use('App/Models/User')

class UserController {
  
  /**
  * @swagger
  * /users:
  *   get:
  *     tags:
  *       - Users
  *     summary: Listagem completa de users
  *     responses:
  *       200:
  *         description: Lista paginada de users
  *         
  */


  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return User.query().paginate(page, perPage)
  }
  

   /**
  * @swagger
  * /users:
  *   post:
  *     tags:
  *       - Users
  *     summary: Cadastro de um novo user
  *     parameters:
  *       - name: user
  *         description: Objeto de user
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: User Cadastrado
  *         
  */

  async store ({ request, response }) {
    const campos = User.getCamposCadastro()
    const dados = request.only(campos)
    return await User.create(dados)
  }

   /**
  * @swagger
  * /users/{id}:
  *   get:
  *     tags:
  *       - Users
  *     summary: Mostrar um user
  *     parameters:
  *       - name: id
  *         description: id de user
  *         in: parameter
  *     responses:
  *       200:
  *         description: User 
  *         
  */


  async show ({ params, request, response, view }) {
    return await User.query()
                          .with('livros')
                          .where('id', params.id)
                          .first()
  }


  /**
  * @swagger
  * /users/{id}:
  *   put:
  *     tags:
  *       - Users
  *     summary: Alteração de um user
  *     parameters:
  *       - name: id
  *         description: id de user
  *         in: parameter
  *       - name: user
  *         description: Objeto de user
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/User'
  *     responses:
  *       200:
  *         description: User Alterado
  *         
  */
  async update ({ params, request, response }) {
    const campos = User.getCamposCadastro()
    const dados = request.only(campos)
    const user = await User.findOrFail(params.id)
    user.merge(dados)
    await user.save()
    return user
  }

 /**
  * @swagger
  * /users/{id}:
  *   delete:
  *     tags:
  *       - Users
  *     summary: Deletar um user
  *     parameters:
  *       - name: id
  *         description: id de user
  *         in: parameter
  *     responses:
  *       200:
  *         description: User Deletado
  *         
  */
  async destroy ({ params, request, response }) {
    const user = await User.findOrFail(params.id)
    return await user.delete()
  }
   /**
  * @swagger
  * /tokens:
  *   post:
  *     tags:
  *       - Autenticação
  *     summary: Pegar Token
  *     parameters:
  *       - name: token
  *         description: Objeto de token
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/Token'
  *     responses:
  *       200:
  *         description: Token
  *         
  */

  async token({request, auth}){
    const{email, password} = request.all()
    return await auth.attempt(email, password)
     }
}

module.exports = UserController
