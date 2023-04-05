import VisitPage from "../../support/pages/visitPage";

describe("Visiting 'https://lucesposa.com/' and checking the display of cookies", () => {
  const visitPage = new VisitPage();

  beforeEach(() => {
   visitPage.viewPort()
   visitPage.visitUrl()
  });

  it ("'Cookies' are displayed and closes 'cookies' after 'I accept' button click", () => {
   visitPage.visibleElementsOfCookies()
   visitPage.clickCookiesButtonOk()
  })

  it ("Closes 'cookies' after 'Cancel' button click", () => {
   visitPage.clickCookiesButtonCancel()
  })
})
