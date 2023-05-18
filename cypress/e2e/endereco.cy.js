/// <reference types="cypress" /> 

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha conta')
    cy.fixture('perfil').then((dados)  => { 
        cy.get('#username') .type(dados.usuário)
        cy.get('#password') .type(dados.senha)
    })
    
});

    it('Deve fazer cadastro de faturamento com sucesso - Usando fixture', () => {
        
        //cadastro de endereço
    });
});

