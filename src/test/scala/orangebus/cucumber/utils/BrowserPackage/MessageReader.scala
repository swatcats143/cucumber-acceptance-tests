package orangebus.cucumber.utils.BrowserPackage

import java.io.FileInputStream
import java.util.PropertyResourceBundle


object MessageReader {
  lazy val fis = new FileInputStream("./src/test/resources/messages.properties")
  val messageResource = {
    try {
      new PropertyResourceBundle(fis)
    } finally {
      fis.close()
    }
  }

  def getMessage(key: String) = messageResource.getString(key)



}