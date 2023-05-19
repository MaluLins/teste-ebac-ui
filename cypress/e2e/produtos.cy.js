/// <reference types="cypress" /> 

describe('funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
        //.first()
        //.last()
        //.eq(3)
        .contains('Ariel Roll Sleeve Sweatshirt')
        .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
var quantidade = 3 

        cy.get('[class="product-block grid"]')
        .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , quantidade)
    });
    
it.only('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
    cy.addProdutos('Aero Daily Fitness Tee', 'XL', 'Black', 2)
});

});