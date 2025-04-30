describe("Homepage", () => {
    it("loads and displays main content", () => {
      cy.visit("http://localhost:3000"); // Change if your app runs elsewhere
  
      // Check if main header is visible
      cy.contains("Welcome").should("be.visible");
  
      // Interact with a button
      cy.get("button").contains("Login").click();
    });
  });
  