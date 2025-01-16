import React from "react";
import Carousel from "../../src/components/Carousel";

describe("CustomCarousel Component", () => {
  beforeEach(() => {
    cy.mount(<Carousel />);
  });
  it("should render all images correctly", () => {
    cy.get(".carousel-item").should("have.length", 3);
    cy.get(".carousel-item img").each((img, index) => {
      cy.wrap(img).should("have.attr", "alt", `Slide ${index + 1}`);
    });
  });
  it("should start with the first image active", () => {
    cy.get(".carousel-item.active").should("exist").and("contain.html", "img");
    cy.get(".carousel-item.active img").should("have.attr", "alt", "Slide 1");
  });
  it("should automatically change slides every 4 seconds", () => {
    cy.get(".carousel-item.active").invoke("index").as("initialIndex");
    cy.wait(4000);
    cy.get(".carousel-item.active")
      .should("exist")
      .invoke("index")
      .should("not.eq", Cypress.env("initialIndex"));
  });
  it("should navigate to the previous image when clicking the previous button", () => {
    cy.get(".carousel-control-prev").click({ force: true });
    cy.get(".carousel-item.active img").should("have.attr", "alt", "Slide 3");
  });
  it("should navigate to the next image when clicking the next button", () => {
    cy.get(".carousel-control-next").click({ force: true });
    cy.get(".carousel-item.active img").should("have.attr", "alt", "Slide 2");
  });
  it("should loop back to the first image after the last image", () => {
    cy.get(".carousel-control-next")
      .click({ force: true })
      .click({ force: true })
      .click({ force: true });
    cy.get(".carousel-item.active img").should("have.attr", "alt", "Slide 1");
  });
});
