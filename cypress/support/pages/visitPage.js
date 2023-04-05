export default class VisitPage {

  constructor() {
    this.height = 1920
    this.width = 1080
    this.url = 'https://lucesposa.com/'
    this.load = '#initialVideo'
    this.cookies = '.accept_cookie'
    this.cookiesText = 'By continue your browsing on this site you agree to the use of cookies.'
    this.cookiesButtonOk = '.accept_cookie_btn_ok'
    this.cookiesButtonCancel = '.cancel_btn'
  }

  viewPort() {
    cy.viewport(this.height, this.width)
  }

  visitUrl () {
    cy.visit(this.url)
    cy.wait(4000)
  }

  visitAndCheckUrl() {
    cy.visit(this.url)
    cy.get(this.load).should('exist').and('be.visible')
    cy.wait(4000)
    cy.location('protocol').should('eq', 'https:')
    cy.url().should('eq', this.url)
  }

  visibleElementsOfCookies() {
    cy.get(this.cookies).should('exist').and('be.visible').contains(this.cookiesText)
    cy.get(this.cookiesButtonOk).should('be.visible')
    cy.get(this.cookiesButtonCancel).should('be.visible')
  }

  clickCookiesButtonOk() {
    cy.get(this.cookiesButtonOk).should('exist').and('be.visible').click()
    cy.get(this.cookies).should('not.exist')
  }

  clickCookiesButtonCancel() {
    cy.get(this.cookiesButtonCancel).should('exist').and('be.visible').click()
    cy.get(this.cookies).should('not.exist')
  }
}