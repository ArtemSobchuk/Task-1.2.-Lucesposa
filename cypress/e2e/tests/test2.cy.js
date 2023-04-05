import VisitPage from "../../support/pages/visitPage";
import MainPage from "../../support/pages/mainPage";

describe("Visiting 'https://lucesposa.com/' and checking the display of basic DOM elements", () => {
  const visitPage = new VisitPage();
  const mainPage = new MainPage();

  before(() => {
   visitPage.viewPort()
   visitPage.visitUrl()
   visitPage.clickCookiesButtonOk()
  });

  it ("The basic DOM elements are displayed", () => {
   mainPage.visibleBasicElementsHeader()
   mainPage.visibleBasicElementsBody()
   mainPage.visibleBasicElementsFooter()
  })
})