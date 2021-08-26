'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Categoria:
*      type: object
*      properties:
*        nome:
*          type: string
*      required:
*        - nome
*/


class Categoria extends Model {
    static getCamposCadastro(){
        return ['nome']
    }
    livroCategoria(){
        return this.belongsToMany('App/Models/LivroCategoria').pivotTable('livro_categorias')
    }
}

module.exports = Categoria
