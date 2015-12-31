package orangebus.cucumber.StepDefs

import cucumber.api.scala.{EN, ScalaDsl}
import orangebus.cucumber.Pages.AmazonPage
import org.scalatest.Matchers



class AmazonTest extends ScalaDsl with EN with Matchers {

  Given( """^I am on Amazon Web page$""") { () =>

    AmazonPage.navigateToAmazonPage()

  }

  Then( """^I can verify the domain name for amazon$""") { () =>

    AmazonPage.verifyAmazonPage()

  }

  Given( """^I click on the sign in button$""") { () =>


    AmazonPage.clickOnSignIn()
  }

  Given( """^I enter "(.*?)" and "(.*?)"$""") { (email: String, password: String) =>


    AmazonPage.validCredentials(email,password)

  }

  When( """^I click on Sign in using secure server button$""") { () =>

    AmazonPage.signIn()

  }

  Then( """^I should see my amazon account$""") { () =>

    AmazonPage.verifyMyAccountDetails()


  }

//
//  Given( """^I am logged into my Amazon account using valid credentials$""") { () =>
//
//    AmazonPage.navigateToAmazonPage()
//    AmazonPage.verifyAmazonPage()
//    AmazonPage.clickOnSignIn()
//    AmazonPage.login()
//    AmazonPage.signIn()
//    AmazonPage.verifyMyAccountDetails()
//
//  }


  Given( """^I check for my exciting order ‘CucumberRecipes’ book$""") { () =>

    AmazonPage.addCucumberRecipeBook()

  }


  Then( """^I should see ‘CucumberRecipes’ book in my order history$""") { () =>
    AmazonPage.verifyCucumberRecipeBook()

  }


  Given( """^I search for the book ‘Functional Programming in Scala’ book$""") { () =>
    AmazonPage.searchBook()

  }



  Given( """^I click on ‘Functional Programming in Scala’ book$""") { () =>
    AmazonPage.selectScalaBook()

  }


  When( """^I add the book to basket$""") { () =>

    AmazonPage.addBookToBasket()

  }

  Then( """^I should see the scala book added to the basket in order history$""") { () =>

    AmazonPage.verifyScalaBook()

  }

  Then( """^I should see one copy added to the quantity selection$""") { () =>

    AmazonPage.verifyScalaBookQuantity()

  }

  When( """^I click on SignOut$""") { () =>

    AmazonPage.signOut()

  }


  Then( """^I should sign out from my Amazon Account$""") { () =>

    AmazonPage.verifySignOut()

  }
}
