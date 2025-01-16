import React from "react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/Header";

describe("Header Component", () => {
  it("should render the header with correct links", () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    cy.get(".navbar-brand").should("contain.text", "FoodHub");
    cy.get(".navbar-nav .nav-link")
      .contains("Home")
      .should("have.attr", "href", "/");
    cy.get(".navbar-nav .nav-link")
      .contains("Login")
      .should("have.attr", "href", "/Login");
  });
  it("should not reload the page when clicking the links", () => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    cy.get(".navbar-nav .nav-link").contains("Home").click();
    cy.url().should("include", "/");
  });
});
