class BaseUrl {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  accesarUrl() {
    return cy.visit('/')
  }
}

export default BaseUrl;