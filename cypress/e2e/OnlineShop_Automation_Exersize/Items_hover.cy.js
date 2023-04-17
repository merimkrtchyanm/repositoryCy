import { signup } from "./PageObjects/AutomationExersizes/SignUp"

describe ('check motion of banner carusel', () => {
    it ('carusel working correctly', () => {
        signup.visit()
cy.get('.product-image-wrapper').eq(1)


    })
})