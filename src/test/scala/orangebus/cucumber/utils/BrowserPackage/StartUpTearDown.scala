package orangebus.cucumber.utils.BrowserPackage

trait StartUpTearDown {

  lazy val driver = Driver.instance
  implicit lazy val  webDriver = driver

}
