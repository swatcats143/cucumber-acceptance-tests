name := "amazon-tests"
version := "1.1"
scalaVersion := "2.11.6"





libraryDependencies ++= Seq(
  "com.codeborne" % "phantomjsdriver" % "1.2.1",
  "io.appium" % "java-client" % "3.1.0",
  "org.seleniumhq.selenium" % "selenium-java" % "2.48.2",
  "org.seleniumhq.selenium" % "selenium-firefox-driver" % "2.48.2",
  "com.applitools" % "eyes-selenium-java" % "2.19",
  "com.applitools" % "eyes-sdk-java" % "2.15",
 "org.pegdown" % "pegdown" % "1.1.0" % "test",
  "org.scala-lang" % "scala-library" % "2.10.4",
  "org.scalatest" %% "scalatest" % "2.2.1",
  "info.cukes" % "cucumber-scala_2.11" % "1.2.2",
  "info.cukes" % "cucumber-junit" % "1.2.2",
  "info.cukes" % "cucumber-picocontainer" % "1.2.2",
  "junit" % "junit" % "4.11" % "test",
  "com.novocode" % "junit-interface" % "0.10" % "test"
)
