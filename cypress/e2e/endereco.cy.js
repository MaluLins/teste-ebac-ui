/// <reference types="cypress" /> 
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
beforeEach(() => {
    cy.visit('minha conta')
    cy.fixture('perfil').then((dados)  => { 
        cy.get('#username') .type(dados.usuário)
        cy.get('#password') .type(dados.senha)
    })
    
});

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando fixture', () => {
        EnderecoPage.editarEnderecoFaturamento('Malu', 'Lins', 'Intera', 'Brasil', 'Av Orlando Gomes', '2002', 'Salvador', 'Bahia', '41650010', '719', 'Mwlins4@hotmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });
});

