/// <reference types="cypress" />

import {faker} from '@faker-js/faker';

const emailValida = faker.internet.email(); 

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailValida)
        cy.get('#reg_password').type('!teste04')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Malu')
        cy.get('#account_last_name').type('Lins')
        cy.get('.woocommerce-Button').click

    });

    it.only('Deve completar o pré-cadastro com sucesso usando Comandos customizados', () => {
        let emailFaker0 = faker.internet.email()
cy.preCadastro(emailFaker0, 'senha@forte', 'Malu', 'Lins')
cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    
});