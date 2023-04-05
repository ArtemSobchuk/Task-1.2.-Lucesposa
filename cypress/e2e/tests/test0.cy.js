import VisitPage from "../../support/pages/visitPage";

describe("Visiting 'https://lucesposa.com/' and checking URL", () => {
  const visitPage = new VisitPage();

  before(() => {
   visitPage.viewPort()
  });

  it ("Should enter the url, use https protocol, and render initial video", () => {
   visitPage.visitAndCheckUrl()
  })
})