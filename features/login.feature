@login
Feature: Login

    As a client I should be able to login using my credentials

    Scenario: A client must be able to login
        Given a client is on the login page
        When the right credentials are submitted
        Then the login attempt succeeded
