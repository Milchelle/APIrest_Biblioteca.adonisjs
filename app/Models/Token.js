'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Token:
*      type: object
*      properties:
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - email
*        - password
*/

class Token extends Model {
}

module.exports = Token
