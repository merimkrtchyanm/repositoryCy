import { dataComments} from "../../fixtures/CommentObjSample.json"

describe("API Get testing for Comments", () => {
    it("Verify that the body contains an array with objects", () => {
      cy.getComments()
        .then((response) => {
            cy.log(response)
         expect(response.status).to.eq(200),
         expect(Number.isInteger(response.body.length), 'input should be a number').to.eq(true)
            // expect(response.body).to.be.a('array')
            expect(response.body.length).to.eq(response.body.length)
          //  expect(response.body).has.property(name)
        let i = 0;
         while(i < response.body.length){
            expect(dataComments.dataArray[i].name).to.eq(response.body[i].name)
            cy.log('hello')
         }
         i++

        });
        
      });
    })
