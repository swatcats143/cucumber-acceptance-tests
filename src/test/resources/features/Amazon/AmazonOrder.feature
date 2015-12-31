@suite
Feature: To verify order history

  Background:

    Given I am on Amazon Web page
    And I can verify the domain name for amazon
    And I click on the sign in button

  Scenario Outline: To verify an Open Order in my order history

    When I enter "<email>" and "<password>"
    And I click on Sign in using secure server button
    Then I should see my amazon account
    And I check for my exciting order ‘CucumberRecipes’ book
    And I should see ‘CucumberRecipes’ book in my order history

  Examples:
  |       email                |    password       |
  | shivach292015@gmail.com    | @shiva@ch292015   |

   Scenario Outline: To verify for a New Order

    When I enter "<email>" and "<password>"
    And I click on Sign in using secure server button
    Then I should see my amazon account
    And I search for the book ‘Functional Programming in Scala’ book
    And I click on ‘Functional Programming in Scala’ book
    And I add the book to basket
    And I should see the scala book added to the basket in order history
    And I should see one copy added to the quantity selection
    And I click on SignOut
    And I should sign out from my Amazon Account

     Examples:
       |       email                |    password       |
       | shivach292015@gmail.com    | @shiva@ch292015   |