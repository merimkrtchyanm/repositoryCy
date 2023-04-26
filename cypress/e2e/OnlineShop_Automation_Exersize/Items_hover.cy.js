import { signup } from "../../PageObjects/AutomationExersizes/SignUp"

describe ('Try to hover items in home page', () => {
    it ('try to hover', () => {
        signup.visit()
        cy.get('.product-image-wrapper').realHover()
            .should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
            .and('contain', 'Rs.')
            .and('contain', 'Add to cart')

    })
})