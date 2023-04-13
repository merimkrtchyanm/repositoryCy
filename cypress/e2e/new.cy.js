import { registerPage } from "./PageObjects/registrationPO"
import { messages } from "./PageObjects/messages"

describe ('registration', () => {
    it ('positive registration', () => {
        registerPage.visit ()
        registerPage.first ('Meri')
        registerPage.last ('Mkrtchyan')
        registerPage.address ('address')
        registerPage.city ('city')
        registerPage.state ('state')
        registerPage.zip ('zip')
        registerPage.ssn ('ssn')
        registerPage.username ('meriuser')
        registerPage.password ('password')
        registerPage.repeat('password')
        // registerPage.submit ()
    })
})