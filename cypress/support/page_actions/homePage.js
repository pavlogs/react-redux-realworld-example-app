export class HomePage {
    createNewPost() {
        cy.contains('New Post').click()
    }

    verifyUserIsLoggedIn(user) {
        let username = user.email.substring(0, user.email.lastIndexOf("@"))
        cy.get('ul.navbar-nav li.nav-item')
            .should('contain', 'New Post')
            .and('contain', 'Settings')
            .and('contain', username)
    }
}

export const onHomePage = new HomePage()