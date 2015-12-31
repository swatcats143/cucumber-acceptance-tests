package orangebus.cucumber.Pages

import orangebus.cucumber.utils.BrowserPackage.{MessageReader, StartUpTearDown, CustomExpectedCondition}
import org.openqa.selenium.{WebElement, By}
import org.openqa.selenium.interactions.Actions
import org.openqa.selenium.support.ui.WebDriverWait
import org.scalatest.Matchers
import org.scalatest.concurrent.Eventually
import org.scalatest.selenium.WebBrowser


object AmazonPage extends WebBrowser with Eventually with Matchers with StartUpTearDown {

  val amazonURL = "http://www.amazon.co.uk/"
  val mouse =new Actions(driver)


  def navigateToAmazonPage() = {

    driver.get("http://www.amazon.co.uk/")

  }

  def verifyAmazonPage() {

   new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='nav-your-amazon']"))
    driver.getCurrentUrl shouldBe amazonURL
  }

  def clickOnSignIn() {

    driver.findElement(By.xpath(".//*[@id='nav-your-amazon']")).click()

  }

  def validCredentials(email: String, password: String) {
    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='signInSubmit-input']"))
    driver.findElement(By.xpath(".//*[@id='ap_email']")).sendKeys(email)
    driver.findElement(By.xpath(".//*[@id='ap_password']")).sendKeys(password)
  }

  def signIn() {

    driver.findElement(By.xpath(".//*[@id='signInSubmit-input']")).click()
  }


  def verifyMyAccountDetails(): Unit = {

    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='nav-link-yourAccount']/child::span[@class='nav-line-1']"))
    val actmsgHeading = driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']/child::span[@class='nav-line-1']")).getText
    println("actmsgHeading is:" + actmsgHeading)
    val expmsgHeading = MessageReader.getMessage("myaccount")

    assertResult(expmsgHeading)(actmsgHeading)


  }

  def login(): Unit = {

    val email = MessageReader.getMessage("email")
    val password = MessageReader.getMessage("password")
    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed("//*[@id='ap_email']"))
    driver.findElement(By.xpath("//*[@id='ap_email']")).sendKeys(email)
    driver.findElement(By.xpath("//*[@id='ap_password']")).sendKeys(password)

  }

  def addCucumberRecipeBook(): Unit = {

    val bookSearch = MessageReader.getMessage("cucumberbook")
    driver.findElement(By.xpath("//*[@id='twotabsearchtextbox']")).sendKeys(bookSearch)
    driver.findElement(By.xpath(".//*[@class='nav-search-submit nav-sprite']/child::input[@class='nav-input']")).click()
    driver.findElement(By.xpath(".//*[@id='result_0']/descendant::div[@class='a-row a-spacing-small']/descendant::h2")).click()
    driver.findElement(By.xpath(".//*[@id='add-to-cart-button']")).click()
    driver.findElement(By.xpath(".//*[@id='nav-cart']")).click()


  }


  def verifyCucumberRecipeBook(): Unit = {

    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='sc-buy-box-ptc-button']/span/input"))
    val order = driver.findElement(By.xpath(".//*[@id='activeCartViewForm']/div[2]/div/div[4]/div[2]/div[1]/div/div/div[2]/ul/li[1]/span/a/span")).getText
    val book = MessageReader.getMessage("cucumberbook")

    assertResult(order)(book)
  }


  def searchBook() = {

    val bookSearch = MessageReader.getMessage("functionalProgramming")
    driver.findElement(By.xpath("//*[@id='twotabsearchtextbox']")).sendKeys(bookSearch)
    driver.findElement(By.xpath("//*[@id='nav-search']/form/div[2]/div/input")).click()


  }

  def selectScalaBook(): Unit = {

    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='result_0']/div/div/div/div[2]/div[1]/div/span[2]"))
    val author = MessageReader.getMessage("author")
    driver.findElement(By.xpath(".//*[@id='result_0']/div/div/div/div[2]/div[1]/div/span[2]")).getText.contains(author)
    driver.findElement(By.xpath("//*[@id='result_0']/div/div/div/div[2]/div[1]/a/h2")).click()
  }


  def addBookToBasket(): Unit = {

    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='add-to-cart-button']"))
    driver.findElement(By.linkText("Paul Chiusano")).isDisplayed
    driver.findElement(By.xpath(".//*[@id='add-to-cart-button']")).click()
    driver.findElement(By.xpath(".//*[@id='nav-cart']")).click()

  }

  def verifyScalaBook(): Unit = {

    val order = driver.findElement(By.xpath(".//*[@id='activeCartViewForm']/div[2]/div[1]/div[4]/div[2]/div[1]/div/div/div[2]/ul/li[1]/span/a/span")).getText
    val book = MessageReader.getMessage("functionalProgramming")

    assert(order.contains(book))


  }

  def verifyScalaBookQuantity(): Unit = {

    val quantity = driver.findElement(By.xpath(".//*[@id='a-autoid-2-announce']/span[2]")).getText
    driver.findElement(By.id("nav-cart-count")).getText shouldBe 2.toString

    assert(quantity.contains(1.toString))

  }


  def signOut(): Unit = {

    new WebDriverWait(webDriver, 10).until(CustomExpectedCondition.isXpathElementDisplayed(".//*[@id='nav-link-yourAccount']/span[2]"))
    val menu:WebElement=driver.findElement(By.xpath(".//*[@id='nav-link-yourAccount']"))
    val subMenu:WebElement=driver.findElement(By.xpath(".//*[@id='nav-flyout-yourAccount']"))
    mouse.moveToElement(menu).perform()
    mouse.moveToElement(subMenu).clickAndHold()
    driver.findElement(By.linkText("Not shiva? Sign Out")).isDisplayed
    driver.findElement(By.xpath(".//*[@id='nav-item-signout']/span")).click()

  }


  def verifySignOut(): Unit = {


    val pageTitle = driver.getTitle
    val message = MessageReader.getMessage("AmazonTitle")

    assert(pageTitle.contains(message))

  }

}
