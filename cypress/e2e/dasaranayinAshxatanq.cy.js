import { firstpage } from "../PageObjects/classwork.js/FirstGlobalPage"
let val1, val2, values, vall, valueses, get,string, split, gumar, norgumar, val11, val12


describe('class work', () => {
    xit('Buttons', () => { 
        //cy.visit('Global_WORK_URL')
        cy.visit('https://ultimateqa.com/automation')
        cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click()
        cy.url().should('include', 'complicated-page')
        firstpage.hover()
        
    })
    
    it ('FbTw', () => {
        cy.visit('https://ultimateqa.com/automation')
        cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click()
        cy.get('#et_pb_contact_name_0').type('meri')
        cy.get('#et_pb_contact_email_0').type('meri@meri.mmm')
        cy.get('#et_pb_contact_message_0').type('test text')
        firstpage.getsummary()
})

})
