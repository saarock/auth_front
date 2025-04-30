import React from "react";
import { mount } from "cypress/react";
import Button from "./Button"; // Adjust the path if needed

describe("Button Component", () => {
  it("renders with the correct text", () => {
    mount(<Button text="Click Me" />);

    // Check if the button is visible and contains the correct text
    cy.get("button").should("be.visible").and("contain.text", "Click Me");
  });

  it("triggers onClick function when clicked", () => {
    const onClick = cy.stub().as("onClick");

    mount(<Button text="Click Me" onClick={onClick} />);

    // Click the button
    cy.get("button").click();

    // Check if the onClick function was called
    cy.get("@onClick").should("have.been.calledOnce");
  });

  it("applies custom className", () => {
    const customClass = "custom-class";

    mount(<Button text="Styled Button" className={customClass} />);

    // Verify the custom class is applied
    cy.get("button").should("have.class", customClass);
  });
});
