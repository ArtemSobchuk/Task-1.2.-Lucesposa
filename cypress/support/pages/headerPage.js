export default class HeaderPage {

   constructor() {
    this.header = '.header'

    this.searchButton = '.search-button'
    this.searchField = 'input[name="keyword"]'
    this.searchPlaceholder = 'Write the model name'
    this.searchConfrimButton = '#coopSendSearch'

    this.languagesButton = '#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(1)'
    this.languageES = '#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(2)'
    this.languageUA = '#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(3)'
    this.languageRO = '#languages_selector_block > .top-header-element > .languages-list-block > .languages-list > :nth-child(4)'

    this.mainLogo = '.mainLogo'

    this.menuButton = '.headerRight'
    this.backgroundVideo = 'video[src="/video/lucesposa_menu_overlay_desctop.mp4"]'
    this.weddingDresses = 'a[href="/en/wedding-dresses"]'
    this.aboutUs = 'a[href="/en/about-us"]'
    this.cooperationcy = 'a[href="/en/cooperation"]'
    this.getInspired = 'a[href="/en/get-inspired"]'
    this.contacts = 'a[href="/en/contacts"]'

    this.menuButtonEsc = '.brilliant_burger_menu'

   }
   
   visibleElementsOfHeader() {
    cy.get(this.header).should('exist').and('be.visible')
    cy.get(this.searchButton).should('exist').and('be.visible')
    cy.get(this.languagesButton).should('exist').and('be.visible')
    cy.get(this.mainLogo).should('exist').and('be.visible')
    cy.get(this.menuButton).should('exist').and('be.visible')
   }

   clickSearchButton() {
    cy.get(this.searchButton).should('exist').and('be.visible').click()
    cy.get(this.searchField).should('have.attr', 'placeholder', this.searchPlaceholder)
    cy.get(this.searchConfrimButton).should('exist').and('be.visible')
    cy.get(this.searchButton).click();
   }

   clicklanguagesButton() {
    cy.get(this.languagesButton).should('exist').and('be.visible').should('contain', 'en').click();
    cy.get(this.languageES).should('exist').and('be.visible').should('contain', 'es')
    cy.get(this.languageUA).should('exist').and('be.visible').should('contain', 'ua')
    cy.get(this.languageRO).should('exist').and('be.visible').should('contain', 'ro')
    cy.get(this.languagesButton).click()
   }

   clickMenuButton() {
    cy.get(this.menuButton).should('exist').and('be.visible').click()
    cy.get(this.backgroundVideo).should('exist').and('be.visible')
    cy.get(this.weddingDresses).should('exist').and('be.visible').should('contain', 'Wedding dresses')
    cy.get(this.aboutUs).should('exist').and('be.visible').should('contain', 'About us')
    cy.get(this.cooperationcy).should('exist').and('be.visible').should('contain', 'Cooperation')
    cy.get(this.getInspired).should('exist').and('be.visible').should('contain', 'Get inspired')
    cy.get(this.contacts).should('exist').and('be.visible').should('contain', 'Contacts')
    cy.get(this.menuButtonEsc).should('exist').and('be.visible').click()
   }
 }