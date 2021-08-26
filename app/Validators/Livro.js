'use strict'

const ValidatorAbstract = use('App/Validators/ValidatorAbstract')

class Livro  extends ValidatorAbstract{
  get rules () {
    return {
      titulo: 'required|max:70',
      data_publicacao: 'min:4|max:8',
      autore_id: 'integer|required',
      editora_id: 'integer|required',
      paginas: 'integer'
    }
  }
}

module.exports = Livro
