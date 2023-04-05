import VisitPage from "../../support/pages/visitPage";
import HeaderPage from "../../support/pages/headerPage";

describe("Visit 'https://lucesposa.com/' and check the visible all elements of the 'Header'", () => {
  const visitPage = new VisitPage();
  const headerPage = new HeaderPage();

  beforeEach(() => {
   visitPage.viewPort()
   visitPage.visitUrl()
   visitPage.clickCookiesButtonOk() 
  });

  it ("Checking the display of the 'Header' elements", () => {
   headerPage.visibleElementsOfHeader()
  })

   it ("Click Search Button and check if the items are displayed and exit", () => {
   headerPage.clickSearchButton()
  })

  it ("Click languages button and check if the items are displayed and exit", () => {
    headerPage.clicklanguagesButton()
   })

   it ("Click menu button and check if the items are displayed and exit", () => {
    headerPage.clickMenuButton()
   })
})