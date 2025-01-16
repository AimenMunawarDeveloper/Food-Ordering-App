import React from "react";
import Products from "../../src/components/Products";
import { mount } from "cypress/react";

describe("Products Component", () => {
  const products = [
    {
      CategoryName: "Category 1",
      name: "Product 1",
      img: "product1.jpg",
      options: ["Option 1", "Option 2"],
      description: "Description of Product 1",
    },
    {
      CategoryName: "Category 2",
      name: "Product 2",
      img: "product2.jpg",
      options: ["Option A", "Option B"],
      description: "Description of Product 2",
    },
  ];
  it("should render all products correctly", () => {
    mount(<Products products={products} />);
    cy.get(".card").should("have.length", products.length);
    products.forEach((product, index) => {
      cy.get(".card")
        .eq(index)
        .within(() => {
          cy.get(".card-title").should("contain.text", product.name);
          cy.get(".card-img-top")
            .should("be.visible")
            .should("have.attr", "src", product.img);
          cy.get("[data-testid='card-description']").should(
            "contain.text",
            product.description
          );
          cy.get("select[data-testid='card-options']").within(() => {
            product.options.forEach((option) => {
              if (option.regular) {
                cy.get("option")
                  .contains(`regular-${option.regular}`)
                  .should("exist");
              }
              if (option.medium) {
                cy.get("option")
                  .contains(`medium-${option.medium}`)
                  .should("exist");
              }
              if (option.large) {
                cy.get("option")
                  .contains(`large-${option.large}`)
                  .should("exist");
              }
            });
          });
        });
    });
  });
  it("should render a product without options correctly", () => {
    const productWithoutOptions = [
      {
        CategoryName: "Category 3",
        name: "Product 3",
        img: "product3.jpg",
        options: [],
        description: "Description of Product 3",
      },
    ];
    mount(<Products products={productWithoutOptions} />);
    cy.get(".card").should("have.length", 1);
    cy.get(".card").within(() => {
      cy.get(".card-title").should("contain.text", "Product 3");
      cy.get(".card-img-top")
        .should("be.visible")
        .should("have.attr", "src", "product3.jpg");
      cy.get("[data-testid='card-description']").should(
        "contain.text",
        "Description of Product 3"
      );
      cy.get(".card-options").should("not.exist");
    });
  });
});
