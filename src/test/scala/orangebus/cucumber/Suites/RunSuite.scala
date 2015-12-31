package orangebus.cucumber.Suites

import cucumber.api.CucumberOptions
import cucumber.api.junit.Cucumber
import org.junit.runner.RunWith

@RunWith(classOf[Cucumber])
@CucumberOptions(
  features = Array("src/test/resources/features"),
  glue = Array("orangebus.cucumber.StepDefs"),
 plugin = Array("pretty", "html:target/cucumber", "json:target/cucumber.json"),
  tags = Array("@suite")
)
class RunSuite {

}




