export class PostPage {
    createNewArticle(content) {
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type(content.title)
        cy.get('input[placeholder="What\'s this article about?"]').type(content.description)
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type(content.body)
        cy.contains('Publish Article').click()
    }

    openGlobalFeed() {
        cy.contains('Global Feed').click()
    }

    verifyArticles(number) {
        cy.get('.article-preview')
            .should('have.length', number)
    }

    verifyPages(number) {
        cy.get('.page-link')
            .should('have.length', number)
    }

    verifyTags(tagNames) {
        for (const tagName of tagNames) {
            cy.get('.tag-pill')
                .should('contain', tagName)
        }
    }

    clickOnATag(tagName) {
        cy.get('.tag-pill').contains(tagName).click()
    }

    openPage(number) {
        cy.get('.page-link').contains(number).click()
    }
}

export const onPostPage = new PostPage()