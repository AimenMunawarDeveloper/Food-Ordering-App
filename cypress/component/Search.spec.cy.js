import { mount } from "cypress/react";
import Search from "../../src/components/Search";

describe("Search Component", () => {
  const mockProducts = [
    { name: "Product 1", description: "Description of Product 1" },
    { name: "Product 2", description: "Description of Product 2" },
    { name: "Product 3", description: "Description of Product 3" },
  ];
  let mockSetFilteredProducts;
  beforeEach(() => {
    mockSetFilteredProducts = cy.stub();
    mount(
      <Search
        products={mockProducts}
        setFilteredProducts={mockSetFilteredProducts}
      />
    );
  });
  it("should render the search input and button", () => {
    cy.get("input[type='search']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });
  it("should update the search input value when typing", () => {
    const searchText = "Product 1";
    cy.get("input[type='search']")
      .type(searchText)
      .should("have.value", searchText);
  });
  it("should filter products based on search input", () => {
    const searchText = "Product 1";
    cy.get("input[type='search']").type(searchText);
    cy.get("button[type='submit']").click();
    cy.wrap(mockSetFilteredProducts).should("have.been.calledWith", [
      { name: "Product 1", description: "Description of Product 1" },
    ]);
  });
  it("should not filter products if no match is found", () => {
    const searchText = "Non-existing Product";
    cy.get("input[type='search']").type(searchText);
    cy.get("button[type='submit']").click();
    cy.wrap(mockSetFilteredProducts).should("have.been.calledWith", []);
  });
  it("should handle empty search query", () => {
    cy.get("input[type='search']").clear();
    cy.get("button[type='submit']").click();
    cy.wrap(mockSetFilteredProducts).should(
      "have.been.calledWith",
      mockProducts
    );
  });
});
