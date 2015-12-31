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
        "shivach292015@gmail.com",
        "@shiva@ch292015"
      ],
      "line": 20,
      "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12743639096,
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
formatter.result({
  "duration": 9990371060,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:17"
});
formatter.result({
  "duration": 6098985278,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:23"
});
formatter.result({
  "duration": 405387654,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To verify an Open Order in my order history",
  "description": "",
  "id": "to-verify-order-history;to-verify-an-open-order-in-my-order-history;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \"shivach292015@gmail.com\" and \"@shiva@ch292015\"",
  "matchedColumns": [
    0,
    1
  ],
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
formatter.match({
  "arguments": [
    {
      "val": "shivach292015@gmail.com",
      "offset": 9
    },
    {
      "val": "@shiva@ch292015",
      "offset": 39
    }
  ],
  "location": "AmazonTest.scala:29"
});
formatter.result({
  "duration": 4569099225,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:36"
});
formatter.result({
  "duration": 4247063642,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:42"
});
formatter.result({
  "duration": 14028877490,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:62"
});
formatter.result({
  "duration": 35033484136,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:69"
});
formatter.result({
  "duration": 524740605,
  "status": "passed"
});
formatter.after({
  "duration": 27944965,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "To verify for a New Order",
  "description": "",
  "id": "to-verify-order-history;to-verify-for-a-new-order",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on Sign in using secure server button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see my amazon account",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I search for the book ‘Functional Programming in Scala’ book",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ‘Functional Programming in Scala’ book",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I add the book to basket",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the scala book added to the basket in order history",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see one copy added to the quantity selection",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on SignOut",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should sign out from my Amazon Account",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "to-verify-order-history;to-verify-for-a-new-order;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 36,
      "id": "to-verify-order-history;to-verify-for-a-new-order;;1"
    },
    {
      "cells": [
        "shivach292015@gmail.com",
        "@shiva@ch292015"
      ],
      "line": 37,
      "id": "to-verify-order-history;to-verify-for-a-new-order;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 31621418,
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
formatter.result({
  "duration": 78086733,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:17"
});
formatter.result({
  "duration": 8851209763,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:23"
});
formatter.result({
  "duration": 558107651,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "To verify for a New Order",
  "description": "",
  "id": "to-verify-order-history;to-verify-for-a-new-order;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@suite"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I enter \"shivach292015@gmail.com\" and \"@shiva@ch292015\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click on Sign in using secure server button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see my amazon account",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I search for the book ‘Functional Programming in Scala’ book",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on ‘Functional Programming in Scala’ book",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I add the book to basket",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the scala book added to the basket in order history",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see one copy added to the quantity selection",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on SignOut",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should sign out from my Amazon Account",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "shivach292015@gmail.com",
      "offset": 9
    },
    {
      "val": "@shiva@ch292015",
      "offset": 39
    }
  ],
  "location": "AmazonTest.scala:29"
});
formatter.result({
  "duration": 2263309825,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:36"
});
formatter.result({
  "duration": 3147199486,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:42"
});
formatter.result({
  "duration": 10868503696,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:75"
});
formatter.result({
  "duration": 5055064698,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:82"
});
formatter.result({
  "duration": 1958193579,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:88"
});
formatter.result({
  "duration": 19342845028,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:94"
});
formatter.result({
  "duration": 4511160912,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:100"
});
formatter.result({
  "duration": 1734678645,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:106"
});
formatter.result({
  "duration": 2098796348,
  "status": "passed"
});
formatter.match({
  "location": "AmazonTest.scala:113"
});
formatter.result({
  "duration": 2231837685,
  "status": "passed"
});
formatter.after({
  "duration": 25475803,
  "status": "passed"
});
});