import {onPostPage} from "../../support/page_actions/postPage";

describe('Global Feed test suite', () => {

    beforeEach('Login to the application', () => {
        cy.authenticate()
    })

    it('Verify Global Feed pagination"', () => {
        onPostPage.openGlobalFeed()
        onPostPage.verifyPages(50)
    })

    it('Verify Global Feed articles"', () => {
        onPostPage.openGlobalFeed()
        onPostPage.verifyArticles(10)
    })

    it('Verify Global Feed tags"', () => {
        let tags = ['test']
        onPostPage.openGlobalFeed()
        onPostPage.verifyTags(tags)
        onPostPage.clickOnATag(tags[0])
    })

    it('Verify Mock Article response', () => {
        cy.intercept('GET', '**/articles?limit=10&offset=0', (req) => {
            req.reply((res) => {
                res.body = {...res.body, articlesCount: 12}
            })
        })
        onPostPage.openGlobalFeed()
        onPostPage.verifyArticles(10)

        cy.intercept('GET', '**/articles?limit=10&offset=10', (req) => {
            req.reply((res) => {
                res.body = {...res.body, articlesCount: 12, articles: res.body.articles.slice(0, 2)}
            })
        })
        onPostPage.openPage(2)
        onPostPage.verifyArticles(2)
    })
})