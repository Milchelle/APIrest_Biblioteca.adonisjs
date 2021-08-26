'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livrocategorias
 */

const LivroCategoria = use('App/Models/LivroCategoria')

class LivroCategoriaController {
  /**
  * @swagger
  * /livro-categorias:
  *   get:
  *     tags:
  *       - Livros Categorias
  *     summary: Listagem completa de livros e suas categorias
  *     responses:
  *       200:
  *         description: Lista paginada de livros e suas categorias
  *         
  */
  async index ({ request, response, view }) {
    const{page, perPage} = request.all()
    return LivroCategoria.query().paginate(page, perPage)
  }
  
 /**
  * @swagger
  * /livro-categorias:
  *   post:
  *     tags:
  *       - Livros Categorias
  *     summary: Cadastro de um novo livro e sua categoria
  *     parameters:
  *       - name: livrocategoria
  *         description: Objeto de livrocategoria
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/LivroCategoria'
  *     responses:
  *       200:
  *         description: Livro e sua categoria Cadastrado
  *         
  */
  async store ({ request, response }) {
    const campos = LivroCategoria.getCamposCadastro()
    const dados = request.only(campos)
    return await LivroCategoria.create(dados)
  }


  /**
  * @swagger
  * /livro-categorias/{id}:
  *   get:
  *     tags:
  *       - Livros Categorias
  *     summary: Mostrar um livro e sua categoria
  *     parameters:
  *       - name: id
  *         description: id de livroCategoria
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro e sua Categoria
  *         
  */
  async show ({ params, request, response, view }) {
    return await LivroCategoria.query()
                          .with('livro')
                          .with('categoria')
                          .where('id', params.id)
                          .first()
  }

  /**
  * @swagger
  * /livro-categorias/{id}:
  *   put:
  *     tags:
  *       - Livros Categorias
  *     summary: Alteração de um livro e sua categoria
  *     parameters:
  *       - name: id
  *         description: id de livrocategoria
  *         in: parameter
  *       - name: livrocategoria
  *         description: Objeto de livrocategoria
  *         in: body
  *         required: true
  *         type: object
  *         schema:
  *           $ref: '#/definitions/LivroCategoria'
  *     responses:
  *       200:
  *         description: Livro e sua categoria alterados
  *         
  */
  async update ({ params, request, response }) {
    const campos = LivroCategoria.getCamposCadastro()
    const dados = request.only(campos)
    const livrocategoria = await LivroCategoria.findOrFail(params.id)
    livrocategoria.merge(dados)
    await livrocategoria.save()
    return livrocategoria
  }

 /**
  * @swagger
  * /livro-categorias/{id}:
  *   delete:
  *     tags:
  *       - Livros Categorias
  *     summary: Deletar um livro e sua categoria
  *     parameters:
  *       - name: id
  *         description: id de livroCategoria
  *         in: parameter
  *     responses:
  *       200:
  *         description: Livro e sua categoria Deletados
  *         
  */
  async destroy ({ params, request, response }) {
    const livrocategoria = await LivroCategoria.findOrFail(params.id)
    return await livrocategoria.delete()
  }
}

module.exports = LivroCategoriaController
