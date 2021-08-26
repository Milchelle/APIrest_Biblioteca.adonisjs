'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Cliente extends ValidatorAbstract{
  get rules () {
    return {
      nome: 'required',
      email: 'required',
      telefone: 'min:8|max:10'
    }
  }
}

module.exports = Cliente
