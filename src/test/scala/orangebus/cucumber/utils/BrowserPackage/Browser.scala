package orangebus.cucumber.utils.BrowserPackage

import org.openqa.selenium.WebDriver
import org.openqa.selenium.firefox.{FirefoxDriver, FirefoxProfile}

trait Browser {

  private lazy val deviceType = System.getProperty("devicetype", "browser")
  private lazy val javascriptEnabled = if (deviceType == "mobile") false else true
  private lazy val privateBrowsing: Boolean = true
  private lazy val warningMessage: Boolean = true


  def createFirefoxDriver: WebDriver = {

    val profile: FirefoxProfile = new FirefoxProfile
    profile.setPreference("javascript.enabled", javascriptEnabled)
    profile.setPreference("browser.privatebrowsing.autostart", privateBrowsing)
    profile.setPreference("browser.privatebrowsing.dont_prompt_on_enter", warningMessage)
    val driver = new FirefoxDriver()
    val caps = driver.getCapabilities
    val browserName = caps.getBrowserName
    val browserVersion = caps.getVersion
    println("Browser name & version: " + browserName + " " + browserVersion)
    driver
  }

}
