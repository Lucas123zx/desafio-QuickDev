class ProductElements {
  inputNameProduct = function () {return '#inputNome'}
  inputPrice = function () {return '#inputPreco'}
  inputValidity = function () {return '#inputValidade'}
  buttonToAdd = function () {return 'button[type="submit"]'}
  tableProducts = function () {return '#conteudoTabela'}
  msgText = function (text) {return `//*[contains(text(), "${text}")]`}
}

module.exports = new ProductElements();