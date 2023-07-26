import Test from "@/components/Test";

describe("Button", () => {
  it("Should mount", () => {
    cy.mount(<Test />);
    cy.get("[data-test-id='test-salesforce-connect-btn']").contains(
      "Connect salesforce"
    );
  });

  it("When click on salesforce connect opens link", () => {
    cy.mount(<Test />);
    cy.get("[data-test-id='test-salesforce-connect-btn']")
      .contains("Connect salesforce")
      .click();
  });
});
