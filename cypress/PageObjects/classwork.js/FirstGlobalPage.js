let val1, val2, values, sum

class FirstPage {
    hover(){
        cy.get(".et_pb_button").eq(1).realHover().then(($element)=>{
            cy.wrap($element)
            .invoke('css', 'background-color')
            .then(background => {
                cy.log(background)
                expect($element).to.have.css("background-color",background)
            })
            })
    }

    fbtw (){
        return cy.get('.et_pb_social_media_follow_network_0 > .icon')
    }
    
    getsummary(){
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .et_pb_contact_captcha_question')
        .invoke('text').then(($val)=>{
         values = $val
        values = values.toString()
        cy.log(values)
        cy.log (typeof(values))
        values = values.split('+')
        let val1 = values[0]
        let val2 = values[1]
        cy.log (typeof(val1, val2))
        val1 = Number(val1)
        val2 = Number(val2)
        cy.log (typeof(val1, val2))
        sum = val1 + val2
        sum = sum.toString()
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input')
        .type(sum)
        })
    }
        }

    

export const firstpage = new FirstPage