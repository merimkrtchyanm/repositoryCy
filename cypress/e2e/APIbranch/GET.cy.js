import { bodyData } from "../../fixtures/bodyDataPosts.json";

const newData = JSON.parse(JSON.stringify(bodyData));

describe("API testing", () => {
  it("API testing", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        cy.log(response);
        expect(response.body[5].id).to.eq(6);
        expect(response.body[8].title).contains(
          "nesciunt iure omnis dolorem tempora et accusantium"
        );
        expect(response.body.length).to.eq(100);
      }
    );
  });

  it("Add New Post", () => {
    cy.addNewPost();
  });
  it("Post requests", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      },
    }).then((response) => {
      expect(response.body).has.property("title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"),
      expect(response.body).has.property("userId", 1),
      expect(response.body).has.property("id", 101),
      expect(response.body).has.property("body", "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")

    })
});
    })

