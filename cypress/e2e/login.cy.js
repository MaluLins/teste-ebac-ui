/// <reference types="cypress" />
const perfil = require ('../fixtures/perfil.json')
context ('funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
afterEach(() => {
    cy.screenshot()
});
    it ('Deve fazer login com sucesso', () => {
cy.get('#username') .type('aluno_ebac@teste.com')
cy.get('#password') .type('teste@teste.com')
cy.get('.woocommerce-form > .button').click()

cy.get('.page-title') .should('contain', 'Minha conta')
    })

    it('Deve fazer login com sucesso - Usando arquivo de dados', () => {
        cy.get('#username') .type(perfil.usuário)
        cy.get('#password') .type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title') .should('contain', 'Minha conta')
    }); 

    it.only('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then((dados) => {
        cy.get('#username') .type(dados.usuário)
        cy.get('#password') .type(dados.senha, {log:false})
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.page-title') .should('contain', 'Minha conta')
    })
    });

    it ('Deve exibir uma mensagem de erro ao inserir usuario  inválido', () => {
        cy.get('#username') .type('ebac@teste.com')
        cy.get('#password') .type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'a senha fornecida para o e-mail ebac@teste.com está incorreta.')
    })


    it ('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username') .type('aluno_ebac@teste.com')
        cy.get('#password') .type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', ' a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
})
