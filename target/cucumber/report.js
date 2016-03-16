$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Amazon/AmazonOrder.feature");
formatter.feature({
  "line": 2,
  "name": "To verify order history",
  "description": "",
  "id": "to-verify-order-history",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@suite"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "To verify an Open Order in my order history",
  "description": "",
  "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign in using secure server button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see my amazon account",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I check for my exciting order ‘CucumberRecipes’ book",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see ‘CucumberRecipes’ book in my order history",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 19,
      "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history;;1"
    },
    {
      "cells": [
        "add your email",
        "password"
      ],
      "line": 20,
      "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13166161471,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Amazon Web page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I can verify the domain name for amazon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonTest.scala:11"
});
