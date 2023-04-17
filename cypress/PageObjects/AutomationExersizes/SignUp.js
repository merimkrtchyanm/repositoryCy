class signUP {
    visit () {
        cy.visit (Cypress.env('globalUrl'))
    }
    
    getUserName (value){
        cy.get ('[data-qa="signup-name"]').type(value)
    }

    getEmail (value){
        cy.get ('[data-qa="signup-email"]').type(value)
    }
    getUpButton (){
        cy.get ('[data-qa="signup-button"]').click()
    }

    getPassword (value){
      cy.get('[type="password"]').type(value)
    }

    getBirthday (day, month, year) {
        cy.get('#days').select(day)
        cy.get('#months').select(month)
        cy.get('#years').select(year)
    }

    getFirstName (value){
        cy.get('[data-qa="first_name"]').type(value)
    }

    getLastName (value) {
        cy.get('[data-qa="last_name"]').type (value)
    }

    getCompany(value) {
        cy.get ('[data-qa="company"]').type(value)
    }

    getAddress1 (value) {
        cy.get ('[data-qa="address"]').type(value)
    }

    getAddress2 (value) {
        cy.get('[data-qa="address2"]').type(value)
    }

    getCountry(value){
        cy.get('#country').select(value)
    }
    
    getState (value) {
        cy.get ('[data-qa="state"]').type (value)
    }

    getCity (value){
        cy.get ('[data-qa="city"]').type(value)
    }
    
    getZip(value) {
        cy.get('[data-qa="zipcode"]').type(value)
    }

    getPhoneNumber(value) {
        cy.get('[data-qa="mobile_number"]').type(value)
    }

}

export const signup = new signUP

