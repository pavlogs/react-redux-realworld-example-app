import {onHomePage} from "../../support/page_actions/homePage";
import {onLoginPage} from "../../support/page_actions/loginPage";

describe('Login test suite', () => {
    beforeEach('Open Login page', () => {
        onLoginPage.visit()
    })

    it('Login positive case', () => {
        let validUser = {
            "email": "testadminuser@email.com",
            "password": "testadminuser"
        }
        onLoginPage.signIn(validUser)
        onHomePage.verifyUserIsLoggedIn(validUser)
    })

    it('Login negative case', () => {
        let invalidUser = {
            "email": "invalid@email.com",
            "password": "password"
        }
        onLoginPage.signIn(invalidUser)
        onLoginPage.verifyUserIsNotLoggedIn()
    })
});