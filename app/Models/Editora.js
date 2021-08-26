'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Editora:
*      type: object
*      properties:
*        nome:
*          type: string
*      required:
*        - nome
*/


class Editora extends Model {
    static getCamposCadastro(){
        return ['nome']
    }
    livros(){
        return this.hasMany('App/Models/Livro')
    }
}

module.exports = Editora
