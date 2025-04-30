import React from "react";
import { mount } from "cypress/react";
import LoginComponent from "./LoginComponent";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../app/store"; // Adjust to your store path

describe("Login Component", () => {
  it("renders properly", () => {
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent />
        </MemoryRouter>
      </Provider>
    );

    cy.get(".login-div").should("be.visible"); // Ensuring login container renders
    cy.contains("Login to your Account").should("be.visible"); // Verifying title
  });

  it("toggles password visibility", () => {
    mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent />
        </MemoryRouter>
      </Provider>
    );

    // Initially the password should be hidden
    cy.get("input[name='password']").should("have.attr", "type", "password");

    // Click the eye icon to toggle visibility
    cy.get(".eye-icon").click();

    // Now the password should be visible
    cy.get("input[name='password']").should("have.attr", "type", "text");

    // Click again to hide the password
    cy.get(".eye-icon").click();
    cy.get("input[name='password']").should("have.attr", "type", "password");
  });

  it("submits the form with user input", () => {
    const onSubmit = cy.stub().as("onSubmit");

    mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent onSubmit={onSubmit} />
        </MemoryRouter>
      </Provider>
    );

    // Fill in the form
    cy.get("input[name=email]").type("test@example.com");
    cy.get("input[name=password]").type("password123");

    // Submit the form
    cy.get("form").submit();

    // Verify the form submission handler was called
    cy.get("@onSubmit").should("have.been.called");
  });
});
