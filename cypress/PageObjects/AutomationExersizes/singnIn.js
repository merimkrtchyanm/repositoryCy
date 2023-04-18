import { validUsPass } from "../../Utils/ValidAccountData";

class Signin {
signin (){
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="login-email"]').type(validUsPass.email)
    cy.get('[data-qa="login-password"]').type(validUsPass.password)
    cy.get('[data-qa="login-button"]').click()
   } 
}

export const signin = new Signin