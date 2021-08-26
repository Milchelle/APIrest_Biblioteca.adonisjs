'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Categoria extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:50'
    }
  }
}

module.exports = Categoria
