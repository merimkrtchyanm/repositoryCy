/// <reference types ="Cypress" />

let usernumber;
let obj={
  id: 1,
  title: "created",
  body: "new bidy",
}
describe("API testing", () => {
  it.only("Post requests", () => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("globalApiUrl")}posts`,
      body: {
        id: 1,
        title: "created",
        body: "new bidy",
      },
    })
      .then((response) => {
        cy.log(response);
        expect(response.status).to.eq(201),
          expect(Number.isInteger(response.body.id), 'input should be a number').to.eq(true)
          expect(response.body.id).to.eq(response.body.id),
          expect(response.body.body).to.eq(obj.body);
          expect(response.body.title).to.eq(obj.title);
      })
     
       });
  it("PUT", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/",

      body: {
        id: 1,
        title: "updated",
        body: "new bidy updated",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).has.property("title", "updated"),
        expect(response.body).has.property("userId", usernumber),
        expect(response.body).to.have.property("id", 1),
        expect(response.body).has.property("body", "new bidy updated");
    });
  });
});
