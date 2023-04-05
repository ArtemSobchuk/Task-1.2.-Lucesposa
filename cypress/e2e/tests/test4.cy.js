import VisitPage from "../../support/pages/visitPage";
import WhatIsLovePage from "../../support/pages/WhatIsLovePage";

describe("Visit 'https://lucesposa.com/' and check the visible all elements of the 'WhatIsLove' block", () => {
  const visitPage = new VisitPage();
  const whatIsLovePage = new WhatIsLovePage();

  beforeEach(() => {
   visitPage.viewPort()
   visitPage.visitUrl()
   visitPage.clickCookiesButtonOk() 
  });

  it ("Checking the display of elements of the 'WhatIsLove' block", () => {
   whatIsLovePage.visibleCatBlockElementsWhatIsLove()
  })

  it ("Click 'slider arrows' button and check if the items are displayed", () => {
   whatIsLovePage.clickSliderArrowsElements01()
   whatIsLovePage.clickSliderArrowsElements02()
   whatIsLovePage.clickSliderArrowsElements03()
   whatIsLovePage.clickSliderArrowsElements04()
  }) 
})