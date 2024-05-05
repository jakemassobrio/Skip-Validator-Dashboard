describe("Light and Dark mode", () => {
  it("swiches theme when the theme button is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="light"]').click();
    cy.get('[data-cy="dark"]').click();
  });
});

describe("Table Filter", () => {
  it("filters", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="filter"]').type("Hello, World");
  });
});

describe("Change Chain", () => {
  it("changes tabs", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="juno"]').click();
    cy.get('[data-cy="cosmos hub"]').click();
    cy.get('[data-cy="evmos"]').click();
    cy.get('[data-cy="osmosis"]').click();
  });
});

describe("Change Page", () => {
  it("changes page and 'Not Found' page shows", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="overview"]').click();
    cy.get('[data-cy="not-found-page"]').contains("Not Found");
  });
});
