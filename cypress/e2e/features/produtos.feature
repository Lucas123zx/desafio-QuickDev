Feature: Adicionar Produto 

  Scenario: Adicionar produto com valor de preço menor que 0

    Given que o usuario esteja na tela de cadastro de produto
    When o usuario preencher os dados de cadastro do produto
    And preencher campo preco com um valor negativo
    And adicionar produto
    Then o usuario deve visualizar a mensagem "Preço invalido" abaixo do campo preco
    And o produto nao deve ser adicionado a lista