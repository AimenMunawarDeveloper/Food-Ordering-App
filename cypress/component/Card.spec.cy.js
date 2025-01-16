import React from "react";
import { mount } from "@cypress/react";
import Card from "../../src/components/Card";

describe("Card Component", () => {
  const product = {
    categoryName: "Category 1",
    name: "Dish 1",
    img: "https://via.placeholder.com/150",
    description: "Delicious Dish 1",
    options: [
      { half: "Small", full: "Large" },
      { regular: "Medium", large: "Extra Large" },
    ],
  };
  it("should render the card with the provided product details", () => {
    mount(<Card {...product} />);
    cy.get('[data-testid="card-title"]').should("contain.text", "Dish 1");
    cy.get('[data-testid="card-category"]').should(
      "contain.text",
      "Category 1"
    );
    cy.get('[data-testid="card-description"]').should(
      "contain.text",
      "Delicious Dish 1"
    );
    cy.get('[data-testid="card-img"]').should(
      "have.attr",
      "src",
      "https://via.placeholder.com/150"
    );
    cy.get('[data-testid="card-quantity"] option').should("have.length", 6);
    cy.get('[data-testid="card-options"] option').should("have.length", 4);
  });
  it("should allow user to select a quantity", () => {
    mount(<Card {...product} />);
    cy.get('[data-testid="card-quantity"]').select("3");
    cy.get('[data-testid="card-quantity"]').should("have.value", "3");
  });
  it("should allow user to select an option", () => {
    mount(<Card {...product} />);
    cy.get('[data-testid="card-options"]').select("half-Small");
    cy.get('[data-testid="card-options"]').should("have.value", "Small");
  });
  it("should display the correct total price text", () => {
    mount(<Card {...product} />);
    cy.get('[data-testid="total-price"]').should("contain.text", "Total Price");
  });
});
