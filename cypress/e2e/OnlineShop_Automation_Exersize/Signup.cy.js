import { signup } from "../../PageObjects/AutomationExersizes/SignUp" 

describe ('onlineshop', () => {
it ('register', () => {

 // petqa avelacnem funciton random name ev mail. Arden es cred-ov account create eghatsa
    
    cy.visit ('https://www.automationexercise.com/login')  
    signup.getUserName('Meri')
    signup.getEmail('meri1@meri.meri')
    signup.getUpButton()
    cy.contains('Enter Account Information').should('be.visible')
    cy.get('#uniform-id_gender2').click()
    signup.getPassword('testpass')
    signup.getBirthday(2, 6, 23)
    cy.get('#newsletter').click()
    signup.getFirstName()
    signup.getLastName()
    signup.getCompany()
    signup.getAddress1()
    signup.getAddress2()
    signup.getCountry()
    signup.getState()
    signup.getCity()
    signup.getZip()
    signup.getPhoneNumber()
    signup.getSignUpButton()
   // signup.GetSignupMessage()
    })
})