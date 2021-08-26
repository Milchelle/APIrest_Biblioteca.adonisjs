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
*        - email
*        - telefone
*/

class Cliente extends Model {
    static getCamposCadastro(){
        return ['nome', 'email', 'telefone']
    }
}

module.exports = Cliente
