import React from "react";
import Footer from "../../src/components/Footer";

describe("Footer Component", () => {
  it("should render the footer with correct text", () => {
    cy.mount(<Footer />);
    cy.get("footer").should("exist").and("be.visible");
    cy.get("footer span.text-muted").should("have.text", "© 2024 FoodHub, Inc");
  });
  it("should have the correct classes", () => {
    cy.mount(<Footer />);
    cy.get("footer")
      .should("have.class", "bg-black")
      .and("have.class", "w-100")
      .and("have.class", "d-flex")
      .and("have.class", "flex-wrap")
      .and("have.class", "justify-content-center")
      .and("have.class", "align-items-center")
      .and("have.class", "py-3")
      .and("have.class", "border-top");
  });
});
