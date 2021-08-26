'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    LivroCategoria:
*      type: object
*      properties:
*        livro_id:
*          type: integer
*        categoria_id:
*          type: integer
*      required:
*        - livro_id
*        - categoria_id
*/


class LivroCategoria extends Model {
    static getCamposCadastro(){
        return ['livro_id', 'categoria_id']
    }
    livro(){
        return this.belongsTo('App/Models/Livro')
    }
    categoria(){
        return this.belongsTo('App/Models/Categoria')
    }
}

module.exports = LivroCategoria
