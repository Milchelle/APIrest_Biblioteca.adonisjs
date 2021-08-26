'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class LivroCategoria extends ValidatorAbstract{
  get rules () {
    return {
      livro_id: 'integer|required',
      categoria_id: 'integer|required'
    }
  }
}

module.exports = LivroCategoria
