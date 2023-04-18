import { signup } from "./PageObjects/AutomationExersizes/SignUp"

describe ('Try to hover items in home page', () => {
    it ('try to hover', () => {
        signup.visit()
 cy.get('.product-image-wrapper').eq(1)


    })
})