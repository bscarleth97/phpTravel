import carsPage from "../page_objects/carsPage";

module.exports = function() {
  this.Given(/^a client is on the home page$/, function() {
    carsPage.open();
    carsPage.div.waitForVisible();
  });

  this.When(/^click on "([^"]*)"$/, function(arg1) {
    carsPage.clickCars(arg1);
  });

  this.Then(/^select a location$/, function() {
    carsPage.selectLocation("#carlocations", "16");
  });

  this.Then(/^select "([^"]*)"$/, function(arg1) {
    carsPage.selectPickup(arg1, "yes");
  });

  this.Then(/^select a dates to pick up and return$/, function() {
    carsPage.setDateInPicker("#departcar", "24/10/2018");
    carsPage.setDateInPicker("#returncar", "26/10/2018");
  });

  this.Then(/^confirm there is at least one car$/, function() {
    browser.pause(5000);
    let lista = browser.elements(".p-10-0");
    if (lista != null) {
      console.log("\n\nThere is at least one result");
    } else {
      console.log("\n\nNo results where founded");
    }
    browser.pause(5000);
  });

  this.Then(/^select a times to pick up and return$/, function() {
    carsPage.setDateInPicker(
      "#CARS > form > div:nth-child(4) > div > select",
      "15:00"
    );
    carsPage.setDateInPicker(
      "#CARS > form > div:nth-child(6) > div > select",
      "10:30"
    );
  });
};
