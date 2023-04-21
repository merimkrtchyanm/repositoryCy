import { signup } from "../../PageObjects/AutomationExersizes/SignUp"

describe ('check motion of banner carusel', () => {
    it ('carusel working correctly', () => {
        signup.visit()
        cy.get ('.item').then(($elem)=>{
            expect($elem).to.contain('Automation')
            expect($elem).to.contain('Full-Fledged practice website for Automation Engineers')
            expect($elem).to.contain('All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.')
        })
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('be.visible').and('contain', 'Test Cases')
        cy.get('.active > :nth-child(1) > .apis_list > .btn').should('have.css', 'background-color', 'rgb(92, 184, 92)')
        cy.wait(7000)
        cy.get('.item').should('have.class', 'active')
    })
})
    