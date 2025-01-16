describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:5000/api/product/list", {
      statusCode: 200,
      body: {
        success: true,
        products: [
          {
            name: "Dish 1",
            CategoryName: "Category 1",
            img: "https://via.placeholder.com/150",
            options: [{ half: "Small", full: "Large" }],
            description: "Delicious Dish 1",
          },
          {
            name: "Dish 2",
            CategoryName: "Category 2",
            img: "https://via.placeholder.com/150",
            options: [{ regular: "Medium" }],
            description: "Tasty Dish 2",
          },
        ],
      },
    }).as("getProducts");
    cy.visit("/");
  });
  it("should load the page and display the carousel", () => {
    cy.get(".carousel").should("exist");
    cy.get(".carousel-item").should("have.length", 3);
  });
  it("should display loading message while fetching products", () => {
    cy.get("p").contains("Loading products...").should("exist");
  });
  it("should render products after they are fetched", () => {
    cy.wait("@getProducts");
    cy.get(".card").should("have.length", 2);
    cy.get(".card-title").first().should("contain.text", "Dish 1");
  });
  it("should display an error message if the API call fails", () => {
    cy.intercept("GET", "http://localhost:5000/api/product/list", {
      statusCode: 500,
    }).as("getProductsFail");
    cy.visit("/");
    cy.wait("@getProductsFail");
    cy.get("p")
      .contains("An error occurred while fetching products.")
      .should("exist");
  });
  it("should allow the user to search for a product", () => {
    cy.wait("@getProducts");
    cy.get('input[type="search"]').type("Dish 1");
    cy.get('button[type="submit"]').click();
    cy.get(".card").should("have.length", 1);
    cy.get(".card-title").should("contain.text", "Dish 1");
  });
  it("should not show products while searching if none match", () => {
    cy.wait("@getProducts");
    cy.get('input[type="search"]').type("Non-existing product");
    cy.get('button[type="submit"]').click();
    cy.get(".card").should("have.length", 0);
  });
});
