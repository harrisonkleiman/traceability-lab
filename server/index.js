const express = require("express")

const app = express()
const path = require("path")

//rollbar






app.use(express.json())

// Set server port
const port = process.env.port || 4005

// Rollbar installation
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar")
var rollbar = new Rollbar({
  accessToken: "374377d6c65d4e6180ee935a71221deb",
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log("Hello world!")

// create a new instance of it using your post_server_item access token
const rollbar2 = new Rollbar({
  accessToken: "374377d6c65d4e6180ee935a71221deb",
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// endpoints
app.get("/", (req, res) => {
  res.send("Hello World!")
})


// Add an endpoint and in the callback function, call a function that does not exist so you can test out Rollbar (hint: try using a try…catch block
app.get("/err", (req, res) => {
  try {
    // throw new Error("This is a test error")
    res.send("Hello World... again!")
  } catch (err) {
    rollbar2.log(err)
  }
})

app.listen(port, () => {
  console.log(`Server is rocking on port ${port}`)
})