import React from "react";
import Button from "./index";

describe("Button Component ", () => {
  it("Is mounted correctly with props provided", () => {
    const btnClasses =
      "bg-salesforce-btn-pattern px-6 py-3 rounded-[5px] w-[277px] h-[46px]";

    const onClickFn = cy.stub().as("onClickFn");

    cy.mount(
      <Button btnClasses={btnClasses} onClickFn={onClickFn}>
        Click Me
      </Button>
    );
  });

  it("Button is clicked and the callback is executed ", () => {
    const btnClasses =
      "bg-salesforce-btn-pattern px-6 py-3 rounded-[5px] w-[277px] h-[46px]";

    const onClickFn = cy.stub().as("onClickFn");

    cy.mount(
      <Button btnClasses={btnClasses} onClickFn={onClickFn}>
        Click Me
      </Button>
    );

    // Verify the button is visible with the correct classes and text
    cy.get("button").should("have.class", btnClasses).contains("Click Me");

    cy.get("button").click();

    // Verify that the click handler was executed
    cy.get("@onClickFn").should("have.been.calledOnce");
  });
});
