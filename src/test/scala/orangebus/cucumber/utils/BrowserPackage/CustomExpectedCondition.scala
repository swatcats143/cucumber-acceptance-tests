package orangebus.cucumber.utils.BrowserPackage

import org.openqa.selenium.{By, WebDriver}
import org.openqa.selenium.support.ui.ExpectedCondition


object CustomExpectedCondition
{
  def isXpathElementDisplayed(verificationElementId: String)(implicit webDriver: WebDriver): ExpectedCondition[Boolean] = {
    new ExpectedCondition[Boolean] {
      override def apply(wd: WebDriver): Boolean = {
        wd.findElement(By.xpath(verificationElementId)).isDisplayed
      }
    }
  }
}
