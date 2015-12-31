package orangebus.cucumber.StepDefs

import cucumber.api.java.{After, Before}
import cucumber.api.scala.{EN, ScalaDsl}
import orangebus.cucumber.utils.BrowserPackage.StartUpTearDown
import org.scalatest.Matchers



class Hooks extends ScalaDsl with EN with Matchers with StartUpTearDown {



  @Before
  def initialize() {

    driver.manage().deleteAllCookies()

  }


  @After
  def depricaite() {

    driver.manage().deleteAllCookies()

  }

}

