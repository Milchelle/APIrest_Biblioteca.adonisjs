'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Autor extends ValidatorAbstract {
  get rules () {
    return {
      nome: 'required|max:70',
      nacionalidade: 'max:25',
      data_nascimento: 'min:4|max:8'
    }
  }
}

module.exports = Autor
