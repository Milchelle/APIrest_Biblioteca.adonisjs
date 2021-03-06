'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** 
*  @swagger
*  definitions:
*    User:
*      type: object
*      properties:
*        nome:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*      required:
*        - nome
*        - email
*        - password
*/


class User extends Model {
  static getCamposCadastro(){
    return ['nome', 'email', 'password']
}
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
  livros(){
    return this.hasMany('App/Models/Livro')
  }
}

module.exports = User
