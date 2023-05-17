/// <reference types="cypress" />

import {faker} from '@faker-js/faker';

const emailValida = faker.internet.email(); 

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.get('#reg_email').type(emailValida)
        cy.get('#reg_password').type('!teste04')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type('Malu')
        cy.get('#account_last_name').type('Lins')
        cy.get('.woocommerce-Button').click

    })
    
});