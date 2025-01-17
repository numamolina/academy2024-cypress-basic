// AgregarProyect&EntryTime&Delete_ClockifyMe.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('AgregarProyecto&EntryTime&Delete', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.viewport(1024, 768);
  cy.visit('https://app.clockify.me/en/login');
  cy.get('.cl-create-account > .cl-d-block').click();
  cy.get('#email').clear();
  cy.get('#email').type('yafin69474@adstam.com');
  cy.get('.cl-form-group__password-input > #password').clear();
  cy.get('.cl-form-group__password-input > #password').type('Crowdar2024!');
  cy.get(':nth-child(2) > .cl-btn').click();
  cy.wait(2600);
  cy.get('.cl-component-divided-left > .cl-d-flex > img').click();
  cy.get('[data-cy="new-project"] > .cl-ml-2').click();
  cy.get('[data-cy="project-name"]').clear();
  cy.get('[data-cy="project-name"]').type('Automation Cypress Project Demo');
  cy.get('[data-cy="create-project"]').click();
  cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer').click();
  cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
//   cy.get('[style="color: var(--default-picker-color-3);"] > span').click();
  cy.get('#undefined').clear();
  cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 01');
  cy.get('.cl-single-date-picker > :nth-child(1) > .cl-form-control').clear();
  cy.get('.cl-single-date-picker > :nth-child(1) > .cl-form-control').type('9');
  cy.get('.cl-single-date-picker > :nth-child(3) > .cl-form-control').clear();
  cy.get('.cl-single-date-picker > :nth-child(3) > .cl-form-control').type('12');
  cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
  cy.get('.cl-component-divided-left > .cl-d-flex > .cl-ml-2').click();
  cy.get('.cl-item-between > .cl-project-name').click();
  cy.get('#undefined').clear();
  cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 02');
  cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer').click();
  cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
  cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
  cy.get('.cl-component-divided-left > .cl-d-flex > .cl-ml-2').click();
  cy.get('.cl-item-between > .cl-project-name').click();
  cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer > img').click();
  cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
  cy.get('#undefined').clear();
  cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 03');
  cy.get('.cl-d-sm-inline-flex').click();
  cy.get('.cl-timetracker-entry-actions > .cl-w-100 > .cl-single-date-picker > :nth-child(3) > .cl-form-control').clear();
  cy.get('.cl-timetracker-entry-actions > .cl-w-100 > .cl-single-date-picker > :nth-child(3) > .cl-form-control').type('17');
  cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
  cy.wait(1200);
  cy.get('#bulkEdit > img').click();
  cy.get('[data-testid="toggle-select-all"] > .cl-custom-checkbox')
  cy.get('#\\32 024-05-07').check();
  cy.get(':nth-child(4) > .cl-color-blue').click();
  cy.get('[data-cy="confirm-delete"]').clear();
  cy.get('[data-cy="confirm-delete"]').type('DELETE');
  cy.get('app-button.ng-star-inserted > .cl-btn').click();
  cy.get('#cdk-drop-list-2 > :nth-child(1) > .cl-dropdown > .cl-nav-link > .cl-d-flex > .cl-nav-link-copy').click();
  cy.get('.cl-p-lg-2 > .cl-d-flex > .cl-ml-auto > .cl-badge > select-arrow > .ng-star-inserted').click();
  cy.get('.cl-px-1').click();
  cy.contains('Archive').click({force: true});
  cy.get('app-button.ng-star-inserted > .cl-btn').click();
  cy.wait(1200);
  cy.get('.cl-p-lg-2 > .cl-d-flex > .cl-ml-auto > .cl-badge > select-arrow').click();
  cy.get('.cl-px-1').click();
  cy.contains('Delete').click({force: true});
  cy.get('app-button.ng-star-inserted > .cl-btn').click();
  cy.get('#topbar-menu').click();
  cy.get('.cl-no-image-wrapper-sm > span').click();
  cy.get('[data-cy="logout"]').click();
  /* ==== End Cypress Studio ==== */
});
