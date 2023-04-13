 class Register {

    visit() {
        cy.visit ('https://parabank.parasoft.com/parabank/register.htm;jsessionid=2A6831ED00437F7C6B3503B0A8570FAD')
    }

    first (value) {
        cy.get ('.input').eq(2).type (value)
    }

    last (value) {
       cy.get('.input').eq(3).type (value)
     }

    address  (value) {
        cy.get('.input').eq(4).type (value)
    }

    city  (value) {
        cy.get('.input').eq(5).type (value)
    }

    state  (value) {
        cy.get('.input').eq(6).should('be.visible').type (value)
    }

    zip  (value) {
        cy.get('.input').eq(7).type (value)
    }

    phone  (value) {
        cy.get('.input').eq(8).type (value)
    }

    ssn  (value) {
        cy.get('.input').eq(9).type (value)
    }

    username  (value) {
        cy.get('.input').eq(10).type (value)
    }
 
    password  (value) {
        cy.get('.input').eq(11).type (value)
    }
    
    repeat  (value) {
        cy.get('.input').eq(12).type(value)
    }

    submit () {
        cy.get ('.button').eq(4).should('be.visible')
    }


} 

export const registerPage=new Register(); 