import { AddressInfo } from "../../Utils/ValidAccountData"
import { randomname } from "../../Utils/ValidAccountData"
import { randomemail } from "../../Utils/ValidAccountData"

class signUP {

    visit () {
        cy.visit (Cypress.env('globalUrl'))
    }
    
    getUserName (){
        cy.get ('[data-qa="signup-name"]').type(randomname.randomName(7))
    }

    getEmail (){
        cy.get ('[data-qa="signup-email"]').type(randomemail.randomEmail(4))
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

    getFirstName (){
        cy.get('[data-qa="first_name"]').type(AddressInfo.firstName)
    }

    getLastName () {
        cy.get('[data-qa="last_name"]').type (AddressInfo.lastName)
    }

    getCompany() {
        cy.get ('[data-qa="company"]').type(AddressInfo.company)
    }

    getAddress1 () {
        cy.get ('[data-qa="address"]').type(AddressInfo.address)
    }

    getAddress2 () {
        cy.get('[data-qa="address2"]').type(AddressInfo.address2)
}

    getCountry(){
        cy.get('#country').select(AddressInfo.country)
    }
    
    getState () {
        cy.get ('[data-qa="state"]').type (AddressInfo.state)
    }

    getCity (){
        cy.get ('[data-qa="city"]').type(AddressInfo.city)
    }
    
    getZip() {
        cy.get('[data-qa="zipcode"]').type(AddressInfo.zip)
    }

    getPhoneNumber() {
        cy.get('[data-qa="mobile_number"]').type(AddressInfo.phone)
    }

    getSignUpButton (){
       return  cy.get('[data-qa="create-account"]')
    }

    GetSignupMessage (){
       cy.contain ('ACCOUNT CREATED! Congratulations! Your new account has been successfully created!')
       .and('contain', 'You can now take advantage of member privileges to enhance your online shopping experience with us.')
    }
}

export const signup = new signUP

