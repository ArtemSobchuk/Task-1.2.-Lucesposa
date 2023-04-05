export default class MainPage {

  constructor() {
    this.header = '.header';
    this.body = '.content'; 
    this.bodySlider = '.main_page_slider'
    this.bodyMain = '.catMain';
    this.bodyBlog = '.blog_on_main'
    this.bodyContacts = '.custom'
    this.bodyInsta = '.insta-parent'

    this.bodySEO = '.content'
    this.buttonSEO = '.seo_more_cat'

    this.footer = '.footer-container'
    this.footerInfo = '.footer-container-two'
   }
   
   visibleBasicElementsHeader() {
    cy.get(this.header).should('exist').and('be.visible')
   }

   visibleBasicElementsBody() {
    cy.get(this.body).should('exist').and('be.visible')
    cy.get(this.bodySlider).should('exist').and('be.visible')
    cy.wait(500)
    cy.get(this.bodyMain).scrollIntoView().should('exist').and('be.visible')
    cy.get(this.bodyBlog).should('exist').and('be.visible')
    cy.get(this.bodyContacts).should('exist').and('be.visible')
    cy.wait(500)
    cy.get(this.bodyInsta).should('exist').and('be.visible')
    cy.get(this.bodySEO).should('exist').and('be.visible')
    cy.get(this.buttonSEO).should('exist').and('be.visible').should('contain', 'Read more').dblclick()
   }

   visibleBasicElementsFooter() {
    cy.scrollTo('bottom').wait(500)
    cy.get(this.footer).should('exist').and('be.visible')
    cy.get(this.footerInfo).should('exist').and('be.visible')
   }
 }