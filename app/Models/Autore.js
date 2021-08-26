'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Autor:
*      type: object
*      properties:
*        nome:
*          type: string
*        nacionalidade:
*          type: string
*        data_nascimento:
*          type: integer
*      required:
*        - nome
*/


class Autore extends Model {
    static getCamposCadastro(){
        return ['nome', 'nacionalidade', 'data_nascimento']
    }
    livros(){
        return this.hasMany('App/Models/Livro')
    }
}

module.exports = Autore
