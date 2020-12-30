// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("authenticate", () => {
    cy.log("API Auth")
    cy.request({
        method: 'POST',
        url: 'https://conduit.productionready.io/api/users/login',
        body: {
            user: {
                email: 'testadminuser@email.com',
                password: 'testadminuser'
            }
        }
    })
        .then((resp) => {
            window.localStorage.setItem('jwt', resp.body.user.token)
        })
    cy.visit('/')
});