'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Livro:
*      type: object
*      properties:
*        titulo:
*          type: string
*        data_publicacao:
*          type: string
*        autore_id:
*          type: integer
*        editora_id:
*          type: integer
*        paginas:
*          type: integer
*        sinopse:
*          type: string
*      required:
*        - titulo
*        - autore_id
*        - editora_id
*/

class Livro extends Model {
    static getCamposCadastro(){
        return ['titulo', 'data_publicacao', 'autore_id', 'editora_id', 'paginas', 'sinopse']
    }
    editora(){
        return this.belongsTo('App/Models/Editora')
    }
    autor(){
        return this.belongsTo('App/Models/Autore')
    }
    livroCategoria(){
        return this.belongsToMany('App/Models/LivroCategoria').pivotTable('livro_categorias')
    }
}

module.exports = Livro
