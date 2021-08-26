'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    LivroAlugado:
*      type: object
*      properties:
*        livro_id:
*          type: integer
*        usuario_id:
*          type: integer
*        data_aluguel:
*          type: string
*        data_entrega:
*          type: string
*        valor_aluguel:
*          type: string
*        valor_juros:
*          type: string
*      required:
*        - livro_id
*        - usuario_id
*        - data_aluguel
*        - data_entrega
*        - valor_aluguel
*/


class LivroAlugado extends Model {
    static getCamposCadastro(){
        return ['livro_id', 'cliente_id', 'data_aluguel', 'data_entrega', 'valor_aluguel', 'juros_atraso']
    }
    livro(){
        return this.belongsTo('App/Models/Livro')
    }
    alugante(){
        return this.belongsTo('App/Models/Cliente')
    }
}

module.exports = LivroAlugado
