'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class LivroAlugado extends ValidatorAbstract {
  get rules () {
    return {
      livro_id: 'integer|required',
      cliente_id: 'integer|required',
      data_aluguel: 'required',
      data_entrega: 'required',
      valor_aluguel: 'required'
    }
  }
}

module.exports = LivroAlugado
