class ProductElements {
  inputNameProduct = () => {return '#inputNome'}
  inputPrice = () => {return '#inputPreco'}
  inputValidity = () => {return '#inputValidade'}
  buttonToAdd = () => {return 'button[type="submit"]'}
  tableProducts = () => {return '#conteudoTabela'}
  msgText = (text) => {return `//*[contains(text(), "${text}")]`}
}

module.exports = new ProductElements();