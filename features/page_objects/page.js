export class Page {
  constructor() {
    this.url = "https://www.phptravels.net/";
  }

  open(path) {
    browser.url(this.url + path);
  }

  scrollTo(element) {
    browser.execute(y => {
      window.scrollTo(0, Number(y));
    }, element.getLocation("y"));
  }

  maximize() {
    browser.windowHandleFullscreen();
  }
}
