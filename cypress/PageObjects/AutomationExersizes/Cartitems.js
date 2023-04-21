import { AddressInfo } from "../../Utils/ValidAccountData"
import { validcard } from "../../Utils/ValidAccountData"

class Cartitems {

  Added_Modal(){
   return cy.get('.modal-content')
  }  

  getCheckoutbutton (){
    return cy.get('.col-sm-6 > .btn')
  }


CheckoutModal(){ 
 return cy.get('.modal-content')

}
  
  checkoutPage(){
    cy.get('#cart_items').should('contain', 'Address Details')
    cy.get('#address_delivery > .address_firstname').should('contain', AddressInfo.firstName + ' '+ AddressInfo.lastName)
    cy.get('#address_delivery > :nth-child(3)').should('contain', AddressInfo.company)
    cy.get('#address_delivery > :nth-child(4)').should('contain', AddressInfo.address)
    cy.get('#address_delivery > :nth-child(5)').should('contain', AddressInfo.address2)
    cy.get('#address_delivery > .address_city').should('contain', AddressInfo.city)
      .and('contain', AddressInfo.state)
      .and('contain', AddressInfo.zip)
    cy.get('#address_delivery > .address_country_name').should('contain', AddressInfo.country )
    cy.get('#address_delivery > .address_phone').should('contain', AddressInfo.phone)
 
    cy.get('#address_invoice')
    cy.get('#address_delivery > .address_firstname').should('contain', AddressInfo.firstName + ' '+ AddressInfo.lastName)
    cy.get('#address_delivery > :nth-child(3)').should('contain', AddressInfo.company)
    cy.get('#address_delivery > :nth-child(4)').should('contain', AddressInfo.address)
    cy.get('#address_delivery > :nth-child(5)').should('contain', AddressInfo.address2)
    cy.get('#address_delivery > .address_city').should('contain', AddressInfo.city)
      .and('contain', AddressInfo.state)
      .and('contain', AddressInfo.zip)
    cy.get('#address_delivery > .address_country_name').should('contain', AddressInfo.country )
    cy.get('#address_delivery > .address_phone').should('contain', AddressInfo.phone)

    cy.get(':nth-child(4) > .heading').should ('contain', 'Review Your Order')
    cy.get('.cart_product > a > img').should('exist')
    cy.get('label').should('contain', 'If you would like to add a comment about your order, please write it in the field below.').should('be.visible')
    cy.get('.form-control').should('exist')
    cy.get(':nth-child(7) > .btn').should('be.visible')
    .and('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box', 'padding', '5px 15px')
    }

    getPay (){
      cy.get('[data-qa="name-on-card"]').type(validcard.cardname)
      cy.get('[data-qa="card-number"]').type(validcard.cardnumber)
      cy.get('[data-qa="cvc"]').type(validcard.cvc)
      cy.get('[data-qa="expiry-month"]').type(validcard.expmonth)
      cy.get('[data-qa="expiry-year"]').type(validcard.expyear)
      cy.get('[data-qa="pay-button"]').should('be.visible')
      .and('have.css', 'background', 'rgb(254, 152, 15) none repeat scroll 0% 0% / auto padding-box border-box', 'margin-top', '16px')
    }
}

export const cartItems = new Cartitems