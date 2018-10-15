import { Page } from "./page";

class LandingPage extends Page {
  get tabBar() {
    return browser.elements(".profile-tabs > li");
  }
  get bookings() {
    return this.tabBar.value[0];
  }
  get profile() {
    return this.tabBar.value[1];
  }
  get whishlist() {
    return this.tabBar.value[2];
  }
  get newsletter() {
    return this.tabBar.value[3];
  }
  get hotels() {
    return browser.elements("#bookings > .row").value;
  }

  scrollToHotel(hotel) {
    const hotels = this.hotels;
    if (hotel >= hotels.length || hotel < 0) throw "Hotel is out of range";
    super.scrollTo(hotels[hotel]);
  }
}

export default new LandingPage();
