export default class WhatIsLovePage {

   constructor() {
    this.catBlock = '.golden_glow'

    this.bigL = '.golden_glow > .catMainTopLeft > .letter'
    this.headline = '.catName'
    this.text = '.golden_glow > .catMainTopLeft > .catTextWrap > .catDesc > p'

    this.video = '.videoImg'
    this.videoButton = '.playButt'

    this.sliderArrows = '.golden_glow > .catMainTopLeft > .catTextWrap > .slider-arrows'
    this.sliderArrowPrev = '.golden_glow > .catMainTopLeft > .catTextWrap > .slider-arrows > .slider-arrows-wrap > .slider-arrow-prev'
    this.sliderArrowNext = '.golden_glow > .catMainTopLeft > .catTextWrap > .slider-arrows > .slider-arrows-wrap > .slider-arrow-next'

    this.imageHome = 'img[src="/images/categories_main/What-Is-Love_home-4.jpg"]'
    this.image1 = 'img[src="/images/categories_main/What-Is-Love_home-1.jpg?v=1"]' 
    this.image2 = 'img[src="/images/categories_main/What-Is-Love_home-2.jpg?v=1"]'
    this.image3 = 'img[src="/images/categories_main/What-Is-Love_home-3.jpg?v=1"]'

    this.slideNumber = '.slide-number'
   }
   
   visibleCatBlockElementsWhatIsLove() {
    cy.scrollTo(0, 1200)
    cy.get(this.catBlock).should('exist').and('be.visible')
    cy.get(this.bigL).should('exist').and('be.visible')
    cy.get(this.headline).should('exist').and('be.visible').find('a[href="/en/wedding-dresses/what-is-love"]').should('have.text', 'What Is Love')
    cy.get(this.text).should('exist').and('be.visible').contains('This collection is an ode to the strongest, brightest, and all-consuming feeling.')
    cy.get(this.sliderArrows).should('exist').and('be.visible')
    cy.get(this.sliderArrowPrev).should('exist').and('be.visible')
    cy.get(this.sliderArrowNext).should('exist').and('be.visible')
    cy.get(this.video).should('exist').and('be.visible')
    cy.get(this.videoButton).should('exist').and('be.visible')
    cy.get(this.imageHome).should('exist').and('be.visible')
   }

   clickSliderArrowsElements01() {
    cy.scrollTo(0, 1200)
    cy.get(this.catBlock).should('exist').and('be.visible')
    cy.get(this.slideNumber).should('contain', '01').and('be.visible')
    cy.get(this.sliderArrowNext).should('exist').and('be.visible').click({force: true})
    cy.wait(1000)
   }

   clickSliderArrowsElements02() {
    cy.get(this.imageHome).should('not.be.visible')
    cy.get(this.image1).should('exist').and('be.visible')
    cy.get(this.slideNumber).should('contain', '02').and('be.visible')
    cy.get(this.sliderArrowNext).should('exist').and('be.visible').click({force: true})
    cy.wait(1000)
   }

   clickSliderArrowsElements03() {
    cy.get(this.image1).should('not.be.visible')
    cy.get(this.image2).should('exist').and('be.visible')
    cy.get(this.slideNumber).should('contain', '03').and('be.visible')
    cy.get(this.sliderArrowNext).should('exist').and('be.visible').click({force: true})
    cy.wait(1000)
   }

   clickSliderArrowsElements04() {
    cy.get(this.image2).should('not.be.visible')
    cy.get(this.image3).should('exist').and('be.visible')
    cy.get(this.slideNumber).should('contain', '04').and('be.visible')
    cy.get(this.sliderArrowNext).should('exist').and('be.visible').click({force: true})
    cy.wait(1000)
    cy.get(this.image3).should('not.be.visible')
    cy.get(this.slideNumber).should('contain', '01').and('be.visible')
   }
 
 }
 