@cars
Feature: Cars

    As a client I should be able to select a car

    Scenario: A client must be able to select a car
        Given a client is on the home page
        When click on "#body-section > section > div.cell > div > div > div.col-md-12 > ul > li:nth-child(4) > a"
        Then select a location
        And select a dates to pick up and return
        And select a times to pick up and return
        When click on "#CARS > form > div.bgfade.col-md-2.form-group.go-right.col-xs-12.search-button > button"
        Then confirm there is at least one car
        When click on "#collapse1 > div.hpadding20 > div > div:nth-child(3) > div > ins" 
        And click on "#collapse3 > div.hpadding20 > div:nth-child(5) > div > ins"
        And select "#collapse5 > div > select"
        Then click on "#searchform"
        Then confirm there is at least one car
