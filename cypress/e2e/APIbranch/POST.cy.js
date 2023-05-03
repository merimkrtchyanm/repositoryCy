const dataJson = require("../../fixtures/createJson.json");

describe("API testing", () => {
  it("Post requests", () => {
    cy.fixture("createJson").then((payload) => {
      cy.request({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        body: {
          userId: payload.userId,
          id: payload.id,
          title: payload.title,
          body: payload.body,
        },
      }).then((response) => {
        cy.log(JSON.stringify(response));
        expect(response.status).to.eq(201),
          expect(response.body).has.property("title", payload.title),
          expect(response.body).has.property("userId", payload.userId),
          expect(response.body).to.have.property("id", payload.id),
          expect(response.body).has.property("body", payload.body);
      });
    });
  });
});
