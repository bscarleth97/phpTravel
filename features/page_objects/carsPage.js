export class carsPage {
  constructor() {
    this.url = "https://www.phptravels.net/";
  }

  open(path) {
    browser.url(this.url);
  }

  scrollTo(element) {
    browser.execute(y => {
      window.scrollTo(0, Number(y));
    }, element.getLocation("y"));
  }

  maximize() {
    browser.windowHandleFullscreen();
  }

  clickCars(arg1) {
    browser.click(`${arg1}`);
  }

  get cars() {
    return browser.element(
      "#body-section > div.listingbg > div > div.col-md-9.col-xs-12 > div > table"
    );
  }

  selectLocation(selector, value) {
    browser.selectByValue(`${selector}`, value);
  }

  selectPickup(selector, value) {
    browser.selectByValue(`${selector}`, value);
  }

  setDateInPicker(selector, time) {
    //browser.element(selector).click()
    browser.execute(
      (selector, time) => {
        let event = new Event("input", { bubbles: true });
        let element = document.querySelector(selector);
        element.value = time;
        element.dispatchEvent(event);
      },
      selector,
      time
    );
  }

  get div() {
    return browser.element(
      "#collapse > ul.nav.navbar-nav.go-right > li.active.go-right"
    );
  }
}

export default new carsPage();
