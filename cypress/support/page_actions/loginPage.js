export class LoginPage {
    visit() {
        cy.visit('/login')
    }

    signIn(user) {
        cy.get('input[placeholder="Email"]').type(user.email)
        cy.get('input[placeholder="Password"]').type(user.password)
        cy.get('button[type="submit"]').click()
    }

    verifyUserIsNotLoggedIn() {
        cy.get('ul.error-messages')
            .should('contain', 'email or password is invalid')
    }
}

export const onLoginPage = new LoginPage()